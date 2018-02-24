var _this = this;
var Foo = /** @class */ (function () {
    function Foo() {
    }
    Foo.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return Foo;
}());
var someObj = {
    firstName: 'Some',
    lastName: 'Obj',
    getFullName: function () { return _this.firstName + " " + _this.lastName; },
    foo: 'FooBar' //Not strict with extra properties
};
var p2 = someObj;
