// Premetive(Call by Value)

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt 

// Number
const score = 100;
const scorevalue = 100.3;

// Boolean
const isLoggedIn = false;

// Null
const outsideTemp = null;

console.log(typeof outsideTemp);

// Undefined
let userEmail;

console.log(typeof userEmail);

// Symbol
const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id);
console.log(anotherId);
console.log(id === anotherId);

// bigInt
const bigNumber = 1234567896985566645334555656012342n;
console.log(typeof bigNumber);

// Reference (Non premitive/Call by Reference)

// Array, Objects, Functions

// Array
let heros = ["Ironman", "CaptainAmerica", "Thor"];
console.log(heros);
console.log(typeof heros);

// Objects
let obj = {
    name: "Thor",
    age: 30 
};
console.log(obj);

// function
let myFunction = function(){
    console.log(Hello_World);
};