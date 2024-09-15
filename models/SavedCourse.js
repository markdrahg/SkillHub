const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const savedCourseSchema = new Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
    savedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('SavedCourse', savedCourseSchema);
