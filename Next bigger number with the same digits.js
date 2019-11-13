function nextBigger(n){
    let  arrInt = String(n).split('').map(v => +v);
    if(arrInt.length<2) return -1;    
    for(let j = arrInt.length -2; j > -1; j--){
      for(let i = arrInt.length -1 ; i>j; i--){        
        if(arrInt[i] > arrInt[j]){
          let temp = arrInt[i];
          arrInt[i] = arrInt[j];
          arrInt[j] = temp;
          let result = arrInt.slice(0, j+1);       
          return Number.parseInt(result.concat(arrInt.slice(j+1, arrInt.length).sort((a,b)=> a-b)).join(''));
        }
      }  
    }  
    return -1;
  }