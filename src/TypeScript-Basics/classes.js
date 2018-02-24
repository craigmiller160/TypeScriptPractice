var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        if (firstName === void 0) { firstName = ""; }
        if (lastName === void 0) { lastName = ""; }
        var _this = this;
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = function () { return _this.firstName + " " + _this.lastName; };
    }
    Person.prototype.hello = function () {
        return "Hello, my name is " + this.fullName();
    };
    return Person;
}());
var Male = /** @class */ (function (_super) {
    __extends(Male, _super);
    function Male() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sex = 'Male';
        _this._something = 'Something';
        return _this;
    }
    Object.defineProperty(Male.prototype, "something", {
        get: function () {
            return this._something;
        },
        set: function (value) {
            this._something = value;
        },
        enumerable: true,
        configurable: true
    });
    Male.prototype.hello = function () {
        return _super.prototype.hello.call(this) + " and I am a " + this.sex;
    };
    return Male;
}(Person));
var Female = /** @class */ (function (_super) {
    __extends(Female, _super);
    function Female() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sex = 'Female';
        return _this;
    }
    Female.prototype.hello = function () {
        return _super.prototype.hello.call(this) + " and I am a " + this.sex;
    };
    return Female;
}(Person));
var person;
person = new Female('Female', 'Here');
console.log(person.hello());
var male = new Male("Hello", "World");
console.log(male.hello());
console.log(male);
console.log(male.something);
male.something = 'Something else';
