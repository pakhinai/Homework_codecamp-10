function draw(n){
    let temp= '';
    let number =1;
    for(let i=0; i<n; i++){
        for(let sub1= n-1; sub1>i; sub1--){
            temp += '-';
        }
        for(let num=0; num<(i*2)+1; num++){
            temp += number;
            number++;
        }
        for(let sub2=n-1; sub2>i; sub2--){
            temp += '-';
        }
        temp += '\n';
    }
    for(let i=0; i<n-1; i++){
        for(let sub1=0; sub1<i+1; sub1++){
            temp += '-';
        }
        for(let num=(n-1)*2-1; num>i*2; num--){
            temp += number;
            number++;
        }
        for(let sub2=0; sub2<i+1; sub2++){
            temp += '-';
        }
        temp += '\n';
    }
    console.log(temp);
}