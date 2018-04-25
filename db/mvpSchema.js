var mongoose = require('mongoose');

var studiesSchema = mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  type: String,
  armGroupLabel: String,
  description: String,
  interventionName: String,
  interventionType: String
});

var StudiesModel = mongoose.model('Studies', studiesSchema);

const findAll = (callback) => {
  StudiesModel.find({}, callback);
}

// const findBySomeCriteria = (callback) => {
//   StudiesModel.find({}, callback).limit(10).sort({type: -1});
// }

const insertMany = (trials, callback) => {
  StudiesModel.insertMany(trials, callback)
}

const findOneById = (id, callback) => {
  StudiesModel.find({id: id}, callback);
}

const insertOne = (study, callback) => {
  StudiesModel.create(study, callback);
}

module.exports = {
  findAll,
  insertMany,
  insertOne,
  findOneById
}

// exports.findOneById = findOne;
// exports.findAll = findAll;
// exports.insertOne = insertOne;
