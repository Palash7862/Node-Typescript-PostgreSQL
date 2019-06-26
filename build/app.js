"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bodyParser = __importStar(require("body-parser"));
const path = __importStar(require("path"));
const api_1 = require("./routes/api");
require("dotenv").config({ path: path.join(__dirname + "/../", ".env") });
const Pool = require('pg').Pool;
const app = express_1.default();
var hogan = require("hogan.js");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, }));
app.engine('html', require('hogan-express'));
app.set('view engine', 'html');
app.set('layout', 'layout');
app.set('partials', { foo: 'foo' });
app.enable('view cache');
app.set('views', __dirname);
app.use(api_1.ApiRoute);
app.get('/', (request, response) => {
    // response.json({ info: 'Node.js, Express, and Postgres API' });
    // response.render('user');
    var template = "Hello {{world}}!";
    response.send(hogan.compile(template));
});
//AuthRouter.routesConfig(app);
app.set("port", process.env.PORT || 3000);
app.set("env", process.env.NODE_ENV || "development");
exports.default = app;
//# sourceMappingURL=app.js.map