const express = require('express')

db = require('../data/connection.js')

const router = express.Router()

router.get("/", (req,res) => {
    res.json({message: "hello from the server!! "})
})

module.exports = router