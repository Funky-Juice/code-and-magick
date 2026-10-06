// utils/logger.js
//
'use strict';

var log4js = require('log4js');
var config = require('../config');
var level = config.log_level;

log4js.configure({
  appenders: {
    console: {
      type: 'console',
      layout: {
        type: 'pattern',
        pattern: '%[%r %5.5p: %m%]'
      }
    }
  },
  categories: {
    default: {
      appenders: ['console'],
      level: level
    },
    basic: {
      appenders: ['console'],
      level: level
    }
  }
});

var logger = log4js.getLogger('basic');

module.exports = logger;
