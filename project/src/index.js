const aspect = require('./aspect');
const chart = require('./chart');
const radix = require('./radix');
const settings = require('./settings');
const svg = require('./svg');
const transit = require('./transit');
const zodiac = require('./zodiac');
const timer = require('./animation/timer');
const animator = require('./animation/animator');
const utils = require('./utils');

const astrologyContext = {};

settings(astrologyContext);
svg(astrologyContext);
chart(astrologyContext);
radix(astrologyContext);
transit(astrologyContext);
aspect(astrologyContext);
zodiac(astrologyContext);
timer(astrologyContext);
animator(astrologyContext);
utils(astrologyContext);

module.exports = astrologyContext;

