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

app.use('/sormas-rest/travelentries/FGRT34-WEMNJ4-TH34QWFG-ADEJSA', (req, res) => {
  const result = {
    uuid: 'XWD5GY-FGRT34-WEMNJ4-TH34QWFG',
    externalId: 'FGRT34-WEMNJ4-TH34QWFG-ADEJSA',
    person: {
      uuid: 'AQD5GY-FGRT34-WEMNJ4-TH34QWFG',
      firstName: 'John',
      lastName: 'Snow',
    },
    responsibleRegion: {
      uuid: 'XWD5GY-FGRT34-WEMNJ4-TH34QWFG',
      caption: 'testRegion',
    },
    responsibleDistrict: {
      caption: 'Bremen',
      uuid: 'XWD5GY-FGRT34-WEMNJ4-TH34QWFG',
    },
    responsibleCommunity: {
      captions: 'testCommunity',
      uuid: 'XWD5GY-FGRT34-WEMNJ4-TH34QWFG',
    },
    pointOfEntry: {
      caption: 'Test',
    },
    reportingUser: { caption: 'National User' },
    recovered: false,
    vaccinated: false,
    testedNegative: true,
    quarantineEnd: 1617959309689,
    quarantineHomePossible: 'YES',
  };

  res.status(200).send(result);
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
        responsibleRegion: {
          caption: 'testRegion',
        },
        responsibleDistrict: {
          caption: 'Bremen',
        },
        responsibleCommunity: {
          captions: 'testCommunity',
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

app.use('/sormas-rest/vaccinations/indexList', (req, res) => {
  res.status(200).send({
    elements: [
      {
        disease: 'ANTHRAX',
        newCases: 27,
        labConfirmations: 118,
        deaths: 1,
      },
      {
        disease: 'COVID',
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

app.use('/sormas-rest/weeklyReportsRegionSummary/indexList', (req, res) => {
  res.status(200).send({
    elements: [
      {
        uuid: 'SDGSG-SHSFH-ASFASGG',
        region: {
          uuid: 'THO35X-NGF7KQ-NT4AYB-CHOL2B44',
          caption: 'Berlin',
        },
        officers: 6,
        officerReports: 0,
        officerCaseReports: 0,
        officerZeroReports: 0,
        officerMissingReports: 0,
        officerReportPercentage: 60,
        informants: 6,
        informantReports: 0,
        informantCaseReports: 0,
        informantZeroReports: 0,
        informantMissingReports: 0,
        informantReportPercentage: 0,
      },
      {
        uuid: 'SDGSG-SHSFH-ASFASGG',
        region: {
          uuid: 'THO35X-NGF7KQ-NT4AYB-CHOL2B44',
          caption: 'Brandemburg',
        },
        officers: 4,
        officerReports: 0,
        officerCaseReports: 0,
        officerZeroReports: 0,
        officerMissingReports: 0,
        officerReportPercentage: 0,
        informants: 4,
        informantReports: 0,
        informantCaseReports: 0,
        informantZeroReports: 0,
        informantMissingReports: 0,
        informantReportPercentage: 0,
      },
      {
        uuid: 'SDGSG-SHSFH-ASFASGG',
        region: {
          uuid: 'THO35X-NGF7KQ-NT4AYB-CHOL2B44',
          caption: 'Vorengellstellte Region',
        },
        officers: 2,
        officerReports: 0,
        officerCaseReports: 0,
        officerZeroReports: 0,
        officerMissingReports: 0,
        officerReportPercentage: 35,
        informants: 3,
        informantReports: 2,
        informantCaseReports: 1,
        informantZeroReports: 0,
        informantMissingReports: 0,
        informantReportPercentage: 0,
      },
      {
        uuid: 'SDGSG-SHSFH-ASFASGG',
        region: {
          uuid: 'THO35X-NGF7KQ-NT4AYB-CHOL2B44',
          caption: 'Bavaria',
        },
        officers: 8,
        officerReports: 5,
        officerCaseReports: 0,
        officerZeroReports: 1,
        officerMissingReports: 2,
        officerReportPercentage: 80,
        informants: 5,
        informantReports: 5,
        informantCaseReports: 5,
        informantZeroReports: 0,
        informantMissingReports: 0,
        informantReportPercentage: 0,
      },
    ],
    pageNumber: 0,
    size: 8,
    totalElementCount: 4,
    hasNext: false,
  });
});

app.use('/sormas-rest/weeklyReportsOfficerSummary/indexList', (req, res) => {
  res.status(200).send({
    elements: [
      {
        uuid: 'SDGSG-SHSFH-ASFASGG',
        district: {
          uuid: 'THO35X-NGF7KQ-NT4AYB-CHOL2B44',
          caption: 'Voreingesterller Landkreis',
        },
        officer: {
          uuid: 'SDHH-JDFDJD-DSHFHHFDHF',
          caption: 'Mila Adam - Surveillance Officer',
        },
        officerReportDate: null,
        totalCaseCount: 60,
        informants: 6,
        informantReports: 0,
        informantReportPercentage: 0,
      },
      {
        uuid: 'SDGSG-SHSFH-ASFASGG',
        district: {
          uuid: 'THO35X-NGF7KQ-NT4AYB-CHOL2B44',
          caption: 'Voreingesterller Landkreis',
        },
        officer: {
          uuid: 'SDHH-JDFDJD-DSHFHHFDHF',
          caption: 'Anselm Kiefer - Surveillance Officer',
        },
        officerReportDate: null,
        totalCaseCount: 27,
        informants: 3,
        informantReports: 0,
        informantReportPercentage: 0,
      },
      {
        uuid: 'SDGSG-SHSFH-ASFASGG',
        district: {
          uuid: 'THO35X-NGF7KQ-NT4AYB-CHOL2B44',
          caption: 'Voreingesterller Landkreis',
        },
        officer: {
          uuid: 'SDHH-JDFDJD-DSHFHHFDHF',
          caption: 'Maria Wolf - Surveillance Officer',
        },
        officerReportDate: null,
        totalCaseCount: 44,
        informants: 12,
        informantReports: 5,
        informantReportPercentage: 42,
      },
    ],
    pageNumber: 0,
    size: 8,
    totalElementCount: 3,
    hasNext: false,
  });
});

app.use('/sormas-rest/weeklyReports/indexList', (req, res) => {
  res.status(200).send({
    elements: [
      {
        uuid: 'SDGSG-SHSFH-ASFASGG',
        district: {
          uuid: 'THO35X-NGF7KQ-NT4AYB-CHOL2B44',
          caption: 'Voreingesteller Landkries',
        },
        coomunity: {
          uuid: 'THO35X-NGF7KQ-NT4AYB-CHOL2B44',
          caption: 'VL Borchellan Mittel',
        },
        healthFacility: {
          uuid: 'SFGDSG-SDG-SDGDGS-DGSDGSG',
          caption: 'Voreingestelle Gesundheitseinrichtung',
        },
        assignedOfficer: {
          uuid: 'SGDSG-SDGDS-WERWY-RIYIU',
          caption: 'Hospital INFORMANT - Hospital informant',
        },
        totalNumberOfCases: 7,
        reportDateTime: null,
      },
      {
        uuid: 'SDGSG-SHSFH-ASFASGG',
        district: {
          uuid: 'THO35X-NGF7KQ-NT4AYB-CHOL2B44',
          caption: 'Voreingesteller Landkries',
        },
        coomunity: null,
        healthFacility: {
          uuid: 'SFGDSG-SDG-SDGDGS-DGSDGSG',
          caption: 'Voreingestelle Gesundheitseinrichtung',
        },
        assignedOfficer: {
          uuid: 'SGDSG-SDGDS-WERWY-RIYIU',
          caption: 'Hospital INFORMANT - Hospital informant',
        },
        totalNumberOfCases: 11,
        reportDateTime: 1644480071438,
      },
    ],
    pageNumber: 0,
    size: 8,
    totalElementCount: 2,
    hasNext: false,
  });
});

app.use('/sormas-rest/contacts/followUp', (req, res) => {
  res.status(200).send({
    elements: [
      {
        uuid: 'HD4H3J-SHSFH-ASFASGG',
        changeDate: 1644480071438,
        personFirstName: 'Jessie',
        personLastName: 'James',
        follupUpUntil: 1644480071438,
        dateLastContact: 1644480071438,
        symptomJournalStatus: 'UNREGISTERED',
        disease: 'CORONAVIRUS',
        resposibleContactOfficer: 'James2',
        visitResults: [
          {
            user: 'admin',
            status: 'COOPERATIVE',
          },
          {
            user: 'admin',
            status: 'COOPERATIVE',
          },
          {
            user: 'admin',
            status: 'UNAVAILABLE',
          },
          {
            user: 'admin',
            status: 'UNCOOPERATIVE',
          },
          {
            user: 'admin',
            status: 'NOT_PERFORMED',
          },
          {
            user: 'admin',
            status: 'NOT_PERFORMED',
          },
        ],
      },
      {
        uuid: 'GHG87N-DFGSFA-WE457GVB',
        changeDate: 1644480071438,
        personFirstName: 'Doc',
        personLastName: 'Scurlock',
        follupUpUntil: 1644480071438,
        dateLastContact: 1644480071438,
        symptomJournalStatus: 'UNREGISTERED',
        disease: 'CORONAVIRUS',
        resposibleContactOfficer: 'James3',
        visitResults: [
          {
            user: 'admin',
            status: 'UNCOOPERATIVE',
          },
          {
            user: 'admin',
            status: 'NOT_SYMPTOMATIC',
          },
          {
            user: 'admin',
            status: 'SYMPTOMATIC',
          },
          {
            user: 'admin',
            status: 'UNCOOPERATIVE',
          },
          {
            user: 'admin',
            status: 'NOT_PERFORMED',
          },
          {
            user: 'admin',
            status: 'SYMPTOMATIC',
          },
        ],
      },
      {
        uuid: 'RTGJSV-D567K9-MGNBVD',
        changeDate: 1644480071438,
        personFirstName: 'William H',
        personLastName: 'Bonney',
        follupUpUntil: 1644480071438,
        dateLastContact: 1644480071438,
        symptomJournalStatus: 'UNREGISTERED',
        disease: 'CORONAVIRUS',
        resposibleContactOfficer: 'James4',
        visitResults: [
          {
            user: 'admin',
            status: 'NOT_PERFORMED',
          },
          {
            user: 'admin',
            status: 'NOT_PERFORMED',
          },
          {
            user: 'admin',
            status: 'UNAVAILABLE',
          },
          {
            user: 'admin',
            status: 'SYMPTOMATIC',
          },
          {
            user: 'admin',
            status: 'SYMPTOMATIC',
          },
          {
            user: 'admin',
            status: 'NOT_PERFORMED',
          },
        ],
      },
    ],
    pageNumber: 0,
    size: 8,
    totalElementCount: 3,
    hasNext: false,
  });
});



app.use('/sormas-rest/cases/followUp', (req, res) => {
  res.status(200).send({
    elements: [
      {
        uuid: 'HD4H3J-SHSFH-ASFASGG',
        changeDate: 1644480071438,
        personFirstName: 'Jessie',
        personLastName: 'James',
        follupUpUntil: 1644480071438,
        symptomJournalStatus: 'UNREGISTERED',
        disease: 'CORONAVIRUS',
        visitResults: [
          {
            user: 'admin',
            status: 'COOPERATIVE',
          },
          {
            user: 'admin',
            status: 'COOPERATIVE',
          },
          {
            user: 'admin',
            status: 'UNAVAILABLE',
          },
          {
            user: 'admin',
            status: 'UNCOOPERATIVE',
          },
          {
            user: 'admin',
            status: 'NOT_PERFORMED',
          },
          {
            user: 'admin',
            status: 'NOT_PERFORMED',
          },
        ],
      },
      {
        uuid: 'GHG87N-DFGSFA-WE457GVB',
        changeDate: 1644480071438,
        personFirstName: 'Doc',
        personLastName: 'Scurlock',
        follupUpUntil: 1644480071438,
        symptomJournalStatus: 'UNREGISTERED',
        disease: 'CORONAVIRUS',
        visitResults: [
          {
            user: 'admin',
            status: 'UNCOOPERATIVE',
          },
          {
            user: 'admin',
            status: 'NOT_SYMPTOMATIC',
          },
          {
            user: 'admin',
            status: 'SYMPTOMATIC',
          },
          {
            user: 'admin',
            status: 'UNCOOPERATIVE',
          },
          {
            user: 'admin',
            status: 'NOT_PERFORMED',
          },
          {
            user: 'admin',
            status: 'SYMPTOMATIC',
          },
        ],
      },
      {
        uuid: 'RTGJSV-D567K9-MGNBVD',
        changeDate: 1644480071438,
        personFirstName: 'William H',
        personLastName: 'Bonney',
        follupUpUntil: 1644480071438,
        symptomJournalStatus: 'UNREGISTERED',
        disease: 'CORONAVIRUS',
        visitResults: [
          {
            user: 'admin',
            status: 'NOT_PERFORMED',
          },
          {
            user: 'admin',
            status: 'NOT_PERFORMED',
          },
          {
            user: 'admin',
            status: 'UNAVAILABLE',
          },
          {
            user: 'admin',
            status: 'SYMPTOMATIC',
          },
          {
            user: 'admin',
            status: 'SYMPTOMATIC',
          },
          {
            user: 'admin',
            status: 'NOT_PERFORMED',
          },
        ],
      },
    ],
    pageNumber: 0,
    size: 8,
    totalElementCount: 3,
    hasNext: false,
  });
});

app.use('/sormas-rest/labMessage/indexList', (req, res) => {
  res.status(200).send({
    elements: [
      {
        uuid: 'HD4H3J-SHSFH-ASFASGG',
        messageDateTime: 1644480071438,
        labName: 'Testlabor',
        labPostalCode: 12345,
        testedDisease: 'CORONAVIRUS',
        sampleOverallTestResult: 'POSITIVE',
        personFirstName: 'Ionut',
        personLastName: 'Caprioara',
        personBirthDate: '6/22/1999',
        personPostalCode: 45678,
        status: 'UNPROCESSED',
        assignee: {
          uuid: 'S3ROT2-XAXJYF-VMIN7W-NA5ASJ7U',
          caption: 'admin',
        },
      },
      {
        uuid: 'HD4H3J-SHSFH-ASFASGG',
        messageDateTime: 1644480071438,
        labName: 'Testlabor',
        labPostalCode: 12345,
        testedDisease: 'CORONAVIRUS',
        sampleOverallTestResult: 'POSITIVE',
        personFirstName: 'Ionut',
        personLastName: 'Caprioara',
        personBirthDate: '6/22/1999',
        personPostalCode: 45678,
        status: 'UNPROCESSED',
        assignee: null,
      },
      {
        uuid: 'HD4H3J-SHSFH-ASFASGG',
        messageDateTime: 1644480071438,
        labName: 'Testlabor',
        labPostalCode: 12345,
        testedDisease: 'CORONAVIRUS',
        sampleOverallTestResult: 'POSITIVE',
        personFirstName: 'Ionut',
        personLastName: 'Caprioara',
        personBirthDate: '6/22/1999',
        personPostalCode: 45678,
        status: 'FORWARDED',
        assignee: null,
      },
      {
        uuid: 'HD4H3J-SHSFH-ASFASGG',
        messageDateTime: 1644480071438,
        labName: 'Testlabor',
        labPostalCode: 12345,
        testedDisease: 'CORONAVIRUS',
        sampleOverallTestResult: 'POSITIVE',
        personFirstName: 'Ionut',
        personLastName: 'Caprioara',
        personBirthDate: '6/22/1999',
        personPostalCode: 45678,
        status: 'UNCLEAR',
        assignee: {
          uuid: 'VXDHVQ-AHH47Z-322YEK-UBB5CB24',
          caption: 'Surveillance SUPERVISOR',
        },
      },
    ],
    pageNumber: 0,
    size: 4,
    totalElementCount: 4,
    hasNext: false,
  });
});

app.use('/sormas-rest/shareRequests/indexList', (req, res) => {
  res.status(200).send({
    elements: [
      {
        uuid: 'HD4H3J-SHSFH-ASFASGG',
        creationDate: 1644480071438,
        dataType: 'CASE',
        status: 'PENDING',
        organizationId: 'YWTEWY-ETSDGFDB-MNBSVA',
        organizationName: 'test-de2.sormas.netzlink.com',
        senderName: 'National user',
        ownershipHandedOver: true,
        comment: null,
      },
      {
        uuid: 'SDGSG4-SHSFH-ASFASGG',
        creationDate: 1644480071438,
        dataType: 'CASE',
        status: 'ACCEPTED',
        organizationId: 'YWTEWY-ETSDGFDB-MNBSVA',
        organizationName: 'test-de1.sormas.netzlink.com',
        senderName: 'Admin',
        ownershipHandedOver: true,
        comment: 'this is a special case',
      },
      {
        uuid: 'HJ8U78-SHSFH-ASFASGG',
        creationDate: 1644480071438,
        dataType: 'EVENT',
        status: 'REJECTED',
        organizationId: 'YWTEWY-ETSDGFDB-MNBSVA',
        organizationName: 'test-de2.sormas.netzlink.com',
        senderName: 'National user',
        ownershipHandedOver: false,
        comment: null,
      },
      {
        uuid: 'MNWT9B-SHSFH-ASFASGG',
        creationDate: 1644480071438,
        dataType: 'CONTACT',
        status: 'REVOKED',
        organizationId: 'YWTEWY-ETSDGFDB-MNBSVA',
        organizationName: 'test-de1.sormas.netzlink.com',
        senderName: 'Surveillance officer',
        ownershipHandedOver: false,
        comment: null,
      },
      {
        uuid: 'QWNO65-SHSFH-ASFASGG',
        creationDate: 1644480071438,
        dataType: 'CONTACT',
        status: 'ACCEPTED',
        organizationId: 'YWTEWY-ETSDGFDB-MNBSVA',
        organizationName: 'test-de2.sormas.netzlink.com',
        senderName: 'National user',
        ownershipHandedOver: false,
        comment: null,
      },
      {
        uuid: 'CF456W-SHSFH-ASFASGG',
        creationDate: 1644480071438,
        dataType: 'CASE',
        status: 'REJECTED',
        organizationId: 'YWTEWY-ETSDGFDB-MNBSVA',
        organizationName: 'test.sormas.netzlink.com',
        senderName: 'National user',
        ownershipHandedOver: true,
        comment: 'raccoon city patient zero, he bites',
      },
    ],
    pageNumber: 0,
    size: 8,
    totalElementCount: 6,
    hasNext: false,
  });
});

app.use('/sormas-rest/shareRequests/******-*', (req, res) => {
  res.status(200).send({
    uuid: 'FTH7UJ-SED452-T67N5F-ERT56Y78U',
    dataType: 'CASE',
    status: 'PENDING',
    originInfo: {},
    cases: [
      {
        uuid: 'VBNHYT-WD45W3-NBMHJY-SDFG3214',
        reportDate: 1644761193620,
        disease: 'CORONAVIRUS',
        diseaseDetails: null,
        diseaseVariant: null,
        caseClassification: 'NOT_CLASSIFIED',
        outcome: 'NO_OUTCOME',
        investigationStatus: 'PENDING',
        onsetDate: 1644761193620,
        person: {
          uuid: 'QASDFG-POKJHG-NH76R4-DF67HN65',
          firstName: 'Dani',
          lastName: 'Rus',
          sex: 'MALE',
          address: {},
          birthdateDD: 22,
          birthdateMM: 12,
          birthdateYYYY: 1979,
        },
        region: {
          uuid: 'RGTYUI-NB45W2-BN3456-BD4R5TYU',
          caption: 'Baden-Wurttemberg',
        },
        district: {
          uuid: 'WERBNH-RTYGFD-HJK789-D234WQWC',
          caption: 'LK Alb-Donau-Kreis',
        },
        community: null,
        facilityType: null,
        healthFacility: null,
        healthFacilityDetails: null,
        pointOfEntry: null,
        pointOfEntryDetails: null,
      },
    ],
    contacts: [
      {
        uuid: 'BHJKUI-MN78Y56-VDFGT3E-RT6G5R3H',
        reportDateTime: 1644761193620,
        disease: 'CORONAVIRUS',
        diseaseDetails: null,
        lastContactDate: 1644761193620,
        contactClassification: 'CONFIRMED',
        contactCategory: 'HIGH_RISK_MED',
        contactStatus: 'ACTIVE',
        person: {
          uuid: 'QASDFG-POKJHG-NH76R4-DF67HN65',
          firstName: 'Dani',
          lastName: 'Rus',
          sex: 'MALE',
          address: {},
          birthdateDD: 22,
          birthdateMM: 12,
          birthdateYYYY: 1979,
        },
        region: {
          uuid: 'RGTYUI-NB45W2-BN3456-BD4R5TYU',
          caption: 'Baden-Wurttemberg',
        },
        district: {
          uuid: 'WERBNH-RTYGFD-HJK789-D234WQWC',
          caption: 'LK Alb-Donau-Kreis',
        },
        community: null,
      },
    ],
    events: null,
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

app.use('/sormas-rest/dashboard/contacts', (req, res) => {
  res.status(200).send({
    contactClassificationCount: {
      UNCONFIRMED: 27,
      CONFIRMED: 102,
      NOT_CONTACT: 31,
      NEW_CONTACT: 18,
      SYMPTOMATIC: 69,
    },
    diseases: [
      {
        disease: 'CORONAVIRUS',
        count: 132,
        rising: true,
      },
      {
        disease: 'MEASLES',
        count: 4,
        rising: true,
      },
      {
        disease: 'ANTHRAX',
        count: 9,
        rising: false,
      },
      {
        disease: 'AFP',
        count: 5,
        rising: false,
      },
      {
        disease: 'CHOLERA',
        count: 11,
        rising: false,
      },
      {
        disease: 'POLIO',
        count: 2,
        rising: false,
      },
      {
        disease: 'MALARIA',
        count: 1,
        rising: false,
      },
      {
        disease: 'PNEUMONIA',
        count: 17,
        rising: false,
      },
    ],
  });
});

app.use('/sormas-rest/dashboard/contactStats', (req, res) => {
  res.status(200).send({
    contactStats: {
      PER_CASE: 1,
      MAX: 458,
      AVERAGE: 41,
      NEW_CASE: 72,
      PERCENT_NEW_CASE: 40,
      QUARANTINE: 17,
      QUARANTINE_PLACED: 4,
    },
  });
});

app.use('/sormas-rest/dashboard/underFollowUp', (req, res) => {
  res.status(200).send({
    followUp: {
      COOPERATIVE: 1,
      UNCOOPERATIVE: 5,
      UNAVAILABLE: 6,
      NOT_VISITED: 17,
      DAY1: 1,
      DAY2: 2,
      DAY3: 3,
      DAY4: 4,
    },
  });
});

app.use('/sormas-rest/dashboard/visits', (req, res) => {
  res.status(200).send({
    visits: {
      COOPERATIVE: 100,
      UNCOOPERATIVE: 0,
      UNAVAILABLE: -4,
      MISSED: 17,
    },
  });
});

app.use('/sormas-rest/dashboard/stoppedFollowUp', (req, res) => {
  res.status(200).send({
    followUp: {
      COMPLETED: 9,
      CANCELLED: 2,
      LOST: 17,
    },
    converted: 8,
  });
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
