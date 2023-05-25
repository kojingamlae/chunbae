function solution(price, money, count) {
  let priceSum = 0;
  for (let i = 1; i <= count; i++) {
    priceSum = priceSum + price * i;
  }
  if (money < priceSum) {
    return priceSum - money;
  }
  return 0;
}
