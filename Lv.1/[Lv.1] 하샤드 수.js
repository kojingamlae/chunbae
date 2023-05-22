function solution(x) {
  const numberString = String(x);
  let sum = 0;

  for (let i = 0; i < numberString.length; i++) {
    sum += Number(numberString[i]);
  }

  if (x % sum === 0) {
    return true;
  }
  return false;
}
