const userName: string = 'mahdi';
const age: number = 25;
const isMarried: boolean = false;
const socialMedia: [name: string, start: number, follower: number] = [
  'facebook',
  2014,
  1000,
];
const profile: {
  name: string;
  age: number;
  isMarried: boolean;
  socialMedia: string[];
} = {
  name: 'Mahdi',
  age: 25,
  isMarried: false,
  socialMedia: ['Facebook', 'LinkedIn', 'Twitter'],
};
const obj = { name: 'mahdi', age: 25 };
obj.name = 'Jafar';

// TYPESCRIPT ENUM'S

enum Directions {
  North = 'north',
  South = 'south',
  East = 'east',
  West = 'west',
}

// Type Aliases
type stringOrNum = string | number;
type personName = string;
type personAge = number;
type person = {
  name: personName;
  age: personAge;
};

const UID: stringOrNum = 'D125';
const UID2: stringOrNum = 125;

const student: person = {
  name: 'Mahdi',
  age: 25
}
