var mongoose = require("mongoose");
var mongooseTypePhone = require('mongoose-type-phone');
var Schema = mongoose.Schema;

const timeRanges = [
    "Morning: 8am - 12pm",
    "Afternoon: 1pm - 5pm",
    "Evening: 5pm - 9pm"
    ];  

const apptSchema = new Schema({

    fullName: {
        type: String,
        required: "Name is required"
    },
    
    email: {
        type: String,
        required: "Email is required",
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },

    phoneNumber: {
        type: mongoose.SchemaTypes.Phone,
        required: "Phone Number is required",
    },

    apptTime: {
        type: String,
        required: "appt time is required",
        enum: timeRanges
    },
    
    contactTime: {
        type: String,
        required: "contact time is required",
        enum: timeRanges
    },

    comments: String

});

var appointments = mongoose.model("appointments", apptSchema);

module.exports = appointments;