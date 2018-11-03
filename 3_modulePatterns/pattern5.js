// to import: var greet5 = require('./greet5');
// to use: greet5.greet();

var greeting = 'Hello 5';

function greet() {
    console.log(greeting);
}

module.exports = {
    greet: greet
}