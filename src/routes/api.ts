import  express from 'express';
import UserController from "../controllers/UserController";
const Route = express.Router();

let UserControllerObj = new UserController();

Route.get('/user', UserControllerObj.index);

export { Route as ApiRoute };
 


