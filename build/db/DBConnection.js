"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Pool, Client } = require('pg');
class DBConnection {
    constructor() {
        this.pool = new Pool({
            user: process.env.DB_USER,
            host: process.env.DB_HOST,
            database: process.env.DB_NAME,
            password: process.env.DB_PASS,
            port: process.env.DB_PORT,
        });
    }
}
exports.default = DBConnection;
// const dbConnection = new DBConnection();
// export default dbConnection;
//# sourceMappingURL=DBConnection.js.map