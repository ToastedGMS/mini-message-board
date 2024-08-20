//imports
const express = require('express');
const router = express.Router();
const { format } = require('date-fns');

//initialize message object
const messages = [
    {
      text: "Click the New Message link to send a new message!",
      user: "Admin",
      added: format(new Date(), 'PPpp')
    }
];
  
//handle get requests; populate template with message object
router.get('/', (req,res) => {
    res.render("index", { title: "Mini Messageboard", messages: messages })
})

//handle post requests
router.post('/new', (req,res) => {
    const user = req.body.author;
    const text = req.body.message;

    messages.push({ text, user, added: format(new Date(), 'PPpp') });

    res.redirect("/")
})

module.exports = router;