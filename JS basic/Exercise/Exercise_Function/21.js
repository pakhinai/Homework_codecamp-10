function draw(n){
    let temp = '';
    for(let i=0; i<n; i++){
        for(let sub1=n-1; sub1 > i; sub1--){
            temp += '-';
        }
        for(let star=0; star < (i*2)+1; star++){
            temp += '*';
        }
        for(let sub2=n-1; sub2 > i; sub2--){
            temp += '-';
        }
        temp += '\n';
    }
    console.log(temp);
}