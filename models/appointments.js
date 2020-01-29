var mongoose = require("mongoose");
var mongooseTypePhone = require('mongoose-type-phone');
var Schema = mongoose.Schema;


const apptSchema = new Schema({

    fullName: {
        type: String,
        required: "Name is required"
    },
    
    apptTime: {
        type: String,
        required: "appt time is required",
    },

});

var Appointments = mongoose.model("appointments", apptSchema);

module.exports = Appointments;