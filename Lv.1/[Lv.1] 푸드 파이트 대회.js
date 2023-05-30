function solution(food = [1, 3, 4, 6]) {
  const foodNumbers = food.map((i) => parseInt(i / 2));
  let foodArrange = [];
  let left = "";
  let right = "";

  for (let i = 1; i < food.length; i++) {
    for (let j = 0; j < foodNumbers[i]; j++) {
      foodArrange.push(i);
    }
  }

  for (let i = 0; i < foodArrange.length; i++) {
    left += foodArrange[i];
  }

  let reverseFoodArrange = foodArrange.reverse();

  for (let i = 0; i < reverseFoodArrange.length; i++) {
    right += reverseFoodArrange[i];
  }

  return left + "0" + right;
}
