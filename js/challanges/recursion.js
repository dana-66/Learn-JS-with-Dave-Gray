/*We have defined a function named rangeOfNumbers with two parameters. The function should return an array of integers which begins with a number represented by the startNum parameter and ends with a number represented by the endNum parameter. The starting number will always be less than or equal to the ending number. Your function must use recursion by calling itself and not use loops of any kind. It should also work for cases where both startNum and endNum are the same. */
function rangeOfNumbers(startNum, endNum) {
    if (startNum > endNum){
      return [];
    }else{
      const arr = rangeOfNumbers(startNum, endNum -1);
      arr.push(endNum);
  
      return arr;
    }
  };
  console.log(rangeOfNumbers(1,6));