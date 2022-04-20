const express = require("express");
const router = express.Router();

router.route("/")
    .get(function(req, res){
        res.send("GET all admins");
    });

router.route("/admin")
    .get(function(req, res){
        const id = req.query.id;
        if(isNaN(parseInt(id)) || id == undefined) {
            res.send("Enter valid admin id");
        }
        else {
            res.send("GET admin by id ");
        }
    })
    .get(function(req, res){
        const name = req.query.name;
        res.send("GET an admin by name " + name);
    })
    .post(function(req, res){
        res.send("POST an admin");
    })
    .put(function(req, res){
        res.send("PUT an admin");
    })
    .patch(function(req, res){
        res.send("PATCH an admin");
    })
    .delete(function(req, res){
        res.send("DELETE an admin");
    });

module.exports = router;