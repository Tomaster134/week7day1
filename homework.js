//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
`Matched ${dog_name}` if name is in the string, if its not a match console.log "No Match"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!";
let dog_names = ["Max", "HAS", "PuRple", "dog"];

//Wasn't sure if there needed to be a return or a console.log on the matched list, wording was kinda ambigious
function findWords(string, search) {
  let results = [];
  for (idx in search) {
    if (string.toLowerCase().includes(search[idx].toLowerCase())) {
      results.push(`Matched ${search[idx]}`);
    } else {
      console.log(`No match for ${search[idx]}`);
    }
  }
  return results;
}
console.log(findWords(dog_string, dog_names));

//============Exercise #2 ============//
/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let arr1 = ["Max", "Baseball", "Reboot", "Goku", "Trucks", "Rodger"];
let arr2 = ["Max", "Baseball", "Reboot", "Goku", "Trucks", "Rodger"];

function replaceEvens(arr) {
  let new_arr = [];
  for (idx in arr) {
    if (idx % 2 == 0) {
      new_arr.push("even index");
    } else {
      new_arr.push(arr[idx]);
    }
  }
  return new_arr;
}

console.log(replaceEvens(arr1));

function replaceEvensInPlace(arr) {
  for (idx in arr) {
    if (idx % 2 == 0) {
      arr.splice(idx, 1, "even index");
    }
  }
}

replaceEvensInPlace(arr2);
console.log(arr2);

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

///////////////////////////////////////////////////////////////////////////////////////////
// Codewars
// 1. Vowel Count
function getCount(str) {
  let counter = 0;
  for (idx in str) {
    if (
      str[idx] == "a" ||
      str[idx] == "e" ||
      str[idx] == "i" ||
      str[idx] == "o" ||
      str[idx] == "u"
    ) {
      counter++;
    }
  }
  return counter;
}

// 2. Square Every Digit
function squareDigits(num) {
  let string = String(num);
  let newString = "";
  for (idx in string) {
    newString = newString.concat(Number(string[idx]) ** 2);
  }
  return Number(newString);
}

// 3. Multiples of 3 or 5
function solution(number) {
  let sum = 0;
  for (let i = 0; i < number; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      sum += i;
    } else if (i % 5 == 0) {
      sum += i;
    } else if (i % 3 == 0) {
      sum += i;
    }
  }
  return sum;
}
