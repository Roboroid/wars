const toBits = (set) => {
    let arr = set.split("\n").map((v)=>+v);  
    let result = [];
    for(let i=0; i<5000; i++){
      if(arr.indexOf(i) > -1){
        result.push(1);
      }else{
        result.push(0);
      }    
    }
    return result;  
  }