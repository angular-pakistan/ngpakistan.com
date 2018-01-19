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
  sequenceNo: Number,
  name: String,
  date:String,
  startTime:String,
  endTime:String,
  location:String,
  city:String,
  host:String,
  talks:[
    {
      title : String ,
      slides : String,
      video : String,
      speaker : [
        { type: ObjectId, ref: 'speakers'}
      ]
    }
  ],
  subscribers:[
    {
      userID: { type:ObjectId , ref:'users' },
      date: String,
      level: Number,
      code: Number
    }
  ]
});


//////////////////////////
// Export Schema
//////////////////////////

var Meetup = mongoose.model('meetup',meetupSchema);
module.exports.Meetup = Meetup;
