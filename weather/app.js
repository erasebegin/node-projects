const chalk = require("chalk");

const geocode = require("./geocode");
const forecast = require("./forecast");

if(process.argv.length <= 2) {
    console.log("Please enter a location")
}
else {
    geocode(process.argv[2], (error, geocodeData) => {
        if (error) {
          return console.log(error);
        }
        
      
        forecast(geocodeData.lat, geocodeData.long, (error, forecastData) => {
          if (error) {
            return console.log(error);
          }
          console.log(chalk.bgYellow.bold(geocodeData.location));
          console.log(chalk.bgGreen(forecastData.summary));
          console.log(chalk.bgGreen("Temperature: " + forecastData.temperature + "°C"));
        });
      });
}
