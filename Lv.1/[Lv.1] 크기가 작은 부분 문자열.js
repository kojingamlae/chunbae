function solution(t, p) {
  let count = 0;
  for (let i = 0; i < t.length - p.length + 1; i++) {
    if (p >= t.slice(i, i + p.length)) {
      count++;
    }
  }
  return count;
}
