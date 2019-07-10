const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/blog_demo", { useNewUrlParser: true });

// post
let postSchema = new mongoose.Schema({
	title: String,
	content: String,
}), PostModel = mongoose.model('Post', postSchema);


// user
let userSchema = new mongoose.Schema({
	email: String,
	name: String,
	posts: [postSchema],
}), UserModel = mongoose.model("User",userSchema);


// let newUser = new UserModel({
// 	email: 'yourmom@123.com',
// 	name: 'Pee',
// });

// newUser.posts.push({
// 	title: "how to brew polly juice",
// 	content: "jkjk go home && sleep",
// });

// newUser.save((err, user)=>{
// 	if(err){
// 		console.log(`error: ${err}`);
// 	}else{
// 		console.log(user);
// 	}
// });


// let newPost = new PostModel({
// 	title: "I like ice cream",
// 	content: "it was nice oh so nice",
// });

// newPost.save((err, post)=>{
// 	if(err){
// 		console.log(`error: ${err}`);
// 	}else{
// 		console.log(`post: ${post}`);
// 	}
// });

// UserModel.findOne({name: "Pee"}, (err, user)=>{
// 	if(err){
// 		console.log(`Error: ${err}`);
// 	}else{
// 		// console.log(`user: ${user}`);
// 		user.posts.push({
// 			title: '3 things I hate more than you',
// 			 content: 'you mother, your father, your sister',
// 		});
// 		user.save((err, user) =>{
// 			if(err){
// 				console.log(`error: ${err}`);
// 			}else{
// 				console.log(`user: ${user}`);
// 			}
// 		});
// 	}
// });

PostModel.find({}, (err, returning)=>{
	if(err){
		console.log(`error: ${err}`);
	}else{
		console.log(`returning: ${returning}`);
	}
});




