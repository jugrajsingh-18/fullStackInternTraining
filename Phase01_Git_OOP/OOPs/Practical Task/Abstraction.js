// CREATING BASE CLASS
class PaymentProcessor {
    constructor(name) {
        this.name = name;
    }

    
    processPayment(amount) {
        console.log("Processing payment...");
    }
}

// CHILD CLASS: CREDIT CARD
class CreditCardProcessor extends PaymentProcessor {
    constructor(name, cardNumber) {
        super(name);
        this.cardNumber = cardNumber;
    }

    processPayment(amount) {
        console.log('-------------------------------------');
        console.log(`Payment Method: Credit Card`);
        console.log(`Account Holder: ${this.name}`);
        console.log(`Processing ₹${amount} using Card Number: ${this.cardNumber}`);
    }
}

// CHILD CLASS: UPI
class UPIProcessor extends PaymentProcessor {
    constructor(name, upiId) {
        super(name);
        this.upiId = upiId;
    }

    processPayment(amount) {
        console.log('-------------------------------------');
        console.log(`Payment Method: UPI`);
        console.log(`User: ${this.name}`);
        console.log(`Processing ₹${amount} using UPI ID: ${this.upiId}`);
    }
}

// CREATING OBJECTS
const creditUser = new CreditCardProcessor("Rahul", "1234-5678-9012");
const upiUser = new UPIProcessor("Amit", "amit@upi");

// CALLING METHODS (WITHOUT KNOWING INTERNAL LOGIC)
creditUser.processPayment(2000);
upiUser.processPayment(500);