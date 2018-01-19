const express = require('express');
const router = express.Router();
const speakerService = require('../services/speaker.service');
const _ = require('lodash');

router.get('/', (req, res, next) => {

  speakerService.getSpeakers()
    .then((speakers) => res.json({
                        href: req.hostname,
                        data: speakers
                      }))
    .catch(err => {throw err;});

});

router.get('/:id', (req, res, next) => {
  const id = req.params.id;

  speakerService.getSpeaker(id)
    .then((speaker) => res.json({
                          href: req.hostname,
                          data: speaker
                        }))
    .catch(err => {throw err;});
});

router.post('/', (req, res, next) => {
	const name = req.body.name;
	const email = req.body.email;
	const company = req.body.company;
	const github = req.body.github;
	const linkedIn = req.body.linkedIn;
	const twitter = req.body.twitter;
  
	const speaker = {name,
									email,
									company,
									github,
									linkedIn,
									twitter
                };
  speakerService.save(speaker)
    .then((speaker) => res.json({
                        href: req.hostname,
                        data: speaker
                      }))
    .catch(err => {throw err;});
});

router.put('/:id', (req, res, next) => {
  const name = req.body.name;
	const email = req.body.email;
	const company = req.body.company;
	const github = req.body.github;
	const linkedIn = req.body.linkedIn;
	const twitter = req.body.twitter;
  
	const speaker = {name,
									email,
									company,
									github,
									linkedIn,
									twitter
								};

  const id = req.params.id;
  speakerService.update(id, speaker)
    .then((speaker) => res.json({
                        href: req.hostname,
                        data: speaker
                      }))
    .catch(err => {throw err;});
})

router.delete('/:id', (req, res, next) => {
  const id = req.params.id;
  speakerService.remove(id)
    .then((speaker) => res.json({
                        href: req.hostname,
                        data: speaker
                      }))
    .catch(err => {throw err;});
});



module.exports = router;
