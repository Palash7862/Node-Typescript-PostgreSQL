"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Pool = require('pg').Pool;
const config = require('./../config/env.config.js');
class User {
    constructor() {
        this.tableName = 'users';
        this.dbCon = new Pool({
            user: config.DBUser,
            host: config.DBHost,
            database: config.DBName,
            password: config.DBPass,
            port: config.DBPort,
        });
    }
    allUser() {
        // return User.find({email: email});
        this.dbCon.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
            if (error) {
                throw error;
            }
            return results.rows;
        });
    }
    ;
    findByEmail(email) {
        // return User.find({email: email});
        this.dbCon.query('SELECT * FROM ' + this.tableName + ' WHERE email = $1', [email], (error, results) => {
            if (error) {
                throw error;
            }
            return results.rows;
        });
    }
    ;
}
exports.user = new User();
//# sourceMappingURL=User.Model.js.map