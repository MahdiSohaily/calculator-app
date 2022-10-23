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
// Interfaces
/**
 * Interfaces are the same as type aliases except that they only can be used with the
 * type objects.
 * Interfaces allow us to define a specific type of format for classes that extend them
 * or a specific type for objects of the same type
 */
