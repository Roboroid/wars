function differentiate(equation, point){
    console.log(equation);
      let buff = [];
      let acum = '';
    
      for(let i = 0; i < equation.length; i++) {
        let curentChar = equation.charAt(i);
        
        if(i != 0 && '+-'.includes(curentChar)){
          buff.push(acum);      
          acum = '';
        }
        acum += curentChar;
      }
      buff.push(acum);
      for(let i = 0; i < buff.length; i++) {
        if(buff[i].search(/\^/) !== -1){
          buff[i] = buff[i].replace(/x\^\d+$/, (str) => { 
          let degree = str.slice(2); 
          let xStringMulty = '';
          if(buff[i].search(/^[-+]?\d/) !== -1){        
            for(let j = 0; j < degree - 1; j++ ) {
              xStringMulty += '*x'
            }
            xStringMulty += '*' + degree;
          }else{
            for(let j = 0; j < degree - 1; j++ ) {
              xStringMulty += 'x*'
            }
            xStringMulty += degree
          }
          //console.log(xStringMulty);
          return xStringMulty;
          
          });    
          //console.log(buff[i]);
          buff[i] = buff[i].replace(/x/g, `${point}`);      
        }else if(buff[i].search('x') != -1) {
          if(buff[i].search(/\d/) !== -1){
            buff[i] = buff[i].replace('x', '');
          }else {
            buff[i] = buff[i].replace('x', '1');
          }
          
        }else {
          buff[i] = '';
        }    
      }  
      return eval(buff.join(''));  
    }