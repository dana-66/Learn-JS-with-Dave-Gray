// Classes and factory functions

class pizza {
    constructor(pizzaType, pizzaSize) {
        this.type = pizzaType;
        this.size = pizzaSize;
        this.crust = "original";
        this.toppings = [];
    }
    // getters
    // get pizzaCrust() {
        getCrust () {
        return this.crust;
    }
    // setters
    // set pizzaCrust (pizzaCrust) {
        setCrust (pizzaCrust){
        this.crust = pizzaCrust;
    } 
    // class methods 
    bake() {
        console.log(`baking a ${this.size} ${this.type} ${this.crust} crust pizza.`);
    }
    getToppings() {
        return this.toppings;
    }

    setToppings (topping) {
        this.toppings.push(topping);
    }
}

// to create an object from that class and pass parameter to it
const myPizza = new pizza("pepperoni" ,"small");
myPizza.bake();
console.log(myPizza.type);

// to change the value of a property 
myPizza.type = "supreme";
myPizza.bake();

// // to set the value using setters and getters
// myPizza.pizzaCrust = "thin";
// myPizza.bake();
// console.log(myPizza.pizzaCrust);

// using the methods i created (better solution)
myPizza.setCrust("thicck");
myPizza.bake();
console.log(myPizza.getCrust());    //methods that do the same as set and get but more readable.

myPizza.setToppings("sausage");
myPizza.setToppings("olives");
console.log(myPizza.getToppings());


// another example
// this is the parent class (superclass)
class pizza1 {

    constructor(pizzaSize) {
        this.size = pizzaSize;
        this.crust = "original";
    }

    setCrust (pizzaCrust) {
        this.crust = pizzaCrust;
    }

    getCrust () {
        return this.crust;
    }
}

// the child class
class specialPizza extends pizza1{

    constructor(pizzaSize) {
        super(pizzaSize);
        this.type = "the works";
    }

    slice() {
        console.log(`Our ${this.type} ${this.size} pizza has 8 slices.`);
    }
}

const mySpecial = new specialPizza("medium");
mySpecial.slice();

// the naming conventions
class pizza2 {

        constructor(pizzaSize) {
            this._size = pizzaSize;
            this._crust = "original";
        }
    
        setCrust (pizzaCrust) {
            this._crust = pizzaCrust;
        }
    
        getCrust () {
            return this._crust;
        }
    }
    
    // we can still access the private properties and modify their values and to avoid that we'll do as follows:

    // using the factory function (can be used as a factory for object creation)
    function pizzaFactory (pizzaSize) {
        const crust = "original";
        const size = pizzaSize;

        return {
            bake: () => console.log(`Baking a ${size} ${crust} crust pizza.`)
        };
    }

    const myPizza2 = pizzaFactory("small");
    myPizza2.bake();

    // to use the variables inside the pizzaFactory block we had to return a function in-order to access them.

class pizza3 {

    // felids
    crust = "original";     //public
    #sauce = "traditional"; //private
    #size;
        constructor(pizzaSize) {
            this.#size = pizzaSize;
        }
    
        setCrust (pizzaCrust) {
            this.crust = pizzaCrust;
        }
    
        getCrust () {
            return this.crust;
        }

        hereYouGo () {
            console.log(`Here's you're ${this.crust} ${this.#sauce} sauce ${this.#size} pizza`)
        }
    }

    const myPizza3 = new pizza3("large");
    myPizza3.hereYouGo();
    console.log(myPizza3.getCrust());
    console.log(myPizza3.sauce); //u cant access a private property not gonna work
    

