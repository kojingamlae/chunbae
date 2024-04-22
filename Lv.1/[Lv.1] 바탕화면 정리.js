function solution(wallpaper) {
    let answer = [];
    const xArr = [];
    const yArr = [];
    
    for(let i = 0; i < wallpaper.length; i++) {
        for(let j = 0; j < wallpaper[i].split("").length; j++) {
            if(wallpaper[i][j] === "#") {
                yArr.push(i);
                xArr.push(j);
             }
        }
    }
    
    return [Math.min(...yArr), Math.min(...xArr), Math.max(...yArr) + 1, Math.max(...xArr) + 1];
}