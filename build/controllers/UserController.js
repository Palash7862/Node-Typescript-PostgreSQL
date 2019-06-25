"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("./../models/User"));
class UserController {
    constructor() { }
    index(req, res) {
        let user = new User_1.default();
        let userList = user.getUsers();
        res.status(200).json({ status: 200, message: userList });
    }
}
exports.default = UserController;
//# sourceMappingURL=UserController.js.map