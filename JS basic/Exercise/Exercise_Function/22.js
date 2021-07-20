function draw(n){
    let temp = '';
    for(let i=0; i<n; i++){
        for(let sub1=0; sub1<i; sub1++){
            temp += '-';
        }
        for(let star= (n*2)-1; star >i*2; star -- ){
            temp += '*';
        }
        for(let sub2=0; sub2<i; sub2++){
            temp += '-';
        }
        temp += '\n';
    }
    console.log(temp);
}