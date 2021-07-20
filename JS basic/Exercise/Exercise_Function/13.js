function draw(n){
    let temp="";
    for(let i=0;i<n;i++){
        for(let j=0; j<=i; j++){
            temp += "*";
        }
        for(let k=n-1; k>i; k--){
            temp += "-";
        }
        temp += "\n";
    }
    console.log(temp);
}