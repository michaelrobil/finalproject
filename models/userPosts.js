var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userPostsSchema = new Schema({

    accountID: {
        type: String,
        required: true
    },
    companyImageURL: {
        type: String,
        required: "",
        default: "https://image.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600w-1095249842.jpg"
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