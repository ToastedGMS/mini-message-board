const pool = require('./pool');

async function insertMessage(message){
    try {
        await pool.query(
            'INSERT INTO messages (text, username, added) VALUES ($1, $2, $3)',
            [message.text, message.user, message.added]
        )
    } catch (err) {
        console.error('Error inserting message:', err);
        throw err;
    }
};

async function fetchMessages(){
    try {
        const result = await pool.query('SELECT * FROM messages ORDER BY added DESC');
        return result.rows;
    } catch (err) {
        console.error('Error fetching messages:', err);
        throw err;
    }
};

module.exports = {
    insertMessage,
    fetchMessages
}