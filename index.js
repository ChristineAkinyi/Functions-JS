// Given an array of strings, use a function to reverse all the elements in the string in ascending order and the specific elements in descending order

function reverseStrings(arr) {
   arr = arr.map(str=> str.split("").reverse().join(""));
   arr.sort();
   arr.forEach((str, index)=>{
    if (index %2 !== 0){
        arr[index] = str.split("").reverse().join("");
    }
   });
   return arr;

}

const stringsArray = ["apple", "banana", "orange", "pineapple"];
const reversedArray = reverseStrings(stringsArray);
console.log(reversedArray);


// Using JS functions and an array of numbers, return positive if an element within the array is positive, negative if an element is negative, else zero
function checkPositiveNegative(numbers){
  for (let i =0; i <numbers.length; i++){
    const item = numbers[i];
          if (item > 0){
            return "positive"
          } else if (item < 0){
          return "negative";
        }
      }
      return "zero"
}


const numbersArr = [-7, 8, 9, -5, -3, 2, 1];
console.log(checkPositiveNegative(numbersArr));


// Given an array of objects, where each object represents an employee with an id, name, and salary property, write a function that returns a new array of employee objects sorted by their salary in ascending order.
function sortBySalary(employees){
  const sortEmployees = employeesArr.sort((a,b) => a.salary - b.salary);
  return sortEmployees;
}

const employeesArr = [
  {id:1, name: "Chris", salary:30000},
  {id:2, name: "Tony", salary:15000},
  {id:3, name: "John", salary:25000}
];

const sortedBySalary = sortBySalary(employeesArr);
console.log(sortedBySalary);


// Write a function that accepts an array of numbers and uses the forEach() method to console.log each number multiplied by 2.

 function multiplyByTwo(numbers) {
  const multiplied = numbers.map(number => number *2);
  return multiplied;
  }

  let numbers = [1,2,3,4,5];
  let resultArray = multiplyByTwo(numbers);
  console.log(resultArray);


      
    //  Write a function that takes in an array of numbers and consoles the first four items multiplied by 8 and the last two added by 5. Console the array with the new values
    
    function multiplyArr(numbers){
         if (numbers.length >=6){
          const multiplyFirstFour = numbers.slice(0,4).map(num => num *8);
          const addLastTwo = numbers.slice(-2).map(num => num + 5);
          const newValues = [...multiplyFirstFour, ...addLastTwo];
          return newValues;
         } else{
          console.log("Array should have 6 numbers");
         }
    }
     const number = [1,2,3,4,5,6,];
     let resultArrNumbers = (multiplyArr(number));
    console.log(resultArrNumbers); 
       
  
       