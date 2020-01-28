const db = require("../models");

module.exports = {

  getAccount: function(req, res) { // Need to define code to verify credentials
    console.log("getAccount")
    // db.accounts // use "accounts" model
    // //   .findByID(req.params.accountID)
    //   .sort({ date: -1 })
    //   .then(dbModel => res.json(dbModel))
    //   .catch(err => res.status(422).json(err));
  },

  addAccount: function(req, res) {
    console.log("addAccount")
    db.accounts // use "accounts" model
      .create(req.body) // body requires:
                          // accountType (fixed to "provider"), email, password, userImageURL, userName, providerCategory, providerDescription, providerCity, providerState
                          // this should come from sign up form
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

};
