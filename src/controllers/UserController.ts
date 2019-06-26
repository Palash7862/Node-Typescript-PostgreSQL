import { Request, Response, NextFunction } from 'express';
import Controller from './Controller';
import User from './../models/User';

export default class UserController extends Controller {
    constructor() {
        super();
    }

    public async index(req: Request, res: Response) {
        let user = new User();
        let userList = await  user.getUsers(); 
        res.render('user', {partials: {userList} });
        //res.status(200).json({status: 200, message: userList });
    }
}