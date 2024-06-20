// Higher Order Function
// its a function that does at least one of the following:

// 1- takes one or more functions as parameters(arguments).
// 2- returns a function as the result.


// first we are importing the json file or the data
import { posts } from "./posts.js";

// examples on higher-order-functions 
// 1- foreach():
posts.forEach( post => {
    // what to do
    console.log(post);
});

console.clear();

// 2- filter();
const filteredPosts = posts.filter((post) => {
    return post.userId === 10;
});

console.log(filteredPosts);

// 3- map();
const mappedPosts = filteredPosts.map((post) => {
    return post.id * 10;
});

console.log(mappedPosts);

// 4- reduce();
const reducedPostsValue = mappedPosts.reduce((sum, post) =>{
    return sum + post ;
    // هنا حمعلي القيم من الاول ل الاخر
    // the total of all the numbers from the mapped array 
});

console.log(reducedPostsValue);


