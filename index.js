'use strict';
const uniqueRandomArray = require('unique-random-array');
const words = require('./words');

exports.all = words;
exports.random = uniqueRandomArray(words);
