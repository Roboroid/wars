var palindromeChainLength = function(n) {
    let revers = Number.parseInt(n.toString().split('').reverse().join(''));
    let result = 0;
    
    while(n != revers){    
      n+=revers;
      revers = Number.parseInt(n.toString().split('').reverse().join(''));
      result++;
    }
    return result;
  };