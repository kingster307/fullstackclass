var express = require('express');
var app = express();
var bodyParser = require('body-parser'); 


app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');


var campgrounds = [
		{name: "salmon creek", image: "https://pixabay.com/get/57e2d54b4852ad14f6da8c7dda793f7f1636dfe2564c704c732d7dd59649c258_340.jpg"},
		{name: "granite hill", image: "https://pixabay.com/get/57e1d14a4e52ae14f6da8c7dda793f7f1636dfe2564c704c732d7dd59649c258_340.jpg"},
		{name: "mountian goats rest", image: "https://pixabay.com/get/50e9d4474856b108f5d084609620367d1c3ed9e04e50744f77297ad5934ac5_340.jpg"},
	];


app.get("/", (req,res)=>{
	res.render('landing');
});

app.get('/campgrounds', (req,res) => {
	
	res.render('campgrounds', {campground: campgrounds});

});



app.post("/campgrounds", (req,res)=>{
	
	// get data from form && add to campgrounds array redirect to campgrounds page
	
	var name = req.body.name;
	var image = req.body.image;
	var newCampground = {name: name, image: image};
	campgrounds.push(newCampground);
	res.redirect("/campgrounds");
});


app.get("/campgrounds/new", (req, res) =>{
	res.render('new');
});





app.listen(2468,()=>{
	console.log('yelpCamp server has started');
});

