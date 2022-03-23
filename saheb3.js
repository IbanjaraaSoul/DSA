const str = "this is normal string";
const reverseWordsWithin = (str = "") => {
  let res = "";
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] != " ") {
      res += str[i];
    }
    if (str[res.length] == " ") {
      res += str[res.length];
    }
  }
  return res;
};
console.log(reverseWordsWithin(str));
