//imports
const express = require('express');
const router = express.Router();

//handle get requests
router.get('/', (req,res) => {
    res.render("new", { title: "New Message Form"})
});

module.exports = router;