'use strict';
// model for location objects from databse ---- Harman
module.exports = function(sequelize, DataTypes) {
  var location = sequelize.define('location', {
    name: DataTypes.STRING,
    latitude: DataTypes.DOUBLE,
    longitude: DataTypes.DOUBLE,
    city: DataTypes.STRING,
    country: DataTypes.STRING,
    start_of_day: DataTypes.TIME,
    visit_duration_keep_fraction: DataTypes.DECIMAL,
    total_visitors: DataTypes.INTEGER,
    campaign_duration: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // there are no associations
      }
    }
  });
  return location;
};