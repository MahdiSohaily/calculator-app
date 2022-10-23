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
  age: 25,
};

// Interfaces
/**
 * Interfaces are the same as type aliases except that they only can be used with the
 * type objects.
 * Interfaces allow us to define a specific type of format for classes that extend them
 * or a specific type for objects of the same type
 */

interface Rectangle {
  height: number;
  width: number;
}

interface coloredRectangle extends Rectangle {
  color: string;
}

const rectangle: Rectangle = {
  height: 20,
  width: 10,
};

const colored: coloredRectangle = {
  height: 20,
  width: 10,
  color: 'yellow',
};

// Functions
/**
 * In type script we can define the functions return type and parameters
 * type like so
 */

let greeting: Function;
greeting = () => {};

function pow(a: number, b: number): number {
  return a ** b;
}

function pow2(a: number, b: number, c: string = 'solved'): string {
  if (c) return a ** b + c;
  else return a ** b + 'undefined';
}

function divide({ dividend, divisor }: { dividend: number; divisor: number }) {
  return dividend / divisor;
}

divide({ dividend: 10, divisor: 2 });

function sumup(salary: number, ...salaries: number[]) {
  return Math.max(...salaries);
}

// Functions type

type pow = (a: number, b: number) => number;

const operate: pow = (a: number, b: number) => a ** b;
