var express = require('express');
var app = express();

app.get("/", function(req,res){
	res.send("Hi there welcome to my assignment");
	console.log("connected to index");
});

app.get("/speak/:animal", function(req,res){
	
	var sounds = {
		pig: "Oink",
		cow: "Mo mo mo",
		dog: "wolf wolf wolf",
		cat: "pet me papi",
		goldfish: "... .. . ",
	};
	 
	var animal = (req.params.animal).toLowerCase();
	var sound = sounds[animal];
	
	console.log("the " + animal + " goes " + sound);
	res.send("the " + animal + " goes " + sound);
	
	
	// var animalRes; 
	
	// switch(animal.toLowerCase()){
	// 	case "dog":
	// 		animalRes = "bark bark";
	// 		break;
			
	// 	case "pig":
	// 		animalRes = "oink oink";
	// 		break;
			
	// 	case "cow":
	// 		animalRes = "moo moo";
	// 		break; 
		
	// 	default:
	// 		animalRes = "Undefinded";
	// 		break;
	// }
	
});


app.get("/repeat/:string/:number", function(req,res){

	var num, string,results='';
	
	num = req.params.number;
	string = req.params.string;
	
	for(i=0;i<num;i++){
		
		if(i>0){
			results += (" " + string);
		}else{
			results += string;
		}
		
	}
	
	console.log(results);
	res.send(results);
});


//error here
app.get("*", function(req,res){
	console.log('human race will die');
	res.send("404 you suck");
});




app.listen(4000, function(){
	console.log('connected');
});