//imports
const express = require('express');
const app = express();
const path = require("node:path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//routers
const newMessageRouter = require('./routes/new')
const indexRouter = require('./routes/index')

//middleware
app.use(express.urlencoded({ extended: true }));
app.use('/', indexRouter)
app.use('/new', newMessageRouter)

app.listen(3000, () => console.log('Server listening on port 3000'));
