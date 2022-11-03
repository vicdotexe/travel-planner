const Location = require('./Location');
const Traveler = require('./Traveler');
const Trip = require('./Trip');

Traveler.hasMany(Trip);

Trip.hasMany(Traveler);
Trip.hasOne(Location);

Location.hasMany(Trip);

module.exports ={
    Location,
    Trip,
    Traveler
}