const NoteService = require('../services/NoteServiceMySQL');

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

    const notes = await NoteService.getAll();

    for (let note in notes) {
      json.result.push({
        public_id: notes[note].public_id,
        title: notes[note].title,
      });
    };

    res.json(json);
  },
  one: (req, res) => {

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

    json.result = await NoteService.new(data);

    res.json(json);
  },
  edit: (req, res) => {

  },
  delete: (req, res) => {

  },
};