//  1.	ให้เขียนโปรแกรมที่รับค่า key และ value ของ Properties ของ Object หนึ่ง จนกว่าจะเจอคำว่า stop 
//      และนำค่าเหล่านั้นมาสร้าง Object หลังจากนั้น console.log() object นั้นออกมา

let obj = {};
let key = prompt("Enter Key");
while (key !== 'stop') {      
    let value = prompt("Enter values");
    obj[key] = value;
    key = prompt("Enter Key");
}
console.log(obj);





// 2.	ให้เขียนโปรแกรมที่รับค่า key และ value ของ Properties ของ Object หนึ่ง โดยให้ 
//      key เป็นชื่อของผลไม้ และ value เป็นจำนวนของผลไม้ (number) โดยถ้า ผลไม้ชนิดไหนที่มีมากกว่า 
//      1 ผล ให้เติม s ไปหลัง key นั้นด้วย

let obj2 = {};
let fruit = prompt("Enter fruit")
while (fruit !== 'stop') {
    let amount = +prompt("Enter amount");
    if (amount > 1) fruit += 's';
    obj2[fruit] = amount;
    fruit = prompt("Enter fruit");
}
console.log(obj2);