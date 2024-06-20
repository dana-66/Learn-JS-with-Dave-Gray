// function

// Methods : Built-in Functions !
console.log("DaN".toLowerCase());
console.log(Math.random());

// declaring functions
function sum1 () {
    return 1 + 5;
}

// calling a function 
console.log(sum1());

// adding parameters 
function sum (num1, num2) {
    if (num2 === undefined) {
        return num1 + num1;
    }

    return num1 + num2;
}

console.log(sum(54,12));

const getUserNameFromEmail = function (email) {
    return email.slice(0, email.indexOf("@"));
};

console.log(getUserNameFromEmail("PlayerOne@gmail.com"));

// arrow functions
const userName = (email) => {
    return email.slice(0, email.indexOf("@"));
};
console.log(userName("duse.454d@gmail.com"));

const toProperCase = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};

console.log(toProperCase("daNAAA"));