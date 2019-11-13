function solution(input, markers) {
    let result = input.split('\n');
    const rex = new RegExp('\\s+?[' + markers.join('') + '].+');
    return result.map(el => el.replace(rex, '')).join('\n'); 
  };