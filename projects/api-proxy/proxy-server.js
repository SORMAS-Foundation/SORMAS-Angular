const express = require('express');
const morgan = require('morgan');
var cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
app.use(cors());

const PORT = 4201;
const HOST = 'localhost';
const API_SERVICE_URL = 'https://test-de1.sormas.netzlink.com/';

app.use(morgan('dev'));

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
