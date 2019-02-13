'use strict';
const axios = require('axios');
const apikey =  '5737113ee8984f28bba171935191002';


const getWeather = (location) => {
	return new Promise(async (resolve, reject) => {
		try{			
			const weatherConditions = await axios.get(
				'http://api.apixu.com/v1/forecast.json',
				{
					params: {
						key: apikey,
						q: location,
						days : 3
					}
				});				
			resolve(weatherConditions.data);
		}
		catch(error){     
			console.log("I don't know this city");
			console.log("Please press enter");
        }     
	});

}

module.exports = getWeather;