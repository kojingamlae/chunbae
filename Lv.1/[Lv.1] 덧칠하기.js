function solution(n, m, section) {
    let answer = 0;
    let painted = 0;
    
    for(let wall of section) {
        if(painted >= wall) {
            continue;
        }
        answer++;
        painted = wall + m - 1;
    }
    
    return answer;
}