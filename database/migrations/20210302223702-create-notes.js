module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Notes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      public_id: {
        allowNull: false,
        type: DataTypes.UUID,
        unique: true,
      },
      title: {
        type: DataTypes.STRING(200),
      },
      body: {
        type: DataTypes.TEXT
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('Notes');
  },
};