const db = require("../models");

module.exports = {


  addAccount: function(req, res) {
    console.log(req.body)
    db.Accounts // use "accounts" model
      .create(req.body) // body requires:
                          // accountType (fixed to "provider"), email, password, userImageURL, userName, providerCategory, providerDescription, providerCity, providerState
                          // this should come from sign up form
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(400).json(err));
  },

};
