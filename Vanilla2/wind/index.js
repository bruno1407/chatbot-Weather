'use strict';

var response;

const wind = (weatherDetailsJsonFile, rsp) =>{
	if(rsp == "yes")
	{
        response = "\nThere is " + weatherDetailsJsonFile.current.wind_kph + "km/h of wind. And it come from the "+weatherDetailsJsonFile.current.wind_dir;
    }
    else if(rsp=="no") 
    {
        response="As you want :)";
    }
    else response="I didn't understand"
	return response;
} 

module.exports = wind;