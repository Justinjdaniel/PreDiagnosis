const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const doctorSchema = new Schema({
    docName : String,
    docDeg :String,
    clinicName : String,
    phone : Number,
    website : String,
    starRating : Number,
    imageUrl : String
})

var DoctorData = mongoose.model('doctor', doctorSchema);

module.exports = DoctorData;