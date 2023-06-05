function solution(s) {
  let array = s.split(" ");
  return Math.min(...array) + " " + Math.max(...array);
}
