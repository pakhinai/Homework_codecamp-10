// 1. เลขที่ถูก alert เป็นลำดับสุดท้ายคือเลขอะไร
// let i = 3;

// while (i) {
//   alert( i-- );
// }
// ตอบ เลข 1



// 2. code ทั้งสองอันนี้จะแสดง alert ออกมาเหมือนกันทั้งหมดหรือไม่
// let i = 0;                                              let i = 0;
// while (++i < 5) alert( i );                             while (i++ < 5) alert( i );
// ตอบ ไม่เหมือนกันโดย อันแรกจะแสดงค่า 1-4   ส่วนอีกหลังจะแสดงเลข 1-5



// 3. code ทั้งสองอันนี้จะแสดง alert ออกมาเหมือนกันทั้งหมดหรือไม่
// for (let i = 0; i < 5; i++) alert( i );
// for (let i = 0; i < 5; ++i) alert( i );
// ตอบ เหมือนกัน



// 4. ให้เขียน loop ทั้งแสดงเลข 2 ถึง 10 ออกมา
for(let i=2; i<11; i++)
    console.log(i);



// 5. เปลี่ยน code for loop ด้านล่างนี้ให้เป็น while loop โดยที่ผลลัพธ์ยังเหมือนเดิม
// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
//   }
let i=0;
while(i<3){
    alert(`number ${i}!`);
    i++;
}



//  6. ให้เขียนเกมส์ทายตัวเลขสำหรับเล่นสองคน โดย
//     ให้ผู้เล่นคนแรกพิมพ์เลขใส่ใน prompt ที่อยู่ระหว่าง 1 ถึง 100 โดยไม่ให้ผู้เล่นคนที่สองรู้ว่าตัวเลขเป็นอะไร
//     และให้ผู้เล่นคนที่สองทายเลขโดยการพิมพ์เลขใส่ใน prompt จนกว่าจะถูก ถ้าไม่ถูก จะต้องบอกด้วยว่าเลขที่ผู้เล่นคนที่สองพิมพ์เข้ามา 
//     มากกว่า หรือ น้อยกว่าคำตอบนั้น
let secret = +prompt("Enter secret number between 1-100:")
while(!(secret>0 && secret <=100)){
    secret = +prompt("Enter secret number between 1-100:")
}
let guessNumber = +prompt("Enter number:")
while(secret !== guessNumber){
    if(secret > guessNumber)
        console.log("น้อยกว่าคำตอบ")
    else
        console.log("มากกว่าคำตอบ")
    guessNumber = +prompt("Enter number")
}
console.log("you done")

