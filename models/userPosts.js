var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userPostsSchema = new Schema({

    accountID: {
        type: String,
        required: true
    },
    
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

});

var Posts = mongoose.model("userPosts", userPostsSchema);

module.exports = Posts;