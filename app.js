// app.js
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

// Middleware
app.use(express.json());
app.use(express.static('public'));


// Courses route
const coursesRouter = require('./routes/courses');
app.use('/api/courses', coursesRouter);


// Route to serve dashboard.html
app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});

// Route to serve signup.html
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'signup.html'));
});

// 404 handling
app.use((req, res) => {
    res.status(404).send('SkillHub Error 404: Page Not Found');
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
