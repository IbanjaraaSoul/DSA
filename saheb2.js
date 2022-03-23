//pandindrome

// const palindrome = (str) => {
//   str === str.split("").reverse().join("")
//     ? console.log(`is a palindrome`)
//     : console.log(`not a palindrome`);
// };
// palindrome("hello");

//Print maximum character in a string and how many times it appears

const maxCharwithMaxCount = (str) => {
  let obj = {};
  for (let char of str) {
    obj[char] ? obj[char]++ : (obj[char] = 1);
  }
  let maxNum = 0;
  let maxChar = "";
  for (let el in obj) {
    if (obj[el] >= maxNum) {
      maxNum = obj[el];
      maxChar = el;
    }
  }
  console.log(`${maxChar} appears ${maxNum} times`);
  console.log(maxChar + maxNum);
};

maxCharwithMaxCount("wwwwddyy");

//replace Rpeating Character with its Occurance

// const replaceRpeatingCharacterwithItsOccurance = (str) => {
//   let obj = {};
//   let newStr = "";
//   for (let el of str) {
//     obj[el] ? obj[el]++ : (obj[el] = 1);
//   }
//   for (let el in obj) {
//     newStr = newStr + el + obj[el];
//   }
//   console.log(newStr);
// };

// replaceRpeatingCharacterwithItsOccurance("wwwwddyy");
