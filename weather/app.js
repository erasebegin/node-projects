const chalk = require("chalk");

const geocode = require("./geocode");
const forecast = require("./forecast");

const {argv} = process

if (argv.length <= 2) {
  console.log("Please enter a location");
} else {
  geocode(argv[2], (error, geocodeData) => {
    if (error) {
      return console.log(error);
    }

    const { lat, long, location } = geocodeData;

    forecast(lat, long, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }

      const { summary, temperature, precipitation } = forecastData;

      console.log(chalk.bgYellow.bold(location));
      console.log(chalk.bgGreen(summary));
      console.log(chalk.bgGreen("Temperature: " + temperature + "°C"));
      console.log(
        chalk.bgGreen("There is a " + precipitation + "% chance of rain today.")
      );
    });
  });
}
