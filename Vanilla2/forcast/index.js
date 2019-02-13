'use strict';

var response="";
var forecastday;
var maxTemp;
var textConditions;
const answer = (weatherDetailsJsonFile, adjectiveInput, when) =>{

	const days = weatherDetailsJsonFile.forecast.forecastday;
	
	if(when == "today"){
		
		forecastday = days[0].date;
		maxTemp = days[0].day.maxtemp_c;
		textConditions = days[0].day.condition.text;

		if(adjectiveInput == "cold" && maxTemp < 13)
		{
			response = "YES, today the " + forecastday + " the max temperature will be " + maxTemp + " and the weather will be " + textConditions;
		}
		else if(adjectiveInput == "cold" && maxTemp > 13){
			response = "NO that's fine, today the " + forecastday + " the max temperature will be " + maxTemp + " and the weather will be " + textConditions;
		}
	
		else if(adjectiveInput == "rainy" && findWord("rain", textConditions) == true){
			response = "YES it's rainy today, the " + forecastday + " the max temperature will be " + maxTemp + " and the weather will be " + textConditions;
		}
		
		else if(adjectiveInput == "rainy" && findWord("rain", textConditions) == false){
			response = "NO it's not rainy, today the " + forecastday + " the max temperature will be " + maxTemp + " and the weather will be " + textConditions;
		}	
		
		else if(adjectiveInput == "sunny" && findWord("sunny", textConditions) == true){
			response = "YES it's sunny today, the " + forecastday + " the max temperature will be " + maxTemp + " and the weather will be " + textConditions;
		}
		
		else if(adjectiveInput == "sunny" && findWord("sunny", textConditions) == false){
			response = "NO it's not sunny, today the " + forecastday + " the max temperature will be " + maxTemp + " and the weather will be " + textConditions;
		}		
	}
	else if(when == "tomorrow"){
		
		forecastday = days[1].date;
		maxTemp = days[1].day.maxtemp_c;
		textConditions = days[1].day.condition.text;

		if(adjectiveInput == "cold" && maxTemp < 13)
		{
			response = "YES, tomorrow the " + forecastday + " the max temperature will be " + maxTemp + " and the weather will be " + textConditions;
		}
		else if(adjectiveInput == "cold" && maxTemp > 13){
			response = "NO that's fine, tomorrow the " + forecastday + " the max temperature will be " + maxTemp + " and the weather will be " + textConditions;
		}
		
		else if(adjectiveInput == "rainy" && findWord("rain", textConditions) == true){
			response = "YES it's rainy tomorrow, the " + forecastday + " the max temperature will be " + maxTemp + " and the weather will be " + textConditions;
		}
	
		else if(adjectiveInput == "rainy" && findWord("rain", textConditions) == false){
			response = "NO it's not tomorrow, today the " + forecastday + " the max temperature will be " + maxTemp + " and the weather will be " + textConditions;
		}	
		
		else if(adjectiveInput == "sunny" && findWord("sunny", textConditions) == true){
			response = "YES it's sunny tomorrow, the " + forecastday + " the max temperature will be " + maxTemp + " and the weather will be " + textConditions;
		}
		
		else if(adjectiveInput == "sunny" && findWord("sunny", textConditions) == false){
			response = "NO it's not sunny, tomorrow the " + forecastday + " the max temperature will be " + maxTemp + " and the weather will be " + textConditions;
		}		
	}
	else{
		reponse = "Error when"
	}
	return response;
} 

function findWord(word, str) {
  return RegExp('\\b'+ word +'\\b').test(str)
}

module.exports = answer;

