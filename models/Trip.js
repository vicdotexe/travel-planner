const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Trip extends Model {}

Trip.init(
  {
    budget: {
      type: DataTypes.DECIMAL
    },
    traveler_count:{
        type: DataTypes.INTEGER
    }
  },
  {
    sequelize,
    timestamps: false,
  }
);

module.exports = Trip;