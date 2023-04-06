// Testing typescript with index.js
// to connect typescript to js, simply type ts.cmd index.ts -w
// in terminal, will create a js file of the same name as the ts file
const name = "Sannya";
console.log(name);

const number = 4;
console.log(number);

// Assigning type to a variable
const circumference = (diameter: number) => {
  return diameter * Math.PI;
};

console.log(circumference(7.5));

// arrays
// an array cannot have mixed types
let fruits = ["apple", "strawberry", "berries", "melon"];
fruits.push("banana");
// This will give error
fruits.push(3);
// Neither we can overwrite with another type
fruits[0] = 3;

// Mixed arrays
// to create a mixed array, need to declare it when creating
let mixed_array = [3, "ken", 4, "chunli", 8, 9];
// These wont give error
mixed_array.push("ryu");
mixed.push(10);
mixed[0] = "black";

// Objects
// once defined the type of the key in the object, cant change it
let ninja = {
  name: "Mario",
  belt: "black",
  age: 30,
};

ninja.name = "Ryu";
ninja.age = 40;
// This will give error
ninja.age = "30";
// This too will give error
ninja.skills = ["fighting", "sneaking"];

// but we can overwrite the same object to overwrite each pair of data
// But it has to have the same structure
// the values can be diff, type will be same
ninja = {
  name: "Yoshi",
  belt: "orange",
  age: 50,
};

// Tutorial 5
// Explicit Types
// if we wanna declare a variable string but not yet know what to assign it
let character: string;
let age: number;
let isLoggedIn: boolean;

age = 30;
isLoggedIn = true;

// Arrays
let ninjas: string[]; //array of strings
// however this is not declared therefore if we wanna push something in this array
// we cant do that because it doesnt exist
// to do that we will say

let ninjas: string[] = [];
ninjas.push("yoshi");

// Union Types --> of different types
// on Arrays
let mixed: string | number = [];
mixed.push("hello");
mixed.push(20);
mixed.push(false); //will give an error bc didnt specify

// on normal variables
let uid: string | number;
uid = "123";
uid = 123;

// Objects
let ninjaOne: object;
ninjaOne = { name: "yoshi", age: 30 };

// specifying types explicitly
let ninjatwo: {
  name: string;
  age: number;
  beltColor: string;
};

ninjaTwo = {
  name: "mario",
  age: 20,
  beltColor: "black",
  skills: [], //this will give error
};

// Any type in typescript
let age: any = 25;
age = true; //possible since variable is of any type
age = "hello";
age = {
  name: "sannya",
};

let mixed: any = [];
mixed.push(5);
mixed.push("mario");
mixed.push(false);

let ninja: {
  name: any;
  age: any;
};

// Functions in TS
// here it will automatically assume that this is a function type
let greet = () => {
  console.log("hello world");
};

// This will give error
greet = "hello";

// we can explicitly define function type
let greet: Function;

greet = () => {
  console.log("hello world");
};

const add = (a: number, b: number) => {
  console.log(a + b);
};

// This will give an error
add(5);

// if we add a third argument, will give error
add(5, 10, 5);

// so we will do this
const add = (a: number, b: number, c?: number | string) => {
  console.log(a + b);
};

add(5, 10); //here if no third argument, will take as undefined

// if we dont want undefined we can pass a value to the third parameter but without the question mark
const add = (a: number, b: number, c: number | string) => {
  console.log(a + b);
};
// This will now consider 10 if a third argument is not given

// Here it will overwrite the default value
add(5, 10, 20);
// Same with this
add(5, 2, "20");

// in this return , TS has inferred that whatever will be reutred will be a number
const minus = (a: number, b: number) => {
  return a - b;
};
// Therefore here result is a number
let result = minus(10, 7);
// This will give an error
result = "string";

// we can explicitly define that the return will be of some type
const minus = (a: number, b: number): number => {
  return a - b;
};

// Type Alias-->to reduce code duplication
type StringOrNum = string | number;
type objWithName = { name: string; uid: StringOrNum };

const logDetails = (uid: StringOrNum, item: string) => {
  console.log(`${item} has a uid of ${uid}`);
};

const greet = (user: objWithName) => {
  console.log(`${user.name} says hello`);
};

// Function signatures-->general strucutre of a function
let greet: Function;

// example 1
let greet: (a: string, b: string) => void;

greet = (name: string, greeting: string) => {
  console.log(`${name} says greeting`);
};

// example 2
// this is the signature of the function
let calc: (a: number, c: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
  if (action === "add") {
    return numOne + numTwo;
  } else {
    return numOne - numTwo;
  }
};

// example 3
let logDetails: (obj: { name: string; age: number }) => void;

type person = { name: string; age: number };

logDetails = (ninja: person) => {
  console.log(`${ninja.name} is ${ninja.age} years old`);
};

// The DOM type casting in index.js

const anchor = document.querySelector("a")!;

// if we do this it will return null bc the anschor is not being assigned the html element in our index.html file
console.log(anchor.href);
// so we can do this
// if (anchor{console.log(anchor.href);})
// However in typescript we just place an exclamation mark at the end of the query selector as done above

// We could use this bc it fetches an html element i.e form but we can t use this in case there are more than one form
// const form =document.getquerySelector('form')!;

// here we used htmlFormElement bc using class, ts just know its an html element but doesnt know that it is a form element
const form = document.querySelector(".new-item-form") as HTMLFormElement;
// console.log(form.children);

// inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  console.log(type.value, tofrom.value, details.value, amount.value);
});

// Implementing class
// creating instances
const invoice1 = new Invoice("Mario", "work on the mario website", 250);
const invoice2 = new Invoice("Yoshi", "work on the yoshi website", 300);

// this way only objects created using Invoice class wil be added in this array
let invoices: Invoice[] = [];
// this wont work
// invoices.push("hello")
invoices.push(invoice1);
invoices.push(invoice2);

// not included details since it is private
invoices.forEach((invoice) => {
  console.log(invoice.client, invoice.amount, invoice.format());
});

// creating interfaces --. in js interface allows us to enforce a certain structure of a class or an object like what properties and methods of those are
// similar to class
interface isPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const me: isPerson = {
  name: "Sannya",
  age: 30,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log("I spent ", amount);
  },
};

const greet = (person: isPerson) => {
  console.log("hello ", person.name);
};

greet(me);

// this variable must implement this interface
let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice("yoshi", "web work", 250);
docTwo = new Invoice("mario", "plumbing work", 200);

let docs: HasFormatter[] = [];

docs.push(docOne);
docs.push(docTwo);

// Generics --> Generice allow us to create reusable blocks of code
// wich can be used with different types

const addUID = (obj: object) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

let docOne = addUID({ name: "Yoshi", age: 40 });
// this will give error bc ts knows that obj is going to be an object but wont
// know what arguments it will do bc those arent specified in the function body
console.log(docOne.name);

// Therefore we will add an anchor tag and then specify it
// as the type of the obj so this anchor tag will capture whatever type of obj we specify later as the argument
// The revised version will be
const addUID = <T>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};
// but if we do this, then it will accept any type and if we assign it a string,
// it will be totally nonsense for a string to have an uid
// so to come around this, we do this
const uid = <T extends object>(obj: T) => {
  // repeat
};

// to be more specific
// it will now allow those objects with these properties
const uid = <T extends { name: string }>(obj: T) => {
  // repeat
};

// Generics with Interfaces
interface Resource<T> {
  uid: number;
  resName: string;
  data: T;
}

const docThree: Resource<string> = {
  uid: 1,
  resName: "person",
  data: "data",
};

// ENUMS --> are a special type in typescript which allows us to store a set of
// ostants or keywords and associate them wit a new numeric value
interface Resource<T> {
  uid: number;
  resType: number;
  data: T;
}

// over the time these could become difficult since there are so many resource types and you'll
// find yourself looking for their indexes
// avoid this by using enum
const docFive: Resource<object> = {
  uid: 2,
  resType: 3,
  data: { title: "name of the wind" },
};

enum ResourceType {
  BOOK,
  AUTHOR,
  FILM,
  DIRECTOR,
  PERSON,
}

const docSix: Resource<object> = {
  uid: 10,
  resType: ResourceType.BOOK,
  data: { name: "yoshi" },
};

console.log(docSix); // it will output resType : 0 since index of book is 0

//
// Arrays are flexible in positions
let arr = ["ryu", 25, true];
arr[0] = false;
arr[1] = yoshi;
// These will work
arr = [30, false, "yoshi"];

// defining tuple
let tup: [string, number, boolean] = ["ryu", 25, true];
// this will give error
tup[0] = false;

let studnet: [string, number];
student = ["sannya", 828218];
