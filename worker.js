const mongoose = require('mongoose');
const syncRequest = require('sync-request');
const fs = require('fs');
const jsonfile = require('jsonfile');

let weGotIds = require('./data/WeGot/idsForFEC.js');
let info1 = require('./data/WeGot/restaurants_detailed.json');
let info2 = require('./data/WeGot/dataWithTagline.json');
let info3 = require('./data/WeGot/dataWithShort.json');
let info4 = require('./data/WeGot/dataWithLong.json');

// mongoose.connect('mongodb://localhost/INSERT_DB_NAME');

// ============================================================================================== //
// ============================= Long Description Function ====================================== //
// ============================================================================================== //

const addRatings = function(data) {
  data.forEach((place, index) => {
    let zagat_all = (Math.random() * 5).toString().slice(0, 3);
    place.result['zagat_all'] = zagat_all;
    console.log(index, zagat_all);
  });
  jsonfile.writeFileSync('dataAllAgain.json', data, 'utf-8', (err) => {
    if (err) {
      throw err;
    }
  });
};

addRatings(info4);

















































// ============================================================================================== //
// ============================= Long Description Function ====================================== //
// ============================================================================================== //

// const addRatings = function(data) {
//   data.forEach((place, index) => {
//     let zagat_food = (Math.random() * 5).toString().slice(0, 3);
//     let zagat_decor = (Math.random() * 5).toString().slice(0, 3);
//     let zagat_service = (Math.random() * 5).toString().slice(0, 3);
//     place.result['zagat_food'] = zagat_food;
//     place.result['zagat_decor'] = zagat_decor;
//     place.result['zagat_service'] = zagat_service;
//     console.log(index, zagat_food, zagat_decor, zagat_service);
//   });
//   jsonfile.writeFileSync('dataAll.json', data, 'utf-8', (err) => {
//     if (err) {
//       throw err;
//     }
//   });
// };

// addRatings(info4);


// ============================================================================================== //
// ============================= Long Description Function ====================================== //
// ============================================================================================== //

// const addLongDescription = function(data) {
//   data.forEach((place, index) => {
//     var res = syncRequest('GET', 'https://baconipsum.com/api/?paras=1&type=meat-and-filler&start-with-lorem=1&make-it-spicy=1');
//     var ogLongDesc = JSON.parse(res.getBody().toString()).join(' ');
//     console.log(index, ogLongDesc);
//     place.result['long_description'] = ogLongDesc;
//   });
//   jsonfile.writeFileSync('dataWithLong.json', data, 'utf-8', (err) => {
//     if (err) {
//       throw err;
//     }
//   });
// };

// addLongDescription(info3);

// ============================================================================================== //
// ============================== Short Description Function ==================================== //
// ============================================================================================== //

// const addShortDescription = function(data) {
//   data.forEach((place, index) => {
//     var res = syncRequest('GET', 'https://baconipsum.com/api/?type=meat-and-filler&sentences=1');
//     var ogShortDesc = JSON.parse(res.getBody().toString()).join(' ');
//     var tempStr = '';
//     for (var letter of ogShortDesc) {
//       if (letter !== ',' && letter !== '.') {
//         tempStr += letter;
//       }
//     }
//     tempStr = tempStr.split(' ');
//     //console.log('og is: ',typeof ogShortDesc, ogShortDesc);
//     // console.log(tempStr);
//     var shortDescArr = [];
//     while (shortDescArr.length <= 10) {
//       var i = Math.floor(Math.random() * tempStr.length);
//       shortDescArr.push(tempStr[i]);
//     }
//     var shortDescText = shortDescArr.join(' ');
//     console.log(index, shortDescText);
//     place.result['short_description'] = shortDescText;
//   });
//   jsonfile.writeFileSync('dataWithShort.json', data, 'utf-8', (err) => {
//     if (err) {
//       throw err;
//     }
//   });
// };

// addShortDescription(info2);

// ============================================================================================== //
// ================================= Tagline Function =========================================== //
// ============================================================================================== //

// const addTagline = function(data) {
//   data.forEach((place, index) => {
//     var res = syncRequest('GET', 'https://baconipsum.com/api/?type=all-meat&sentences=1');
//     var ogTagline = JSON.parse(res.getBody().toString()).join(' ');
//     var tempStr = '';
//     for (var letter of ogTagline) {
//       if (letter !== ',' && letter !== '.') {
//         tempStr += letter;
//       }
//     }
//     tempStr = tempStr.split(' ');
//     //console.log('og is: ',typeof ogTagline, ogTagline);
//     var taglineText = '';
//     for (var i = 0; i < 4; i += 1) {
//       if (i === 3) {
//         taglineText += tempStr[i];
//       } else {
//         taglineText += tempStr[i] + ' ';
//       }
//     }
//     console.log(index, taglineText);
//     place.result['short_description'] = taglineText;
//   });
//   jsonfile.writeFileSync('test1.json', data, 'utf-8', (err) => {
//     if (err) {
//       throw err;
//     }
//   });
// };
// addTagline(info1);




































































































// ============================================================================================== //
// ============================================================================================== //
// ============================================================================================== //
// ============================================================================================== //
// ============================ Below is promise stuff for reference ============================ //
// ============================================================================================== //
// ============================================================================================== //
// ============================================================================================== //
// ============================================================================================== //



// var topStoriesURL = 'https://hacker-news.firebaseio.com/v0/topstories.json';
// var articlesURL = 'https://hacker-news.firebaseio.com/v0/item/';
// var authorsURL = 'https://hacker-news.firebaseio.com/v0/user/';
// var authorNames = [];


// var isJSONResponse = function(headers) {
//   return headers['content-type'].includes('json');
// };

// var getJSONFromHackerNewsAsync = function (url) {
//   return new Promise(function(resolve, reject) {
//     request.get(url, function(err, response, body) {
//       var data = null;
//       if (err) {
//         reject(err, null);
//       } else if (!isJSONResponse(response.headers)) {
//         reject(new Error('Response did not contain JSON data.'), null);
//       } else {
//         data = JSON.parse(body);
//         var topTenStoryIds = [];
//         for (var i = 0; i < 10; i += 1) {
//           topTenStoryIds.push(data[i]);
//         }
//         resolve(topTenStoryIds);
//       }
//     });
//   });
// };

// // var getArticlesByIdFromHackerNewsAsync = function (ids) {
// //   var promiseArr = [];
// //   ids.map(function(id) {
// //     var url = articlesURL + id + '.json';
// //     return new Promise(function(resolve, reject) {
// //       request.get(url, function(err, response, body) {
// //         var data = null;
// //         if (err) {
// //           reject(err, null);
// //         } else {
// //           var authorNames = [];
// //           data = JSON.parse(body);
// //           //console.log(data);
// //           authorNames.push(data);
// //           resolve(authorNames);
// //         }
// //       });
// //     });
// //   });
// // };

// var getArticlesByIdFromHackerNewsAsync = function (ids) {
//   var articleList = [];
//   var counter = 0;
//   return new Promise(function(resolve, reject) {
//     ids.map(function(id) {
//       var url = articlesURL + id + '.json';
//       request.get(url, function(err, response, body) {
//         var data = null;
//         if (err) {
//           reject(err, null);
//         } else {
//           data = JSON.parse(body);
//           //console.log(counter);
//           articleList.push(data);
//           if (counter === 9) {
//             resolve(articleList);
//           } else {
//             counter += 1;
//           }
//         }
//       });
//     });
//   });
// };

// var getAuthorInfoByNameFromHackerNewsAsync = function (articleList) {
//   var userInfo = [];
//   var authorNames = articleList.map(function(article) {
//     return article.by;
//   });
//   console.log('these are the author names', authorNames);
//   var counter = 0;
//   return new Promise(function(resolve, reject) {
//     authorNames.map(function(name) {
//       var url = authorsURL + name + '.json';
//       request.get(url, function(err, response, body) {
//         var data = null;
//         if (err) {
//           reject(err, null);
//         } else {
//           data = JSON.parse(body);
//           console.log(counter);
//           userInfo.push(data);
//           if (counter === 9) {
//             resolve(userInfo);
//           } else {
//             counter += 1;
//           }
//         }
//       });
//     });
//   });
// };

// // var getAuthorInfoByNameFromHackerNews = function (url, authors, callback) {
// //   request.get(url, function(err, response, body) {
// //     var data = null;
// //     if (err) {
// //       callback(err, null);
// //     } else {
// //       data = JSON.parse(body);
// //       callback(null, finalArray);
// //     }
// //   });
// // };

// // getJSONFromHackerNews(topStoriesURL, getArticlesByIdFromHackerNews(function(err) {
// //   console.log(err, 'err, expect to be null');
// //   mongoose.disconnect();
// // })
// // );

// // getJSONFromHackerNews(topStoriesURL, 
// //   getArticlesByIdFromHackerNews(url, 
// //     getAuthorInfoByNameFromHackerNews(url, function(err, data) {
// //       console.log(err, 'err, expect to be null');
// //       console.log(data, 'data, expect to be ids for top 500 stories');
// //       mongoose.disconnect();
// //     })
// //   )
// // );

// // getJSONFromHackerNews(topStoriesURL, function(err, data) {
// //   console.log(err, 'err, expect to be null');
// //   console.log(data, 'data, expect to be ids for top 500 stories');
// //   mongoose.disconnect();
// // });

// getJSONFromHackerNewsAsync(topStoriesURL)
//   .then(function(result) {
//     return getArticlesByIdFromHackerNewsAsync(result);
//   })
//   .then(function(result) {
//     return getAuthorInfoByNameFromHackerNewsAsync(result);
//   })
//   .then(function(result) {
//     console.log('yunuskoroglu', result);
//   })
//   .catch(function(err) {
//     console.log(err);
//   });
