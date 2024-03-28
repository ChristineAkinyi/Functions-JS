// Given an array of strings, use a function to reverse all the elements in the string in ascending order and the specific elements in descending order

function reverseString() {
    let arr= arr.sort()
      const newArr = arr.filter();
       newArr.reverse();
      newArr.forEach((number, index) => {
          const originalIndex = arr.indexOf(number);
           if (originalIndex !== -1) {
            arr[originalIndex] = newArr[index];
           }
        });
       return arr;
      }
     console.log(arr);


// Write a function that accepts an array of numbers and uses the forEach() method to console.log each number multiplied by 2.

 function multiplyNumbers() {
     let arr =arr.forEach(number => {
      if (number > 0) {
         console.log("positive");
       } else if (number < 0) {
         console.log("negative");
       } else {
         console.log("zero");
       }
     });
    }
 multiplyNumbers();
      
    //  Write a function that takes in an array of numbers and consoles the first four items multiplied by 8 and the last two added by 5. Console the array with the new values
    function multiplyArray(arr) {
        const numbers = [1, 2, 3, 4, 5, 6];
        for (let i = 0; i < 4 && i < arr.length; i++) {
           arr[i] *= 8;
        }
       
        for (let i = arr.length - 2; i < arr.length; i++) {
           arr[i] += 5;
        }
       
       }
       console.log(arr);
       
  
       