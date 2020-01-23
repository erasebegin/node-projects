

function classCalc (numClasses) {

	const classPay = 4.5
	const classTime = 25
	const payPerHr = classPay*2
	const totalPay = numClasses*payPerHr
	console.log(`For ${numClasses} classes you will earn $${totalPay}`)
	}

function avgPayCalc (classesPerDay, numMonths) {
	
	const classPay = 4.5
	const avgPay = classPay * classesPerDay * 30 * numMonths

	console.log(`Average pay for ${numMonths} month(s) is $${avgPay}`)
	}



classCalc(47)
avgPayCalc(10,1)
avgPayCalc(11,1)
