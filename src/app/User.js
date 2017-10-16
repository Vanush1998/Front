"use strict";
var User = (function () {
    function User(_username, _password, _firstName, _lastName, _age, _gender, _isAdmin) {
        this._username = _username;
        this._password = _password;
        this._firstName = _firstName;
        this._lastName = _lastName;
        this._age = _age;
        this._gender = _gender;
        this._isAdmin = _isAdmin;
    }
    Object.defineProperty(User.prototype, "username", {
        get: function () {
            return this._username;
        },
        set: function (value) {
            this._username = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "password", {
        get: function () {
            return this._password;
        },
        set: function (value) {
            this._password = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            this._age = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "gender", {
        get: function () {
            return this._gender;
        },
        set: function (value) {
            this._gender = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "isAdmin", {
        get: function () {
            return this._isAdmin;
        },
        set: function (value) {
            this._isAdmin = value;
        },
        enumerable: true,
        configurable: true
    });
    return User;
}());
exports.User = User;
//# sourceMappingURL=User.js.map