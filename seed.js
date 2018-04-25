const mongoose = require('mongoose');
const db = require('./db/mvpSchema.js')

// const data = require('./data/WeGot/finData.json');
const data = require('./data/MVP/studiesFin.json');

mongoose.connect('mongodb://localhost/ctgovtrials');

const seedDb = function(data) {
  let trialsFixed = d ata.map(trial => {
    return {
      id: trial.id,
      type: trial.json_featuretype,
      armGroupLabel: trial.arm_group_label,
      description: trial.description,
      interventionName: trial.intervention_name,
      interventionType: trial.intervention_type,
    }
  });
  db.insertMany(trialsFixed, () => console.log('done seeding!'));
};

seedDb(data);





























































// const seedDb = function(data) {
//   let overviewInfo = data.map(restaurant => {
//     return restaurant.result.address_components.map(address => {
//       return {
//         id: restaurant.result.place_id,
//         tagline: restaurant.result.tagline,
//         type: 'restaurant',
//         vicinity: address[2].long_name,
//         priceLevel: restaurant.result.price_level,
//         zagatFood: Number(restaurant.result.zagat_food),
//         zagatDecor: Number(restaurant.result.zagat_decor),
//         zagatService: Number(restaurant.result.zagat_service),
//         longDescription: restaurant.result.long_description,
//       }
//     })
//   });
// };

// seedDb(data);
