function draw(n){
    let temp=''
    for(let i=n; i>=1; i--){
        for(let j=n; j>=1; j--){
            temp += i;
        }
        temp += '\n'
    }
    console.log(temp);    
}
