//      1. จากโค๊ดต่อไปนี้มีการสร้าง new Rabbit() ขึ้นมา
//                      function Rabbit() {}
//                                  Rabbit.prototype = {
//                                      eats: true
//                              };

//                      let rabbit = new Rabbit();

//                      alert( rabbit.eats ); // true

//            - ถ้ามีการ alert ในบรรทัดดังกล่าวจะได้อะไรออกมา
//                      function Rabbit() {}
//                                  Rabbit.prototype = {
//                                      eats: true
//                              };

//                      let rabbit = new Rabbit();

//                      Rabbit.prototype = {};

//                      alert( rabbit.eats ); // ?
//                  ตอบ  true


//            - ถ้ามีการ alert ในบรรทัดดังกล่าวจะได้อะไรออกมา
//                      function Rabbit() {}
//                      Rabbit.prototype = {
//                                  eats: true
//                          };

//                      let rabbit = new Rabbit();

//                      Rabbit.prototype.eats = false;

//                      alert( rabbit.eats ); // ?
//                  ตอบ   false


//            - ถ้ามีการ alert ในบรรทัดดังกล่าวจะได้อะไรออกมา
//                      function Rabbit() {}
//                      Rabbit.prototype = {
//                                  eats: true
//                          };

//                      let rabbit = new Rabbit();

//                      delete rabbit.eats;

//                      alert( rabbit.eats ); // ?
//                  ตอบ true


//            - ถ้ามีการ alert ในบรรทัดดังกล่าวจะได้อะไรออกมา
//                      function Rabbit() {}
//                      Rabbit.prototype = {
//                                  eats: true
//                          };

//                      let rabbit = new Rabbit();

//                      delete Rabbit.prototype.eats;

//                      alert( rabbit.eats ); // ?
//                  ตอบ undefined





//     2. ถ้าเราต้องการสร้างใช้ constructor ของ obj เราสามารถเขียนแบบนี้ได้ไหม
//          let obj2 = new obj.constructor();
//          ตอบ เขียนได้