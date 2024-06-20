// // // regular expressions : used to describe and select patterns inside a string data and they make up a small separate language that could be used inside many programming languages.

// // // https://regexr.com/

// // // an event listener for the input
// // document.getElementById("phoneNumber").addEventListener("input", (event)=>{
// //     // defined our regex
// //     const regEx = /^\(?(\d{3})\)?[-. ]?(\d{3})[-. ]?(\d{4})$/g;
// //     const input = document.getElementById("phoneNumber");
// //     const format = document.querySelector(".phoneFormat");
// //     const phone = input.value;
// //     const found = regEx.test(phone);

// //     if(!found && phone.length) {
// //         input.classList.add("invalid");
// //         format.classList.add("block");
// //     }else {
// //         input.classList.remove("invalid");
// //         format.classList.remove("block");
// //     }

// // });


// // document.getElementById("phoneForm").addEventListener("submit", (event) => {
// //     event.preventDefault();
// //     const input = document.getElementById("phoneNumber");
// //     const regEx = /[()-. ]/g;
// //     const savedPhoneNum = input.value.replaceAll(regEx, "");
// //     console.log(savedPhoneNum);
// // })



// // this code will prohibit the user from submitting a wrong phone number
// const regEx = /^\(?(\d{3})\)?[-. ]?(\d{3})[-. ]?(\d{4})$/;

//         document.getElementById("phoneNumber").addEventListener("input", (event) => {
//             const input = document.getElementById("phoneNumber");
//             const format = document.querySelector(".phoneFormat");
//             const phone = input.value;
//             const found = regEx.test(phone);

//             if (!found && phone.length) {
//                 input.classList.add("invalid");
//                 format.classList.add("block");
//             } else {
//                 input.classList.remove("invalid");
//                 format.classList.remove("block");
//             }
//         });

//         document.getElementById("phoneForm").addEventListener("submit", (event) => {
//             event.preventDefault();
//             const input = document.getElementById("phoneNumber");
//             const phone = input.value;
//             const found = regEx.test(phone);

//             if (!found) {
//                 // Show error message
//                 input.classList.add("invalid");
//                 document.querySelector(".phoneFormat").classList.add("block");
//                 return;
//             }

//             // Remove non-digit characters before saving
//             const cleanedPhoneNum = phone.replace(/[()-. ]/g, "");
//             console.log("Saved phone number:", cleanedPhoneNum);

//             // Optionally, clear the input field
//             input.value = "";
//         });


// the second example: a form that accepts text:
document.getElementById("textForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.getElementById("textEntry");

    // we are looking for occurrences of more than once space:
    // both could work
    // const regex = /\s{2,} /g;
    const regex = / {2,}/g;
    const newText = input.value.replaceAll(regex, " ").trim();
    console.log(newText);

    // to clean up the text before sending it to an api 
    // not clean url
    const encodedInputText = encodeURI(input.value);
    const encodedCleanText = encodeURI(newText);

    console.log(encodedInputText);
    console.log(encodedCleanText);

});
addEvent