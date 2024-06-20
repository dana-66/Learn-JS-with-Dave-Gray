// // modules

// import playGuitar from "./guitars.js";
// import { shredding as shred, plucking } from "./guitars.js";

// console.log(playGuitar());
// console.log(shred());
// console.log(plucking());

// another way of importing is by all

import * as Guitar from "./guitars.js";
// importing a class
import user from "./user.js";

const me = new user("email@gmail.com", "Dan");
console.log(me);

console.log(me.greetings());
console.log(Guitar.default()); //we have to change its name to default if u don't want that then don't do a default function
console.log(Guitar.shredding());
console.log(Guitar.plucking());