const jwt = require("jsonwebtoken");
require("dotenv").config();

console.log("process.env.JWT_SECRET", process.env.JWT_SECRET);
module.exports.authenticate = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Access token is required' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            console.log("err  :", err);
            return res.status(403).json({ message: 'Invalid token' });
        }
        req.user = user;
        req.token = token;
        next();
    });
}