// // // // // fetch api
// // // // // callbacks , promises, thenables , and Async/await.

// // // // // callbacks:  functions that are passed to other functions as parameters.

// // // // function firstFunction(parameter, callback) {
// // // //     // do something
// // // //     callback();
// // // // };

// // // // // callback hell (th problem with it)
// // // //  firstFunction(para, function(){
// // // //     // do stuff
// // // //     secondFunction(para, function () {
// // // //         thirdFunction(para, function () {

// // // //         });
// // // //     });
// // // // });

// // // // promises: have 3 states pending , fulfilled , and rejected. deliver async code
// // // // defined a promise
// // // const myPromise = new Promise((resolve, reject) => {
// // //     const error = false;
// // //     // const error = true; //will cause a reject
// // //     (!error) ? resolve("Yes I resolved the promise.") : reject("No I rejected the promise");
// // //     // if (!error) {
// // //     //     resolve("Yes I resolved the promise.");
// // //     // }else {
// // //     //     reject("No I rejected the promise");
// // //     // }
// // // });

// // // // this will display the state of the promise
// // // // console.log(myPromise);

// // // // // to get the value of the promise
// // // // // 1- using thenables (.then())
// // // // myPromise
// // // // .then(value => {
// // // //     // console.log(value);
// // // //     return value + 69;
// // // // })
// // // // .then (newValue => {
// // // //     console.log(newValue);
// // // // })
// // // // .catch(err => {     //to catch a rejection 
// // // //     console.error(err);
// // // // });

// // // // the timeout:
// // // const myNextPromise = new Promise((resolve, reject) => {
// // //     setTimeout(function () {
// // //         resolve("My next Promise is resolved!");
// // //     }, 3000);
// // // });

// // // myNextPromise.then(value => {
// // //     console.log(value);
// // // });

// // // myPromise.then(value => {
// // //     console.log(value);
// // // });


// // // pending state 
// // // fetch api

// // // const users = fetch("https://jsonplaceholder.typicode.com/users");

// // // // pending (this is wrong but i want to display the status of the promise)
// // // console.log(users);

// // // to actually get the data
// // // const users = fetch("https://jsonplaceholder.typicode.com/users")
// // // .then(response => {
// // //     return response.json();
// // // })
// // // .then(data => {
// // //     // console.log(data);
// // //     data.forEach(user => {
// // //         console.log(user);
// // //     })
// // // });

// // // a cleaner way to write fetch code (using async /await)

// // const myUsers = {
// //     userList: []
// // };

// // const myCoolFunction = async () => {
// //     const response = await fetch("https://jsonplaceholder.typicode.com/users");
// //     const jsonUserData = await response.json();
// //     return jsonUserData;
// // };

// // const otherFunc = async () =>{
// //     const data = await myCoolFunction();

// //     // // to display each user alone
// //     // data.forEach(user => {
// //     //     console.log(user);
// //     // });

// //     myUsers.userList = data;
// //     console.log(myUsers.userList);
// // };

// // otherFunc();
// // console.log(myUsers.userList);

// // examples 
// // workflow function

// const getAllUserEmails = async () => {
//     const responsee = await fetch("https://jsonplaceholder.typicode.com/users");
//     const usersDataJSON = await responsee.json();


//     const usersEmailArr = usersDataJSON.map(user => {
//         return user.email;
//     });
//     // console.log(usersEmailArr);
//     postToWebPage(usersEmailArr);
// };
// const postToWebPage = (data) => {
//     console.log(data);
// }

// getAllUserEmails();

// dads joke example: (second parameter of fetch is an object)

// const getDadsJokes = async () => {
//     const reply = await fetch("https://icanhazdadjoke.com/",{
//         method: "GET",
//         headers:{
//             Accept: "application/json"
//         }
//     });

//     const jsonJokeData = await reply.json();

//     console.log(jsonJokeData);
// };

// getDadsJokes();

// // if we change the accept data type to text 
// const getDanJokesTXT = async () => {
//     const replyTXT = await fetch("https://icanhazdadjoke.com/" , {
//         method: "GET",
//         headers: {
//             Accept: "text/plain"
//         }
//     });

//     const textJokeData = await replyTXT.text();
//     console.log(textJokeData);
// };

// getDanJokesTXT();

// // sending object to an api using post method

// const jokeObject = {
//     id: '5T08U8M79pb',
//     joke: 'Never take advice from electrons. They are always negative.'
// };

// const postData = async (jokeObj)=> {

//     const response = await fetch("https://httpbin.org/post" , {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(jokeObj)
//     });
//     const jsonResponse = await response.json();

//     console.log(jsonResponse.headers);
// };

// postData(jokeObject);

// requesting a joke:

// const requestJoke = async () => {

//     // const response = await fetch(`http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`);
//     // https://api.chucknorris.io/jokes/random
//     const response = await fetch(`https://v2.jokeapi.dev/joke/Any?category={nsfw}`);
//     const jsonResponse = await response.json();

//     console.log(jsonResponse.
//         setup +" " + jsonResponse.delivery);
// };
// requestJoke();
// requestJoke("dan", "tar");
// in the code above i have an issue:
// the api im working with chrome doesn't consider it to be secure so there is 2 solutions:
// 1- is to use this link in the fetch url https://cors-anywhere.herokuapp.com/ .
// 2- is to use the 'no-cros' mode ({ mode:  'no-cors' }).

// counter solution using chuck norrise api and ill change the name name locally 
// const requestJoke = async (firstName, lastName) => {
//     try {
//         const response = await fetch('https://api.chucknorris.io/jokes/random');

//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const jsonResponse = await response.json();
//         let joke = jsonResponse.value;

//         // Replace "Chuck Norris" with the custom name
//         const fullName = `${firstName} ${lastName}`;
//         joke = joke.replace(/Chuck Norris/gi, fullName);

//         console.log(joke);
//     } catch (error) {
//         console.error('Error fetching the joke:', error);
//     }
// };

// requestJoke("Dan", "iii");

// abstract into functions: (the way they write code)

// maybe from a form:
const getDataFromForm = () => {
    const requestObj = {
        type: "single",
        language: "en",
        category: "Dark"
    };
};

const BuildRequestUrl = (requestData) => {
    return `https://v2.jokeapi.dev/joke/Any?type=requestData.type&language=requestData.language&categories=requestData.language`;
};

const requestJoke = async (url) => {
    const response = await fetch(url);
    const jsonResponse = await response.json();
    const joke = jsonResponse;
    postJokeToPage(joke);
};

const postJokeToPage = (joke) =>{
    console.log(joke.
        setup + "\n" + joke.delivery);
};

// procedural "workFlow" function
const processJokeRequest = async () => {
    const requestData = getDataFromForm();
    const requestUrl = BuildRequestUrl(requestData);
    await requestJoke(requestUrl);
    console.log("done!!!");
};

processJokeRequest()