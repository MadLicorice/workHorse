const mongoose = require('mongoose');
const syncRequest = require('sync-request');
const fs = require('fs');
const jsonfile = require('jsonfile');

const data = require('./data/WeGot/idsForFEC.js');

//mongoose.connect('mongodb://localhost/INSERT_DB_NAME');

const seedDB = function(data) {
  let weGotPlaceIds = data.map(restaurant => {
    return (restaurant.place_id).toString();
  });
  fs.writeFileSync('weGotSomeIds.txt', weGotPlaceIds, 'utf-8', (err) => {
    if (err) {
      throw err;
    }
  });
};

seedDb(data);

// the command to run this is: npm run worker