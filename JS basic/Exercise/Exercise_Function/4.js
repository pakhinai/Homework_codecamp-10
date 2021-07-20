function draw(n){
    let temp=''
    for(let i=1; i<=n; i++){
        for(let j=1; j<=n; j++){
            temp += i;
        }
        temp += '\n'
    }
    console.log(temp);    
}
