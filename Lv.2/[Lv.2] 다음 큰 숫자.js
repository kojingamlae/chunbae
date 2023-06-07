function solution(n) {
  const JisnuLength = (num) => num.toString(2).match(/[1]/g);
  let i = n;
  while (1) {
    i++;
    if (JisnuLength(i).length === JisnuLength(n).length) {
      return i;
    }
  }
}
