var a;
var b;
var c;
a = 10;
b = true;
c = 'Hello';
var myArr = [1, true];
// tuple
var myTuple = [1, true];
myTuple[0] = 2;
myTuple.push(1);
console.log(myTuple);
var add = function (a, b, c, d) {
    if (c === void 0) { c = 2; }
    return a + b + c + (d !== undefined ? d : 0);
};
console.log(add(1.1, 2));
console.log(add(1, 2, 3));
console.log(add(1, 2, 3, 4));
console.log(c + " World");
var g = 10;
var h = true;
var i = 'Hello';
var greet = function () { return 'Good morning'; };
var greeting = greet();
//Default is Any type
var any;
var any2 = 10;
any2 = 'Hello';
//Union type
var union;
union = 10;
union = true;
