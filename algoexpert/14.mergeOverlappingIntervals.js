//o(nlogn) time o(n) space

function mergeOverlappingIntervals(array) {
    const sortedIntervals = array.sort((a,b) => a[0]-b[0]);
      
      const mergedIntervals =[];
      let currentInterval = sortedIntervals[0];
      mergedIntervals.push(currentInterval);
      
      for (const nextInterval of sortedIntervals){
          const [_, currentIntervalEnd] = currentInterval;
          const [nextIntervalStart, nextIntervalEnd] = nextInterval;
          
          if(currentIntervalEnd >= nextIntervalStart)
              currentInterval[1] =Math.max(currentIntervalEnd, nextIntervalEnd);
          else{
              currentInterval = nextInterval;
              mergedIntervals.push(currentInterval);
          }
      }
    return mergedIntervals;
  }
  
  // Do not edit the line below.
  exports.mergeOverlappingIntervals = mergeOverlappingIntervals;

  function mergeOverlappingIntervals(intervals) {
    if(intervals.length ==0) return [];
      let results =[];
      intervals.sort((a,b) => a[0] -b[0]);
      
      let start = intervals[0][0];
      let end = intervals[0][1];
      
      for (let i=0; i<intervals.length; i++){
          if(intervals[i][0] <=end){
              
              end = Math.max(end, intervals[i][1]);
              
          }
          else {
              
              results.push([start,end]);
              start = intervals[i][0];
              end = intervals[i][1];
          }
      }
      results.push([start, end]);
      return results
  }
  
  // Do not edit the line below.
  exports.mergeOverlappingIntervals = mergeOverlappingIntervals;