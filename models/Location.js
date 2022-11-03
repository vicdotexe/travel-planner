const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Location extends Model {}

Location.init(
  {
    name: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    timestamps: false,
  }
);

module.exports = Location;