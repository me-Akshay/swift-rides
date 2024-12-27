
const mongoose=require('mongoose')
const express=require('express')
const userModel = require('../models/user.model');
const capatainModel = require('../models/captain.model');
const jwt=require('jsonwebtoken')
const blacklistTokenModel = require('../models/blacklistToken.model');


module.exports.authUser=async(req,res,next)=>{

    //check for token 
    //either in cookies or in headers
    const token =req.cookies.token || req.headers.authorization?.split(' ')[1];

    if(!token){
        return res.status(401).json({message:"Unauthorized"});
    }
    //if the token is black-listed
    const blacklistedToken=await blacklistTokenModel.findOne({token:token});
    if(blacklistedToken){
        console.log("Blacklist token hit")
        return res.status(401).json({message:"Unauthorized"});
    }

    //verification of token in try catch block

    try{

        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        const user=await userModel.findById(decoded._id);

        //putting the user info in req.user
        req.user=user;
        return next();


    }catch(err){

        return res.status(401).json({message:"Unauthorized"});

    }


}

module.exports.authCaptain=async(req,res,next)=>{

    //check for token

    const token =req.cookies.token || req.headers.authorization?.split(' ')[1];

    if(!token){
        // console.log("token hai hi naa")
        return res.status(401).json({message:"Unauthorized"});
    }

    //if the token is black-listed
    const blacklistedToken=await blacklistTokenModel.findOne({token:token});
    if(blacklistedToken){
        
        return res.status(401).json({message:"Unauthorized"});
    }

    //verification of token in try catch block
    
    try{

        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        const captain=await capatainModel.findById(decoded._id);

        //putting the user info in req.user
        req.captain=captain;
        return next();

    }catch(err){

        return res.status(401).json({message:"Unauthorized"});

    }
}