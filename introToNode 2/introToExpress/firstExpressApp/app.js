var express = require('express');
var app = express();

app.get("/",function(req,res){
	res.send("Hello");
});

app.get("/bye", function(req,res){
	res.send("Goodbye");
});

app.get("/dog", function(req,res){
	console.log("req made");
	res.send("Meow");
});

app.get("*", function(req,res){
	res.send("StarBpy");
});



app.listen("3000",function (){
	console.log("I am on y heardd");
});


