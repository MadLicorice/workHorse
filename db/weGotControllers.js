var mongoose = require('mongoose');

var restaurantSchema = mongoose.Schema({
  id: {
    type: String,
    unique: true
  },
  by: String,
  title: String,
  score: Number,
  karma: Number
});

var RestaurantModel = mongoose.model('Restaurant', restaurantSchema);

const findAll = (callback) => {
  RestaurantModel.find({}, callback);
}

// const findTopTenByZagatFood = (callback) => {
//   RestaurantModel.find({}, callback).limit(10).sort({zagat_food: -1});
// }

const findOneById = (id, callback) => {
  RestaurantModel.find({id: id}, callback);
}

const insertOne = (restaurant, callback) => {
  RestaurantModel.create(restaurant, callback);
}

exports.findOneById = findOne;
exports.findAll = findAll;
exports.insertOne = insertOne;


// const findAll = (callback) => {
//   RestaurantModel.find({}, callback);
// };

// const findTopTenByZagatFood = (callback) => {
//   RestaurantModel.find({}, callback).limit(10).sort({zagat_food: -1});
// }