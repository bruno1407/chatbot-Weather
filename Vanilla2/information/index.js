'use strict';
var response;
const chatBotOpinion = (weatherDetailsJsonFile) =>{
	if(weatherDetailsJsonFile.current.temp_c < 10)
	{
		response = "\nIn "+ weatherDetailsJsonFile.location.name+", actually, " + weatherDetailsJsonFile.current.temp_c +"degree(s) It's cold and the weather is "+ weatherDetailsJsonFile.current.condition.text+". Don't forget your jacket"; 
	}
	else if (weatherDetailsJsonFile.current.temp_c >= 10 && weatherDetailsJsonFile.current.temp_c < 20){
		response = "\nIn "+ weatherDetailsJsonFile.location.name+", actually, " + weatherDetailsJsonFile.current.temp_c +"degrees, The current temperature is fine and the weather is "+ weatherDetailsJsonFile.current.condition.text; 
	}
	else{
		response = "\nIn "+ weatherDetailsJsonFile.location.name+", actually, " + weatherDetailsJsonFile.current.temp_c +" degrees, so hot ! And the weather is "+ weatherDetailsJsonFile.current.condition.text; 
	}
	return response;
} 
module.exports = chatBotOpinion;
