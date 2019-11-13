snail = function(array) {
    if(array.length == 1) return array[0];
  
    // enjoy
    const countFrames = Number.parseInt(array.length / 2);
    let isDone = false;   
    let result = [];
    let step = 0;
    let fragmentArr = [];
    while(!isDone) {
      fragmentArr = array.slice(0 + step, array.length - step).map(el => el.slice(0 + step, array.length - step));
      const fragmentResult = getFrameResult(fragmentArr);
      step++;
      if(!fragmentResult || fragmentResult.length ===1 || step > countFrames) {
        isDone = true;
      }
      if(fragmentResult) {
        result = [...result, ...fragmentResult ];
      }
    }
    return result;
  }
  
  function getFrameResult(array) {
    if (!array || !array.length) {
      return false;
    }
    if(array.length === 1) {
      return [array[0][0]]; 
    }
    
    let frame = [];
    frame = [...frame, ...array[0]];
    frame =  [...frame, ...array.slice(1).map(inArr => inArr[inArr.length-1])];
    frame = [...frame, ...array[array.length - 1].slice(0, array.length - 1).reverse()];
    frame = [...frame, ...array.slice(1, array.length - 1).map(inArr => inArr[0]).reverse()];
    return frame;  
  }