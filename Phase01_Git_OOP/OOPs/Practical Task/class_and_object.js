// CREATING PRODUCT CLASS 
class Product {
    constructor(name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
    }

    // CREATING A METHOD TO DISPLAY PRODUCT DETAILS
    showProductDetails() {
        console.log('-------------------------------------');
        console.log(`Product Name: ${this.name}`);
        console.log(`Product Price: ${this.price}`);
        console.log(`Product Category: ${this.category}`);

    }
}

// CREATING USER CLASS
class User {
    constructor(name, email, role) {
        this.name = name;
        this.email = email;
        this.role = role;
    }
    // CREATING A METHOD TO DISPLAY USER DETAILS
    showUserDetails() {
        let names = ['name', 'email', 'role']

        // PRINTING DETAILS USING FOR LOOP
        console.log('-------------------------------------');
        for (let i = 0; i < names.length; i++) {
            console.log(`User ${names[i]}: ${this[names[i]]}`);
        }

    }
}

// CREATING OBJECT FOR PRODUCT CLASS
const product1 = new Product("Table", 1500, "furniture")
const product2 = new Product("Macbook Pro", 150000, "elcetronics")
const product3 = new Product("Seiko Propex ", 70000, "Accessories")

// CALLING METHOD OF PRODUCTS
console.log('SHOWING ALL PRODUCTS DETAILS');

product1.showProductDetails()
product2.showProductDetails()
product3.showProductDetails()

// CREATING OBJECT FOR USER CLASS
const user1 = new User('Narendra Modi', 'narendramodi@bjp.in', 'Prime Minister')
const user2 = new User('Valdamir Putin', 'valdamirputin@unitedrussia.in', 'President')
const user3 = new User('Xi Jinping', 'xijinping@cpp.in', 'President')

// CALLING METHOD OF USERS
console.log('SHOWING ALL USER DETAILS');

user1.showUserDetails();
user2.showUserDetails();
user3.showUserDetails();
