'use strict';
var response = "";
const time = (weatherDetailsJsonFile) =>{
        response = "\nIn "+weatherDetailsJsonFile.location.name+" it is actually "+weatherDetailsJsonFile.location.localtime;
	return response;
} 
module.exports = time;