var User = /** @class */ (function () {
    function User(username, age) {
        this.username = username;
        this.age = age;
    }
    User.prototype.getName = function () {
        return this.username;
    };
    User.prototype.setName = function (value) {
        this.username = value;
    };
    return User;
}());
var u1 = new User("Rohan", 21);
