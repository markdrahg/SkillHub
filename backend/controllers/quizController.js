const Quiz = require('../models/Quiz');

// Get all quizzes
exports.getQuizzes = async (req, res) => {
    try {
        const quizzes = await Quiz.find();
        res.status(200).json(quizzes);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server error' });
    }
};

// Post new quiz
exports.createQuiz = async (req, res) => {
    const { question, options, correctAnswer } = req.body;
    try {
        const newQuiz = new Quiz({ question, options, correctAnswer });
        await newQuiz.save();
        res.status(201).json(newQuiz);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server error' });
    }
};
