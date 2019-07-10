const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/blog_demo_2", { useNewUrlParser: true });

// post
let postSchema = new mongoose.Schema({
	title: String,
	content: String,
}), Post = mongoose.model('Post', postSchema);


// user
let userSchema = new mongoose.Schema({
	email: String,
	name: String,
	posts: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Post",
		}
	],
}), UserModel = mongoose.model("User",userSchema);


// Post.create({
// 	title: 'how to cook',
// 	content: "ahahahahahhahahahaha",
// }, (err, post) =>{
// 	console.log(`post: ${post}`);
// });


UserModel.find({},(err,user)=>{
	if(err){
		console.log(`error: ${err}`);
	}else{
		console.log(`user: ${user}`);
	}
});


// UserModel.create({
// 	email: "I dont like it",
// 	name: "bob",
// }, (err, user)=>{
// 	if(err){
// 		console.log(`Error: ${err}`);
// 	}else{
// 		console.log(`User: ${user}`);
// 	}
// });






