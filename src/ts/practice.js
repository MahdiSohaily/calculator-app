var userName = 'mahdi';
var age = 25;
var isMarried = false;
var socialMedia = [
    'facebook',
    2014,
    1000,
];
var profile = {
    name: 'Mahdi',
    age: 25,
    isMarried: false,
    socialMedia: ['Facebook', 'LinkedIn', 'Twitter']
};
var obj = { name: 'mahdi', age: 25 };
obj.name = 'Jafar';
// TYPESCRIPT ENUM'S
var Directions;
(function (Directions) {
    Directions["North"] = "north";
    Directions["South"] = "south";
    Directions["East"] = "east";
    Directions["West"] = "west";
})(Directions || (Directions = {}));
var UID = 'D125';
var UID2 = 125;
var student = {
    name: 'Mahdi',
    age: 25
};
var rectangle = {
    height: 20,
    width: 10
};
var colored = {
    height: 20,
    width: 10,
    color: 'yellow'
};
// Functions
/**
 * In type script we can define the functions return type and parameters
 * type like so
 */
var greeting;
greeting = function () { };
function pow(a, b) {
    return Math.pow(a, b);
}
function pow2(a, b, c) {
    if (c === void 0) { c = 'solved'; }
    if (c)
        return Math.pow(a, b) + c;
    else
        return Math.pow(a, b) + 'undefined';
}
function divide(_a) {
    var dividend = _a.dividend, divisor = _a.divisor;
    return dividend / divisor;
}
divide({ dividend: 10, divisor: 2 });
