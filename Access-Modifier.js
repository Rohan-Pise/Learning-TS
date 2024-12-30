// public
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.greet = function () {
        console.log("My name is ".concat(this.name));
    };
    return Person;
}());
var person = new Person("Alice");
console.log(person.name);
person.greet();
