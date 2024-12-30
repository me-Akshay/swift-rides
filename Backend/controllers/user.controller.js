const userModel = require('../models/user.model');
const userService = require('../services/user.service');
const { validationResult } = require('express-validator');
const blacklistTokenModel = require('../models/blacklistToken.model');

module.exports.registerUser = async (req, res, next) => {
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // after getting no errors in the req body according to constraints set by us

    const { fullname, email, password } = req.body;
    //checking if the user already exists
    const isUseralreadyExists = await userModel.findOne({ email });
    if (isUseralreadyExists) {
        return res.status(400).json({ message: "User already exists" });
    }

    
    //hashing password
    const hashedPassword = await userModel.hashPassword(password);

    //saving user in db
    const newUser = await userService.createUser({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword
    });

    const token = newUser.generateAuthToken();

    res.status(201).json({ token, newUser });


}

module.exports.loginUser = async (req, res, next) => {
// user side input error checks
    console.log("inside login")
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // after getting no errors in the req body according to constraints set by us

    const { email, password } = req.body;

    //find user in db
    const user = await userModel.findOne({ email }).select('+password'); //to include password field also in the user object

    if(!user){
      return res.status(401).json({message:"Invalid email or password"});
    }


    //compare password

    const isMatch= await user.comparePassword(password);

    if(!isMatch){
      return res.status(401).json({message:"Invalid email or password"});
    }

    const token = user.generateAuthToken();

    //store the token in cookie
    res.cookie('token',token)

    res.status(200).json({ token, user }); //jo variable name pass kiya ho wahi as a key serve krne lgta hai


}

module.exports.getUserProfile = async (req, res, next) => {

    //As we will reach here after we are authenticated our user detail will be inside request only

    res.status(200).json(req.user);


}


module.exports.logoutUser = async (req, res, next) => {
    console.log("inside logout")
    const token = req.cookies.token || req.headers.Authorization?.split(' ')[1];

    //add the token into blacklist
    const blacklistedToken = await blacklistTokenModel.create({ token });
    res.clearCookie('token');
    res.status(200).json({ message: 'Logout successful' });
}