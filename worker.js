const mongoose = require('mongoose');
const syncRequest = require('sync-request');
const fs = require('fs');
const jsonfile = require('jsonfile');

const weGotIds = require('./data/WeGot/idsForFEC.js');

//mongoose.connect('mongodb://localhost/INSERT_DB_NAME');

const worker = function(data) {
  let weGotPlaceIds = data.map(id => {
    return {
      hello: 'ha, funny',
      bye: 'lol cya',
    };
  });
  jsonfile.writeFileSync('weGotSomeIds', weGotPlaceIds, 'utf-8', (err) => {
    if (err) {
      throw err;
    }
  });
};

worker(weGotIds);

// the command to run this is: npm run worker













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
