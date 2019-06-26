import  express from 'express';
import { Request, Response, NextFunction } from 'express';
import * as bodyParser from "body-parser";
import * as path from "path"; 
import { ApiRoute } from "./routes/api";

require("dotenv").config({ path: path.join(__dirname + "/../", ".env") });
const Pool = require('pg').Pool;
const app = express();
var hogan = require("hogan.js");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true,})); 

app.engine('html', require('hogan-express') );
app.set('view engine', 'html');
app.set('layout', 'layout'); 
app.set('partials', {foo: 'foo'});
app.enable('view cache');
app.set('views', __dirname);
app.use(ApiRoute);





app.get('/',  (request:Request, response:Response) => {
  // response.json({ info: 'Node.js, Express, and Postgres API' });
  // response.render('user');
  var template = "Hello {{world}}!";
  response.send(hogan.compile(template));
});

//AuthRouter.routesConfig(app);
app.set("port", process.env.PORT || 3000);
app.set("env", process.env.NODE_ENV || "development");
export default app;