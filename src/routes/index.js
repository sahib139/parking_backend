const routes = require('express').Router();
const v1Routes = require("./v1/index");

routes.use('/v1',v1Routes);

module.exports = routes;