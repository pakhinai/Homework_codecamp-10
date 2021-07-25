//      1. กำหนดให้ salaries เป็น Object
//          ให้เขียนฟังก์ชัน sumSalaries(salaries) ที่คืนค่าเป็นผลผมรวมของเงินเดือน ถ้า salaries ไม่มีสมาชิก ให้คืนค่าเป็น 0
//          let salaries = {
//                  "John": 100,
//                  "Pete": 300,
//                  "Mary": 250
//              };  
//          alert( sumSalaries(salaries) ); // 650

function sumSalaries(salaries) {
    let sum = 0;
    for (let i of Object.values(salaries) ) {
        sum += i;
    }
    return sum;
}
let salaries = {
    'John': 100,
    'Pete': 300,
    'Marray': 250
};
console.log( sumSalaries(salaries) );




//      2.	ให้เขียนฟังก์ชัน count(obj) ที่คืนค่าเป็นจำนวน properties ใน object
//          let user = {
//                  name: 'John',
//                  age: 30
//              };  
//          alert( count(user) ); // 2

function count(obj) {
    let sum = 0;
    for (let i of Object.keys(obj) ) {
        sum++;
    }
    return sum;
}
let user = {
    name: 'Jonh',
    age: 30
};
console.log( count(user) );