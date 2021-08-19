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

app.use('/sormas-rest/contacts/T79TR5-YVTX26-CHL6D7-Z2UPKIHI', (req, res) => {
  res.status(200).send({
    uuid: 'T79TR5-YVTX26-CHL6D7-Z2UPKIHI',
    involvementDescription: 'Description etc',
    resultingCase: {
      uuid: 'WXKKDI-W5LSJ2-YWK5SP-U7ZH2MQI',
    },
    event: {
      uuid: 'TFI3ZL-VSSLDP-QUNMND-VOYFSL7Y',
    },
    person: {
      creationDate: 1618911539416,
      changeDate: 1628470801246,
      uuid: 'Q7D3RP-YVTX26-CHL6D7-Z2UPKIHI',
      pseudonymized: false,
      firstName: 'Smoke3',
      lastName: 'Test3',
      sex: 'OTHER',
      birthdateDD: 23,
      birthdateMM: 4,
      birthdateYYYY: 1992,
      approximateAge: 29,
      approximateAgeType: 'YEARS',
      approximateAgeReferenceDate: 1628499505352,
      presentCondition: 'BURIED',
      causeOfDeath: 'EPIDEMIC_DISEASE',
      deathPlaceType: 'OTHER',
      deathPlaceDescription: 'Brandenburg, LK Uckermark, Cluj-Napoca, Sarmisegetuza21',
      burialPlaceDescription: 'Brandenburg, LK Uckermark, Cluj-Napoca, Sarmisegetuza21',
      address: {
        creationDate: 1618911539416,
        changeDate: 1625850320482,
        uuid: 'U532IX-JSP466-ITALHU-QQD7KJCE',
        pseudonymized: false,
        continent: {
          uuid: 'VVGV4W-W2QPUH-LJRCKV-AMP32HIQ',
          caption: 'Europe',
          externalId: '31000003',
        },
        subcontinent: {
          uuid: 'XGHY5X-E3TD5L-JKW3BL-2W6OKFO4',
          caption: 'Western Europe',
          externalId: '41000030',
        },
        country: {
          uuid: 'V5IHVQ-S64X5I-LI2D3G-MBH4SIUA',
          caption: 'Deutschland',
          externalId: null,
          isoCode: 'DEU',
        },
        region: {
          uuid: 'UJXVK5-RWEPBX-CT3WC2-3SB42MDQ',
          caption: 'Brandenburg',
          externalId: '13000012',
        },
        district: {
          uuid: 'TE3JVL-3HLWJ5-VRLX5X-ZGEJSCD4',
          caption: 'LK Uckermark',
          externalId: '11012073',
        },
        city: 'Cluj-Napoca',
        areaType: 'URBAN',
        postalCode: '400592',
        street: 'Sarmisegetuza',
        houseNumber: '21',
        facilityType: 'OTHER_RESIDENCE',
      },
      passportNumber: '',
      nationalHealthId: '',
      addresses: [
        {
          creationDate: 1621500008479,
          changeDate: 1621500008479,
          uuid: 'WR74MZ-DJJ4T3-6F6OXN-QOTNKCAQ',
          pseudonymized: false,
          continent: {
            uuid: 'VVGV4W-W2QPUH-LJRCKV-AMP32HIQ',
            caption: 'Europe',
            externalId: '31000003',
          },
          subcontinent: {
            uuid: 'XH2X4U-FAZUGW-BZHQ5I-ZXSBSOGM',
            caption: 'Southeast Europe',
            externalId: '41000025',
          },
          country: {
            uuid: 'RS5GQS-UNX6F5-62NCUK-A4ZLSF5M',
            caption: 'Rumänien',
            externalId: null,
            isoCode: 'ROU',
          },
          city: 'Cluj-Napoca',
          areaType: 'URBAN',
          postalCode: '400593',
          street: 'Dunarii',
          houseNumber: '148',
          addressType: 'PLACE_OF_WORK',
          facilityType: 'BUSINESS',
          contactPersonFirstName: 'Sorina',
          contactPersonLastName: 'Puiac',
          contactPersonPhone: '0741222333',
        },
        {
          creationDate: 1623743487478,
          changeDate: 1623743487478,
          uuid: 'V6DAA7-XZ6JUI-CO6T7U-L66ECEEI',
          pseudonymized: false,
          continent: {
            uuid: 'VVGV4W-W2QPUH-LJRCKV-AMP32HIQ',
            caption: 'Europe',
            externalId: '31000003',
          },
          subcontinent: {
            uuid: 'XGHY5X-E3TD5L-JKW3BL-2W6OKFO4',
            caption: 'Western Europe',
            externalId: '41000030',
          },
          country: {
            uuid: 'V5IHVQ-S64X5I-LI2D3G-MBH4SIUA',
            caption: 'Deutschland',
            externalId: null,
            isoCode: 'DEU',
          },
          region: {
            uuid: 'S63EGL-SP5NQZ-EPFZHQ-ZQ4XCDTE',
            caption: 'Bremen',
            externalId: '13000004',
          },
          district: {
            uuid: 'X6SFH2-S6VFPQ-X6RWNM-POBJKCHU',
            caption: 'SK Bremen',
            externalId: '11004011',
          },
          city: 'Bremen',
          areaType: 'URBAN',
          postalCode: '564554',
          street: 'Oslebshauser Heerstraße',
          houseNumber: '15',
          addressType: 'OTHER_ADDRESS',
          addressTypeDetails: 'description',
          facilityType: 'BAR',
          facility: {
            uuid: 'SORMAS-CONSTID-OTHERS-FACILITY',
            caption: 'Andere Einrichtung',
            externalId: null,
          },
          facilityDetails: 'Facility description',
        },
      ],
      personContactDetails: [
        {
          creationDate: 1626162361210,
          changeDate: 1626173262109,
          uuid: 'SSXNEN-HVVBEX-RHO7S7-V3RBSOKA',
          pseudonymized: false,
          person: {
            uuid: 'Q7D3RP-YVTX26-CHL6D7-Z2UPKIHI',
            caption: 'Smoke3 TEST3',
            firstName: 'Smoke3',
            lastName: 'Test3',
          },
          primaryContact: true,
          personContactDetailType: 'PHONE',
          phoneNumberType: 'MOBILE',
          contactInformation: '+40744373681',
          thirdParty: false,
        },
        {
          creationDate: 1618911592735,
          changeDate: 1626164060697,
          uuid: 'RAEHBD-KKQDVD-3LVR2K-HF5GSCJQ',
          pseudonymized: false,
          person: {
            uuid: 'Q7D3RP-YVTX26-CHL6D7-Z2UPKIHI',
            caption: 'Smoke3 TEST3',
            firstName: 'Smoke3',
            lastName: 'Test3',
          },
          primaryContact: false,
          personContactDetailType: 'EMAIL',
          contactInformation: 'yonar19072@zcai77.com',
          thirdParty: true,
          thirdPartyRole: 'brother',
          thirdPartyName: 'Smokey Yonar',
        },
        {
          creationDate: 1626162361212,
          changeDate: 1626162361212,
          uuid: 'TPV37I-GGICQH-2YVZGW-MRFM2IH4',
          pseudonymized: false,
          person: {
            uuid: 'Q7D3RP-YVTX26-CHL6D7-Z2UPKIHI',
            caption: 'Smoke3 TEST3',
            firstName: 'Smoke3',
            lastName: 'Test3',
          },
          primaryContact: false,
          personContactDetailType: 'OTHER',
          details: 'smoke signals',
          contactInformation: 'three puffs',
          thirdParty: false,
        },
      ],
      hasCovidApp: false,
      covidCodeDelivered: false,
      symptomJournalStatus: 'DELETED',
      additionalDetails: 'general comment',
      phone: '+40744373681',
      emailAddress: '',
    },
  });
});

app.use('/sormas-rest/eventparticipants/T79TR5-YVTX26-CHL6D7-Z2UPKIHI', (req, res) => {
  res.status(200).send({
    uuid: 'T79TR5-YVTX26-CHL6D7-Z2UPKIHI',
    involvementDescription: 'Description etc',
    resultingCase: {
      uuid: 'WXKKDI-W5LSJ2-YWK5SP-U7ZH2MQI',
    },
    event: {
      uuid: 'TFI3ZL-VSSLDP-QUNMND-VOYFSL7Y',
    },
    person: {
      creationDate: 1618911539416,
      changeDate: 1628470801246,
      uuid: 'Q7D3RP-YVTX26-CHL6D7-Z2UPKIHI',
      pseudonymized: false,
      firstName: 'Smoke3',
      lastName: 'Test3',
      sex: 'OTHER',
      birthdateDD: 23,
      birthdateMM: 4,
      birthdateYYYY: 1992,
      approximateAge: 29,
      approximateAgeType: 'YEARS',
      approximateAgeReferenceDate: 1628499505352,
      presentCondition: 'BURIED',
      causeOfDeath: 'EPIDEMIC_DISEASE',
      deathPlaceType: 'OTHER',
      deathPlaceDescription: 'Brandenburg, LK Uckermark, Cluj-Napoca, Sarmisegetuza21',
      burialPlaceDescription: 'Brandenburg, LK Uckermark, Cluj-Napoca, Sarmisegetuza21',
      address: {
        creationDate: 1618911539416,
        changeDate: 1625850320482,
        uuid: 'U532IX-JSP466-ITALHU-QQD7KJCE',
        pseudonymized: false,
        continent: {
          uuid: 'VVGV4W-W2QPUH-LJRCKV-AMP32HIQ',
          caption: 'Europe',
          externalId: '31000003',
        },
        subcontinent: {
          uuid: 'XGHY5X-E3TD5L-JKW3BL-2W6OKFO4',
          caption: 'Western Europe',
          externalId: '41000030',
        },
        country: {
          uuid: 'V5IHVQ-S64X5I-LI2D3G-MBH4SIUA',
          caption: 'Deutschland',
          externalId: null,
          isoCode: 'DEU',
        },
        region: {
          uuid: 'UJXVK5-RWEPBX-CT3WC2-3SB42MDQ',
          caption: 'Brandenburg',
          externalId: '13000012',
        },
        district: {
          uuid: 'TE3JVL-3HLWJ5-VRLX5X-ZGEJSCD4',
          caption: 'LK Uckermark',
          externalId: '11012073',
        },
        city: 'Cluj-Napoca',
        areaType: 'URBAN',
        postalCode: '400592',
        street: 'Sarmisegetuza',
        houseNumber: '21',
        facilityType: 'OTHER_RESIDENCE',
      },
      passportNumber: '',
      nationalHealthId: '',
      addresses: [
        {
          creationDate: 1621500008479,
          changeDate: 1621500008479,
          uuid: 'WR74MZ-DJJ4T3-6F6OXN-QOTNKCAQ',
          pseudonymized: false,
          continent: {
            uuid: 'VVGV4W-W2QPUH-LJRCKV-AMP32HIQ',
            caption: 'Europe',
            externalId: '31000003',
          },
          subcontinent: {
            uuid: 'XH2X4U-FAZUGW-BZHQ5I-ZXSBSOGM',
            caption: 'Southeast Europe',
            externalId: '41000025',
          },
          country: {
            uuid: 'RS5GQS-UNX6F5-62NCUK-A4ZLSF5M',
            caption: 'Rumänien',
            externalId: null,
            isoCode: 'ROU',
          },
          city: 'Cluj-Napoca',
          areaType: 'URBAN',
          postalCode: '400593',
          street: 'Dunarii',
          houseNumber: '148',
          addressType: 'PLACE_OF_WORK',
          facilityType: 'BUSINESS',
          contactPersonFirstName: 'Sorina',
          contactPersonLastName: 'Puiac',
          contactPersonPhone: '0741222333',
        },
        {
          creationDate: 1623743487478,
          changeDate: 1623743487478,
          uuid: 'V6DAA7-XZ6JUI-CO6T7U-L66ECEEI',
          pseudonymized: false,
          continent: {
            uuid: 'VVGV4W-W2QPUH-LJRCKV-AMP32HIQ',
            caption: 'Europe',
            externalId: '31000003',
          },
          subcontinent: {
            uuid: 'XGHY5X-E3TD5L-JKW3BL-2W6OKFO4',
            caption: 'Western Europe',
            externalId: '41000030',
          },
          country: {
            uuid: 'V5IHVQ-S64X5I-LI2D3G-MBH4SIUA',
            caption: 'Deutschland',
            externalId: null,
            isoCode: 'DEU',
          },
          region: {
            uuid: 'S63EGL-SP5NQZ-EPFZHQ-ZQ4XCDTE',
            caption: 'Bremen',
            externalId: '13000004',
          },
          district: {
            uuid: 'X6SFH2-S6VFPQ-X6RWNM-POBJKCHU',
            caption: 'SK Bremen',
            externalId: '11004011',
          },
          city: 'Bremen',
          areaType: 'URBAN',
          postalCode: '564554',
          street: 'Oslebshauser Heerstraße',
          houseNumber: '15',
          addressType: 'OTHER_ADDRESS',
          addressTypeDetails: 'description',
          facilityType: 'BAR',
          facility: {
            uuid: 'SORMAS-CONSTID-OTHERS-FACILITY',
            caption: 'Andere Einrichtung',
            externalId: null,
          },
          facilityDetails: 'Facility description',
        },
      ],
      personContactDetails: [
        {
          creationDate: 1626162361210,
          changeDate: 1626173262109,
          uuid: 'SSXNEN-HVVBEX-RHO7S7-V3RBSOKA',
          pseudonymized: false,
          person: {
            uuid: 'Q7D3RP-YVTX26-CHL6D7-Z2UPKIHI',
            caption: 'Smoke3 TEST3',
            firstName: 'Smoke3',
            lastName: 'Test3',
          },
          primaryContact: true,
          personContactDetailType: 'PHONE',
          phoneNumberType: 'MOBILE',
          contactInformation: '+40744373681',
          thirdParty: false,
        },
        {
          creationDate: 1618911592735,
          changeDate: 1626164060697,
          uuid: 'RAEHBD-KKQDVD-3LVR2K-HF5GSCJQ',
          pseudonymized: false,
          person: {
            uuid: 'Q7D3RP-YVTX26-CHL6D7-Z2UPKIHI',
            caption: 'Smoke3 TEST3',
            firstName: 'Smoke3',
            lastName: 'Test3',
          },
          primaryContact: false,
          personContactDetailType: 'EMAIL',
          contactInformation: 'yonar19072@zcai77.com',
          thirdParty: true,
          thirdPartyRole: 'brother',
          thirdPartyName: 'Smokey Yonar',
        },
        {
          creationDate: 1626162361212,
          changeDate: 1626162361212,
          uuid: 'TPV37I-GGICQH-2YVZGW-MRFM2IH4',
          pseudonymized: false,
          person: {
            uuid: 'Q7D3RP-YVTX26-CHL6D7-Z2UPKIHI',
            caption: 'Smoke3 TEST3',
            firstName: 'Smoke3',
            lastName: 'Test3',
          },
          primaryContact: false,
          personContactDetailType: 'OTHER',
          details: 'smoke signals',
          contactInformation: 'three puffs',
          thirdParty: false,
        },
      ],
      hasCovidApp: false,
      covidCodeDelivered: false,
      symptomJournalStatus: 'DELETED',
      additionalDetails: 'general comment',
      phone: '+40744373681',
      emailAddress: '',
    },
  });
});

app.use('/sormas-rest/cases/T79TR5-YVTX26-CHL6D7-Z2UPKIHI', (req, res) => {
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
    elements: arrayTmp,
    pageNumber: 0,
    size: 8,
    totalElementCount: total,
    hasNext: true,
  });
});

app.use('/sormas-rest/contacts/indexList', (req, res) => {
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
    elements: arrayTmp,
    pageNumber: 0,
    size: 8,
    totalElementCount: total,
    hasNext: true,
  });
});

app.use('/sormas-rest/visits/indexList', (req, res) => {
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
    elements: arrayTmp,
    pageNumber: 0,
    size: 8,
    totalElementCount: total,
    hasNext: true,
  });
});

app.use('/sormas-rest/events/indexList', (req, res) => {
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
    elements: arrayTmp,
    pageNumber: 0,
    size: 8,
    totalElementCount: total,
    hasNext: true,
  });
});

app.use('/sormas-rest/events/T79TR5-YVTX26-CHL6D7-Z2UPKIHI', (req, res) => {
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
    elements: arrayTmp,
    pageNumber: 0,
    size: 8,
    totalElementCount: total,
    hasNext: true,
  });
});

app.use('/sormas-rest/cases/indexList', (req, res) => {
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
    elements: arrayTmp,
    pageNumber: 0,
    size: 8,
    totalElementCount: total,
    hasNext: true,
  });
});

app.use('/sormas-rest/eventparticipants/indexList', (req, res) => {
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
    elements: arrayTmp,
    pageNumber: 0,
    size: 8,
    totalElementCount: total,
    hasNext: true,
  });
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
