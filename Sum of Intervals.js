function sumIntervals(intervals){
    console.log(intervals);
      let result = 0;
      while(intervals.length > 0){
        removeIntervals(intervals);
        let curInterval = intervals[intervals.length -1];
        intervals.pop();
        result += (curInterval[1] - curInterval[0]);  
      }
      return result;
      
    }
    
    function removeIntervals(intervals){  
      if(intervals.length == 1) return intervals;
      let wasRemoved = false;
      curInterval = intervals[intervals.length - 1];
      for(let i= intervals.length - 2; i > -1; i-- ){
          let curr = intervals[i];
          
          if(isNeedRevove(curInterval, curr)){
            if(curInterval[0] > curr[0]){
              curInterval[0] = curr[0];
            }
            
            if(curInterval[1] < curr[1]) {
              curInterval[1] = curr[1];
            }
            wasRemoved = true;
            intervals.splice(i, 1);       
          }
       }
       if(!wasRemoved){
         return intervals;
       }else{
         removeIntervals(intervals);
       }
    }
    
    function isNeedRevove(currInterval, compareInterval){
          return !(currInterval[0] >= compareInterval[1] || compareInterval[0] >= currInterval[1]);       
      } 