function solution(numbers) {
  let sum = 45;
  numbers.sort((a, b) => a - b);

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < 10; j++) {
      if (numbers[i] === j) {
        sum -= j;
      }
    }
  }
  return sum;
}
