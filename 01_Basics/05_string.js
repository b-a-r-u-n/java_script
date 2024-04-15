let a = "Hello" ;
let b =  10;

// console.log(a + b + " value");

console.log(`My name is ${a} and Age is ${b}.`);

let name = new String("hello-world-name");

console.log(name[0]);

console.log(name.length);

console.log(name.toUpperCase());

console.log(`${name}`);

console.log(name.charAt(3));

console.log(name.indexOf('e'));

let newStr = name.substring(0,4);

console.log(newStr);

let newStr1 = name.slice(-9,6);

console.log(newStr1);

let newStr2 = "  World  ";
console.log(newStr2);
console.log(newStr2.trim());

let url = "https://hello.com/hello%20world";

console.log(url.replace('%20','-'));
console.log(url.includes('hello'));
console.log(url.includes('hel-lo'));

console.log(name.split('-'));
