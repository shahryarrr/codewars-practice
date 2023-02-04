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

