var unirest = require("unirest");

const convertGbp = (salary, callback) => {
  var getGbp = unirest(
    "GET",
    "https://currency13.p.rapidapi.com/convert/1/USD/GBP"
  );

  getGbp.headers({
    "x-rapidapi-host": "currency13.p.rapidapi.com",
    "x-rapidapi-key": "4f86f3edfdmshf18247783d4906cp1eef26jsn606d81d0aed8"
  });

  getGbp.end(function(res) {
    if (res.error) throw new Error(res.error);
    const result = res.body.amount * salary;
    callback(result);
  });
};

const convertCny = (salary, callback) => {
  var getRmb = unirest(
    "GET",
    "https://currency13.p.rapidapi.com/convert/1/USD/CNY"   
  );

  getRmb.headers({
    "x-rapidapi-host": "currency13.p.rapidapi.com",
    "x-rapidapi-key": "4f86f3edfdmshf18247783d4906cp1eef26jsn606d81d0aed8"
  });

  getRmb.end(function(res) {
    if (res.error) throw new Error(res.error);
    const result = res.body.amount * salary;
    callback(result);
  });
};

module.exports = {
  convertGbp: convertGbp,
  convertCny: convertCny
};
