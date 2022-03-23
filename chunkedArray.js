const chunkedArray = (arr, chunksize) => {
  len = arr.length;
  let r = [];
  for (var i = 0; i < len; i += chunksize) {
    r.push(arr.slice(i, i + chunksize));
  }
  return r;
};

console.log(chunkedArray([1, 2, 3, 4, 5, 6, 7, 8]), 3);
