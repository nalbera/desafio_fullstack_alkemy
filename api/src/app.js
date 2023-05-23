const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const routes = require('./routes/index')
const server = express();


server.use(cors());
server.use(express.urlencoded({extended: false}));
server.use(express.json());
server.use(morgan('dev'));

server.use('/', routes)


server.use((err, _req, res, _next) => {
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
});

module.exports = server;