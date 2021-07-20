// 1. Browser จะโชว์ข้อความ “Hello Codecamp #5” ไหม
if("0"){
    alert("hello codecamp#5");      //โชว์ค่าในเงื่อนไขif
}



// 2.	ใช้ if else ในการเขียนถามชื่อของคุณ
//      - ถ้าตอบถูกให้แสดงคำว่า “เก่งมาก”
//      - ถ้าตอบผิดให้แสดงคำว่า “คุณไม่รู้จักชื่อฉัน”
let name= prompt("Enter name:");
(name === "pakhinai") ? console.log("เก่งมาก") : console.log("คุณไม่รู้จักชื่อฉัน");



// 3.	ใช้ prompt ในการรับคะแนนมาคำนวณเกรด
// ถ้าคะแนน มากกว่าเท่ากับ 80	ได้ A
// ถ้าคะแนน อยู่ระหว่าง 70 - 79 	ได้ B
// ถ้าคะแนน อยู่ระหว่าง 60 - 69 	ได้ C
// ถ้าคะแนน อยู่ระหว่าง 50 - 59 	ได้ D
// ถ้าคะแนน น้อยกว่า 50			ได้ F
let score = +prompt("Enter score:")
if(score >= 80 ) console.log("Grade A")
else if(score >= 70 && score < 80) console.log("Grade B")
else if(score >= 60 && score < 70) console.log("Grade C")
else if(score >= 50 && score < 60) console.log("Grade D")
else console.log("Grade F");



// 4.	เปลี่ยน if-else ข้างล่างในอยู่ในรูปของ Ternary Operators
// let age = prompt("How old are you?");
// let price;
// if(age < 18){
//     price= 2000;
// }else{
//     price= 3500;
// }
let age = +prompt("How old are you?");
let price = (age < 18)? 2000: 3500;
console.log(`Price: ${price}`) 