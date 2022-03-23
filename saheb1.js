const names = ["Kumar", "Saheb", 1, "c", ["nested", "haha"]];
// console.log(names[3]);
// console.log(names[4]);
// names.push("newpush");
// for (const el of names) {
//   console.log(el);
// }

// console.log(names.findIndex((el) => el === "kumar"));
// names.splice(0, 2);
// console.log(names);
let sampleObject = {
  firstname: "kumar",
  isInstructor: true,
  numberofppl: 7,
  names: ["Kumar", "Saheb", 1, "c", ["nested", "haha"]],
};

console.log(Object.keys(sampleObject));
console.log(Object.values(sampleObject));
console.log(Object.entries(sampleObject));
console.log(names);
