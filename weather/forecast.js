const request = require("request")

const forecast = (lat, long, callback) => {
    const url =
      "https://api.darksky.net/forecast/4d1bcda0e74126789d66b88bc45b2fd2/" +
      encodeURIComponent(lat) + "," +
      encodeURIComponent(long) +
      "?exclude=minutely,hourly,alerts,flags&units=si";
  
    request(
      {
        url: url,
        json: true
      },
      (error, response) => {
        if (error) {
          callback("Could not connect to weather service", undefined);
        } else if (response.body.error) {
          callback("Unable to find location", undefined);
        } else {
          callback(undefined, {
            summary: response.body.daily.summary,
            temperature: response.body.currently.temperature
          });
        }
      }
    );
  };

  module.exports = forecast