function solution(d, budget) {
  let count = 0;
  d.sort((a, b) => a - b);

  for (let i = 0; i < d.length; i++) {
    if (d[i] > budget) return count;
    count++;
    budget -= d[i];
  }
  return count;
}
