
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(arguments.length !== 0){
    matrix = matrix.map((item,index)=>{
      if(index % 2 === 1){
        return item.reverse();
      }
      else{
        return item;
      }
    })
    return matrix.flat();
  }
  else{
    return []
  }
}
