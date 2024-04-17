function solution(n, m, section) {
    let answer = 0;
    for(let i = 1; i < n+1; i++) {
        if(section.includes(i)) {
            i = i + m - 1;
            answer++;
        }
    }
    return answer;
}