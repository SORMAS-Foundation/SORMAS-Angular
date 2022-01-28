require('custom-env').env();
const express = require('express');
const morgan = require('morgan');
var cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');
const { default: axios } = require('axios');
const { makeId } = require('./make-id');
var cookieParser = require('cookie-parser');
const https = require('https');

const app = express();
const PORT = process.env.PORT;
const HOST = process.env.HOST;
const API_SERVICE_URL = process.env.API_SERVICE_URL;

app.use(
  cors({
    origin: process.env.ANGULAR_ORIGIN,
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

app.use(morgan('dev'));

let loggedUsers = [];

const agent = new https.Agent({
  rejectUnauthorized: !process.env.IGNORE_CERT_VALIDATION,
});

async function getUser(username, auth) {
  const proxyQuery = await axios.get(
    `${API_SERVICE_URL}/sormas-rest/users/all/${new Date().getFullYear() - 1}`,
    {
      headers: {
        Authorization: `Basic ${auth}`,
      },
      httpsAgent: agent,
    }
  );

  const data = await proxyQuery.data;
  const user = data.find((u) => u.userName === username);

  return user;
}

// this is just for local dev testing when using the app without keycloak
app.use('/login', async (req, res) => {
  const { username = '', pw = '' } = req.body;

  try {
    const auth = Buffer.from(`${username}:${pw}`).toString('base64');

    const user = await getUser(username, auth);
    if (user) {
      console.log(`Succesful login for user ${username}`);
      const roles = user.userRoles;

      const serverIdentity = { username, roles, cookie: makeId(16), cred: auth };
      loggedUsers.push(serverIdentity);

      res
        .cookie('local-dev', serverIdentity.cookie, {
          maxAge: 900000,
          httpOnly: false,
          sameSite: false,
        })
        .status(200)
        .send({ userName: username, roles });
    }
  } catch (err) {
    console.error(err);
    res.sendStatus(401);
  }
});

// this is just for local dev testing when using the app without keycloak
app.use('/logout', (req, res) => {
  const cookie = req.cookies[`local-dev`];
  const foundUser = loggedUsers.find((x) => x.cookie === cookie);

  if (foundUser) {
    loggedUsers = loggedUsers.filter((x) => x.username !== foundUser.username);
  }

  res.status(200).send({});
});

app.use('/check-session', (req, res) => {
  if (loggedUsers.length) {
    const cookie = req.cookies[`local-dev`];
    const foundUser = loggedUsers.find((x) => x.cookie === cookie);

    if (foundUser) {
      const { username, roles } = foundUser;
      res.status(200).send({ userName: username, roles });
    } else {
      res.sendStatus(401);
    }
  } else {
    res.sendStatus(401);
  }
});

// this middleware appends Basic Auth when needed to the proxy call
app.use('', (req, res, next) => {
  if (req.headers.authorization) {
    next();
  } else {
    if (loggedUsers.length) {
      const cookie = req.cookies[`local-dev`];
      const auth = loggedUsers.find((x) => x.cookie === cookie).cred;

      if (auth) {
        req.headers['Authorization'] = `Basic ${auth}`;
        next();
      }
    } else {
      res.sendStatus(403);
    }
  }
});

// app.use('/sormas-rest/lineListing/enabled', (req, res) => {
//   res.status(200).send([
//     {
//       disease: 'ANTHRAX',
//       listings: [
//         {
//           regionUuid: 'R4MYJ3-5KM5EF-REDZII-NYSR2EHA',
//           name: 'Baden-Württemberg',
//           districtUuid: 'THO35X-NGF7KQ-NT4AYB-CHOL2B44',
//           districtName: 'LK Alb-Donau-Kreis',
//           enabled: true,
//           endDate: 123412423,
//         },
//         {
//           regionUuid: 'R4MYJ3-5KM5EF-REDZII-NYSR2EHA',
//           name: 'Baden-Württemberg',
//           districtUuid: 'Q5UHWR-5ILTXQ-HHDMIU-FOGWCEIU',
//           districtName: 'LK Biberach',
//           enabled: true,
//           endDate: 123412423,
//         },
//         {
//           regionUuid: 'R4MYJ3-5KM5EF-REDZII-NYSR2EHA',
//           name: 'Baden-Württemberg',
//           districtUuid: 'QOHG6W-6IAV5A-7APQCJ-WIW72B6U',
//           districtName: 'LK Bodenseekreis',
//           enabled: false,
//         },
//         {
//           regionUuid: 'R4MYJ3-5KM5EF-REDZII-NYSR2EHA',
//           name: 'Baden-Württemberg',
//           districtUuid: 'XVELMA-PMRHR3-Y5H2JO-J7XZSI74',
//           districtName: 'LK Breisgau-Hochschwarzwald',
//           enabled: false,
//         },
//         {
//           regionUuid: 'R4MYJ3-5KM5EF-REDZII-NYSR2EHA',
//           name: 'Baden-Württemberg',
//           districtUuid: 'SQSBSU-QIPBZC-YYNAVJ-SPSCKIFM',
//           districtName: 'LK Böblingen',
//           enabled: false,
//         },
//         {
//           regionUuid: 'R4MYJ3-5KM5EF-REDZII-NYSR2EHA',
//           name: 'Baden-Württemberg',
//           districtUuid: 'V3TUDQ-47ARV6-SD4W7C-256BSBM4',
//           districtName: 'LK Calw',
//           enabled: false,
//         },
//         {
//           regionUuid: 'TJIQ46-WO7O7Y-JAPALJ-JTLAKOEU',
//           name: 'Bayern',
//           districtUuid: 'ROICTH-QERRBV-2PUTLC-KBUB2MCQ',
//           districtName: 'LK Aichach-Friedberg',
//           enabled: true,
//           endDate: 123412423,
//         },
//         {
//           regionUuid: 'TJIQ46-WO7O7Y-JAPALJ-JTLAKOEU',
//           name: 'Bayern',
//           districtUuid: 'VSCBRI-7ODD4K-7ZDXC4-BHAZKIGM',
//           districtName: 'LK Altötting',
//           enabled: true,
//           endDate: 123412423,
//         },
//         {
//           regionUuid: 'TJIQ46-WO7O7Y-JAPALJ-JTLAKOEU',
//           name: 'Bayern',
//           districtUuid: 'VZ6ONL-3JCOSY-FOQGD4-YMD5CMGE',
//           districtName: 'LK Amberg-Sulzbach',
//           enabled: true,
//           endDate: 123412423,
//         },
//         {
//           regionUuid: 'TJIQ46-WO7O7Y-JAPALJ-JTLAKOEU',
//           name: 'Bayern',
//           districtUuid: 'RKEG45-RKLB22-DQDVI3-KB522FFI',
//           districtName: 'LK Ansbach',
//           enabled: false,
//         },
//         {
//           regionUuid: 'TJIQ46-WO7O7Y-JAPALJ-JTLAKOEU',
//           name: 'Bayern',
//           districtUuid: 'U4LITQ-TK2YRH-CAXDBZ-HSXOKDZM',
//           districtName: 'LK Aschaffenburg',
//           enabled: false,
//         },
//         {
//           regionUuid: 'TJIQ46-WO7O7Y-JAPALJ-JTLAKOEU',
//           name: 'Bayern',
//           districtUuid: 'WNWA6B-NJDI7F-LDR3HH-ZNZXSH6I',
//           districtName: 'LK Augsburg',
//           enabled: false,
//         },
//       ],
//     },
//   ]);
// });

app.use('/sormas-rest/additionaltests/query/samples', (req, res) => {
  res.status(200).send([
    {
      creationDate: 1617959309689,
      changeDate: 1617872909689,
      uuid: 'RK6G25-W6PUTA-67PZN5-XW4KSMT4',
      sample: { uuid: 'Q4URIL-TZKR6G-M6G6LG-KBNKSML4', caption: 'caption for sample' },
      testDateTime: 1617872909689,
      haemoglobinuria: 'NEGATIVE',
      proteinuria: 'POSITIVE',
      hematuria: 'INDETERMINATE',
      arterialVenousGasPH: 1,
      arterialVenousGasPco2: 2,
      arterialVenousGasPao2: 3,
      arterialVenousGasHco3: 4,
      gasOxygenTherapy: 5,
      altSgpt: 6,
      astSgot: 7,
      creatinine: 8,
      potassium: 9,
      urea: 10,
      haemoglobin: 20,
      totalBilirubin: 30,
      conjBilirubin: 40,
      wbcCount: 50,
      platelets: 60,
      prothrombinTime: 70,
      otherTestResults: 80,
    },
  ]);
});

app.use('/sormas-rest/travelentries/indexList', (req, res) => {
  const result = {
    elements: [
      {
        uuid: 'XWD5GY-FGRT34-WEMNJ4-TH34QWFG',
        externalId: 'FGRT34-WEMNJ4-TH34QWFG-ADEJSA',
        person: {
          uuid: 'AQD5GY-FGRT34-WEMNJ4-TH34QWFG',
          firstName: 'John',
          lastName: 'Snow',
        },
        responsibleDistrict: {
          caption: 'Bremen',
        },
        pointOfEntry: {
          caption: 'Test',
        },
        recovered: false,
        vaccinated: false,
        testedNegative: true,
        quarantineEnd: 1617959309689,
      },
      {
        uuid: 'FGRT34-WEMNJ4-TH34QWFG-ADEJSA',
        externalId: 'FGRT34-WEMNJ4-TH34QWFG-ADEJSA',
        person: {
          uuid: 'AQD5GY-FGRT34-WEMNJ4-TH34QWFG',
          firstName: 'John',
          lastName: 'Snow',
        },
        responsibleDistrict: {
          caption: 'Bremen',
        },
        pointOfEntry: {
          caption: 'Test',
        },
        recovered: false,
        vaccinated: false,
        testedNegative: true,
        quarantineEnd: 1617959309689,
      },
      {
        uuid: 'FGRT34-WEMNJ4-TH34QWFG-ADEJSA',
        externalId: 'FGRT34-WEMNJ4-TH34QWFG-ADEJSA',
        person: {
          uuid: 'AQD5GY-FGRT34-WEMNJ4-TH34QWFG',
          firstName: 'John',
          lastName: 'Snow',
        },
        responsibleDistrict: {
          caption: 'Bremen',
        },
        pointOfEntry: {
          caption: 'Test',
        },
        recovered: false,
        vaccinated: false,
        testedNegative: true,
        quarantineEnd: 1617959309689,
      },
    ],
    pageNumber: 0,
    size: 8,
    totalElementCount: 3,
    hasNext: false,
  };

  res.status(200).send(result);
});

app.use('/sormas-rest/documenttemplates/indexList', (req, res) => {
  const result = {
    elements: [
      {
        uuid: 'XWD5GY-FGRT34-WEMNJ4-TH34QWFG',
        uploadingUser: {
          uuid: 'S3ROT2-XAXJYF-VMIN7W-NA5ASJ7U',
        },
        name: 'case_template5.docx',
        path: 'https://test.com/doc.docx',
        workflow: 'QUARANTINE_ORDER_CASE',
      },
      {
        uuid: 'CVN34S-H78QWE-WER678-T56NVGG',
        uploadingUser: {
          uuid: 'R7ZT62-2X3UQL-X3JFGK-5537SNWM',
        },
        name: 'ExampleTemplateMicrosoftWord.docx',
        path: 'https://test.com/doc.docx',
        workflow: 'QUARANTINE_ORDER_CASE',
      },
      {
        uuid: 'BCDSG9-QWER35-WER568-ERRYEDV',
        uploadingUser: {
          uuid: 'R73ITB-GJ3JN3-FEMDYC-SZJMSOFQ',
        },
        name: 'VorlagePositivbescheiningung.docx',
        path: 'https://test.com/doc.docx',
        workflow: 'QUARANTINE_ORDER_CONTACT',
      },
    ],
    pageNumber: 0,
    size: 8,
    totalElementCount: 3,
    hasNext: false,
  };

  res.status(200).send(result);
});

app.use('/sormas-rest/aggregateReports/indexList', (req, res) => {
  res.status(200).send({
    elements: [
      {
        disease: 'ANTHRAX',
        newCases: 27,
        labConfirmations: 118,
        deaths: 1,
      },
      {
        disease: 'CORONAVIRUS',
        newCases: 120,
        labConfirmations: 2600,
        deaths: 8,
      },
    ],
    pageNumber: 0,
    size: 8,
    totalElementCount: 2,
    hasNext: false,
  });
});

app.use('/sormas-rest/diseases/indexList', (req, res) => {
  res.status(200).send({
    elements: [
      {
        uuid: 'SDF56-H7SF6-SG56FD-ASF346C',
        disease: 'ANTHRAX',
      },
      {
        uuid: 'XCSGT-AF467-KG3AFT-G346BN6',
        disease: 'CORONAVIRUS',
      },
    ],
    pageNumber: 0,
    size: 8,
    totalElementCount: 2,
    hasNext: false,
  });
});

app.use('/sormas-rest/immunizations/push', (req, res) => {
  res.status(200).send({
    matchingPerson: {
      firstName: 'test',
      lastName: 'test',
      sex: undefined,
      birthdateDD: undefined,
      birthdateMM: undefined,
      birthdateYYYY: undefined,
    },
  });
});

// app.use('/sormas-rest/listings/indexList', (req, res) => {
//   if (req.body.criteria.disease) {
//     res.status(200).send([
//       {
//         disease: 'ANTHRAX',
//         listings: [
//           {
//             regionUuid: 'R4MYJ3-5KM5EF-REDZII-NYSR2EHA',
//             name: 'Baden-Württemberg',
//             districtUuid: 'THO35X-NGF7KQ-NT4AYB-CHOL2B44',
//             districtName: 'LK Alb-Donau-Kreis',
//             enabled: true,
//             endDate: 123412423,
//           },
//           {
//             regionUuid: 'R4MYJ3-5KM5EF-REDZII-NYSR2EHA',
//             name: 'Baden-Württemberg',
//             districtUuid: 'Q5UHWR-5ILTXQ-HHDMIU-FOGWCEIU',
//             districtName: 'LK Biberach',
//             enabled: true,
//             endDate: 123412423,
//           },
//           {
//             regionUuid: 'R4MYJ3-5KM5EF-REDZII-NYSR2EHA',
//             name: 'Baden-Württemberg',
//             districtUuid: 'QOHG6W-6IAV5A-7APQCJ-WIW72B6U',
//             districtName: 'LK Bodenseekreis',
//             enabled: false,
//           },
//           {
//             regionUuid: 'R4MYJ3-5KM5EF-REDZII-NYSR2EHA',
//             name: 'Baden-Württemberg',
//             districtUuid: 'XVELMA-PMRHR3-Y5H2JO-J7XZSI74',
//             districtName: 'LK Breisgau-Hochschwarzwald',
//             enabled: false,
//           },
//           {
//             regionUuid: 'R4MYJ3-5KM5EF-REDZII-NYSR2EHA',
//             name: 'Baden-Württemberg',
//             districtUuid: 'SQSBSU-QIPBZC-YYNAVJ-SPSCKIFM',
//             districtName: 'LK Böblingen',
//             enabled: false,
//           },
//           {
//             regionUuid: 'R4MYJ3-5KM5EF-REDZII-NYSR2EHA',
//             name: 'Baden-Württemberg',
//             districtUuid: 'V3TUDQ-47ARV6-SD4W7C-256BSBM4',
//             districtName: 'LK Calw',
//             enabled: false,
//           },
//           {
//             regionUuid: 'TJIQ46-WO7O7Y-JAPALJ-JTLAKOEU',
//             name: 'Bayern',
//             districtUuid: 'ROICTH-QERRBV-2PUTLC-KBUB2MCQ',
//             districtName: 'LK Aichach-Friedberg',
//             enabled: true,
//             endDate: 123412423,
//           },
//           {
//             regionUuid: 'TJIQ46-WO7O7Y-JAPALJ-JTLAKOEU',
//             name: 'Bayern',
//             districtUuid: 'VSCBRI-7ODD4K-7ZDXC4-BHAZKIGM',
//             districtName: 'LK Altötting',
//             enabled: true,
//             endDate: 123412423,
//           },
//           {
//             regionUuid: 'TJIQ46-WO7O7Y-JAPALJ-JTLAKOEU',
//             name: 'Bayern',
//             districtUuid: 'VZ6ONL-3JCOSY-FOQGD4-YMD5CMGE',
//             districtName: 'LK Amberg-Sulzbach',
//             enabled: true,
//             endDate: 123412423,
//           },
//           {
//             regionUuid: 'TJIQ46-WO7O7Y-JAPALJ-JTLAKOEU',
//             name: 'Bayern',
//             districtUuid: 'RKEG45-RKLB22-DQDVI3-KB522FFI',
//             districtName: 'LK Ansbach',
//             enabled: false,
//           },
//           {
//             regionUuid: 'TJIQ46-WO7O7Y-JAPALJ-JTLAKOEU',
//             name: 'Bayern',
//             districtUuid: 'U4LITQ-TK2YRH-CAXDBZ-HSXOKDZM',
//             districtName: 'LK Aschaffenburg',
//             enabled: false,
//           },
//           {
//             regionUuid: 'TJIQ46-WO7O7Y-JAPALJ-JTLAKOEU',
//             name: 'Bayern',
//             districtUuid: 'WNWA6B-NJDI7F-LDR3HH-ZNZXSH6I',
//             districtName: 'LK Augsburg',
//             enabled: false,
//           },
//         ],
//       },
//     ]);
//   } else {
//     res.status(200).send([
//       {
//         disease: 'ANTHRAX',
//         listings: [
//           {
//             regionUuid: 'R4MYJ3-5KM5EF-REDZII-NYSR2EHA',
//             name: 'Baden-Württemberg',
//             districtUuid: 'THO35X-NGF7KQ-NT4AYB-CHOL2B44',
//             districtName: 'LK Alb-Donau-Kreis',
//             enabled: true,
//             endDate: 123412423,
//           },
//           {
//             regionUuid: 'R4MYJ3-5KM5EF-REDZII-NYSR2EHA',
//             name: 'Baden-Württemberg',
//             districtUuid: 'Q5UHWR-5ILTXQ-HHDMIU-FOGWCEIU',
//             districtName: 'LK Biberach',
//             enabled: true,
//             endDate: 123412423,
//           },
//           {
//             regionUuid: 'TJIQ46-WO7O7Y-JAPALJ-JTLAKOEU',
//             name: 'Bayern',
//             districtUuid: 'ROICTH-QERRBV-2PUTLC-KBUB2MCQ',
//             districtName: 'LK Aichach-Friedberg',
//             enabled: true,
//             endDate: 123412423,
//           },
//           {
//             regionUuid: 'TJIQ46-WO7O7Y-JAPALJ-JTLAKOEU',
//             name: 'Bayern',
//             districtUuid: 'VSCBRI-7ODD4K-7ZDXC4-BHAZKIGM',
//             districtName: 'LK Altötting',
//             enabled: true,
//             endDate: 123412423,
//           },
//           {
//             regionUuid: 'TJIQ46-WO7O7Y-JAPALJ-JTLAKOEU',
//             name: 'Bayern',
//             districtUuid: 'VZ6ONL-3JCOSY-FOQGD4-YMD5CMGE',
//             districtName: 'LK Amberg-Sulzbach',
//             enabled: true,
//             endDate: 123412423,
//           },
//         ],
//       },
//       {
//         disease: 'CORONAVIRUS',
//         listings: [
//           {
//             regionUuid: 'R4MYJ3-5KM5EF-REDZII-NYSR2EHA',
//             name: 'Baden-Württemberg',
//             districtUuid: 'THO35X-NGF7KQ-NT4AYB-CHOL2B44',
//             districtName: 'LK Alb-Donau-Kreis',
//             enabled: true,
//             endDate: 123412423,
//           },
//         ],
//       },
//     ]);
//   }
// });

app.use('/sormas-rest/actions/indexList', (req, res) => {
  let total = 7;
  const priorityOptions = ['LOW', 'NORMAL', 'HIGH'];
  const statusOptions = ['DONE', 'IN_PROGRESS', 'PENDING'];
  const measures = [
    'PROHIBITION_OF_ENTRY_AND_WORK_CASES',
    'SAMPLE_COLLECTION',
    'FORWARDING_TO_NATIONAL_REFERENCE_CENTER',
    'CONTACT_FOLLOW_UP',
    'VERIFICATION_OF_VACCINATION_IMMUNIZATION',
    'POST_EXPOSURE_PROPHYLAXIS_VACCINATION',
    'CLOSURE_OF_FACILITY',
    'PROHIBITION_OF_ENTRY_AND_WORK_CONTACTS',
    'POPULATION_INFORMATION',
  ];
  const dates = [1617872909689, 1617872909689, null];
  const titles = ['Collect samples', 'Prohibition action title', 'Verification action'];
  const descriptions = [
    'Yout comments here… your comments here… your comments here',
    'We need to collect the mofo samples!',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  ];

  const arrayTmp = [];
  let offset = 0;

  if (req.body.sortProperties && !req.body.sortProperties[0].ascending) {
    offset = 0;
  }

  if (req.body.filter) {
    total = 4;
  }

  for (let i = 0; i < total; i++) {
    arrayTmp.push({
      uuid: `TEST-${i}`,
      creationDate: 1617959309689,
      changeDate: dates[Math.floor(Math.random() * dates.length)],
      actionContext: 'EVENT',
      event: {
        uuid: 'SW14IL-EAK3YG-T6G9LG-VNM28SL4',
        caption: 'Some random event',
      },
      actionMeasure: measures[Math.floor(Math.random() * measures.length)],
      priority: priorityOptions[Math.floor(Math.random() * priorityOptions.length)],
      date: 1617872909689,
      actionStatus: statusOptions[Math.floor(Math.random() * statusOptions.length)],
      statusChangeDate: 1617872909689,
      creatorUser: {
        uuid: 'CN54IL-AZK56G-V6GELW-XBNKQ3LE',
        caption: 'Userica',
      },
      title: titles[Math.floor(Math.random() * titles.length)],
      description: descriptions[Math.floor(Math.random() * descriptions.length)],
    });
  }

  res.status(200).send({
    elements: arrayTmp,
    pageNumber: 0,
    size: 4,
    totalElementCount: total,
    hasNext: true,
  });
});

app.use('/sormas-rest/outbreaks/indexList', (req, res) => {
  res.status(200).send([
    {
      region: {
        uuid: 'R4MYJ3-5KM5EF-REDZII-NYSR2EHA',
        caption: 'Baden-Württemberg',
        externalID: '13000008',
      },
      outbreaks: [
        {
          disease: 'CORONAVIRUS',
          affectedDistricts: [
            {
              uuid: 'THO35X-NGF7KQ-NT4AYB-CHOL2B44',
              caption: 'LK Alb-Donau-Kreis',
              externalId: 100324,
            },
            {
              uuid: 'S66HMC-P6AKDJ-MPH3PO-GVPL2OI4',
              caption: 'SK Berlin Charlottenburg-Wilmersdorf',
              externalId: 103684,
            },
          ],
          totalDistricts: 17,
        },
        {
          disease: 'YELLOW_FEVER',
          affectedDistricts: [],
          totalDistricts: 17,
        },
      ],
    },
    {
      region: {
        uuid: 'TJIQ46-WO7O7Y-JAPALJ-JTLAKOEU',
        caption: 'Bayern',
        externalID: '13000009',
      },
      outbreaks: [
        {
          disease: 'CORONAVIRUS',
          affectedDistricts: [],
          totalDistricts: 96,
        },
        {
          disease: 'YELLOW_FEVER',
          affectedDistricts: [],
          totalDistricts: 96,
        },
      ],
    },
    {
      region: {
        uuid: 'QVWR3V-OPPANI-WFXW3T-TUK5KO3M',
        caption: 'Berlin',
        externalID: '13000011',
      },
      outbreaks: [
        {
          disease: 'CORONAVIRUS',
          affectedDistricts: [],
          totalDistricts: 12,
        },
        {
          disease: 'YELLOW_FEVER',
          affectedDistricts: [],
          totalDistricts: 12,
        },
      ],
    },
    {
      region: {
        uuid: 'UJXVK5-RWEPBX-CT3WC2-3SB42MDQ',
        caption: 'Brandenburg',
        externalID: '13000012',
      },
      outbreaks: [
        {
          disease: 'CORONAVIRUS',
          affectedDistricts: [],
          totalDistricts: 9,
        },
        {
          disease: 'YELLOW_FEVER',
          affectedDistricts: [],
          totalDistricts: 9,
        },
      ],
    },
    {
      region: {
        uuid: 'S63EGL-SP5NQZ-EPFZHQ-ZQ4XCDTE',
        caption: 'Bremen',
        externalID: '13000004',
      },
      outbreaks: [
        {
          disease: 'CORONAVIRUS',
          affectedDistricts: [
            {
              uuid: 'THO35X-NGF7KQ-NT4AYB-CHOL2B44',
              caption: 'LK Alb-Donau-Kreis',
              externalId: 100324,
            },
            {
              uuid: 'S66HMC-P6AKDJ-MPH3PO-GVPL2OI4',
              caption: 'SK Berlin Charlottenburg-Wilmersdorf',
              externalId: 103684,
            },
          ],
          totalDistricts: 5,
        },
        {
          disease: 'YELLOW_FEVER',
          affectedDistricts: [],
          totalDistricts: 5,
        },
      ],
    },
    {
      region: {
        uuid: 'U3CXN2-4TLGTL-DELLRP-IRMZCIGM',
        caption: 'Hamburg',
        externalID: '13000002',
      },
      outbreaks: [
        {
          disease: 'CORONAVIRUS',
          affectedDistricts: [],
          totalDistricts: 26,
        },
        {
          disease: 'YELLOW_FEVER',
          affectedDistricts: [],
          totalDistricts: 26,
        },
      ],
    },
    {
      region: {
        uuid: 'SNFB35-PQHXTV-ISQDL6-ITGEKGXA',
        caption: 'Hessen',
        externalID: '13000006',
      },
      outbreaks: [
        {
          disease: 'CORONAVIRUS',
          affectedDistricts: [],
          totalDistricts: 3,
        },
        {
          disease: 'YELLOW_FEVER',
          affectedDistricts: [
            {
              uuid: 'THO35X-NGF7KQ-NT4AYB-CHOL2B44',
              caption: 'LK Alb-Donau-Kreis',
              externalId: 100324,
            },
            {
              uuid: 'S66HMC-P6AKDJ-MPH3PO-GVPL2OI4',
              caption: 'SK Berlin Charlottenburg-Wilmersdorf',
              externalId: 103684,
            },
          ],
          totalDistricts: 3,
        },
      ],
    },
    {
      region: {
        uuid: 'XFUMUW-W2K6Q5-STKFLG-UCOPSKVY',
        caption: 'Mecklenburg-Vorpommern',
        externalID: '13000013',
      },
      outbreaks: [
        {
          disease: 'CORONAVIRUS',
          affectedDistricts: [],
          totalDistricts: 0,
        },
        {
          disease: 'YELLOW_FEVER',
          affectedDistricts: [],
          totalDistricts: 0,
        },
      ],
    },
  ]);
});

app.use(
  '/sormas-rest',
  createProxyMiddleware({
    target: API_SERVICE_URL,
    changeOrigin: true,
    autoRewrite: true,
    followRedirects: true,
    secure: !process.env.IGNORE_CERT_VALIDATION,
    logLevel: 'debug',
    onProxyReq: (proxyReq, req, res) => {
      if (!req.body || !Object.keys(req.body).length) {
        return;
      }

      const contentType = proxyReq.getHeader('Content-Type');
      const writeBody = (bodyData) => {
        proxyReq.setHeader('Content-Length', Buffer.byteLength(bodyData));
        proxyReq.write(bodyData);
      };
      if (contentType.includes('application/json')) {
        writeBody(JSON.stringify(req.body));
      }

      if (contentType.includes('application/x-www-form-urlencoded')) {
        writeBody(querystring.stringify(req.body));
      }
    },
  })
);

app.listen(PORT, HOST, () => {
  console.log(`Starting Proxy at ${HOST}:${PORT}`);
});
