
 
const axios = require('axios');

const apiKey = process.env.GOOGLE_MAPS_API_KEY;

const captainModel=require('../models/captain.model')

module.exports.getAddressCoordinate =async (address) => {

    const url = `https://maps.gomaps.pro/maps/api/geocode/json?address=${address}&key=${apiKey}`;
  try {
    const response = await axios.get(url);
    const data = response.data;
    if (data.status === 'OK') {
      const coordinates = data.results[0].geometry.location;
      return {
        ltd: coordinates.lat,
        lng: coordinates.lng
      };
    } else {
      throw new Error(`Google Maps API error: ${data.status}`);
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}

module.exports.getDistanceTime = async (origin, destination) => {
    if (!origin || !destination) {
        throw new Error('Origin and destination are required');
    }

  

    const url = `https://maps.gomaps.pro/maps/api/distancematrix/json?origins=${encodeURIComponent(origin)}&destinations=${encodeURIComponent(destination)}&key=${apiKey}`;

    try {


        const response = await axios.get(url);
        if (response.data.status === 'OK') {

            if (response.data.rows[ 0 ].elements[ 0 ].status === 'ZERO_RESULTS') {
                throw new Error('No routes found');
            }

            return response.data.rows[ 0 ].elements[ 0 ];
        } else {
            throw new Error('Unable to fetch distance and time');
        }

    } catch (err) {
        console.error(err);
        throw err;
    }
}

module.exports.getAutoCompleteSuggestions = async (input) => {
    if (!input) {
        throw new Error('address is required');
    }

    
    const url = `https://maps.gomaps.pro/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&key=${apiKey}`;

    try {

        const response = await axios.get(url);
        if (response.data.status === 'OK') {
            // console.log(response.data.predictions);
            return response.data.predictions;
        } else {
            throw new Error('Unable to fetch suggestions');
        }

    } catch (err) {
        console.error(err);
        throw err;
    }
}

//get captains within the given radius

module.exports.getCaptainsInTheRadius = async (ltd, lng, radius) => {

    // radius in km

    console.log("inside get captains in radius");

    const captains = await captainModel.find({
        location: {
            $geoWithin: {
                $centerSphere: [ [ ltd, lng ], radius / 6371 ]
            }
        }
    });

    return captains;


}