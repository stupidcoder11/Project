const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const app = express();
const PORT = process.env.PORT;
const users = require("./routes/users");
const admins = require("./routes/admins");
const bodyParser = require("body-parser");
const connection = require("./config.db");
const baseUrl = "/api";

bodyParser.urlencoded({extended: true});
app.use(bodyParser.json());
app.use(cors());
app.use(baseUrl + "/users", users);
app.use(baseUrl + "/admins", admins);

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