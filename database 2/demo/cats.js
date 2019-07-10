const mong = require('mongoose');

mong.connect("mongodb://localhost/cat_app", { useNewUrlParser: true });

const catSchema = new mong.Schema({
	name: String,
	age: Number,
	temperament: String,
});

const Cat = mong.model("Cat", catSchema);

// adding cats to db 

// let greg = new Cat({
// 	name: 'homo',
// 	age: 1, 
// 	temperament: 'bitchy',
// });

// greg.save((err,cat)=>{
	
// 	if(err){
// 		console.log(`something went wrong ${err}`);
// 	}else{
// 		console.log(`it saved to db ${cat}`);
// 	}
	
// });


Cat.create({
	name: 'snowey',
	age: 11,
	temperament: 'jerk',
}, (err,dbobj)=>{
	if(err){
		console.log(err);
	}else{
		console.log(dbobj);
	}
});


// retrieving all cats from db && console log each one 
Cat.find({}, (err, obj)=>{
	if(err){
		console.log(`error!! - ${err}`);
	}else{
		console.log(`all the cats ${obj}`);
	}
});



