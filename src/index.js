
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(matrix === undefined || matrix.length === 0) return []
  let arr = []
  matrix.forEach((element, index) => {
    if(index % 2 === 0){
       element.forEach(el => arr.push(el))
    } else {
      element.reverse().forEach(el => arr.push(el))
    }   
  })
  return arr;
}
