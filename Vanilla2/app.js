'use strict';
const Readline = require ('readline'); // for reading inputs

const rl = Readline.createInterface({ // for reading inputs
input : process.stdin,
output : process.stdout,
terminal : false
});

const matcher = require('./matcher/index.js'); 
const weather = require('./weather/index.js');
const information=require('./information/index.js')
const wind=require('./wind/index.js')
const time=require('./time/index.js')
const forcast=require('./forcast/index.js')

rl.setPrompt ('>');
rl.prompt ();
rl.on ('line', reply => {
	reply = reply.replace("?", "").trim();
	matcher(reply,data=>{
	
		switch(`${data.intent}`)
		{ 
			case 'Hello' :
				console.log (`${data.entities.greeting} ! how are you?`) ;
				break;

			case 'CurrentWeather':
				//console.log(`la ville enregistrée est : ${data.entities.city}`)
				 InformationWeather(data).then(function(result){
				 	rl.prompt()
				})
				break;
			case 'CurrentTime':
				//console.log(`la ville enregistrée est : ${data.entities.city}`)
				 InformationTime(data).then(function(result){
				 	rl.prompt()
				})
				break;
			case 'WeatherForecast':
				//console.log(`Adj : ${data.entities.adjective} et ville : ${data.entities.city} et when : ${data.entities.when}`);				
				 WeatherForecast(data).then(function(result){
				 	rl.prompt();
				 })
				break;
			case 'Exit' :console.log ('See you !');
				process.exit(0);
				break;
			default:{
				console.log("Sorry, I don't understand your question..." );
				
				}	
			
		}rl.prompt();
	});
	
});


	function InformationWeather(data){
		return new Promise(function (resolve, reject){
			var Meteo;
			weather(data.entities.city).then(function(result){
				Meteo = result;				
				console.log('\x1b[37m%s\x1b[31m%s\x1b[37m%s',information(Meteo)+ '\n-Do you want to have information on ','the wind','?');
			}).then(function(result){
				rl.question('yes|no>', function(answer){
					console.log(wind(Meteo, answer));
					resolve("success");
				});
			})
		})
	}
	
	var Time;
	function InformationTime(data){
	return new Promise(function (resolve, reject){
			weather(data.entities.city).then(function(result){
			Time = result;
			console.log(time(Time));
			resolve("success");
			})
		})
	}
	
  var cityWeatherDetails;
  function WeatherForecast(data){
		return new Promise(function (resolve, reject){
			weather(data.entities.city).then(function(result){	
				cityWeatherDetails = result;
				var messageFromModule = forcast(cityWeatherDetails, data.entities.adjective, data.entities.when);
				console.log('\x1b[32m%s\x1b[37m%s', messageFromModule, "."); 
				resolve("success");
			})
		})
  }