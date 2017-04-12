/**
 * Created by User on 2017/04/12.
 */
var moment = require('moment');

console.log(moment().format());

var now = moment();

console.log('Current timestamp', now.unix()); //unix method is a number of seconds since from 1 Jan 1970

var timestamp = 1491997595;
var currentMoment = moment.unix(timestamp);
console.log('current moment:', currentMoment.format());

console.log('current moment:', currentMoment.format('MMM'));
console.log('current moment:', currentMoment.format('MMM D, YYYY @ h:mm a'));

console.log('current moment:', currentMoment.format('MMMM Do, YYYY @ h:mm A'));

