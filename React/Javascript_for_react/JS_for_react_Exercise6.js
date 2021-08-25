//      Lab
//           ให้สร้าง decorator ฟังก์ชัน ชื่อ delay () รับค่า argument 2 ตัว
//          เป็น f และ เวลาในการ delay เป็นหน่วย มิลลิวินาที 
//          function f(x) {
//                  alert(x);
//          }
//          // ให้สร้าง decorator ฟังก์ชันที่ ครอบ f ฟังก์ชัน
//          let f1000 = delay(f, 1000);
//          let f1500 = delay(f, 1500);
//          f1000("test"); // แสดง "test" หลังจาก 1000ms
//          f1500("test"); // แสดง "test" หลังจาก 1500ms

function f(x) {
    alert(x);
}

function delay(func,ms) {
    return function (...arg) {
        let This = this
        setTimeout(() => func.apply(This,arg) ,ms)
    }
}

let f1000 = delay(f,1000);
let f1500 = delay(f,1500);

