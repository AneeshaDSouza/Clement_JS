//o(n) time o(n) space
//leetcode 135x
function minRewards(scores) {
    let reward = new Array(scores.length).fill(1);
      
      let leftTraversalReward  = new Array(scores.length).fill(1);
      let rightTraversalReward = new Array(scores.length).fill(1);
      
      for(let i=0; i<scores.length; i++){
          
          if(scores[i] < scores[i+1]){
              leftTraversalReward[i+1] = leftTraversalReward[i] +1;
          }
      }
      for(let i=scores.length-1; i>=0; i--){
          
          if(scores[i] < scores[i-1]){
              rightTraversalReward[i-1] = rightTraversalReward[i] +1;
          }
      }
      let totalReward =0;
      for(let i=0; i<scores.length; i++){
          reward[i] =Math.max(leftTraversalReward[i],rightTraversalReward[i]);
          totalReward += reward[i];
      }
      return totalReward;
  }
  
  // Do not edit the line below.
  exports.minRewards = minRewards;
  