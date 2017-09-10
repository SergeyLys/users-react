import Validator from 'validator';
import _isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
    let errors = {};

    if (typeof data.password !== 'undefined' && Validator.isEmpty(data.password)) {
        errors.password = 'This is required field'
    }
    
    if (typeof data.login !== 'undefined' && Validator.isEmpty(data.login)) {
        errors.login = 'This is required field'
    }

    return {
        errors,
        isValid: _isEmpty(errors)
    }
}