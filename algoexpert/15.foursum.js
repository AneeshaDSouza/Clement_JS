function fourNumberSum(nums, target) {
    let res =[];
      let n = nums.length;
      nums.sort((a,b) => a-b);
      for(let i=0; i<n; i++){
          for (let j=i+1; j<n; j++){
              let target2 = target - nums[i] - nums[j];
              let front = j+1;
              let back = n-1;
              
              while(front<back){
                  let twosum = nums[front] + nums[back];
                  
                  if(twosum< target2) front++;
                  else if(twosum >target2) back--;
                  else{
                      res.push([nums[i] , nums[j] , nums[front] , nums[back]]);
                      while(nums[front] === nums[front+1]) front++
                      while( nums[back] === nums[back-1]) back--;
                      front++;
                      back--
                  }
              
              }
              while(nums[j] === nums[j+1]) j++
              
          }
          while(nums[i] === nums[i+1]) i++
      }
      return res
  }
  