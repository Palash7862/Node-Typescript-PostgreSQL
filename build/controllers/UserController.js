"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Controller_1 = __importDefault(require("./Controller"));
const User_1 = __importDefault(require("./../models/User"));
class UserController extends Controller_1.default {
    constructor() {
        super();
    }
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let user = new User_1.default();
            let userList = yield user.getUsers();
            res.render('user.html', { partials: { userList } });
            //res.status(200).json({status: 200, message: userList });
        });
    }
}
exports.default = UserController;
//# sourceMappingURL=UserController.js.map