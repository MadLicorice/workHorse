const mongoose = require('mongoose');
const db = require('./db/weGotControllers.js')

const data = require('./data/WeGot/finData.json');

//mongoose.connect('mongodb://localhost/weGotData');

const seedDb = function(data) {
  let overviewInfo = data.map(restaurant => {
    return restaurant.result.address_components.map(address => {
      return {
        id: restaurant.result.place_id,
        tagline: restaurant.result.tagline,
        type: 'restaurant',
        vicinity: address[2].long_name,
        priceLevel: restaurant.result.price_level,
        zagatFood: Number(restaurant.result.zagat_food),
        zagatDecor: Number(restaurant.result.zagat_decor),
        zagatService: Number(restaurant.result.zagat_service),
        longDescription: restaurant.result.long_description,
      }
    })
  });
};

seedDb(data);