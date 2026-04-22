// CREATING USER CLASS
class User {
    #password; // CREATING A PRIVATE VRIABLE

    constructor(name, email, role, password) {
        this.name = name;
        this.email = email;
        this.role = role;
        // CHECKING THE PASSWORD LENGTH
        if (password.length < 8) {
            console.log(`${this.name} Password length must be atleast 8 charadcter long`);
        }
        else {
            this.#password = password;
        }
    }

    //GETTER FOR PASSWORD
    getPassword() {
        console.log(`${this.name}'s Password is: ${this.#password}`);
        console.log('-------------------------------------');

    }

    // SETTER FOR PASSWORD 
    setPassword(password) {
        if (password.length < 8) {
            console.log(`${this.name} Password length must be atleast 8 charadcter long`);
            console.log('-------------------------------------');

        }
        else {
            this.#password = password;
            console.log(`${this.name} Password updated Successfully`);
            console.log('-------------------------------------');

        }
    }
}

// CREATING USER

const user1 = new User('Narendra Modi', 'narendramodi@bjp.in', 'Prime Minister', '123456789')
const user2 = new User('Valdamir Putin', 'valdamirputin@unitedrussia.in', 'President', 'putin@1234')
const user3 = new User('Xi Jinping', 'xijinping@cpp.in', 'President', 'qwerty', 'tradeMaster')

// GETTING PASSWORD 
user1.getPassword()
user2.getPassword()
user3.getPassword()

// SETTING PASSWORD
user1.setPassword('abkibaar400paar')
user2.setPassword('fastandfurious')
user3.setPassword('MadeInChina')

// SETTING INVALID PASSWORD
user3.setPassword('jay12') // LOG'S "Xi Jinping Password length must be atleast 8 charadcter long"const