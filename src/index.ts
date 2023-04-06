import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";
import { ListTemplate } from "./classes/ListTemplate.js";

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

// list template instance
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let values: [string, string, number];
  values = [tofrom.value, details.value, amount.valueAsNumber];

  let doc: HasFormatter;
  if (type.value === "invoice") {
    // replaced by tuples
    // doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    doc = new Invoice(...values);
  } else {
    // replaced by tuples
    // doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    doc = new Payment(...values);
  }

  list.render(doc, type.value, "end");
});
