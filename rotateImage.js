var rotate = function(a) {
    const size = a.length;
    for(let i = 0;i < size;i++){
        for(let j = i;j < size;j++){
            [a[j][i], a[i][j]] = [a[i][j], a[j][i]];
        }
        a[i].reverse();
    }
};
