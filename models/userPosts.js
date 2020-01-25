var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userPostsSchema = {

    accountID: String,
    
    postImageCaption: {
        type: String,
        validate: [({ length }) => length <= 140 , "140 characters max."]
    },

    postImageURL: {
        type: String,  
        required: true,
    },

    postedDate: {
        type: Date,
        default: Date.now
    }

}

var posts = mongoose.model("userPosts", userPostsSchema);

module.exports = posts;