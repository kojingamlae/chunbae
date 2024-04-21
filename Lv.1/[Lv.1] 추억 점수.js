function solution(name, yearning, photo) {
    const answer = [];
    let obj = {};
    
    for(let i = 0; i < name.length; i++) {
        obj[name[i]] = yearning[i];
    }
        
    for(let i = 0; i < photo.length; i++) {
        let total = 0;
        
        for(let j = 0; j < photo[i].length; j++) {
            if(obj[photo[i][j]] != null) {
                total += obj[photo[i][j]];
            }
        }
        
        answer.push(total);
    }
    
    return answer;
}