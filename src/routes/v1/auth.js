const routes = require('express').Router();
const authValidator = require("../../validations/auth");
const authControlollerV1 = require("../../controllers/authV1");

routes.post('/signup',authValidator.signup,authControlollerV1.signup);
routes.post('/signin',authValidator.signin,authControlollerV1.signin);

module.exports = routes;