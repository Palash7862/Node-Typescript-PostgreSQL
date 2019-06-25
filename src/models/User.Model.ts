const Pool = require('pg').Pool;
const config = require('./../config/env.config.js');
class User {
    tableName: string = 'users';
    dbCon:any;
    constructor() { 
        this.dbCon = new Pool({
            user: config.DBUser,
            host: config.DBHost,
            database: config.DBName,
            password: config.DBPass,
            port: config.DBPort,
          }); 
    }
    allUser():any{
        // return User.find({email: email});
        this.dbCon.query('SELECT * FROM users ORDER BY id ASC', (error:any, results:any) => {
            if (error) {
              throw error
            }
            return results.rows;
        });
    };

    findByEmail (email:string) :any {
        // return User.find({email: email});
        this.dbCon.query('SELECT * FROM '+this.tableName+' WHERE email = $1', [email], (error:any, results:any) => {
            if (error) {
              throw error
            }
            return results.rows;
        });
    };
}
export const user = new User();