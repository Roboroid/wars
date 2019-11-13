function isValidIP(str) {


    let octetsStrArr = str.split(".");
    let octetsNumArr = octetsStrArr.map(v=>+v);
    if(octetsNumArr.length != 4) return false;
    const octLength = octetsStrArr.length;
    let res = true;
    
    for(let i=0; i<octLength; i++){
        if(isNaN(octetsNumArr[i])){
          return false;
        }
        
        if(0>octetsNumArr[i] || octetsNumArr[i]>255 ){
            return false;
        }
        
        if(octetsNumArr[i].toString().length != octetsStrArr[i].length){
          return false;
        }
    }
    
    console.log(octetsNumArr, octLength);
    return res;
  }