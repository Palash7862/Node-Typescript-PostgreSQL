import  express from 'express';
import { Request, Response, NextFunction } from 'express';
import * as bodyParser from "body-parser";
import * as path from "path"; 
import { ApiRoute } from "./routes/api";

require("dotenv").config({ path: path.join(__dirname + "/../", ".env") });
const Pool = require('pg').Pool;
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true,})); 

app.use(ApiRoute);





app.get('/',  (request:Request, response:Response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' });
});

// app.get('/users', function (request:Request, response:Response) {
//   pool.query('SELECT * FROM users ORDER BY id ASC', (error:any, results:any) => {
//     if (error) {
//       throw error
//     }
//     response.status(200).json(results.rows)
//   })
// });
// app.get('/users/:id', (request:Request, response:Response) => {
//   response.json({ info: 'Node.js, Express, and Postgres API PK' });
// });
// app.get('/auth', (request:Request, response:Response) => {
//   //VerifyUserMiddleware.isPasswordAndUserMatch(request, response, next);
  
//   // console.log(routeConfig());
//   // response.json(routeConfig());
//   // response.json({ info: 'Node.js, Express, and Postgres API PK' });
// });

//AuthRouter.routesConfig(app);
app.set("port", process.env.PORT || 3000);
app.set("env", process.env.NODE_ENV || "development");
export default app;