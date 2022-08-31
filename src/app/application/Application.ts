//personal details
export class Application {
	userId!: number;
	name!: string;
	age!: number;
	gender!: string;
	phoneNo!: number;
	emailId!: string;
	employment!: string;
	existingEmi!: number;
	salary!: number;
	aadharNo!: number;
	panNo!: string;
}

// address
export class app1 {
	userId!: number;
	state!: string;
	city!: string;
	area!: string;
	houseNo!: string;
	pinCode!: number;
}

// vehicle details
export class app3 {
	userId!: number;
	manufacturer!: string;
	vehicleType!: string;
	model!: string;
	exShowroomPrice!: number;
	onRoadPrice!: number;
}

//loan details
export class app4 {
	userId!: number;
	accountType!: string;
	amount!: number;
	loanTenure!: number;
	rateOfInterest!: number;
	emi!: number;
	loanStatus!: string;
}