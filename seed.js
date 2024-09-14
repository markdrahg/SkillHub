// seed.js
const mongoose = require('mongoose');
const Course = require('./models/Course');
require('dotenv').config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected for seeding'))
.catch(err => console.error('Connection error', err));

// Seed data
const seedCourses = [
    {
        name: 'Introduction to JavaScript',
        image: '/images/data.jpg',
        tutor: 'John Doe'
    },
    {
        name: 'Learn HTML & CSS',
        image: './images/robot.jpg',
        tutor: 'Jane Smith'
    }
];

// Insert seed data into the database
Course.insertMany(seedCourses)
    .then(() => {
        console.log('Courses added');
        mongoose.connection.close();
    })
    .catch(err => console.error('Error inserting courses', err));
