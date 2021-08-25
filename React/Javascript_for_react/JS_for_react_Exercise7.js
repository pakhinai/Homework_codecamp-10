//      lab  
//              this มีค่าเป็นอะไร
//              function f() {
//                      alert( this ); // ?
//              }
//              let user = {
//                      g: f.bind(null)
//              };
//              user.g();
//          ตอบ  this ในที่นี้มันชี้ไปที่ windows




//      lab  
//              ผลลัพธ์ที่ได้คืออะไร
//              function f() {
//                      alert(this.name);
//              }
  
//              f = f.bind( {name: "John"} ).bind( {name: "Ann" } );
  
//              f();
//          ตอบ john เพราะ การ blind นั้นเราจะยึดตัวแรกที่ blind ก่อน




//      lab  
//              ค่าของ value ในฟังก์ชันจะเปลี่ยนไปไหมหลังจาก bind
//              function sayHi() {
//                      alert( this.name );
//              }
//              sayHi.test = 5;
  
//              let bound = sayHi.bind({
//                      name: "John"
//              });
  
//              alert( bound.test ); // ผลลัพธ์คืออะไร แล้ว ทำไมจึงได้อย่างนั้น
//          ตอบ  มีค่าเป็น undefined เนื่องจาก ค่าที่ sayHi ชี้อยู่นั้นคือ object {name: 'john'} 
//               ซึ่งใน object ที่ sayHi ชี้อยู่นั้น ไม่มีค่า test




//      lab  
//              ทำให้ code ด้านล่างนี้ทำงานได้
//              function askPassword(ok, fail) {
//                      let password = prompt("Password?", '');
//                      if (password == "rockstar") ok();
//                      else fail();
//              }
  
//              let user = {
//                      name: 'John',
//                      loginOk() {
//                              alert(`${this.name} logged in`);
//                      },
//                      loginFail() {
//                              alert(`${this.name} failed to log in`);
//                      },
//              };
//              แก้ไข code ด้านล่างนี้
//              askPassword(user.loginOk, user.loginFail);

function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
  }

let user = {
    name: 'John',
    loginOk() {
        alert(`${this.name} logged in`);
    },
    loginFail() {
        alert(`${this.name} failed to log in`);
    },
};

user.loginOk = user.loginOk.bind(user)
user.loginFail = user.loginFail.bind(user)
askPassword(user.loginOk, user.loginFail);




//      lab  
//              ทำให้ code ด้านล่างนี้ทำงานได้
//              function askPassword(ok, fail) {
//                          let password = prompt("Password?", '');
//                          if (password == "rockstar") ok();
//                          else fail();
//              }
//              let user = {
//                          name: 'John', 
//                          login(result) {
//                                 alert( this.name + (result ? ' logged in' : ' failed to log in') );
//                          }
//              };
//              askPassword(?, ?); // ?

function askPassword(ok, fail) {
        let password = prompt("Password?", '');
        if (password == "rockstar") ok();
        else fail();
}
let user = {
        name: 'John', 
        login(result) {
            alert( this.name + (result ? ' logged in' : ' failed to log in') );
        }
};
askPassword(() => user.login(true) , () => user.login(false)); 