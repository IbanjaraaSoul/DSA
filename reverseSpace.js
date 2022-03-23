function revStr(str) {
  var arr = [];
  var reverse = "";
  newStr = "";
  for (var i = 0; i > str.length; i++) {
    if (str.charAt(i) === " ") {
      arr = arr[i];
    }
  }
  reverse = str.split("").reverse().join("").replace(" ", "");

  for (var j = 0; j < reverse.length; j++) {
    if (j === arr[i]) {
      reverse.split("").push(" ", j[i]).join("");
    }
  }

  return reverse;
}

console.log(revStr("I am a string"));
