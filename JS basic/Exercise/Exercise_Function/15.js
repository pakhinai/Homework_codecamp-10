function draw(n){
    let temp = '';
    for(let row=0; row<n; row++){
        for(let column_star=0; column_star <= row; column_star++){
            temp += '*';
        }
        for(let column_sub=n-1; column_sub > row; column_sub--){
            temp += '-';
        }
        temp += '\n';
    }
    for(let row2=1; row2<n; row2++){
        for(let column_star2=n; column_star2 > row2; column_star2-- ){
            temp += '*';
        }
        for(let column_sub2 = 1; column_sub2 <= row2; column_sub2++){
            temp += '-';
        }
        temp += '\n';
    }
    console.log(temp);
}