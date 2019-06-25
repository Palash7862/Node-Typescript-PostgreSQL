"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DBConnection_1 = __importDefault(require("./../db/DBConnection"));
class User extends DBConnection_1.default {
    constructor() {
        super();
    }
    getUsers() {
        let datax = this.pool.query('SELECT * FROM users ORDER BY id ASC').then((results) => {
            // if (error) {
            //   throw error;
            // }
            console.log(results.rows);
            this.result = results.rows;
            return results.rows;
        });
        console.log(datax);
    }
}
exports.default = User;
//# sourceMappingURL=User.js.map