var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const states = [
    "AK","AL","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO",
    "MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"
];

const categories = [
    "barbershop", "salon", "beauty", "tattoo", "nails", "piercings", "photography"
];

const accountSchema = new Schema({

    accountType: {
        type: String,
        required: "account type is required",
        enum: ['provider', 'user']
    },

    email: {
        type: String,
        required: "email is required",
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },

    password: {
        type: String,
        required: "password is required",
        validate: [({ length }) => length >= 6, "Password should be longer."]
    },

    userImageURL: {
        type: String,
        required: "",
        default: "../assets/defaultUser.png"
    },

    userName: {
        type: String,
        required: "user name is required"
    },

    providerCategory: {
        type: String,
        enum: categories
    },

    providerDescription: String,

    providerCity: String,

    providerState: {
        type: String,
        enum: states
    },

    createdDate: {
        type: Date,
        default: Date.now
    }

});

var account = mongoose.model("account", accountSchema);

module.exports = account;