import { Request, Response } from 'express';
import { user } from './../models/User.Model';
const crypto = require('crypto');

exports.hasAuthValidFields = (request:Request, response:Response, next:any) =>{
    let errors = [];
    if(request.body){
        if(!request.body.email){
            errors.push('Missing email field.');
        }
        if(!request.body.password){
            errors.push('Missing password field.');
        }

        if(errors.length){ 
            return response.status(400).send({errors: errors.join(', ')});
        }else{
            next();
        }
    }else{
        return response.status(400).send({errors:'Missing email and password fields.'});
    }
}
exports.isPasswordAndUserMatch = (request:Request, response:Response, next:any) => {
    // let User:User = new User();
    ///user.findByEmail(request.body.email)
    // user.allUser().then((results:any)=>{
    //     return response.status(200).json(results);
    // });
    return response.json(user.allUser());
}