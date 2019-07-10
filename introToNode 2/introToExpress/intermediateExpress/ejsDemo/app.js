var express = require('express');
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/",function(req,res){
	
	res.render("home");
	// res.send("<h1>Welcome to Hell</h1>");
});

app.get("/fallinlovewith/:thing", function(req,res){
	var thing = req.params.thing;
	// res.send("you fell in love with " + thing);
	res.render("love", {thingVar: thing});
});

app.get("/posts", function(req,res){
	var posts = [
		{title: "Post 1", aurthor:"Pete",},
		{title: "Post 2", aurthor:"Peter the great",},
		{title: "Post 3", aurthor:"Pete the heat",},
	];
	console.log("connected to posts page");
	res.render("posts",{posts: posts});
});

app.listen(3000,function(){
	console.log("Connected");
});