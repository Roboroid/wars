function solution(numbers) {
    let condition = true;
    while(condition) { 
      let min = Math.min(...numbers);
      numbers = numbers.map(el => el !== min ? el%min ? el%min : min  : el);
      console.log(numbers);
      condition = Math.min(...numbers) != Math.max(...numbers);
    }
    return numbers.length * numbers[0];
  }