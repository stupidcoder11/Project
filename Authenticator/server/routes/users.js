const express = require("express");
const router = express.Router();
const connection = require("../config.db");
const bcrypt = require("bcrypt");
const saltRounds = 10;


/**
 * GET ALL USERS
 */
router.route("/")
    .get(function(req, res){
        connection.query("SELECT * FROM User ORDER BY id", function(err, results){
            (results.length == 0)?
                res.send({
                    response: "Success",
                    message: "No user(s) found!",
                    results: results             
                }):
                res.send({
                    response: "Success",
                    message: "User(s) found!",
                    results: results
                });
        });
    });

/**
 * CREATE A USER
 */
router.route("/create")
    .post(function(req, res){
        const data = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }

        const hash = bcrypt.hashSync(data.password, saltRounds);

        connection.query(
            "INSERT INTO User(name, email, password) VALUES(?, ?, ?)",
            [data.name, data.email, hash],
            function(err, results) {
                if(err) {
                    res.send({error: err});
                }
                else {
                    res.send({
                        response: "Success",
                        message: "User created",
                        results: results
                    });
                }
            }
        )
    });

/**
 * AUTHENTICATE A USER
 */
router.route("/verify")
    .post(function(req, res){
        const data = {
            email: req.body.email,
            password: req.body.password
        }
        connection.query("SELECT * FROM User WHERE email = ?", [data.email],
        function(err, results){
            if(err) {
                res.send({error: err});
            }
            else if(results.length == 0)
              res.send({
                  response: "Success",
                  emailCheck: false,
                  passwordCheck: false,
                  message: "Email id not found!",
                  results: results
                });
                
            else if(bcrypt.compareSync(data.password, results[0].password)) {
                res.send({
                    response: "Success",
                    emailCheck: true,
                    passwordCheck: true,
                    message: "User found!",
                    results: results
                });
            }
            else {
                res.send({
                    response: "Success",
                    emailCheck: true,
                    passwordCheck: false,
                    message: "Incorrect password!",
                    resultCount: 0,
                    results: []
                });
            }
        })
    });

/**
 * GET USER BY ID
 */
router.route("/readById")
    .get(function(req, res){
        const id = req.query.id;
        if(isNaN(parseInt(id)) || id == undefined) {
            res.send("Enter valid user id");
        }
        else {
            connection.query("SELECT * FROM User WHERE id = ?", [id], function(err, results){
                if(err) {
                    res.send({error: err});
                }
                else {
                    (results.length == 0)?
                        res.send({
                            response: "Success",
                            message: "User not found!",
                            results: results
                        })
                        :
                        res.send({
                            response: "Success",
                            message: "User found!",
                            results: results
                        });
                }
            })
        }
    });


// GET USER(S) BY NAME 
router.route("/readByName")
    .get(function(req, res){
        const name = req.query.name;
        if(name == undefined) {
            res.send("Enter a valid name");
        }
        else {
            connection.query("SELECT * FROM User WHERE name = ? ORDER BY id", [name], function(err, results){
                (results.length == 0)?
                    res.send({
                        response: "Success",
                        message: "User(s) not found!",
                        results: results
                    })
                    :
                    res.send({
                        response: "Success",
                        message: "User(s) found!",
                        results: results
                    });
            })
        }
    });

/**
 * GET USER BY EMAIL
 */
router.route("/readByEmail")
    .get(function(req, res){
        const email = req.query.email;
        if(email == undefined) {
            res.send("Enter valid email");
        }
        else {
            connection.query("SELECT * FROM User WHERE email = ? ORDER BY id", [email], function(err, results){
                if(results.length == 0) {
                    res.send({
                        response: "Success",
                        messgae: "User not found!", 
                        results: results
                    });
                }
                else {
                    res.send({
                        response: "Success",
                        message: "User found!",
                        results: results
                    });
                }
            });
        }
    })

module.exports = router;