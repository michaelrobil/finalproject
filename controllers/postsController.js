const db = require("../models");

module.exports = {

  getMemberPosts: function(req, res) {
    console.log("get member posts")
    db.posts // use "posts" model
    //   .findByID(req.params.accountID) // need account ID
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  addPost: function(req, res) {
    console.log("addPost")
    db.posts // use "posts" model
      .create(req.body) // body requires:
                            // accountID, postImageCaption, postImageURL
                            //this should come from add a post form
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

    getPosts: function(req, res) {
      console.log("get all posts")
      db.posts
      //   .findByID(req.params.accountID)
        .sort({ date: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

};