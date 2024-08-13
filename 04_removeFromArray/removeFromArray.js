const removeFromArray = function (array, ...params) {
  const newArray = [];
  for (let i = 0; i < array.length; ++i) {
    if (!params.includes(array[i])) newArray.push(array[i]);
  }
  return newArray;
};

console.log(removeFromArray([1, 2, 3, 4], 7, 2));
// Do not edit below this line
module.exports = removeFromArray;
