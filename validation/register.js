const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
    let errors = {};

    data.name = !isEmpty(data.name) ? data.name : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.password2 = !isEmpty(data.password2) ? data.password2 : "";

    if (Validator.isEmpty(data.name)) {
        errors.name = "Nazwa użytkownika jest wymagana";
    }

    if (Validator.isEmpty(data.email)) {
        errors.email = "Adres e-mail jest wymagany";
    } else if (!Validator.isEmail(data.email)) {
        errors.email = "Adres e-mail jest niepoprawny";
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = "Hasło jest wymagane";
    }

    if (Validator.isEmpty(data.password2)) {
        errors.password2 = "Powtórzenie hasła jest wymagane";
    }

    if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
        errors.password = "Hasło musi zawierać co najmniej 6 znaków";
    }
    if (!Validator.equals(data.password, data.password2)) {
        errors.password2 = "Hasła nie są zgodne";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};