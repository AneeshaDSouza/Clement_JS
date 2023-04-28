//O(b^2 *r) time and o(b) space

function apartmentHunting(blocks, reqs) {
    // Write your code here.
      const maxDistancesAtBlocks= new Array(blocks.length).fill(-Infinity);
      for(let i=0; i<blocks.length; i++){
          
          let block = blocks[i];
          for(const req of reqs){
              let closestReqDistance = Infinity;
              for(let j=0; j< blocks.length; j++){
                  if(blocks[j][req]){
                      closestReqDistance = Math.min(closestReqDistance, distanceBetween(i,j));
                  }
              }
              maxDistancesAtBlocks[i] = Math.max(maxDistancesAtBlocks[i],closestReqDistance);
          }
      }
      return getIdxAtMinValue(maxDistancesAtBlocks);
  }
  
  function getIdxAtMinValue(array){
      let idxAtMinValue =0;
      let minValue = Infinity;
      for (let i=0; i<array.length; i++){
          const currentValue = array[i];
          if (currentValue< minValue) {
              minValue = currentValue;
              idxAtMinValue =i;
          }
      }
      return idxAtMinValue;
  }
  
  function distanceBetween(a,b){
      return Math.abs(a-b);
  }
  

  //time o(br) and space o(br+b) ie o(B)
  function apartmentHunting(blocks, reqs) {
    const minDistancesFromBlocks = reqs.map(req => getMinDistances(blocks,req));
      const maxDistancesAtBlocks = getMaxDistancesAtBlocks(blocks, minDistancesFromBlocks);
      return getIdxAtMinValue(maxDistancesAtBlocks);
  }
  
  function getMinDistances(blocks, req) {
      const minDistances = new Array(blocks.length);
      let closestReqIdx = Infinity;
      for( let i=0; i< blocks.length; i++){
          if(blocks[i][req]) closestReqIdx =i;
          minDistances[i] = distanceBetween(i, closestReqIdx);
      }
      for(let i= blocks.length-1; i>=0; i--){
          if(blocks[i][req]) closestReqIdx =i;
          minDistances[i] = Math.min(minDistances[i], distanceBetween(i,closestReqIdx ));
      }
      return minDistances;
  }
  
  function getMaxDistancesAtBlocks(blocks, minDistancesFromBlocks) {
      const maxDistancesAtBlocks = new Array(blocks.length);
      for( let i=0; i< blocks.length ; i++) {
          const minDistancesAtBlock = minDistancesFromBlocks.map(distances => distances[i]);
          maxDistancesAtBlocks[i] = Math.max(...minDistancesAtBlock);
      }
      return maxDistancesAtBlocks;
  }
  function getIdxAtMinValue(array){
      let idxAtMinValue =0;
      let minValue = Infinity;
      for (let i=0; i<array.length; i++){
          const currentValue = array[i];
          if (currentValue< minValue) {
              minValue = currentValue;
              idxAtMinValue =i;
          }
      }
      return idxAtMinValue;
  }
  
  function distanceBetween(a,b){
      return Math.abs(a-b);
  }
  // Do not edit the line below.
  exports.apartmentHunting = apartmentHunting;

