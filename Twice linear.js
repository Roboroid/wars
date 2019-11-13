function dblLinear(n) {    
    let listResult = [1, 3, 4, 7, 9, 10, 13, 15, 19, 21, 22, 27];
 
         while (listResult.length < n + 1) {
             listResult.push(getNext(listResult));            
         }
         return listResult[n];
 
         function getNext(listResult) {
             let oldLatest = {};
 
             oldLatest["oldLatest"] = listResult[listResult.length - 1];
             oldLatest["inTwoLocatedEll"] = Number.parseInt((oldLatest["oldLatest"] - 1) / 2);
             oldLatest["inThreeLocated"] = Number.parseInt((oldLatest["oldLatest"] - 1) / 3);
             oldLatest["approximatingStep"] = Number.parseInt(1 + listResult.length / 200);
             oldLatest["nextAfterDiv3"] = getNearestMore(listResult, oldLatest["approximatingStep"], oldLatest["inThreeLocated"]);
             oldLatest["nextAfterDiv2"] = getNearestMore(listResult, oldLatest["approximatingStep"], oldLatest["inTwoLocatedEll"]);
             
             return Math.min(oldLatest["nextAfterDiv3"] * 3 + 1, oldLatest["nextAfterDiv2"] * 2 + 1); 
             
             function getNearestMore(listResult, step, ellBefore) {              
                 for(let i = step; i < listResult.length; i=Math.min(i+ step, listResult.length -1)) {
                     if(listResult[i] > ellBefore) {
                         for(let j=i; true; j--) {
                             if(listResult[j] <= ellBefore) {
                                return listResult[j+1];
                             }    
                         }    
                     }    
                 }    
             }    
         }
     
 }