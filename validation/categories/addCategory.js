const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateAddCategoryInput(data) {
    let errors = {};

    data.name = !isEmpty(data.name) ? data.name : "";

    if (Validator.isEmpty(data.name)) {
        errors.name = "Nazwa jest wymagana";

    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};