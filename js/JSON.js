// javascript object notation 
const myObj = {
    name : "dan",
    hobbies: ["chess", "reading","cocking"],
    hello : function () {
        console.log("- How you doin ;)");
    }
};

console.log(myObj);
console.log(myObj.name);
myObj.hello();
console.log(typeof myObj);

// i want to take this object and send it as a JSON file
// converting a object to JSON
const sendJSON = JSON.stringify(myObj);
console.log(sendJSON);
console.log(typeof(sendJSON));

// receiving a JSON file/data
const receiveJSON = JSON.parse(sendJSON);
console.log(receiveJSON);
console.log(typeof(receiveJSON));

const meh = 6 * 3453;
const sJSON = JSON.stringify(meh);
console.log(sJSON);

const rJSON = JSON.parse(sJSON);
console.log(rJSON);