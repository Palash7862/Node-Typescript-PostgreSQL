import { Request, Response, NextFunction } from 'express';
import User from './../models/User';

export default class UserController {
    constructor() {}

    public async index(req: Request, res: Response) {
        let user = new User();
        let userList = await  user.getUsers(); 
        res.status(200).json({status: 200, message: userList });
    }
}