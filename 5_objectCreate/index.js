var person = {
    firstname: '',
    lastname: '',
    greet: function() {
        return this.firstname + ' ' + this.lastname
    }
}

// Object.create() creates a new empty object and passes the prototype chain of the object passed of the newly created object
var john = Object.create(person);
// can overwrite properties of the prototype
john.firstname = 'John';
john.lastname = 'Doe';

var jane = Object.create(person);
jane.firstname = 'Jane';
jane.lastname = 'Doe'

console.log(john.greet());
console.log(jane.greet());