const express = require('express');
const compress = require('compression');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes');
const logger = require('./commons/logger');

const app = express();
app.use(compress());
morgan.token('reqbody', req => JSON.stringify(req.body));
app.use(morgan(':method :url :reqbody - :status', { stream: logger.stream }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use(bodyParser.json({ limit: '10mb', extended: true }));

app.use(routes);

module.exports = app;