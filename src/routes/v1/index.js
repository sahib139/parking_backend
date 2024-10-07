const routes = require('express').Router();
const v1authRoutes = require("./auth");

routes.use('/auth', v1authRoutes);

module.exports = routes;