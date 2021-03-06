'use strict';

var filterData = function(list, filterID) {
  var newList = [];
  var lastThreeDays = Date.now() - 1000 * 3600 * 24 * 3;
  switch (filterID) {
    case 'reviews-all':
      newList = list;
      break;
    case 'reviews-recent':
      newList = list.filter(function (listItem) {
        return listItem.created <= lastThreeDays;
      }).sort(function (a, b) {
        return b.created - a.created;
      });
      break;
    case 'reviews-good':
      newList = list.filter(function(listItem) {
        return listItem.rating >= 3;
      }).sort(function(a, b) {
        return b.rating - a.rating;
      });
      break;
    case 'reviews-bad':
      newList = list.filter(function(listItem) {
        return listItem.rating < 3;
      }).sort(function(a, b) {
        return a.rating - b.rating;
      });
      break;
    case 'reviews-popular':
      newList = list.slice().sort(function(a, b) {
        return b.review_usefulness - a.review_usefulness;
      });
      break;
  }

  return newList;
};

module.exports = filterData;
