// classes --> a blueprint for an object
var Invoice = /** @class */ (function () {
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
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return "".concat(this.client, " owes \u00A3").concat(this.amount, " for ").concat(this.details);
    };
    return Invoice;
}());
export { Invoice };
// implementing interface in this class bc it has format method in it
// if a certain element(variable, object or even class) has all those properties an interface possesses,
// we can implement interface with it
