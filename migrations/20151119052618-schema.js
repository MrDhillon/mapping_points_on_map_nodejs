'use strict';
// creating initial database schema through database migration ---- Harman
module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('locations',{
      name: {
        type: Sequelize.STRING
      },
      latitude: {
        type: Sequelize.DOUBLE
      },
      longitude: {
        type: Sequelize.DOUBLE
      },
      city: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      rss_range: {
        type: Sequelize.INTEGER
      },
      tz: {
        type: Sequelize.INTEGER
      },
      tz_index: {
        type: Sequelize.INTEGER
      },
      duration_threshold: {
        type: Sequelize.INTEGER
      },
      start_of_day: {
        type: Sequelize.TIME
      },
      is_updating: {
        type: Sequelize.INTEGER
      },
      rss_campaign: {
        type: Sequelize.INTEGER
      },
      session_timeout: {
        type: Sequelize.INTEGER
      },
      raw_data: {
        type: Sequelize.INTEGER
      },
      campaign_duration: {
        type: Sequelize.INTEGER
      },
      rss_walkby: {
        type: Sequelize.INTEGER
      },
      visit_duration_keep_fraction: {
        type: Sequelize.DECIMAL
      },
      total_visitors: {
        type: Sequelize.INTEGER
      }
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('locations');
  }
};
