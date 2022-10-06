var RIGHT;
(function (RIGHT) {
    RIGHT[RIGHT["admin"] = 1] = "admin";
    RIGHT[RIGHT["user"] = 2] = "user";
})(RIGHT || (RIGHT = {}));
var User = /** @class */ (function () {
    function User(nameUser, email, right_access) {
        this.right_access = RIGHT.admin;
        this.nameUser = nameUser;
        this.email = email;
        this.right_access = RIGHT.admin;
    }
    User.prototype.getInfo = function () {
        return "".concat(this.nameUser, " + ").concat(this.email, " + ").concat(this.right_access);
    };
    User.prototype.isAdmin = function () {
        if (this.right_access === RIGHT.admin) {
            console.log('is admin');
        }
        else if (this.right_access === RIGHT.user)
            console.log('Normal user');
    };
    User.prototype.setName = function (name) {
        this.nameUser = name;
    };
    User.prototype.setEmail = function (email) {
        this.email = email;
    };
    return User;
}());
var user1 = new User('Yến', 'yenjy8@gmail.com', 1);
var user2 = new User('Long', 'longjy8@gmail.com', 2);
user1.isAdmin();
user2.setEmail('hehe');
console.log(user2.getInfo());
