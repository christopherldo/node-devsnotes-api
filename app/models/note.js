module.exports = (sequelize, DataTypes) => {
  const Note = sequelize.define('Note', {
    public_id: DataTypes.UUID,
    title: DataTypes.STRING,
    body: DataTypes.TEXT,
  });

  return Note;
};