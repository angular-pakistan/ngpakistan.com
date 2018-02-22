//////////////////////////
// Requires
//////////////////////////

var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , ObjectId = Schema.Types.ObjectId;


//////////////////////////
// Schema
//////////////////////////

var meetupSchema = Schema({
  sequenceNo: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  date:{
    type: String,
    required: true,
    trim: true
  },
  startTime:{
    type: String,
    required: true,
    trim: true
  },
  endTime:{
    type: String,
    required: true,
    trim: true
  },
  location:{
    type: String,
    required: true,
    trim: true
  },
  city:{
    type: String,
    required: true,
    trim: true
  },
  host:{
    type: String,
    required: true,
    trim: true
  },
  talks:[
    {
      title : {
        type: String,
        required: true,
        trim: true
      },
      slides : {
        type: String,
        trim: true
      },
      video : {
        type: String,
        trim: true
      },
      speaker : [
        { type: ObjectId, ref: 'speakers'}
      ]
    }
  ],
  subscribers:[
    {
      user: { type:ObjectId , ref:'users' },
      date: {
        type: String,
        trim: true
      },
      confirmed: { type: Boolean, default: false }
    }
  ]
});


//////////////////////////
// Export Schema
//////////////////////////

var Meetup = mongoose.model('meetup',meetupSchema);
module.exports.Meetup = Meetup;
