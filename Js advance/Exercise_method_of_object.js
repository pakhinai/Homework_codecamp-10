// 1.   การทำงานของ code ดังกล่าวจะได้อะไรออกมา
//      let user = {
//          name: "John",
//          go: function() { alert(this.name) }
//      }  
//      (user.go)()
//      ตอบ error เพราะยังไม่ได้ใส่ ; หลักจากสร้าง object




// 2.	การทำงานของ code ดังกล่าวจะได้อะไรออกมา
//      function makeUser() {
//          return {
//              name: "John",
//              ref: this
//          };
//      };
//      let user = makeUser(); 
//      alert( user.ref.name ); // What's the result?
//      ตอบ ไม่มีค่าอะไรออกมา 




// 3.   สร้าง object calculator จาก 3 methods นี้:
//          read() ใช้ prompts สำหรับรับค่ามา 2 ค่าและเก็บเป็น object properties.
//          sum() คืนค่าผลบวกของ 2 ค่านั้น.
//          mul() คืนค่าผลคูณของ 2 ค่านั้น.
//          let calculator = {
//              // ... your code ...
//          };  
//          calculator.read();
//          alert( calculator.sum() );
//          alert( calculator.mul() );

let calculator = {
    read() {
        this.data1 = +prompt("Enter first number")
        this.data2 = +prompt("Enter second number")
    },
    sum() {
        return this.data1 + this.data2;
    },
    mul() {
        return this.data1 * this.data2;
    }
};




// 4.   ให้ Object ชื่อ ladder มี
// 	    method ขึ้น และ ลง
//          let ladder = {
//              step: 0,
//              up() {
//                  this.step++;
//              },
//              down() {
//                  this.step--;
//              },
//         showStep: function() { // shows the current step
//              alert( this.step );
//          }
//       };
//      Object ชื่อ ladder สามารถเรียก function แบบนี้ได้
//      ladder.up();
//      ladder.up();
//      ladder.down();
//      ladder.showStep(); // 1
//      ดัดแปลง Object ชื่อ ladder สามารถเรียก function แบบนี้ได้
//      ladder.up().up().down().showStep(); // 1

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function() {
        alert( this.step );
        return this;
    }
}
      
