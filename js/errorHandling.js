// Error and Error Handling
// js is forgivefull so this could work
// variable = "Dan";
// console.log(variable);

// but in this mode it will cause an error
"use strict";
// variable = "Dani";
// console.log(variable);
/* errorHandling.js:8 Uncaught ReferenceError: variable is not defined
    at errorHandling.js:8:10 */

// to fix it we can define it 
const variable = "Danii";
console.log(variable);

// another example
"use strict";
// types of Errors:
// 1- Reference Error
    vari ="Hello";
    console.log(vari);

// 2- Type Error
    Object.create();
    // uncaught TypeError: Object prototype may only be an Object or null: undefined

    const name = "Dan";
    name = "sam";
    // Uncaught TypeError: Assignment to constant variable.

// 3- Syntax Error
    // Object.create(): 
    // Unexpected token ':'


    const makeError = () => {
        try{
            const name = "Dan";
            name = "Sam";
        }catch(err) {
            console.error(err);
            // console.warn(err);
            // console.table(err);
            // console.error(err.name);
            // console.error(err.message);
            console.error(err.stack);
            // logTheError(err.stack);
        }
    };

    makeError();

    // creating a custom error
    function customError (message) {
        this.message = message;
        this.name = "CustomError";
        this.stack = `${this.name}: ${this.message}`;
    }

    const makeError2 = () => {
        try{
            // throw new customError("this is a custom error!");
            throw new Error("this is a generic custom error still !!!");
        }catch(err) {
            // console.error(err);
            console.error(err.stack);
        }
    }; 

    makeError2();

// the try - catch - finally 
// it's syntax :
// try {
//     // Code that may throw an exception
// } catch (error) {
//     // Code to handle the exception
// } finally {
//     // Code that always executes, regardless of whether an exception occurred
// }
"use strict";
const makeError3 = () => {
    let i = 1;
    while (i <= 5) {
        try {
            if (i % 2 !== 0) {
                throw new Error("Odd number !!!");
            }
            // this line will be accessible only if its an even number
            console.log("Even Number");
        } catch (err) {

            console.error(err.name);
            console.error(err.message);
            console.error(err.stack);

        } finally {
            console.log("...finally...");
            i++;
        }
    }
};
makeError3();
