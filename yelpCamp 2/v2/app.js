const express 		= require('express'),
 	  app 	  		= express(),
 	  bodyParser	= require('body-parser'),
	  mong 	  		= require('mongoose');

mong.connect("mongodb://localhost/yelp_camp", { useNewUrlParser: true });
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

// schema setUp
const campgroundScheme = new mong.Schema({
	name: String,
	image: String,
	description: String,
});

const Campground = mong.model("Campground", campgroundScheme);


// Campground.create({
// 	name: 'hills',
// 	image: 'https://pixabay.com/get/57e1dd4a4350a514f6da8c7dda793f7f1636dfe2564c704c732d7dd59649c258_340.jpg',
// 	description: 'super hilly bro you know what I mean? like super gnarly',
	
// }, (err,dbObject)=>{
// 	if(err){
// 		console.log(`error: ${err}`);
// 	}else{
// 		console.log(`newly Created campground: ${dbObject}`);
// 	}
// });


//root
app.get("/", (req,res)=>{
	res.render('landing');
});

// INDEX route - show all campgrounds
app.get('/campgrounds', (req,res) => {
	
	// get all campgrounds from db 
	Campground.find({}, (err, allCampgrounds)=>{
		if(err){
			console.log(`error: ${err}`);
		}else{
			// then render file
			res.render("index", {campground: allCampgrounds});
		}				
	});
});

// CREATE add new campgrounds to db
app.post("/campgrounds", (req,res)=>{
	
	// get data from form && add to campgrounds array redirect to campgrounds page
	
	var name = req.body.name;
	var image = req.body.image;
	var description = req.body.description;
	var newCampground = {name: name, image: image, description: description};
	// no longer works without array
	// campgrounds.push(newCampground); 
	
	// create new campground & push into db
	Campground.create(newCampground, (err,newCampsites)=>{
		if(err){
			console.log(`error: ${err}`);
		}else{
			res.redirect("/campgrounds");		
		}
	});
	
});

// show form to create new campground
app.get("/campgrounds/new", (req, res) =>{
	res.render('new');
});  

// SHOW - shows more info about 1 campground
app.get("/campgrounds/:id", (req,res)=>{
	// find the campground with provided id
	Campground.findById(req.params.id,(err, foundCampground)=>{
		if(err){
			console.log(`error: ${err}`);
			// res.send('<srcipt>alert("invalid entry")</srcipt>');
			res.redirect('/campgrounds');
		}else{
			// render show template with that item 
			res.render('show', {campground: foundCampground});
		}
	});
});

app.listen(2468,()=>{
	console.log('yelpCamp server has started');
});

