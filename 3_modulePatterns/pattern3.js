// to import: var greet3 = require('./greet3');
// to run: greet3.greet();
// ** NOTE ** this method is not ideal in Node because modules are cached and if you change the properties after one import it will affect the properties of the next import.
    // EX: greet.greeting = "CHANGED!";
    // greet3.greet();  -> will no return "CHANGED!"

function Greetr() {
    this.greeting = 'HELLO 3';
    this.greet = function() {
        console.log(this.greeting);
    }
}

module.exports = new Greetr();