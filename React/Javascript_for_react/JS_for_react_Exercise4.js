//      1. ให้เพิ่ม Method defer เข้าไปใน prototypes ของทุกฟังก์ชัน โดย Method นี้จะทำหน้าที่ alert ข้อความออกมาหลังจากผ่านไป ms
//              function f() {
//                      alert("Hello!");
//                  }
  
//              f.defer(1000); // แสดง "Hello!" หลังจากผ่านไป 1 วินาที

Function.prototype.defer = function f(ms) {
    setTimeout(this,ms);
}
function f(){
    alert('hello');
}
f.defer(1000);




//      2.   ให้เพิ่ม Method defer เข้าไปใน prototypes ของทุกฟังก์ชัน โดย Method นี้จะทำหน้าที่ 
//           return Function ให้ alert(a+b) เมื่อผ่านไป ms
//                  function f(a, b) {
//                              alert( a + b );
//                          }
  
//                  f.defer(1000)(1, 2); // แสดง 3 หลังจากผ่านไป 1 วินาที

Function.prototype.defer = function f(ms) {
    let f = this;
    return function(a,b) {
        setTimeout( () => f(a,b), ms );
    }   
}
function f(a,b) {
    alert( a + b);
}

f.defer(1000)(1, 2);