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
        {
          name : String,
          company : String,
          email : String,
          github : String ,
          linkedIn : String,
          twitter : String
        }
      ]
    }
  ],
  subscribers:[
    {
      userID: String,
      date: String,
      level: Number,
      code: Number
    }
  ]
});


//////////////////////////
// Export Schema
//////////////////////////

var Meetup = mongoose.model('Meetup',meetupSchema,'meetups');
module.exports.Meetup = Meetup;
