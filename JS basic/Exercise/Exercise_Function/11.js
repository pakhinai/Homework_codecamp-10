function draw(n){
    let temp= '';
    for(let i=0; i<n;i++){
        for(let j=0;j<i;j++){
            temp += '*';
        }
        for(let k=0; k<1; k++){
            temp += '-';
        }
        for(let l=n-1; l>i; l--){
            temp += '*';
        }
        temp += '\n';
    }
    console.log(temp);
}