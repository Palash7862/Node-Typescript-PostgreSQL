import { Request, Response, NextFunction } from 'express';
const { Pool, Client } = require('pg');

 export default class DBConnection {
    pool: any;
    constructor() {
        this.pool = new Pool({
            user: process.env.DB_USER,
            host: process.env.DB_HOST,
            database: process.env.DB_NAME,
            password: process.env.DB_PASS,
            port: process.env.DB_PORT,
        }); 
    }

    // public index(req: Request, res: Response) {
    //     res.status(200).json({status: 200, message: "OK"});
    // }
}

// const dbConnection = new DBConnection();
// export default dbConnection;