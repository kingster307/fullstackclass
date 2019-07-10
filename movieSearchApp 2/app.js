var express = require("express");
var app = express();
var request = require("request");

app.set("view engine", "ejs");


app.get("/", (req, res)=>{
	res.render("search");
});
 
app.get("/results",(req,res)=>{
	
	var formSearch = req.query.search;
	var url = "http://www.omdbapi.com/?s=" + formSearch + "&apikey=thewdb";
	
	request(url, (error,response,body)=>{
		if(!error && response.statusCode==200){
			var data = JSON.parse(body);
			res.render("results", {data: data});
		}
	});
});



app.listen(1234, function(){
	console.log('server started');
});