
// Models
const speaker = require('../models/speaker.model').speaker

module.exports = {

  getSpeakers: () => {
    return speaker.find({}).exec()
  },

  getSpeaker: (id) => {
    const query = { _id: id }
    return speaker.findOne(query).exec()
  },

  save: (speakerObj) => {
    return speaker.create(speakerObj)
  },

  remove: (id) => {
    return speaker.findByIdAndRemove(id).exec()
  },

  update: (id, speakerObj) => {
    return speaker.findByIdAndUpdate(id, speakerObj).exec()
  }

}
