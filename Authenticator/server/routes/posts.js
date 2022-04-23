const express = require('express');
const router = express.Router();
const connection = require("../config.db");

/**
 * GET ALL POSTS
 */
router.route("/")
    .get(function(req, res) {
        connection.query("SELECT * FROM Post ORDER BY id", function(err, results) {
            results.length == 0
            ? res.send({
                response: "Success",
                message: "No post(s) found!",
                results
            })
            : res.send({
                response: "Success",
                message: "Post(s) found!",
                results
            })
        })
    })

/**
 * CREATE A POST
 */
router.route("/create")
    .post((req, res)=>{
        const data = {
          name: req.body.title,
          desc: req.body.desc,
          imageUrl: req.body.imageUrl,
          liked: req.body.liked
        };
        connection.query("INSERT INTO Post(title, description, image, liked) VALUES(?, ?, ?, ?)",
        [data.name, data.desc, data.imageUrl, data.liked], (err, results)=>{
            if (err) {
              res.send({ error: err });
            } 
            else {
              res.send({
                response: "Success",
                message: "Post created",
                results: results,
              });
            }
        })
    })

/**
 * GET A POST BY ID
 */
router.route("/readById").get((req, res)=>{
    connection.query("SELECT * FROM Post WHERE id = ?", [req.query.id], (err, results)=>{
        if(err) {
            res.send({error: err})
        }
        else if(results.length > 0) {
            res.send({
              response: "Success",
              message: "Post found",
              results
            });
        }
        else {
            res.send({
                response: "Success",
                message: "Post not found",
                results
            })
        }
    })
})

module.exports = router