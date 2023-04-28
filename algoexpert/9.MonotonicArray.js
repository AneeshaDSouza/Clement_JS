//9 o(n) time and o(1) space
function isMonotonic(array) {
    if(array.length <= 2 ) return true;
      
      let direction = array[1] - array[0];
      
      for (let i=2; i<array.length; i++){
          if(direction ===0){
              direction = array[i]-array[i-1];
              continue;
          }
          if( breaksDirection(direction, array[i-1], array[i])){
              return false;
          }
      }
      return true;
  }
  function breaksDirection(direction, previousInt, currentInt){
      const difference = currentInt- previousInt
      if(direction >0) return difference <0;
      return difference>0;
  }
  
  // Do not edit the line below.
  exports.isMonotonic = isMonotonic;

  //o(n) time and 0(1) space
  function isMonotonic(array) {
    let isNonDecreasing = true;
      let isNonIncreasing = true;
      for(let i=1; i<array.length; i++){
          if(array[i]<array[i-1]) isNonDecreasing = false;
          if(array[i]> array[i-1]) isNonIncreasing = false
      }
      return isNonDecreasing || isNonIncreasing;
  }
  
  // Do not edit the line below.
  exports.isMonotonic = isMonotonic;