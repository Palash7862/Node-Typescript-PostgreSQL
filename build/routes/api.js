"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserController_1 = __importDefault(require("../controllers/UserController"));
const Route = express_1.default.Router();
exports.ApiRoute = Route;
let UserControllerObj = new UserController_1.default();
Route.get('/user', UserControllerObj.index);
//# sourceMappingURL=api.js.map