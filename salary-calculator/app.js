const yargs = require("yargs");

const perClassCalc = numClasses => {
	const classPay = 4.5
	const payPerHr = classPay*2
	const totalPay = numClasses*payPerHr
	console.log(`For ${numClasses} classes you will earn $${totalPay}`)
}

const avgPayCalc = (classesPerDay, numMonths) => {
	const classPay = 4.5
	const avgPay = classPay * classesPerDay * 30 * numMonths
	console.log(`Average pay for ${numMonths} month(s) is $${avgPay}`)
}


yargs.command({
	command: "per-class",
	describe: "calculate salary per number of classes",
	builder: {
		classNum:
		{
			type: "number",
			demandOption: true,
			describe: "number of classes"
		}
	},
	handler (argv) {
		perClassCalc(argv.classNum)
	}
})

yargs.parse();


