const router = require("express").Router();
const accountsController = require("../../controllers/accountsController");

router
  .route("/api/accounts")
  .post(accountsController.addAccount); // add an account record to accounts model

  router
  .route("/api/accounts/id:")
  .get(accountsController.getAccount) // get account record that matches user name and password from accounts model

module.exports = router;