decodeMorse = function(morseCode){
    console.log(morseCode);
      let res = morseCode.split("   ");
    //   return res.map((el)=>el.reduce((acum, cur)=> {
    //   console.log(acum, cur);
    //   //acum = "";
    //   if(MORSE_CODE[acum]){
    //   return MORSE_CODE[acum] + MORSE_CODE[cur];
    //   }
    
    //   let resStr = "";
    //   res.forEach((v)=> {
    //   if(MORSE_CODE[v]){
    //    return resStr +=MORSE_CODE[v1];
    //   }
    //   resStr+=resStr?" ": "";
    //   return v.forEach((v1)=>resStr +=MORSE_CODE[v1]);
      
    //   } )
    
    
    MORSE_CODE[morseCode];
    let resStr = "";
    for(let i=0; i<res.length; i++){
    console.log(res[i]);
    if(resStr){
     resStr+=" ";
    }
    if(MORSE_CODE[res[i]]){
      resStr+=MORSE_CODE[res[i]];
      continue;
    }
    
    let innerRes = res[i].split(" ");
     for(let j=0; j<innerRes.length; j++){
     console.log(innerRes[j], i, j);
      resStr+=innerRes[j]?MORSE_CODE[innerRes[j]]:"";
     }
    }
      //return res;
      
      return resStr;
    }