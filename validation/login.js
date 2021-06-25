const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateLoginInput(data) {
    let errors = {};

    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";

    if (Validator.isEmpty(data.email)) {
        errors.email = "Adres e-mail jest wymagany";
    } else if (!Validator.isEmail(data.email)) {
        errors.email = "Adres e-mail jest niepoprawny";
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = "Hasło jest wymagane";
    }
    return {
        errors,
        isValid: isEmpty(errors)
    };
};