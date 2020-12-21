const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const symptomDataSchema = new Schema({
    sympiAt: String,
    symptom: String,
    cause: String,
    recom: String,
    suggWeb: String
});

module.exports= mongoose.model('symptomData', symptomDataSchema, 'symptomDatas');