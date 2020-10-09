
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let array = [];
  if(arguments.length === 0 || matrix.length === 0) return [];
  matrix.forEach((element, index) => {
    if(index % 2 ===0) {
      array = array.concat(element);
    }
      else {
        array = array.concat(element.reverse());
      }
  });
  return array;
}

