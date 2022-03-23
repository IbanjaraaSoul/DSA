const reverseInt = (n) => {
  let revn = 0;
  revn = parseInt(n.toString().split("").reverse().join(""));
  return n < 0 ? -1 * revn : revn;
};

console.log({
  testcase1: reverseInt(123),
  testcase2: reverseInt(500),
  testcase3: reverseInt(-123),
  testcase4: reverseInt(-500),
});
