// const jwt = require('jsonwebtoken');
// const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

// exports.protect = (req, res, next) => {
//     const authHeader = req.header('Authorization');
    
//     // Check if Authorization header exists and starts with 'Bearer'
//     if (!authHeader || !authHeader.startsWith('Bearer ')) {
//         return res.status(401).json({ message: 'Noh token, authorization denied' });
//     }

//     const token = authHeader.split(' ')[1]; // Extract token from "Bearer <token>"
    
//     try {
//         const decoded = jwt.verify(token, JWT_SECRET);
//         req.user = decoded.userId;
//         next();
//     } catch (error) {
//         res.status(401).json({ message: 'Token is not valid' });
//     }
// };






// exports.protect = (req, res, next) => {
//     if (req.session && req.session.userId) {
//         next();  // User is authenticated, proceed to the next middleware
//     } else {
//         return res.status(401).json({ message: 'Please log in to access this page.' });
//     }
// };


exports.protect = (req, res, next) => {
    if (req.session && req.session.user) {
        next();  // User is authenticated, proceed to the next middleware
    } else {
        return res.status(401).json({ message: 'Please log in to access this page.' });
    }
};

