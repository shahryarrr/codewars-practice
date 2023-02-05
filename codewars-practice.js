// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

function solution(str, ending){
  return str.endsWith(ending);
}

/* Complete the solution so that it reverses the string passed into it.
'world'  =>  'dlrow'
'word'   =>  'drow' */

function reverseString(str) {
  return str.split('').reverse().join('');
}

// write a function that takes a String and returns an Array/list with the length of each word added to each element //

function wordLengths(str) {
  return str.split(' ').map(word => word.length);
}


//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers for javascript

function evenOrOdd(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}
