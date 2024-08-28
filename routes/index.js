//imports
const express = require('express');
const router = express.Router();
const { format } = require('date-fns');
const { insertMessage, fetchMessages } = require('../database/queries');
  
//handle get requests; populate template with message object
router.get('/', async (req, res) => {
    try {
        const messages = await fetchMessages();
        res.render('index', { messages }); 
    } catch (err) {
        console.error('Error fetching messages:', err);
        res.status(500).send('Internal Server Error');
    }
});


//handle post requests
router.post('/new', async (req, res) => {
    const message = {
        user: req.body.author,
        text: req.body.message,
        added: format(new Date(), 'PPpp') // Format the date
    };

    try {
        await insertMessage(message);
        res.redirect("/"); 
    } catch (err) {
        console.error('Error handling POST request:', err);
        res.status(500).send('Internal Server Error');
    }
});


module.exports = router;