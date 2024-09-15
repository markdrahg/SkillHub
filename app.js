// const express = require('express');
// const mongoose = require('mongoose');
// const path = require('path');
// require('dotenv').config();

// const app = express();

// // Connect to MongoDB
// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// .then(() => console.log('Connected to MongoDB'))
// .catch(err => console.error('MongoDB connection error:', err));

// // Middleware
// app.use(express.json());
// app.use(express.static('public'));

// // Auth route (JWT)
// const authRouter = require('./routes/auth');
// app.use('/api/auth', authRouter);

// // Courses route
// const coursesRouter = require('./routes/courses');
// app.use('/api/courses', coursesRouter);

// // Route to serve dashboard.html (protected)
// const { protect } = require('./middleware/authMiddleware');
// app.get('/dashboard', protect, (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
// });

// // Route to serve signup.html
// app.get('/register', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'signup.html'));
// });

// // 404 handling
// app.use((req, res) => {
//     res.status(404).send('SkillHub Error 404: Page Not Found');
// });

// // Start the server
// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });






const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const session = require('express-session');
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

// Session Middleware
app.use(session({
    secret: process.env.SESSION_SECRET || 'your_secret_key',  // Use a secure secret key from environment
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }  // Set to true in production with HTTPS
}));

// Courses route
const coursesRouter = require('./routes/courses');
app.use('/api/courses', coursesRouter);

// Auth route
const authRouter = require('./routes/auth');
app.use('/api/auth', authRouter);

// Route to serve dashboard.html (protected)
const { protect } = require('./middleware/authMiddleware');
app.get('/dashboard', protect, (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});

// Route user name
app.get('/api/user-info', protect, (req, res) => {
    res.json({ username: req.session.user.username });
});

// Route to Save Courses
const savedCoursesRouter = require('./routes/savedCourses');
app.use('/api/saved-courses', savedCoursesRouter);



// Route to serve signup.html
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'signup.html'));
});

// Route to serve login.html
app.get('/login', (req, res) => {
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
