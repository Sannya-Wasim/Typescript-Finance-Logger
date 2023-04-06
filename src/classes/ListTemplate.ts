import { HasFormatter } from "../interfaces/HasFormatter.js";

export class ListTemplate {
  constructor(private container: HTMLUListElement) {}

  // since we need to pass both invoice and payment but cant do it the hardcode way so we impkement the HasFormatter bc that interface is impkemented by both invoice and payment
  render(item: HasFormatter, heading: string, pos: "start" | "end") {
    const li = document.createElement("li");

    const h4 = document.createElement("h4");
    h4.innerText = heading;
    li.append(h4);

    const p = document.createElement("p");
    p.innerText = item.format();
    li.append(p);

    if (pos === "start") {
      // prepend is a method to put it at the start
      this.container.prepend(li);
    } else {
      // append is a method to put it at the end
      this.container.append(li);
    }
  }
}

/*
1. register a list container (ul) in the constructor
2.Create a render method to render a new 'li' to the container
    -- accepts arguments: invoice or payment, a heading, a position
    -- create the html template (li, h4, p)
    -- add the 'li' template to the start/end of the list
*/
