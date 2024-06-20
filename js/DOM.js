// DOM - Document Object Model

// 1- selecting an element by id
const view1 = document.getElementById("view1");
console.log(view1);

const view2 = document.querySelector("#view2");
console.log(view2);

// to change the style / disappearance of an element
view1.style.display = "flex";
view2.style.display = "none";

// to select multiple elements with the same classname
// const views = document.getElementsByClassName("boxes");
// console.log(views);
// // or
// const sameViews = document.querySelectorAll(".boxes");
// console.log(sameViews);

// // to select all the elements in a section 
// // in our case all the divs in view1:
// const divs = view1.querySelectorAll("div");
// console.log(divs);

// const sameDivs = view1.getElementsByTagName("div");
// console.log(sameDivs);

// to play with the selected divs
const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");
console.log(evenDivs);

// to alter the selected divs
for(let i = 0; i < evenDivs.length; i++){
    evenDivs[i].style.backgroundColor ="navy";
    // evenDivs[i].style.display = "none";
    // evenDivs[i].style.width = "200px";
    // evenDivs[i].style.height = "200px";
}

// lets change some text
const navText = document.querySelector("nav h1");
console.log(navText);
navText.textContent = "Hello World!";

const navBar = document.querySelector("nav");
navBar.innerHTML ='<h1> Hi, Bitch! </h1> <p>  How you doin ?</p>';
navBar.style.justifyContent = "flex-start"
console.log(navBar);

// i can select an element from a selected divs
console.log(evenDivs[0]);
console.log(evenDivs[0].parentElement);
console.log(evenDivs[0].parentElement.children);
console.log(evenDivs[0].parentElement.childNodes);
console.log(evenDivs[0].parentElement.hasChildNodes());
console.log(evenDivs[0].parentElement.lastChild);
console.log(evenDivs[0].parentElement.lastElementChild);
console.log(evenDivs[0].parentElement.firstChild);
console.log(evenDivs[0].parentElement.firstElementChild);

console.log(evenDivs[0].nextSibling);
console.log(evenDivs[0].nextElementSibling);

console.log(evenDivs[0].previousSibling);
console.log(evenDivs[0].previousElementSibling);


view1.style.display = "none";
view2.style.display = "flex";
view2.style.flexDirection = "row";
view2.style.flexWrap = "wrap";
view2.style.margin = "10px";


// to remove nodes from the page
while(view2.lastChild) {
    view2.lastChild.remove();
}
// here our second view is empty 

// add content 
const createDivs  = (parent, iterator) => {
    const newDiv = document.createElement("div");
    newDiv.textContent = iterator;
    newDiv.style.backgroundColor = "black";
    newDiv.style.fontSize = "20px";
    newDiv.style.width = "100px";
    newDiv.style.height = "100px";
    newDiv.style.color = "fff";
    newDiv.style.margin = "10px"
    newDiv.style.display = "flex";
    newDiv.style.justifyContent = "center";
    newDiv.style.alignItems = "center";
    parent.append(newDiv);

};

// createDivs(view2, 10);
for(let  i = 1; i<= 12; i++) {
    createDivs(view2, i); 
}