const router = require("express").Router();
const accountsController = require("../../controllers/accountsController");
const auth = require("../../config/auth");

router
  .route("/")
  .post(accountsController.addAccount); // add an account record to accounts model

  router.route("/login").post((req, res) => {
    auth
      .logUserIn(req.body.email, req.body.password)
      .then(dbUser => {res.json(dbUser)
      console.log(dbUser)
      })
      .catch(err => res.status(400).json(err));
  });
  
module.exports = router;