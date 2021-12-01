//What will be output of i and n?
let i = 10;
let n = i++ % 5;
// i = 11; n = 0;

// Swap two variables
let a = 10;
let b = 3;
let c = a;
a = b;
b = c;
// a = 3; c = 10;

// Swap two variables without using the third one
let a = 10;
let b = 3;
a = a + b;
b = a - b;
a = a - b;
// a = 3; c = 10;
