const captainModel=require('../models/captain.model')
const captainService=require('../services/captain.service')
const {validationResult}=require('express-validator')
const blacklistTokenModel = require('../models/blacklistToken.model');
module.exports.registerCaptain=async (req,res,next)=>{

const error=validationResult(req);
if(!error.isEmpty()){

    return res.status(400).json({errors:error.array()});
}


const {fullname,email,password,vehicle,}=req.body;

//console.log(fullname,email,password,vehicle);

//checking whether already capatain exists

const isCaptainExists=await captainModel.findOne({email});
if(isCaptainExists){
    return res.status(400).json({message:"Captain already exists"});
}


const hashedPassword=await captainModel.hashPassword(password);

console.log("password hashed");
const captain=await captainService.createCaptain({
firstname:fullname.firstname,
lastname:fullname.lastname,
email,
password:hashedPassword,
plate:vehicle.plate,
color:vehicle.color,
capacity:vehicle.capacity,
vehicleType:vehicle.vehicleType
})

 
const token=captain.generateAuthToken();
res.status(201).json({token,captain});


}

module.exports.loginCaptain=async (req,res,next)=>{

    const errors=validationResult(req);
    if(!errors.isEmpty()){
        //console.log("Sdfsdf")
        return res.status(400).json({errors:errors.array()});
    }

    const {email,password}=req.body;

    //find user in db
    const captain=await captainModel.findOne({email}).select('+password'); //to include password field also in the user object

    if(!captain){
        return res.status(400).json({message:"Captain does not exist"});
    }   

    const isMatch=await captain.comparePassword(password);

    if(!isMatch){
        return res.status(400).json({message:"Invalid email or password"});
    }

    const token=captain.generateAuthToken();
     //store the token in cookie
     res.cookie('token',token)
     console.log(captain)
    res.status(200).json({token,captain});

}

module.exports.logoutCaptain=async (req,res,next)=>{
    console.log("inside log-out")
    const token=req.cookies.token || req.headers.authorization?.split(' ')[1];

    //add the token into blacklist
    const blacklistedToken=await blacklistTokenModel.create({token});
    res.clearCookie('token');
    res.status(200).json({message:"Logout successful"});
}

module.exports.getCaptainProfile=async (req,res,next)=>{
    console.log(req.captain)
    res.status(200).json(req.captain);
}

module.exports.updateCaptainRidecntAccepted=async (req,res,next)=>{

   const  capid=req.captain._id;
   //console.log(req.captain.fullname.firstname);
        const captain  = await captainService.updateRideCntAccepted(capid);
            res.status(200).json({message:"success"});
}

module.exports.updateCaptainRidecntRejected=async(req,res,next)=>{
    const  capid=req.captain._id;
   // console.log(req.captain.fullname.firstname);
         const captain  = await captainService.updateRideCntRejected(capid);
             res.status(200).json({message:"success"});
}