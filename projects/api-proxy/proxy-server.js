const express = require('express');
const morgan = require('morgan');
var cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');
const { default: axios } = require('axios');
const { makeId } = require('./make-id');
var cookieParser = require('cookie-parser');

const app = express();
app.use(
  cors({
    origin: 'http://localhost:4200',
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

const PORT = 4201;
const HOST = 'localhost';
const API_SERVICE_URL = 'https://test-de1.sormas.netzlink.com/';

app.use(morgan('dev'));

const loggedUsers = [];

// TODO - routes as POST with express router
// todo - this is just for dev testing
app.use('/login', async (req, res) => {
  const { username = '', pw = '' } = req.body;

  try {
    // we just make an basic auth call to see if the credentials are valid
    const auth = Buffer.from(`${username}:${pw}`).toString('base64');
    const proxyQuery = await axios.post(`${API_SERVICE_URL}/sormas-rest/actions/query`, [''], {
      headers: {
        Authorization: `Basic ${auth}`,
      },
    });
    const data = await proxyQuery.data;
    if (data) {
      console.log(`Succesful login for user ${username}`);
      const serverIdentity = { username, cookie: makeId(16), cred: auth };
      loggedUsers.push(serverIdentity);

      console.log(loggedUsers);

      res
        .cookie('local-dev', serverIdentity.cookie, {
          maxAge: 900000,
          httpOnly: false,
          sameSite: false,
        })
        .status(200)
        .send({ userName: username, roles: ['admin', 'role-A'] }); // todo
    }
  } catch (err) {
    console.error(err);
    res.send(401);
  }
});

// todo - this is just for testing
app.use('/logout', (_, res) => {
  // todo - delete user stored in mem
  res.status(200).send({});
});

app.use('/check-session', (req, res) => {
  if (loggedUsers.length) {
    const cookie = req.cookies[`local-dev`];
    const auth = loggedUsers.find((x) => x.cookie === cookie);

    if (auth) {
      const username = auth.username;
      res.status(200).send({ userName: username, roles: ['admin', 'role-A'] }); // todo roles
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
      const auth = loggedUsers.find((x) => x.cookie === cookie)?.cred;

      if (auth) {
        req.headers['Authorization'] = `Basic ${auth}`;
        next();
      }
    } else {
      res.sendStatus(403);
    }
  }
});

app.use(
  '/sormas-rest',
  createProxyMiddleware({
    target: API_SERVICE_URL,
    changeOrigin: true,
    autoRewrite: true,
    followRedirects: true,
    logLevel: 'debug',
  })
);

app.listen(PORT, HOST, () => {
  console.log(`Starting Proxy at ${HOST}:${PORT}`);
});
