import  express from 'express';
import { Request, Response, NextFunction } from 'express';
import * as bodyParser from "body-parser";
import * as path from "path"; 
import { ApiRoute } from "./routes/api";

require("dotenv").config({ path: path.join(__dirname + "/../", ".env") });
const Pool = require('pg').Pool;
const app = express();
var hbs = require('express-handlebars');
// const hbs = require('hbs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true,})); 

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('.html', hbs({
  defaultLayout: 'main.html'
}));
app.set('view engine', '.html');

app.use(ApiRoute);

app.get('/',  (request:Request, response:Response) => {
  // response.json({ info: 'Node.js, Express, and Postgres API' });
  response.render('user'); 
});

//AuthRouter.routesConfig(app);
app.set("port", process.env.PORT || 3000);
app.set("env", process.env.NODE_ENV || "development");
export default app;