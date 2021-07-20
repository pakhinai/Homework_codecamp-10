function draw(n){
    let temp = '';
    let number = 1;
    for(let i=0; i<n; i++){
        for(let sub1=n-1; sub1 >i; sub1--){
            temp += '-';
        }
        for(let j=0; j<i+1; j++){
            temp += number;
            number++;
        }
        temp += '\n';
    }
    for(let i=0; i<n-1; i++){
        for(let sub2=0; sub2 < i+1; sub2++){
            temp += '-';
        }
        for(let j=n-1; j>i; j--){
            temp += number;
            number++;
        }
        temp += '\n';
    }
    console.log(temp);
}