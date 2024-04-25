function solution(players, callings) {  
    let obj = {};
    
    for(let i = 0; i < players.length; i++) {
        obj[players[i]] = i;
    }
    
    for(let i = 0; i < callings.length; i++) {
        const index = obj[callings[i]];
        const item = players[index-1];

        
        players[index-1] = callings[i];
        players[index] = item;
      
        obj[callings[i]] = index - 1;
        obj[item] = index;
        
    }
        
    return players;
}