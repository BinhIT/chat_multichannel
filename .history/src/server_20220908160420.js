const express         =     require('express')

const passport = require('passport')
 
const cookieParser = require('cookie-parser')
 
const session = require('express-session')
 

const  FacebookStrategy = require('passport-facebook').Strategy
const verifyWebhook = require('./');
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoute from "./route/web";
import connectDB from "./config/connectDB";
require('dotenv').config();

let app = express();

//config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));

//==========================================
viewEngine(app);
initWebRoute(app);

connectDB();

let port = process.env.PORT || 6969;

app.listen(port,() =>
{
    //callback
    console.log("Server đang chạy ở cổng: " +port)
})