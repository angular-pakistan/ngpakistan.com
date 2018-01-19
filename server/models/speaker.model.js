//////////////////////////
// Requires
//////////////////////////

var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , ObjectId = Schema.Types.ObjectId;


//////////////////////////
// Schema
//////////////////////////

var speakerModel = Schema({
    name : String,
    company : String,
    email : String,
    github : String ,
    linkedIn : String,
    twitter : String
});


//////////////////////////
// Export Schema
//////////////////////////

const speaker = mongoose.model('speakers',speakerModel);
module.exports.speaker = speaker;
