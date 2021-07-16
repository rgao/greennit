module.exports = function(sequelize, DataTypes) {
  var Sub = sequelize.define("Subgreennit", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    icon: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: {
        len: [1]
      }
    }
  });
  return Sub;
};