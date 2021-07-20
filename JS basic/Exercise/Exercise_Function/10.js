function draw(n){
    let temp = "";
    let number = 1;
    let mul = 1;
    for(let i=0; i<n; i++){
        number = 1;
        for(let j=0; j<n; j++){
            temp += (number*mul);
            number++;
        }
        temp += "\n";
        mul++;
    }
    console.log(temp);
}