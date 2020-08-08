const api = require("./conversion_api");
const chalk = require("chalk");

const perClassCalc = numClasses => {
  const classPay = 4.5;
  const totalPay = numClasses * classPay;

  console.log(chalk.bold.gray.inverse("For " + chalk.white(numClasses) + " classes you will earn:"));
  console.log(chalk.cyan.bold("$" + totalPay));
  api.convertGbp(totalPay, result => {
    console.log(chalk.magenta.bold("£" + Math.round(result)));
  });
  api.convertCny(totalPay, result => {
    console.log(chalk.yellow.bold("元" + Math.round(result)));
  });
};

const userInput = parseInt(process.argv[2]);

if (!userInput) {
  console.log(chalk.bgRed("Please enter the number of classes you have taught so far"));
} else {
  perClassCalc(process.argv[2]);
}
