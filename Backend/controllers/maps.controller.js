const mapService = require('../services/maps.service');
const { validationResult } = require('express-validator');


//for getting coordinates of an address
module.exports.getCoordinates = async (req, res, next) => {

    //check the validation errors
   

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });    
    }



    const address = req.query.address;

    try{
        const coordinates = await mapService.getAddressCoordinate(address);
        
        res.status(200).json(coordinates);
    }catch(error){
       res.status(404).json({message:'Coordinate Not Found'});
    }

}

//for getting distance and time
module.exports.getDistanceTime = async (req, res, next) => {

    try{
        const errors= validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()});
        }

        const {origin,destination}=req.query;

        const distanceTime=await mapService.getDistanceTime(origin,destination);
        res.status(200).json(distanceTime);

    }
    catch(err){
        console.log(err)
        res.status(500)
    }

}


module.exports.getAutoCompleteSuggestions = async (req, res, next) => {

    try{

        const errors= validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()});
        }

        

        const {input}=req.query;

        
        const suggestions=await mapService.getAutoCompleteSuggestions(input);
        console.log("inside Auto Complete Suggestion Backend")
        res.status(200).json(suggestions);


    }catch(err){
        console.log(err)
        res.status(500).json({message:"Internal Server Error"})
    }


}




