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
    name : {
      type: String,
      required: true,
      trim: true
    },
    company : {
      type: String,
      trim: true
    },
    email : {
      type: String,
      trim: true
    },
    github : {
      type: String,
      trim: true
    },
    linkedIn : {
      type: String,
      trim: true
    },
    twitter : {
      type: String,
      trim: true
    },
});


//////////////////////////
// Export Schema
//////////////////////////

const speaker = mongoose.model('speakers',speakerModel);
module.exports.speaker = speaker;
