var judgeCircle = function(moves) {

    let x = 0,
        y = 0;

    let vMoves = { U: 1, D: -1 };
    let hMoves = { L: -1, R: 1 };

    let R = 1,
        U = 1,
        D = -1,
        L = -1;

    for(let i = 0; i < moves.length;  i++){
        if(vMoves[moves[i]] !== undefined){
            x += vMoves[moves[i]];
        } else {
            y += hMoves[moves[i]];
        }
    }
    return x === 0 && y === 0;
};
