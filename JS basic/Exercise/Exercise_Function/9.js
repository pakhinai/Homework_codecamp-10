function draw(n){
    let temp="";
    let number = 2;
    for(let i=0; i<n;i++){
        temp += `${number}\n`
        number += 2;
    }
    console.log(temp)
}