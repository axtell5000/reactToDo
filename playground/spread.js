/**
 * Created by User on 2017/04/06.
 */
function add(a,b){
  return a + b;
}

console.log(3.2);

var toAdd = [15, 5,];
console.log(add(...toAdd)); //... spread operator, will separate the array and use them as the 2 parameters needed in the add function

var groupA = ['Jen', 'Cory'];
var groupB = ['Vikram'];
var final = [3, ...groupA]; //it makes a difference where you put the spread operator

console.log(final); // An array of  3, 'Jen', 'Cory'

//Challenge
var person = ['Andrew', 25];
var personTwo = ['Jen', 29];

function greet(name, age) {
  console.log('Hi ' + name + ', you are ' + age);
}

greet(...person);
greet(...personTwo);

var names = ['Mike', 'Ben'];
var final2 = ['Andrew', ...names];

final2.forEach(function (name) {
  console.log('Hi ' + name);
})


