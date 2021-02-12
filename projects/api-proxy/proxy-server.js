const express = require('express');
const morgan = require('morgan');
var cors = require('cors');
const bodyParser = require('body-parser');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 4201;
const HOST = 'localhost';
const API_SERVICE_URL = 'https://test-de1.sormas.netzlink.com/';

app.use(morgan('dev'));

// todo - this is just for testing
app.use('/login', (req, res) => {
  const { username = '', pw = '' } = req.body;

  if (username === 'sormas-dev' && pw === 'sormas-dev') {
    res.status(200).send({});
  } else {
    res.send(401);
  }
});

// todo - this is just for testing
app.use('/logout', (_, res) => {
  res.status(200).send({});
});

app.use('', (req, res, next) => {
  if (req.headers.authorization) {
    next();
  } else {
    res.sendStatus(403);
  }
});

app.use(
  '/sormas-rest',
  createProxyMiddleware({
    target: API_SERVICE_URL,
    changeOrigin: true,
    autoRewrite: true,
    followRedirects: true,
    logLevel: 'silent',
  })
);

app.listen(PORT, HOST, () => {
  console.log(`Starting Proxy at ${HOST}:${PORT}`);
});
