// Web storage API
// Not part of the DOM. refers to the window api
// available to the js via the global variable: window

// we don't have to type window. Its implied :
// window.alert("hi");
// alert("hi"); 

// window.alert(window.location);
// alert(window.location);

// time to make some data
// (this example will return them as a string and wont display the data of the object)
// const myObject = {
//     name: "Dan",
//     logName : function() {
//         console.log(this.name);
//     }

// };

// const myArray = ["eat", "sleep", "code"];

// // sessionStorage.setItem("mySessionStore", myObject);
// // const SSData  = sessionStorage.getItem("mySessionStore");

// sessionStorage.setItem("mySessionStore", myArray);
// const SSData  = sessionStorage.getItem("mySessionStore");

// console.log(SSData);


// example (using JSON with web storage API)
const myArray = ["sleep", "eat", "code"];

const obj = {
    name: "dan",
    hobbies: ["sleep", "eat", "code"],
    logName: function () {
        console.log(this.name);
    }
};

sessionStorage.setItem("SStorage", JSON.stringify(obj));
const SSData = JSON.parse(sessionStorage.getItem("SStorage"));
console.log(SSData);

// what will happen if instead of obj we used myArray
sessionStorage.setItem("SStorage", JSON.stringify(myArray));
const SSDataArr = JSON.parse(sessionStorage.getItem("SStorage"));
console.log(SSDataArr);

// as for the localStorage the same operation goes

localStorage.setItem("LStorage1", JSON.stringify(obj));
const LSData = JSON.parse(localStorage.getItem("LStorage1"));
console.log(LSData);


// .removeItem
localStorage.setItem("LStorage2", JSON.stringify(obj));
// localStorage.removeItem("LStorage");
// localStorage.clear();
const key = localStorage.key(0);
const storeLength =localStorage.length;
const LSData2 = JSON.parse(localStorage.getItem("LStorage2"));
console.log(storeLength);