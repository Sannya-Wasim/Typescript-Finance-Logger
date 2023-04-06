import { HasFormatter } from "../interfaces/HasFormatter.js";

// classes --> a blueprint for an object
export class Invoice implements HasFormatter {
  /* one way to do this
    // access modifiers
    // only be read, not overwritten
  //   readonly client: string;
    //   cant access from outside, only be accessed by format() method
  //   private details: string;
  //   public amount: number;
  
  //   constructor(c: string, d: string, a: number) {
  //     this.client = c;
  //     this.details = d;
  //     this.amount = a;
  //   }
  */

  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    return `${this.client} owes £${this.amount} for ${this.details}`;
  }
}

// implementing interface in this class bc it has format method in it
// if a certain element(variable, object or even class) has all those properties an interface possesses,
// we can implement interface with it
