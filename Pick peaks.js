function pickPeaks(arr){
  let result = {pos: [], peaks:[]};
  let checkEquals = false;
  let firstPosEqual = -1;
  let firstPeak = -1;
  for(let j = 1; j < arr.length-1; j++){   
    //console.log(arr[j]);
    if(arr[j-1] <= arr[j] && arr[j] >= arr[j+1]){
    //console.log(arr[j]);
      if(arr[j] == arr[j+1] && arr[j-1] < arr[j]){
      console.log('equal');
        checkEquals = true;
        firstPosEqual = j;
        firstPeak = arr[j];
      }else if(arr[j-1] < arr[j] && arr[j] > arr[j+1]) {        
        result.pos.push(j);
        result.peaks.push(arr[j]);
        checkEquals = false;
      }
      
      if(checkEquals && arr[j] > arr[j+1]){
        console.log('equalCheck', firstPosEqual, firstPeak );
        result.pos.push(firstPosEqual);
        result.peaks.push(firstPeak);
      }     
  }
    
}
return result;
}
