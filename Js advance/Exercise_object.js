//  1.   ให้ทำตามคำสั่งต่อไปนี้
//          - สร้าง Object เปล่าขึ้นมา
//          - เพิ่ม properties name เข้าไปและให้ value เป็น “Sonter”
//          - เพิ่ม properties surname เข้าไปและให้ value เป็น “Pakorn”
//          - เปลี่ยน properties name เป็น “Boy”
//          - ลบ properties name ออกจาก Object

let object = {}
object.name = 'Sonter';
object.surname = 'Pakorn';
object.name = 'Boy';
delete object.name;




//  2.	ให้เขียนฟังก์ชันชื่อ isEmpty(obj) โดยจะมี parameters เป็น obj และ ฟังก์ชันนี้จะเช็คว่า obj 
//      นี้มี properties ไหม ถ้ามีให้คืนค่า true ถ้าไม่มีให้คืนค่า false

function isEmpty(obj) {
    for (let i of Object.keys(obj) ) {
        return true;
    }
    return false;
}




// 3.	การเขียนข้างล่างต่อไปนี้ Error  ไหม
//      const user = {
//          name: "John"
//      };
  
//      // does it work?
//      user.name = "Pete";
//      ตอบ ไม่ error




// 4.	จงเขียนฟังก์ชัน sum(obj) ที่รับ obj ที่เก็บ properties โดยมี key เป็นชื่อพนักงานและมี value เป็นเงินเดือน 
//      ให้ฟังก์ชันคืนค่าเป็นผลรวมของเงินเดือนพนักงานทั้งหมด
//          let salaries = {
//              John: 100,
//              Ann: 160,
//              Pete: 130
//          }

function sum(obj) {
    let sum = 0;
    for ( let v of Object.values(obj) ){
        sum += v;
    }
    return sum;
}




// 5.	จงเขียนฟังก์ชัน multiplyNumeric(obj, times) โดยถ้า properties นั้นมี value 
//      เป็น number ให้คุณ value นั้นด้วย times ถ้าข้อมูลเเป็นอย่างอื่นไม่ต้องทำอะไร
// before the call
// let menu = {                            multiplyNumeric(menu, 2);
//     width: 200,                         // after the call
//     height: 300,                            menu = {
//     title: "My menu"                        width: 400,
//   };                                        title: "My menu"
//                                             };

function multiplyNumeric(obj, times) {
    for (let i in obj) {
        if ( typeof obj[i] !== 'number') continue;
        obj[i] *= times;
    }
}
  