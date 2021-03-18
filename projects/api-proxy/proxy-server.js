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

app.use('/sormas-rest/cases/query', (req, res) => {
  res.status(200).send([
    {
      "creationDate":1614335623297,
      "changeDate":1614773385829,
      "uuid":"W5GUPC-LBYRTF-XM2B6S-VEZXSJJU",
      "pseudonymized":false,
      "disease":"CORONAVIRUS",
      "person":{
        "uuid":"XTUE2E-LBVCWA-FMROA2-AP5RCGKY",
        "caption":"Aisha Zari OKAR-BAAKO",
        "firstName":"Aisha Zari",
        "lastName":"Okar-Baako"
      },
      "epidNumber":"DEF-REG-DIS-21-016",
      "reportDate":1611406260000,
      "nationalLevelDate":1611826020000,
      "districtLevelDate":1611624780000,
      "caseClassification":"SUSPECT",
      "classificationUser":{
        "uuid":"SNS6XV-XLUHRA-Y3ETEG-KCUMKAGA",
        "caption":"Surveillance OFFICER - Surveillance Officer",
        "firstName":"Surveillance",
        "lastName":"Officer"
      },
      "classificationDate":1614773385270,
      "clinicalConfirmation":"UNKNOWN",
      "epidemiologicalConfirmation":"YES",
      "investigationStatus":"PENDING",
      "outcome":"RECOVERED",
      "outcomeDate":1611606480000,
      "sequelae":"YES",
      "region":{
        "uuid":"WHPXQD-UREF24-26QVJC-4EFXKBWA",
        "caption":"Default Region",
        "externalId":null
      },
      "district":{
        "uuid":"T3OAB7-C2K62N-JPQL2G-5CWFSFJU",
        "caption":"Default District",
        "externalId":null
      },
      "community":{
        "uuid":"TVCEZ3-OJWUUF-34DGDV-TMFZ2BOM",
        "caption":"Default Community",
        "externalId":null
      },
      "facilityType":"LABORATORY",
      "healthFacility":{
        "uuid":"TEZCPG-4UNIMV-ZSP3UG-BLLPCF7Y",
        "caption":"Default Laboratory",
        "externalId":null
      },
      "pregnant":"YES",
      "firstVaccinationDate":1611566220000,
      "lastVaccinationDate":1611787260000,
      "vaccineName":"UNKNOWN",
      "surveillanceOfficer":{
        "uuid":"SNS6XV-XLUHRA-Y3ETEG-KCUMKAGA",
        "caption":"Surveillance OFFICER - Surveillance Officer",
        "firstName":"Surveillance",
        "lastName":"Officer"
      },
      "hospitalization":{
        "creationDate":1614335623322,
        "changeDate":1614773385556,
        "uuid":"SQYJNS-O3ETSK-ABOGKH-2W2YSDGM",
        "previousHospitalizations":[
        ]
      },
      "symptoms":{
        "creationDate":1614335623344,
        "changeDate":1614335623344,
        "uuid":"RSBRMA-UZHMXX-ZVMARQ-7WXLSCM4",
        "pseudonymized":false,
        "symptomatic":false
      },
      "epiData":{
        "creationDate":1614335623319,
        "changeDate":1614773385558,
        "uuid":"QQROVW-QXK7HS-PVLEC3-YCTBSA4M",
        "pseudonymized":false,
        "exposures":[
        ],
        "activitiesAsCase":[
        ]
      },
      "therapy":{
        "creationDate":1614335623382,
        "changeDate":1614335623382,
        "uuid":"XCD35E-V3LUFV-NDMH3D-VYH5CJNA"
      },
      "clinicalCourse":{
        "creationDate":1614335623313,
        "changeDate":1614335623313,
        "uuid":"X3BUDU-WJQZEZ-EV7C72-DULTCPVU",
        "healthConditions":{
          "creationDate":1614335623309,
          "changeDate":1614335623309,
          "uuid":"QIPERX-NEQPWZ-HF43UK-S5Z2SC4I",
          "pseudonymized":false
        }
      },
      "maternalHistory":{
        "creationDate":1614335623325,
        "changeDate":1614335623325,
        "uuid":"VSGZG6-AO67I7-7AVM77-UBIT2P6A",
        "pseudonymized":false
      },
      "portHealthInfo":{
        "creationDate":1614335623336,
        "changeDate":1614335623336,
        "uuid":"SX3KCU-DAUWX2-45BBBI-KQLFCNWE",
        "arrivalDateTime":1611825540000,
        "freeSeating":"YES",
        "conveyanceType":"OTHER"
      },
      "caseOrigin":"IN_COUNTRY",
      "additionalDetails":"Case generated using DevMode on 2021-02-26",
      "sharedToCountry":false,
      "nosocomialOutbreak":false,
      "quarantineOrderedVerbally":false,
      "quarantineOrderedOfficialDocument":false,
      "quarantineExtended":false,
      "quarantineReduced":false,
      "quarantineOfficialOrderSent":false,
      "trimester":"FIRST",
      "followUpStatus":"FOLLOW_UP",
      "followUpUntil":1612562400000,
      "overwriteFollowUpUntil":false,
      "ownershipHandedOver":false,
      "notACaseReasonNegativeTest":false,
      "notACaseReasonPhysicianInformation":false,
      "notACaseReasonDifferentPathogen":false,
      "notACaseReasonOther":false
    }
  ]);
});

app.use('/sormas-rest/cases', (req, res) => {
  res.status(200).send({
    "elements":[
      {
        "pseudonymized":false,
        "id":120,
        "uuid":"TJLH2U-7S5DFE-MHJ764-4OEZKMJ4",
        "epidNumber":"DEF-REG-DIS-21-001",
        "externalID":null,
        "externalToken":null,
        "personFirstName":"Aisha Ayana",
        "personLastName":"Chipo-Chipo",
        "disease":"CORONAVIRUS",
        "diseaseVariant":{
          "uuid":null,
          "caption":null
        },
        "diseaseDetails":null,
        "caseClassification":"PROBABLE",
        "investigationStatus":"DISCARDED",
        "presentCondition":"ALIVE",
        "reportDate":1610865900000,
        "creationDate":1614335617159,
        "districtName":"Default District",
        "healthFacilityName":"Default Facility",
        "pointOfEntryName":"",
        "surveillanceOfficerUuid":"SNS6XV-XLUHRA-Y3ETEG-KCUMKAGA",
        "outcome":"RECOVERED",
        "sex":"FEMALE",
        "ageAndBirthDate":{
          "birthdateDD":null,
          "birthdateMM":null,
          "birthdateYYYY":null,
          "age":null,
          "ageType":"DAYS"
        },
        "completeness":0.55,
        "quarantineTo":null,
        "followUpStatus":"LOST",
        "followUpUntil":1612044000000,
        "symptomJournalStatus":null,
        "visitCount":0,
        "jurisdiction":{
          "reportingUserUuid":"QWW5JU-5ZIZSB-6YWYNM-GGLGSM2E",
          "regionUuid":"WHPXQD-UREF24-26QVJC-4EFXKBWA",
          "districtUuid":"T3OAB7-C2K62N-JPQL2G-5CWFSFJU",
          "communityUuid":"TVCEZ3-OJWUUF-34DGDV-TMFZ2BOM",
          "healthFacilityUuid":"QFMYC6-U27ZBE-VEK7G3-7D5XKLWA",
          "pointOfEntryUuid":null
        },
        "regionUuid":"WHPXQD-UREF24-26QVJC-4EFXKBWA",
        "districtUuid":"T3OAB7-C2K62N-JPQL2G-5CWFSFJU"
      },
      {
        "pseudonymized":false,
        "id":131,
        "uuid":"V3YPBY-GS45PQ-EDIMDU-NGYLCKXI",
        "epidNumber":"DEF-REG-DIS-21-002",
        "externalID":null,
        "externalToken":null,
        "personFirstName":"Shaniqua Shaka",
        "personLastName":"Akua-Ekua",
        "disease":"CORONAVIRUS",
        "diseaseVariant":{
          "uuid":null,
          "caption":null
        },
        "diseaseDetails":null,
        "caseClassification":"NO_CASE",
        "investigationStatus":"DISCARDED",
        "presentCondition":"ALIVE",
        "reportDate":1610492520000,
        "creationDate":1614335618073,
        "districtName":"Default District",
        "healthFacilityName":"Default Facility",
        "pointOfEntryName":"",
        "surveillanceOfficerUuid":"SNS6XV-XLUHRA-Y3ETEG-KCUMKAGA",
        "outcome":"NO_OUTCOME",
        "sex":"FEMALE",
        "ageAndBirthDate":{
          "birthdateDD":null,
          "birthdateMM":null,
          "birthdateYYYY":null,
          "age":null,
          "ageType":null
        },
        "completeness":0.55,
        "quarantineTo":1610899620000,
        "followUpStatus":"FOLLOW_UP",
        "followUpUntil":1611698400000,
        "symptomJournalStatus":null,
        "visitCount":0,
        "jurisdiction":{
          "reportingUserUuid":"QWW5JU-5ZIZSB-6YWYNM-GGLGSM2E",
          "regionUuid":"WHPXQD-UREF24-26QVJC-4EFXKBWA",
          "districtUuid":"T3OAB7-C2K62N-JPQL2G-5CWFSFJU",
          "communityUuid":"TVCEZ3-OJWUUF-34DGDV-TMFZ2BOM",
          "healthFacilityUuid":"QFMYC6-U27ZBE-VEK7G3-7D5XKLWA",
          "pointOfEntryUuid":null
        },
        "regionUuid":"WHPXQD-UREF24-26QVJC-4EFXKBWA",
        "districtUuid":"T3OAB7-C2K62N-JPQL2G-5CWFSFJU"
      },
      {
        "pseudonymized":false,
        "id":142,
        "uuid":"WG3MFW-5OQJ3N-7YGEAW-C5OYCN5U",
        "epidNumber":"DEF-REG-DIS-21-003",
        "externalID":null,
        "externalToken":null,
        "personFirstName":"Shaniqua Aisha",
        "personLastName":"Babak-Chuks",
        "disease":"CORONAVIRUS",
        "diseaseVariant":{
          "uuid":null,
          "caption":null
        },
        "diseaseDetails":null,
        "caseClassification":"CONFIRMED_UNKNOWN_SYMPTOMS",
        "investigationStatus":"PENDING",
        "presentCondition":"ALIVE",
        "reportDate":1610630820000,
        "creationDate":1614335618458,
        "districtName":"Default District",
        "healthFacilityName":"Default Laboratory",
        "pointOfEntryName":"",
        "surveillanceOfficerUuid":"SNS6XV-XLUHRA-Y3ETEG-KCUMKAGA",
        "outcome":"NO_OUTCOME",
        "sex":"FEMALE",
        "ageAndBirthDate":{
          "birthdateDD":null,
          "birthdateMM":null,
          "birthdateYYYY":null,
          "age":null,
          "ageType":null
        },
        "completeness":0.25,
        "quarantineTo":null,
        "followUpStatus":"FOLLOW_UP",
        "followUpUntil":1611784800000,
        "symptomJournalStatus":null,
        "visitCount":0,
        "jurisdiction":{
          "reportingUserUuid":"QWW5JU-5ZIZSB-6YWYNM-GGLGSM2E",
          "regionUuid":"WHPXQD-UREF24-26QVJC-4EFXKBWA",
          "districtUuid":"T3OAB7-C2K62N-JPQL2G-5CWFSFJU",
          "communityUuid":"TVCEZ3-OJWUUF-34DGDV-TMFZ2BOM",
          "healthFacilityUuid":"TEZCPG-4UNIMV-ZSP3UG-BLLPCF7Y",
          "pointOfEntryUuid":null
        },
        "regionUuid":"WHPXQD-UREF24-26QVJC-4EFXKBWA",
        "districtUuid":"T3OAB7-C2K62N-JPQL2G-5CWFSFJU"
      },
      {
        "pseudonymized":false,
        "id":154,
        "uuid":"TKGYVU-GPUXUT-N66QPP-VVC2KCR4",
        "epidNumber":"DEF-REG-DIS-21-004",
        "externalID":null,
        "externalToken":null,
        "personFirstName":"Iminathi Shaniqua",
        "personLastName":"Abioye-Akua",
        "disease":"CORONAVIRUS",
        "diseaseVariant":{
          "uuid":null,
          "caption":null
        },
        "diseaseDetails":null,
        "caseClassification":"NOT_CLASSIFIED",
        "investigationStatus":"DONE",
        "presentCondition":"DEAD",
        "reportDate":1611052320000,
        "creationDate":1614335618897,
        "districtName":"Default District",
        "healthFacilityName":"Default Facility",
        "pointOfEntryName":"",
        "surveillanceOfficerUuid":"SNS6XV-XLUHRA-Y3ETEG-KCUMKAGA",
        "outcome":"DECEASED",
        "sex":"FEMALE",
        "ageAndBirthDate":{
          "birthdateDD":null,
          "birthdateMM":null,
          "birthdateYYYY":null,
          "age":null,
          "ageType":"DAYS"
        },
        "completeness":0.3,
        "quarantineTo":null,
        "followUpStatus":"FOLLOW_UP",
        "followUpUntil":1612216800000,
        "symptomJournalStatus":null,
        "visitCount":0,
        "jurisdiction":{
          "reportingUserUuid":"QWW5JU-5ZIZSB-6YWYNM-GGLGSM2E",
          "regionUuid":"WHPXQD-UREF24-26QVJC-4EFXKBWA",
          "districtUuid":"T3OAB7-C2K62N-JPQL2G-5CWFSFJU",
          "communityUuid":"TVCEZ3-OJWUUF-34DGDV-TMFZ2BOM",
          "healthFacilityUuid":"QFMYC6-U27ZBE-VEK7G3-7D5XKLWA",
          "pointOfEntryUuid":null
        },
        "regionUuid":"WHPXQD-UREF24-26QVJC-4EFXKBWA",
        "districtUuid":"T3OAB7-C2K62N-JPQL2G-5CWFSFJU"
      },
      {
        "pseudonymized":false,
        "id":165,
        "uuid":"T6UPGT-M5ECFG-7Y3NK7-LAUPSBVU",
        "epidNumber":"DEF-REG-DIS-21-005",
        "externalID":null,
        "externalToken":null,
        "personFirstName":"Shaka Jayla",
        "personLastName":"Babak-Akua",
        "disease":"CORONAVIRUS",
        "diseaseVariant":{
          "uuid":null,
          "caption":null
        },
        "diseaseDetails":null,
        "caseClassification":"SUSPECT",
        "investigationStatus":"PENDING",
        "presentCondition":"ALIVE",
        "reportDate":1610848200000,
        "creationDate":1614335619292,
        "districtName":"Default District",
        "healthFacilityName":"Default Facility",
        "pointOfEntryName":"",
        "surveillanceOfficerUuid":"SNS6XV-XLUHRA-Y3ETEG-KCUMKAGA",
        "outcome":"RECOVERED",
        "sex":"FEMALE",
        "ageAndBirthDate":{
          "birthdateDD":null,
          "birthdateMM":null,
          "birthdateYYYY":null,
          "age":null,
          "ageType":"DAYS"
        },
        "completeness":0.40000004,
        "quarantineTo":null,
        "followUpStatus":"FOLLOW_UP",
        "followUpUntil":1612044000000,
        "symptomJournalStatus":null,
        "visitCount":0,
        "jurisdiction":{
          "reportingUserUuid":"QWW5JU-5ZIZSB-6YWYNM-GGLGSM2E",
          "regionUuid":"WHPXQD-UREF24-26QVJC-4EFXKBWA",
          "districtUuid":"T3OAB7-C2K62N-JPQL2G-5CWFSFJU",
          "communityUuid":"TVCEZ3-OJWUUF-34DGDV-TMFZ2BOM",
          "healthFacilityUuid":"QFMYC6-U27ZBE-VEK7G3-7D5XKLWA",
          "pointOfEntryUuid":null
        },
        "regionUuid":"WHPXQD-UREF24-26QVJC-4EFXKBWA",
        "districtUuid":"T3OAB7-C2K62N-JPQL2G-5CWFSFJU"
      },
      {
        "pseudonymized":false,
        "id":177,
        "uuid":"WCKWZE-CZGQIY-75XVE2-QZMUCNVE",
        "epidNumber":"DEF-REG-DIS-21-006",
        "externalID":null,
        "externalToken":null,
        "personFirstName":"Thato Omar",
        "personLastName":"Adisa-Katlego",
        "disease":"CORONAVIRUS",
        "diseaseVariant":{
          "uuid":null,
          "caption":null
        },
        "diseaseDetails":null,
        "caseClassification":"NO_CASE",
        "investigationStatus":"PENDING",
        "presentCondition":"ALIVE",
        "reportDate":1610700120000,
        "creationDate":1614335619650,
        "districtName":"Default District",
        "healthFacilityName":"Default Facility",
        "pointOfEntryName":"",
        "surveillanceOfficerUuid":"SNS6XV-XLUHRA-Y3ETEG-KCUMKAGA",
        "outcome":"RECOVERED",
        "sex":"MALE",
        "ageAndBirthDate":{
          "birthdateDD":null,
          "birthdateMM":null,
          "birthdateYYYY":null,
          "age":null,
          "ageType":null
        },
        "completeness":0.40000004,
        "quarantineTo":null,
        "followUpStatus":"FOLLOW_UP",
        "followUpUntil":1611871200000,
        "symptomJournalStatus":null,
        "visitCount":0,
        "jurisdiction":{
          "reportingUserUuid":"QWW5JU-5ZIZSB-6YWYNM-GGLGSM2E",
          "regionUuid":"WHPXQD-UREF24-26QVJC-4EFXKBWA",
          "districtUuid":"T3OAB7-C2K62N-JPQL2G-5CWFSFJU",
          "communityUuid":"TVCEZ3-OJWUUF-34DGDV-TMFZ2BOM",
          "healthFacilityUuid":"QFMYC6-U27ZBE-VEK7G3-7D5XKLWA",
          "pointOfEntryUuid":null
        },
        "regionUuid":"WHPXQD-UREF24-26QVJC-4EFXKBWA",
        "districtUuid":"T3OAB7-C2K62N-JPQL2G-5CWFSFJU"
      },
      {
        "pseudonymized":false,
        "id":189,
        "uuid":"XUE76B-57FIEX-XDBVYH-OLWXCGRI",
        "epidNumber":"DEF-REG-DIS-21-007",
        "externalID":null,
        "externalToken":null,
        "personFirstName":"Dion Darius",
        "personLastName":"Ajanlekoko-Apeloko",
        "disease":"CORONAVIRUS",
        "diseaseVariant":{
          "uuid":null,
          "caption":null
        },
        "diseaseDetails":null,
        "caseClassification":"NOT_CLASSIFIED",
        "investigationStatus":"PENDING",
        "presentCondition":null,
        "reportDate":1610735520000,
        "creationDate":1614335619963,
        "districtName":"Default District",
        "healthFacilityName":"Default Facility",
        "pointOfEntryName":"",
        "surveillanceOfficerUuid":"SNS6XV-XLUHRA-Y3ETEG-KCUMKAGA",
        "outcome":"UNKNOWN",
        "sex":"MALE",
        "ageAndBirthDate":{
          "birthdateDD":null,
          "birthdateMM":null,
          "birthdateYYYY":null,
          "age":null,
          "ageType":null
        },
        "completeness":0.3,
        "quarantineTo":null,
        "followUpStatus":"CANCELED",
        "followUpUntil":1611871200000,
        "symptomJournalStatus":null,
        "visitCount":0,
        "jurisdiction":{
          "reportingUserUuid":"QWW5JU-5ZIZSB-6YWYNM-GGLGSM2E",
          "regionUuid":"WHPXQD-UREF24-26QVJC-4EFXKBWA",
          "districtUuid":"T3OAB7-C2K62N-JPQL2G-5CWFSFJU",
          "communityUuid":"TVCEZ3-OJWUUF-34DGDV-TMFZ2BOM",
          "healthFacilityUuid":"QFMYC6-U27ZBE-VEK7G3-7D5XKLWA",
          "pointOfEntryUuid":null
        },
        "regionUuid":"WHPXQD-UREF24-26QVJC-4EFXKBWA",
        "districtUuid":"T3OAB7-C2K62N-JPQL2G-5CWFSFJU"
      },
      {
        "pseudonymized":false,
        "id":201,
        "uuid":"UHEV7A-YJUMQL-SM63R7-VKKYCL34",
        "epidNumber":"DEF-REG-DIS-21-008",
        "externalID":null,
        "externalToken":null,
        "personFirstName":"Demarco Malik",
        "personLastName":"Adisa-Omiata",
        "disease":"CORONAVIRUS",
        "diseaseVariant":{
          "uuid":null,
          "caption":null
        },
        "diseaseDetails":null,
        "caseClassification":"CONFIRMED_UNKNOWN_SYMPTOMS",
        "investigationStatus":"DONE",
        "presentCondition":"ALIVE",
        "reportDate":1610925840000,
        "creationDate":1614335620342,
        "districtName":"Default District",
        "healthFacilityName":"Default Laboratory",
        "pointOfEntryName":"",
        "surveillanceOfficerUuid":"SNS6XV-XLUHRA-Y3ETEG-KCUMKAGA",
        "outcome":"RECOVERED",
        "sex":"MALE",
        "ageAndBirthDate":{
          "birthdateDD":null,
          "birthdateMM":null,
          "birthdateYYYY":null,
          "age":null,
          "ageType":"DAYS"
        },
        "completeness":0.6,
        "quarantineTo":null,
        "followUpStatus":"CANCELED",
        "followUpUntil":1612130400000,
        "symptomJournalStatus":null,
        "visitCount":0,
        "jurisdiction":{
          "reportingUserUuid":"QWW5JU-5ZIZSB-6YWYNM-GGLGSM2E",
          "regionUuid":"WHPXQD-UREF24-26QVJC-4EFXKBWA",
          "districtUuid":"T3OAB7-C2K62N-JPQL2G-5CWFSFJU",
          "communityUuid":"TVCEZ3-OJWUUF-34DGDV-TMFZ2BOM",
          "healthFacilityUuid":"TEZCPG-4UNIMV-ZSP3UG-BLLPCF7Y",
          "pointOfEntryUuid":null
        },
        "regionUuid":"WHPXQD-UREF24-26QVJC-4EFXKBWA",
        "districtUuid":"T3OAB7-C2K62N-JPQL2G-5CWFSFJU"
      }
    ],
    "pageNumber":0,
    "size":8,
    "totalNoElements":30,
    "hasNext":true
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
