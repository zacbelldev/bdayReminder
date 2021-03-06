const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateBirthdayInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : '';
  data.dob = !isEmpty(data.DOB) ? data.DOB : '';

  if (Validator.isEmpty(data.name)) {
    errors.name = 'Name is required';
  }

  if (Validator.isEmpty(data.DOB)) {
    errors.DOB = 'Birthday field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
