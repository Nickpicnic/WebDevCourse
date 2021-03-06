var mongoose = require("mongoose"); 
mongoose.connect("mongodb://localhost:27017/blog_demo_2", {useNewUrlParser: true, useUnifiedTopology: true});

// POST - title, content
var postSchema = new mongoose.Schema({
    title: String, 
    content: String
});
var Post = mongoose.model("Post", postSchema);

// USER - email, name
var userSchema = new mongoose.Schema({
    email: String,
    name: String, 
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
        }
    ]
});
var User = mongoose.model("User", userSchema);

// Post.create({
//     title: "How to cook the best burger! Pt.3", 
//     content: "fnvdlsfmsldfkmsldmflsdkmsfdlsmflksdfm"
// }, (err, post) => {
//     User.findOne({email: "bob@gmail.com"}, (err, foundUser) => {
//         if (err) {
//             console.log(err);
//         } else {
//             foundUser.posts.push(post);
//             foundUser.save((err, data) => {
//                 if (err) {
//                     console.log(err);
//                 } else {
//                     console.log(data);
//                 }
//             });
//         }
//     });
// });

// User.create({
//     email: "bob@gmail.com",
//     name: "Bob Belcher"
// });

// Find user
// Find all posts for that user

User.findOne({email: "bob@gmail.com"}).populate("posts").exec((err, user) => {
    if (err) {
        console.log(err);
    } else {
        console.log(user);
    }
});