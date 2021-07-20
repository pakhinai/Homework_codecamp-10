function draw(n){
    let temp=''
    let k=1;
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            temp += k;
            k++;
        }
        temp += '\n'
    }
    console.log(temp);
}