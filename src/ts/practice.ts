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
    West = 'west'
}
