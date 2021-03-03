const NoteService = require('../services/NoteServiceMySQL');

module.exports = {
  ping: (req, res) => {
    res.json({
      pong: true,
    });
  },
  all: (req, res) => {

  },
  one: (req, res) => {

  },
  new: async (req, res) => {
    const data = {
      title: req.body.title,
      body: req.body.body,
    };

    return res.json(await NoteService.new(data));
  },
  edit: (req, res) => {

  },
  delete: (req, res) => {

  },
};