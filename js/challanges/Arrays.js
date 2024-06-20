// draw a 2-D star array where the user decides its size

function drawArray(row, columns) {
    let starArray = [];

    // the rows 
    for (let i = 0; i < row; i++) {
        let rows = [];
        // columns loop
        for (let j = 0; j < columns; j++) {
            rows.push('*')
        }
        starArray.push(rows.join(' '));
    }


    return starArray.join('\n');
}

// console.log(drawArray(6,6));
// lets make the user enter the values

if (confirm("Wanna create something cool? like a 2-D array") === true) {
    // ask the user to enter the values

    let rows = parseInt(prompt("Enter the number of rows "));
    // check for pos numbers
    if (rows > 0) {
        let columns = parseInt(prompt("Enter the number of columns "));
        if (!isNaN(columns) && columns > 0) {
            // draw the array
            // console.log(drawArray(rows, columns));
            alert(drawArray(rows, columns));
        } else {
            alert("Enter a positive number");
        }
    }
     else {
        alert("Enter a positive number");
    }
} else {
    alert("maybe some other time :(");
}


