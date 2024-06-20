// Objects
// key-value pairs in curly braces

const myObj = {
    name: "Dan",
    age : 22,
    gender: "female",
    hobbies: ["reading","drawing","stargazing","playing chess"],
    happiness: false,
    // objects inside objects
    favFood : {
        drink : "coffee",
        food : ["burgers", "pasta","zerbyan"],
        coldDrink : "sugar cain juice",
    },
    // method :anonymous function
    action : function () {
        // return "hello World!";
        return `time for ${this.favFood.drink}`;
    }
};

console.log(myObj);
console.log(myObj.name);
console.log(myObj.age);
console.log(myObj.gender);
console.log(myObj.hobbies);
console.log(myObj.hobbies[0]);
console.log(myObj.favFood);
console.log(myObj.favFood.coldDrink);

// another way of accessing the object is similar to accessing elements of an array
        // console.log(myObj["key"]);

console.log(myObj["favFood"]);
console.log(myObj["hobbies"]);

// we can store methods inside objects
console.log(myObj.action());


// another example
const vehicle = {
    wheels: 4,
    engine: function() {
        return "Vrooooooooooooooom!";
    }
}; 

const truck = Object.create(vehicle);   //using vehicle as a constructor 
truck.doors = 2;    //adding a property
console.log(truck);
console.log(truck.wheels);  //inheritance 
console.log(truck.engine());

const car = Object.create(vehicle);
car.doors = 4;
car.engine = function() {
    return "Whooooosh!!!";
}

console.log(car);
console.log(car.wheels);
console.log(car.doors);
console.log(car.engine());

const tesla = Object.create(car);
console.log(tesla.wheels);
// console.log(tesla.engine());
console.log(tesla.doors);

tesla.engine = function() {
    return "SHoooooosh!!!";
};

console.log(tesla.engine());    //overriding a method


// Band example
const band = {
    vocals : "Robert Plant",
    guitar : "Jimmy Page",
    bass : "John Paul Jones",
    drums : "John Bonham",
    // oo : {
    //     car : "BMW"
    // }
};

console.log(band);
console.log(Object.keys(band));
console.log(Object.values(band));

// for in loop 
for(let job in band) {
    // console.log(band[job]);     //must be [] so that it'll iterate 

    // to access the values in the key position and from the value position 
    console.log(`On ${job}, it's ${band[job]}`);
};

// to add a property or a method to an object:
band.keyboard = "John Stat";
console.log(band);

// to delete a property or a method inside an object
delete band.keyboard;
console.log(band);
console.log(band.hasOwnProperty("keyboard"));

// Destructuring objects
const {guitar: myVariable, bass: myBass}= band;
console.log(myVariable);
console.log(myBass);

// another way:
const {vocals, guitar, bass, drums} = band;
console.log(vocals);
console.log(guitar);

const display =  (vocals, guitar, bass, drums) => {
    return `and the band members are ${vocals} for the lead vocals ${guitar} as the guitarist, ${bass} as our greatest bass player and ${drums} as the talented drummer `;
};

console.log(display(vocals,guitar,bass,drums));

function sings({vocals}) {
    return `${vocals} sings!`;
}; //this function is going to destructure the band object

console.log(sings(band));   //pass in the full object

// from fcc
/* You are creating a function that aids in the maintenance of a musical album collection. The collection is organized as an object that contains multiple albums which are also objects. Each album is represented in the collection with a unique id as the property name. Within each album object, there are various properties describing information about the album. Not all albums have complete information.

The updateRecords function takes 4 arguments represented by the following function parameters:

records - an object containing several individual albums
id - a number representing a specific album in the records object
prop - a string representing the name of the album’s property to update
value - a string containing the information used to update the album’s property
Complete the function using the rules below to modify the object passed to the function.

Your function must always return the entire records object.
If value is an empty string, delete the given prop property from the album.
If prop isn't tracks and value isn't an empty string, assign the value to that album's prop.
If prop is tracks and value isn't an empty string, but the album doesn't have a tracks property, create an empty array and add value to it.
If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
Note: A copy of the recordCollection object is used for the tests. You should not directly modify the recordCollection object.

 */
// Setup
const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  // Only change code below this line
  function updateRecords(records, id, prop, value) {
  
    if (value === "" ){
      delete records[id][prop];
    }
    else if(prop !== "tracks" && value !== ""){
         records[id][prop] = value;
    }
    else if(prop === "tracks" && value !== "") {
       if (!records[id].hasOwnProperty("tracks")){
         records[id][prop] = [];
         
       }
         records[id][prop].push(value);
       
      // if (!records[id].hasOwnProperty("tracks")) {
      //   records[id][prop] = [];
      // }
      // records[id][prop].push(value);
    }
  
    return records;
  }
  
  updateRecords(recordCollection, 5439, 'artist', 'ABBA');