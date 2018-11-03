// function statement
function greet() {
    console.log('hi')
}
greet();

// functions are first-class 
function logGreeting(fn) {
    fn();
}
logGreeting(greet);

// function expression 
var greetMe = function() {
    console.log('hi I\'m a function expression')
}

// use a function expression on the fly 
logGreeting(function() {
    console.log('hi I\'m a function expression on the fly')
})

greetMe(); 
logGreeting(greetMe)