function draw(n){
    let temp="";
    for(let i=0;i<n;i++){
        for(let j=n; j>i; j--){
            temp += "*";
        }
        for(let k=0; k<i; k++){
            temp += "-";
        }
        temp += "\n";
    }
    console.log(temp);
}