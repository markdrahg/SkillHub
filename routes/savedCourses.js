const express = require('express');
const router = express.Router();
const SavedCourse = require('../models/SavedCourse');
const { protect } = require('../middleware/authMiddleware');

// Save a course
router.post('/save', protect, async (req, res) => {
    const { courseId } = req.body;
    const userId = req.session.user._id;

    try {
        const savedCourse = new SavedCourse({ userId, courseId });
        await savedCourse.save();

        res.status(200).json({ message: 'Course saved successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'Error saving course' });
    }
});

// Get all saved courses for the logged-in user
router.get('/saved-courses', protect, async (req, res) => {
    const userId = req.session.user._id;

    try {
        const savedCourses = await SavedCourse.find({ userId }).populate('courseId');
        res.status(200).json(savedCourses);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving saved courses' });
    }
});

module.exports = router;
