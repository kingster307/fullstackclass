var faker = require('faker');

// var productName = faker.commerce.productName();
// var productPrice = faker.commerce.price();



for(i=0;i<10;i++){
	//call methods 10 times
	console.log(faker.commerce.productName() + '\n' + "$" + faker.commerce.price());
}


// faker.name.findName()

// faker.commerce.productName();
// faker.commerce.price();
