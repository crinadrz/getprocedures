const express = require('express');
const path = require('path');
const procedures = require('./Procedures');

const app = express ();
//Get all procedures
app.get('/api/procedures', (req, res) => res.json(procedures));

//Set a static folder
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('Server started on port ${PORT}'));