const NoteService = require('../services/NoteServiceMySQL');

module.exports = {
  ping: (req, res) => {
    res.json({
      pong: true,
    });
  },
};