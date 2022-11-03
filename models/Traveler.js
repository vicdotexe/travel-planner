const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Traveler extends Model {}

Traveler.init(
  {
    name: {
      type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    }
  },
  {
    sequelize,
    timestamps: false,
  }
);

module.exports = Traveler;