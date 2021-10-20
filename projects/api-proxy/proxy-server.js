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
app.use('/sormas-rest/users/S3ROT2-XAXJYF-VMIN7W-NA5ASJ7U', (req, res) => {
  res.status(200).send({
    active: true,
    address: {
      creationDate: 1618404250675,
      changeDate: 1618404250675,
      uuid: 'TB7SZV-QIGJK3-DOL4QT-HSCECNDE',
    },
    changeDate: 1618404250675,
    creationDate: 1618404250675,
    pseudonymized: false,
    uuid: 'TB7SZV-QIGJK3-DOL4QT-HSCECNDE',
    changeDate: 1633329099202,
    creationDate: 1618404250675,
    firstName: 'adam',
    userEmail: 'adamholger@gmail.com',
    phone: '+40746658799',
    hasConsentedToGdpr: false,
    language: 'EN',
    lastName: 'Holger',
    name: 'ad min',
    userName: 'admin',
    userRoles: ['NATIONAL_USER', 'ADMIN'],
    0: 'NATIONAL_USER',
    1: 'ADMIN',
    uuid: 'S3ROT2-XAXJYF-VMIN7W-NA5ASJ7U',
  });
});

app.use('/sormas-rest/contacts/QN3NKC-XLHWN6-LEH2NF-ZXRQKHOM', (req, res) => {
  let total = 1000;

  const arrayTmp = [];
  let offset = 0;

  if (req.body.sortProperties && !req.body.sortProperties[0].ascending) {
    offset = 1000;
  }

  if (req.body.filter) {
    total = 50;
  }

  for (
    var i = parseInt(req.query.offset);
    i < parseInt(req.query.offset) + parseInt(req.query.size);
    i++
  ) {
    arrayTmp.push({
      uuid: 'T79TR5-YVTX26-CHL6D7-Z2UPKIHI',
      involvementDescription: 'Description etc',
      resultingCase: {
        uuid: 'WXKKDI-W5LSJ2-YWK5SP-U7ZH2MQI',
      },
      event: {
        uuid: 'TFI3ZL-VSSLDP-QUNMND-VOYFSL7Y',
      },
      person: {
        pseudonymized: false,
        uuid: 'Q7D3RP-YVTX26-CHL6D7-Z2UPKIHI',
        firstName: 'Smoke3',
        lastName: 'Test3',
        ageAndBirthDate: {
          dateOfBirthDD: 23,
          dateOfBirthMM: 4,
          dateOfBirthYYYY: 1992,
          age: 29,
          ageType: 'YEARS',
        },
        sex: 'OTHER',
        district: 'LK Uckermark',
        street: 'Sarmisegetuza',
        houseNumber: '21',
        postalCode: '400592',
        city: 'Cluj-Napoca',
        phone: '+40744373681',
        emailAddress: null,
        changeDate: 1628038802556,
        inJurisdiction: true,
      },
    });
  }

  res.status(200).send({
    pseudonymized: false,
    uuid: 'RK6G25-W6PUTA-67PZN5-XW4KSMT4',
    firstName: 'John',
    lastName: 'Smith',
    caze: {
      uuid: 'WXKKDI-W5LSJ2-YWK5SP-U7ZH2MQI',
      caption: 'xxx',
      firstName: 'x',
      lastName: 'y',
    },
    person: {
      firstName: 'John',
      lastName: 'Smith',
    },
    disease: 'CORONAVIRUS',
    diseaseDetails: null,
    lastContactDate: null,
    contactProximity: null,
    contactClassification: 'UNCONFIRMED',
    contactStatus: 'ACTIVE',
    completeness: null,
    followUpStatus: 'FOLLOW_UP',
    followUpUntil: 1620943200000,
    symptomJournalStatus: 'UNREGISTERED',
    vaccination: null,
    districtUuid: null,
    contactOfficerUuid: null,
    reportDateTime: 1619787324690,
    contactCategory: null,
    caseClassification: 'SUSPECT',
    visitCount: 0,
    externalID: null,
    externalToken: null,
    internalToken: null,
    regionName: null,
    districtName: null,
    caseRegionName: null,
    caseDistrictName: null,
    inJurisdiction: true,
    caseInJurisdiction: true,
  });
});

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

// app.use('/sormas-rest/tasks/indexList', (req, res) => {
//
//   let total = 1000;
//
//   const arrayTmp = [];
//   let offset = 0;
//
//   if (req.body.sortProperties && !req.body.sortProperties[0].ascending) {
//     offset = 1000;
//   }
//
//   if (req.body.filter) {
//     total = 50;
//   }
//
//   for (var i = parseInt(req.query.offset) ; i < parseInt(req.query.offset) + parseInt(req.query.size); i++) {
//     arrayTmp.push({
//       "pseudonymized":false,
//       "uuid":"Q4URIL-TZKR6G-M6G6LG-KBNKSML4",
//       "taskContext":"CASE",
//       "caze":{
//         "uuid":"W7ORVE-ILNJF7-O7V2P2-V6XOSNQA",
//         "caption":"W7ORVE",
//         "firstName":"",
//         "lastName":""
//       },
//       "event":null,
//       "contact":null,
//       "region":"Region",
//       "district":"District",
//       "community":null,
//       "taskType":"CASE_INVESTIGATION",
//       "priority":"NORMAL",
//       "dueDate":1617959309689,
//       "suggestedStart":1617872909689,
//       "taskStatus":"PENDING",
//       "creatorUser":{
//         "uuid":null,
//         "caption":" ",
//         "firstName": "first name",
//         "lastName": "last name",
//         "shortCaption":" "
//       },
//       "creatorComment":null,
//       "assigneeUser":{
//         "uuid":null,
//         "caption":"  ()",
//         "firstName":null,
//         "lastName":null,
//         "shortCaption":" "
//       },
//       "assigneeReply":null,
//       "jurisdiction":{
//         "creatorUserUuid":null,
//         "assigneeUserUuid":null,
//         "caseJurisdiction":{
//           "reportingUserUuid":"UJEUQS-WZYRSD-THNKL5-HGQF2MWY",
//           "regionUuid":"XG5652-O6T5KY-46BC3H-OOZ2SDC4",
//           "districtUuid":"QEKECO-ST6YF3-ZSVWHN-VFLASBHM",
//           "communityUuid":null,
//           "healthFacilityUuid":"SORMAS-CONSTID-ISNONE-FACILITY",
//           "pointOfEntryUuid":null
//         },
//         "contactJurisdiction":null,
//         "eventJurisdiction":null
//       },
//       "contextReference":{
//         "uuid":"W7ORVE-ILNJF7-O7V2P2-V6XOSNQA",
//         "caption":"W7ORVE",
//         "firstName":"",
//         "lastName":""
//       }
//     });
//   }
//
//
//   res.status(200).send({
//     "elements": arrayTmp,
//     "pageNumber":0,
//     "size":8,
//     "totalElementCount": total,
//     "hasNext":true
//   });
// });
//
// app.use('/sormas-rest/cases/indexList', (req, res) => {
//
//   let total = 1000;
//
//   const arrayTmp = [];
//   let offset = 0;
//
//   if (req.body.sortProperties && !req.body.sortProperties[0].ascending) {
//     offset = 1000;
//   }
//
//   if (req.body.filter) {
//     total = 50;
//   }
//
//   for (var i = parseInt(req.query.offset) ; i < parseInt(req.query.offset) + parseInt(req.query.size); i++) {
//     arrayTmp.push({
//       "pseudonymized":false,
//       "id":120,
//       // "uuid":"TJLH2U-7S5DFE-MHJ764-4OEZKMJ4" + "__" + parseInt(req.query.page*req.query.size + i),
//       "uuid":"TJLH2U-7S5DFE-MHJ764-4OEZKMJ4" + "__" + parseInt(parseInt(offset) - parseInt(i)),
//       "epidNumber":"DEF-REG-DIS-21-001",
//       "externalID":null,
//       "externalToken":null,
//       "personFirstName":"Aisha Ayana",
//       "personLastName":"Chipo-Chipo",
//       "disease":"CORONAVIRUS",
//       "diseaseVariant":{
//         "uuid":null,
//         "caption":null
//       },
//       "diseaseDetails":null,
//       "caseClassification":"PROBABLE",
//       "investigationStatus":"DISCARDED",
//       "presentCondition":"ALIVE",
//       "reportDate":1610865900000,
//       "creationDate":1614335617159,
//       "districtName":"Default District",
//       "healthFacilityName":"Default Facility",
//       "pointOfEntryName":"",
//       "surveillanceOfficerUuid":"SNS6XV-XLUHRA-Y3ETEG-KCUMKAGA",
//       "outcome":"RECOVERED",
//       "sex":"FEMALE",
//       "ageAndBirthDate":{
//         "birthdateDD":null,
//         "birthdateMM":null,
//         "birthdateYYYY":null,
//         "age":null,
//         "ageType":"DAYS"
//       },
//       "completeness":0.55,
//       "quarantineTo":null,
//       "followUpStatus":"LOST",
//       "followUpUntil":1612044000000,
//       "symptomJournalStatus":null,
//       "visitCount":0,
//       "jurisdiction":{
//         "reportingUserUuid":"QWW5JU-5ZIZSB-6YWYNM-GGLGSM2E",
//         "regionUuid":"WHPXQD-UREF24-26QVJC-4EFXKBWA",
//         "districtUuid":"T3OAB7-C2K62N-JPQL2G-5CWFSFJU",
//         "communityUuid":"TVCEZ3-OJWUUF-34DGDV-TMFZ2BOM",
//         "healthFacilityUuid":"QFMYC6-U27ZBE-VEK7G3-7D5XKLWA",
//         "pointOfEntryUuid":null
//       },
//       "regionUuid":"WHPXQD-UREF24-26QVJC-4EFXKBWA",
//       "districtUuid":"T3OAB7-C2K62N-JPQL2G-5CWFSFJU"
//     });
//   }
//
//
//   res.status(200).send({
//     "elements": arrayTmp,
//     "pageNumber":0,
//     "size":8,
//     "totalElementCount": total,
//     "hasNext":true
//   });
// });
//
// app.use('/sormas-rest/clinicalvisits/indexList', (req, res) => {
//   let total = 12;
//   const temperatures = [36.4, 36.8, 37.1, 37.2, 37.3, 37.8, 38.2, 387, 39.4];
//   const heartRate = [62, 64, 65, 68, 72, 77, 86, 92];

//   const arrayTmp = [];
//   let offset = 0;

//   if (req.body.sortProperties && !req.body.sortProperties[0].ascending) {
//     offset = 12;
//   }

//   if (req.body.filter) {
//     total = 12;
//   }

//   for (
//     var i = parseInt(req.query.offset) || 0;
//     i < (parseInt(req.query.offset) || 0) + (parseInt(req.query.size) || total);
//     i++
//   ) {
//     arrayTmp.push({
//       creationDate: new Date('05/02/2021'),
//       uuid: 'MDFSK-ERHET-AGWHF-MGRJD',
//       symptoms: {
//         uuid: 'CMFJD-UMNGF-ASGSH-VMJRY',
//         temperature: temperatures[Math.floor(Math.random() * temperatures.length)],
//         temperatureSource: 'ORAL',
//         heartRate: heartRate[Math.floor(Math.random() * heartRate.length)],
//         bloodPressureSystolic: '120/40',
//       },
//       visitDateTime: new Date('05/02/2021'),
//       visitingPerson: 'John Adam',
//       visitRemarks: 'Lorem ipsum dolor sit amet',
//     });
//   }

//   res.status(200).send({
//     elements: arrayTmp,
//     pageNumber: 0,
//     size: 8,
//     totalElementCount: 22,
//     hasNext: true,
//   });
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
