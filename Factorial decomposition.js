function decomp(n) {
  console.log(n);
  let res = "";
  for(let i=2; i<n+1;i++){
    if(isSimple(i)){
      let exp = 0;
      for(let j=i; j<n+1; j++){
        exp+=getExp(j, i);
      }
    
      res+=exp>1?i+ "^" + exp:exp==1?i:"";
      res+=" * ";
    }  
  }
  res = res.substring(0, res.length - 3);
  
  
  function getExp(j, devisor){
    let exp = 0; 
    while(j%devisor == 0 && j>0){
    exp++;
    j=j/devisor;
    }
  return exp;
  
  }
  
  function isSimple(input){
    if(input/2 < 2) return true;
    for(let j=2; j< Math.ceil(input/2)+1;j++){
      if(input%j==0) return false;
    }
    return true;
  
  }
  return res;
  // your code
}