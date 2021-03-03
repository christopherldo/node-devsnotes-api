const NoteService = require('../services/NoteServiceMySQL');
const validator = require('validator');

module.exports = {
  ping: (req, res) => {
    res.json({
      pong: true,
    });
  },
  all: async (req, res) => {
    const json = {
      error: '',
      result: [],
    };

    let notes = {};

    try {
      notes = await NoteService.getAll();
    } catch (error) {
      json.error = error.message;
      res.status(500).send(json);
      return;
    };

    for (let note in notes) {
      json.result.push({
        public_id: notes[note].public_id,
        title: notes[note].title,
      });
    };

    res.json(json);
  },
  one: async (req, res) => {
    const json = {
      error: '',
      result: [],
    };

    const public_id = req.params.id;

    if (validator.isUUID(public_id, 4) === false) {
      json.error = 'The public id you informed is invalid. It must be a valid UUIDv4';
      res.status(400).send(json);
      return;
    };

    let note = null;

    try {
      note = await NoteService.findById(public_id);
    } catch (error) {
      json.error = error.message;
      res.status(500).send(json);
      return;
    };

    if (note === null) {
      json.error = 'The note you informed was not found on database';
      res.status(404).send(json);
      return;
    };

    json.result = {
      public_id: note.public_id,
      title: note.title,
      body: note.body,
    };

    res.json(json);
  },
  new: async (req, res) => {
    const json = {
      error: '',
      result: [],
    };

    const data = {
      title: req.body.title,
      body: req.body.body,
    };

    let note = null;

    try {
      note = await NoteService.add(data);
    } catch (error) {
      json.error = error.message;
      res.status(500).send(json);
      return;
    };

    json.result = {
      public_id: note.public_id,
      title: note.title,
      body: note.body,
    };

    res.json(json);
  },
  edit: async (req, res) => {
    const json = {
      error: '',
      result: [],
    };

    const public_id = req.params.id;

    if (validator.isUUID(public_id, 4) === false) {
      json.error = 'The public id you informed is invalid. It must be a valid UUIDv4';
      res.status(400).send(json);
      return;
    };

    const data = {
      title: req.body.title,
      body: req.body.body,
    };

    if(data.title === undefined && data.body === undefined){
      json.error = 'You must specify at least one field you want to update';
      res.status(400).send(json);
      return;
    };

    let note = null;

    try {
      note = await NoteService.update(public_id, data);
    } catch (error) {
      json.error = error.message;
      res.status(500).send(json);
      return;
    };

    if(note === null){
      json.error = 'The note you informed was not found on database';
      res.status(404).send(json);
      return;
    };

    json.result = {
      public_id: note.public_id,
      title: note.title,
      body: note.body,
    };

    res.json(json);
  },
  delete: async (req, res) => {

  },
};