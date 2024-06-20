// // // Event listeners 
// // // const hidden = document.querySelector("#view1");
// // // hidden.style.display = "none";
// // // const view = document.querySelector("#view2");
// // // view.style.display = "flex";

// // // const div = view.querySelector("div");
// // // const h2 = div.querySelector("h2");


// // // add an Event listener 
// // // syntax: addEventListener(event, function, useCapture);

// // const doSomeThing = () => {
// //     alert( "I'm doing Something...");
// // };

// // h2.addEventListener("click", doSomeThing, false);
// // h2.removeEventListener("click", doSomeThing, false);

// // // // using an anonymous function
// // h2.addEventListener('click', (event) => {
// //     console.log(event.target);
// //     event.target.textContent = "clicked";
// // });

// // // or we could use the traditional function
// // h2.addEventListener("click", function(event) {
// //     console.log(event.target);
// //     event.target.textContent = "get Fcked";
// // });

// // the ready-state-change
// document.addEventListener("readystatechange", (event) => {
//     if (event.target.readyState === "complete") {
//         console.log("readyState: complete");
//         initApp();  //could start loading other event listeners and start interacting with the DOM
//     }
// });


// const initApp = () => {
//     const hidden = document.querySelector("#view1");
//     hidden.style.display = "none";
//     const view = document.querySelector("#view2");
//     view.style.display = "flex";

//     const div = view.querySelector("div");
//     const h2 = div.querySelector("h2");


//     // bunch of event listeners
//     view.addEventListener("click", (event) => {
//         // event.stopPropagation();
//         // view.style.backgroundColor = "purple";
//         // event.target.style.backgroundColor = "purple";
//         // view.classList.add("purple");
//         // view.classList.remove("darkblue");
//         // better way is to use 
//         view.classList.toggle("purple");
//         view.classList.toggle("darkblue");
//     },false);

//     div.addEventListener("click", (event) => {
//         // event.stopPropagation();
//         // div.style.backgroundColor = "blue";
//         // event.target.style.backgroundColor = "blue";
//         div.classList.toggle("blue");
//         div.classList.toggle("black");
//     },false);

//     h2.addEventListener("click", (event) => {
//         // event.stopPropagation();
//         // event.target.textContent = "get fucked!";

//         const myText = event.target.textContent;
//         myText === "my 2nd view" 
//             ? event.target.textContent = "get fucked!" : event.target.textContent = "my 2nd view";
//     },false);

//     const nav = document.querySelector("nav");
//     nav.addEventListener("mouseover", (event) => {
//         event.target.classList.add("height100");
//     });

//     nav.addEventListener("mouseout", (event) => {
//         event.target.classList.remove("height100");
//     });
// };

// // the code above is an example of bubbling up :
// // first when we click on the h2 it changes and the changing triggers the div bubble which changes its color and triggers the view bubble

// // it we set the useCapture to "true" = meaning bubble down it'll do the opposite.


// event Listeners in forms 
document.addEventListener("readystatechange", (event) => {
    if(event.target.readyState === "complete"){
        console.log("readyState: completed");
        init();
    }
});

const init = () =>{
    const hiddenView = document.querySelector("#view1");
    hiddenView.style.display = "none";

    const view3 = document.querySelector("#view3");
    view3.style.display = "flex";

    const myForm = view3.querySelector("#myForm");
    myForm.addEventListener("submit", (event)=> {
        event.preventDefault();
        console.log("submit event");
    });
};