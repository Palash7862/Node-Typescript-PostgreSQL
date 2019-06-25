"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_Model_1 = require("./../models/User.Model");
const crypto = require('crypto');
exports.hasAuthValidFields = (request, response, next) => {
    let errors = [];
    if (request.body) {
        if (!request.body.email) {
            errors.push('Missing email field.');
        }
        if (!request.body.password) {
            errors.push('Missing password field.');
        }
        if (errors.length) {
            return response.status(400).send({ errors: errors.join(', ') });
        }
        else {
            next();
        }
    }
    else {
        return response.status(400).send({ errors: 'Missing email and password fields.' });
    }
};
exports.isPasswordAndUserMatch = (request, response, next) => {
    // let User:User = new User();
    ///user.findByEmail(request.body.email)
    // user.allUser().then((results:any)=>{
    //     return response.status(200).json(results);
    // });
    return response.json(User_Model_1.user.allUser());
};
//# sourceMappingURL=verify.user.middleware.js.map