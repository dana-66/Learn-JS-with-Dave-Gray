// const playGuitar = () => {
//     return "playing Guitar !!!";
// };

// const shredding = () => {
//     return "shredding some licks !!!";
// };

// const plucking = () => {
//     return "plucking the strings ...";
// };

// one way of exporting the functions 
// export default playGuitar;
// export {shredding, plucking };


// another way (inline):

export default function playGuitar () {
    return "playing Guitar !!!";
};

export const shredding = () => {
    return "shredding some licks !!!";
};

export const plucking = () => {
    return "plucking the strings ...";
};