function draw(n){
    let temp = '';
    for(let row1=0; row1 < n; row1++){
        for(let column_sub=n-1; column_sub > row1; column_sub--){
            temp += '-';
        }
        for(let column_star=0; column_star < row1+1; column_star++){
            temp += '*';
        }
        temp += '\n';
    }
    for(let row2=0; row2 < n-1; row2++){
        for(let column_sub2=0; column_sub2 < row2+1; column_sub2++){
            temp += '-';
        }
        for(let column_star2=n-1; column_star2 > row2; column_star2--){
            temp += '*';
        }
        temp += '\n';
    }
    console.log(temp);
}