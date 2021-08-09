const jwt = require('jsonwebtoken');
const User = require('../db/Schemas/UserSchema');

const authenticate = async (req,res,next) => {
    try {
        const token = req.cookies.jwtoken;
        const verifyToken = jwt.verify(token,process.env.SECRET);
        const rootUser = await User.findOne({_id:verifyToken._id,"tokens.token":token});

        if(!rootUser){
            throw new Error("User not found");
        }

        req.token = token;
        req.rootUser = rootUser;
        req.userId = rootUser._id;
        next();
    } catch (error) {
        res.status(400).send('Unathorized : No token provided');
        console.log(error);
    }
}

module.exports = authenticate;