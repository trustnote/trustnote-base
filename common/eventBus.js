/*jslint node: true */
"use strict";
require('./singleton.js');

var EventEmitter = require('events').EventEmitter;

var eventEmitter = new EventEmitter();
eventEmitter.setMaxListeners(20);

module.exports = eventEmitter;
