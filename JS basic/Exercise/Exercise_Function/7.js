function draw(n){
    let temp=''
    let number= n**2;
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            temp += number;
            number--;
        }
        temp += '\n'
    }
    console.log(temp);
}