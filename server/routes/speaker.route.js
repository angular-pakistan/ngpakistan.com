const express = require('express')
const router = express.Router()
const speakerService = require('../services/speaker.service')
const passport = require('passport')
const isAdmin = require('../middlewares/is-admin.middleware').isAdmin

router.get('/', (req, res, next) => {
  speakerService.getSpeakers()
    .then((speakers) => res.json({
      href: req.hostname,
      data: speakers
    }))
    .catch(err => { throw err })
})

router.get('/:id', (req, res, next) => {
  const id = req.params.id

  speakerService.getSpeaker(id)
    .then((speaker) => res.json({
      href: req.hostname,
      data: speaker
    }))
    .catch(err => { throw err })
})

router.post('/', passport.authenticate('jwt', { session: false }), isAdmin, (req, res, next) => {
  if (req.body.name) {
    const {
      name,
      email,
      company,
      github,
      linkedIn,
      twitter
    } = req.body

    const speaker = {
      name,
      email,
      company,
      github,
      linkedIn,
      twitter
    }
    speakerService.save(speaker)
      .then((speaker) => res.json({
        href: req.hostname,
        data: speaker
      }))
      .catch(err => { throw err })
  }
})

router.put('/:id', passport.authenticate('jwt', { session: false }), isAdmin, (req, res, next) => {
  if (req.body.name) {
    const name = req.body.name
    const email = req.body.email
    const company = req.body.company
    const github = req.body.github
    const linkedIn = req.body.linkedIn
    const twitter = req.body.twitter

    const speaker = {
      name,
      email,
      company,
      github,
      linkedIn,
      twitter
    }

    const id = req.params.id
    speakerService.update(id, speaker)
      .then((speaker) => res.json({
        href: req.hostname,
        data: speaker
      }))
      .catch(err => { throw err })
  }
})

router.delete('/:id', passport.authenticate('jwt', { session: false }), isAdmin, (req, res, next) => {
  const id = req.params.id
  speakerService.remove(id)
    .then((speaker) => res.json({
      href: req.hostname,
      data: speaker
    }))
    .catch(err => { throw err })
})

module.exports = router
