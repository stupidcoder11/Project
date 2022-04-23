const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const app = express();
const PORT = process.env.PORT;
const users = require("./routes/users");
const admins = require("./routes/admins");
const posts = require("./routes/posts");
const connection = require("./config.db");
const baseUrl = "/api";

bodyParser.urlencoded({extended: true});
app.use(bodyParser.json());
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET, POST"],
    credentials: true
}));
app.use(session({
    key: "useId",
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60*60*24
    }
}))
app.use(cookieParser());
app.use(baseUrl + "/users", users);
app.use(baseUrl + "/admins", admins);
app.use(baseUrl + "/posts", posts);

app.listen(PORT, (err)=>{
    if(err) {
        return console.log(`Error : ${err}`);
    }
    console.log(`Server is running on ${PORT}`);
    connection.connect((error)=>{
        if(error){
            return console.log(error);
        }
        else {
            console.log(`Database connected!`);
        }
    })
});