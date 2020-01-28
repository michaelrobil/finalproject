const router = require("express").Router();
const postsController = require("../../controllers/postsController");

router
  .route("/api/posts/:id") // ":id"=accountID from userposts
  .get(postsController.getMemberPosts) // get all userPosts records that match the account ID
  .post(postsController.addPost); // add a userPosts record with the stored account ID

  router
  .route("/api/posts")
  .get(postsController.getPosts) // get all userPosts records

module.exports = router;
