function solution(answers) {
  let answer = [];

  let answerCount = [0, 0, 0];
  const supojaOne = [1, 2, 3, 4, 5];
  const supojaTwo = [2, 1, 2, 3, 2, 4, 2, 5];
  const supojaThree = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  for (let i = 0; i < answers.length; i++) {
    if (supojaOne[i % 5] === answers[i]) {
      answerCount[0]++;
    }
    if (supojaTwo[i % 8] === answers[i]) {
      answerCount[1]++;
    }
    if (supojaThree[i % 10] === answers[i]) {
      answerCount[2]++;
    }
  }

  const max = Math.max(...answerCount);

  for (let i = 0; i < 3; i++) {
    if (answerCount[i] === max) {
      answer.push(i + 1);
    }
  }

  return answer;
}
