// to import: var Greet4 = require('./greet4');
// to use: 
    // var grtr = new Greet4();
    // // grtr.greet();
    
// ** NOTE ** more ideal than patter because you cannot change the properties outside the module

function Greetr() {
    this.greeting = 'Hello World 4';
    this.greet = function() {
        console.log(this.greeting)
    }
}

module.exports = Greetr;