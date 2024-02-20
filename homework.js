//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
`Matched ${dog_name}` if name is in the string, if its not a match console.log "No Match"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!";
let dog_names = ["Max", "HAS", "PuRple", "dog"];

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
//Call method here with parameters

//============Exercise #2 ============//
/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let arr = ["Max", "Baseball", "Reboot", "Goku", "Trucks", "Rodger"];

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

console.log(replaceEvens(arr));

function replaceEvensInPlace(arr) {
  for (idx in arr) {
    if (idx % 2 == 0) {
      arr.splice(idx, 1, 'even index');
    }
  }
}

replaceEvensInPlace(arr);
console.log(arr);

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
