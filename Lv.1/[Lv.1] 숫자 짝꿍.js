function solution(X, Y) {
    let result = "";
    const xArray = X.split("");
    const yArray = Y.split("");
    
    for(let i = 9; i >= 0; i--) {
        const x = xArray.filter((item) => item == i).length;
        const y = yArray.filter((item) => item == i).length;
        
        result += String(i).repeat(Math.min(x,y));
    }
    
    if(result === "") {
        return "-1";
    }
    
    if(Number(result) === 0) {
        return "0";
    }
        
    return result;
}