const {
  Note
} = require('../models');
const uuid = require('uuid');

const findOne = async public_id => {
  const note = await Note.findOne({
    where: {
      public_id,
    },
  });

  return note;
};

module.exports = {
  new: async data => {
    do {
      data.public_id = uuid.v4();
      console.log(data.public_id);
    } while (await findOne(data.public_id));

    const note = await Note.create({
      public_id: data.public_id,
      title: data.title,
      body: data.body,
    });

    return note;
  },
};