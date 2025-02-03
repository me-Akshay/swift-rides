const rideService = require('../services/ride.service');
const {validationResult} = require('express-validator');
const mapService=require('../services/maps.service')
const {sendMessageToSocketId} = require('../socket');
const rideModel = require('../models/ride.model');

module.exports.createRide = async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
        const {pickup,destination,vehicleType}=req.body;
    try{
        //ride created by the user

 
        const ride=await rideService.createRide({user:req.user._id,pickup,destination,vehicleType});
        res.status(201).json(ride);
        // console.log("inside create-ride ,ride created")

        //get the coordinates of the pickup location
        const pickupCoordinates = await mapService.getAddressCoordinate(pickup);
        // pickupCoordinates.ltd=25.0507404;
        // pickupCoordinates.lng=75.828792;
        
        //just selecting the captains within the radius
        const captainsInRadius = await mapService.getCaptainsInTheRadius(pickupCoordinates.ltd, pickupCoordinates.lng, 200);
       

        ride.otp="" //to prevent sending otp to the captains

        //sending the ride message to all the captains In radius
        const rideWithUser = await rideModel.findOne({ _id: ride._id }).populate('user');
        //   console.log("ride with user",rideWithUser)
      //console.log("captains in radius",captainsInRadius)
        captainsInRadius.map(captain=>{
            
           // console.log("message is going to this captain ", captain.socketId)
            //sending msg through socket
            sendMessageToSocketId(captain.socketId,{
                event:'new-ride',
                data:rideWithUser
            });

        })





      
    }
    catch(err){
        return res.status(400).json({message:err.message});
    }

}


//to get fare
module.exports.getFare = async (req, res, next) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });    
    }

    const {pickup,destination}=req.query;

    try{

        const fare=await rideService.getFare(pickup,destination);
        res.status(200).json(fare);

    }catch(err){
        return res.status(500).json({message:err.message});
    }


}

//confirm ride by the captain
module.exports.confirmRide = async (req, res) => {

    //rideId,captainId (input)

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { rideId } = req.body;
    //if it is captain protected route then req.captain will hold captain details

    try {
    
       // console.log("inside confirm ride route")
        const ride = await rideService.confirmRide({ rideId, captain: req.captain }); //this ride var will contain all info abt usr,captain,ride,otp

        sendMessageToSocketId(ride.user.socketId, {
            event: 'ride-confirmed',
            data: ride
        })

        return res.status(200).json(ride);
    } catch (err) {

        console.log(err);
        return res.status(500).json({ message: err.message });
    }
}

//start-ride (otp validation section)

module.exports.startRide = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { rideId, otp } = req.query;

    try {
        const ride = await rideService.startRide({ rideId, otp, captain: req.captain });

      // console.log("inside ride-start")

        sendMessageToSocketId(ride.user.socketId, {
            event: 'ride-started',
            data: ride
        })

        return res.status(200).json(ride);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}


//ending the ride
module.exports.endRide = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { rideId } = req.body;

    try {
        const ride = await rideService.endRide({ rideId, captain: req.captain });

        //console.log("inside ride-end")
        //sends the finish ride message to the user 
        sendMessageToSocketId(ride.user.socketId, {
            event: 'ride-ended',
            data: ride
        })



        return res.status(200).json(ride);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    } 
}