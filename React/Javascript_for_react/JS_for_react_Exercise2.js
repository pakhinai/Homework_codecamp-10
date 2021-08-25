//      1. ในบรรทัดที่มีเลข 1 2 และ 3 จะได้ค่าออกมาเป็นอะไร
//              let animal = {
//                      jumps: null
//                  }; 
//              let rabbit = {
//                      __proto__: animal,
//                      jumps: true
//                  };
//              alert( rabbit.jumps ); // ? (1)
//              delete rabbit.jumps; 
//              alert( rabbit.jumps ); // ? (2) 
//              delete animal.jumps; 
//              alert( rabbit.jumps ); // ? (3)  
//          ตอบ บรรทัดที่มีเลข 1 จะได้ค่า true ออกมา
//          ตอบ บรรทัดที่มีเลข 2 จะได้ค่า null ออกมา
//          ตอบ บรรทัดที่มีเลข 3 จะได้ค่า undefined




//      2. ใช้ __proto__ ในการกำหนด prototype object ดังนี้ 
// 		    pockets → bed → table → head.           
//         let head = {            let table = {           let bed = {              let pockets = {
//             glasses: 1              pen: 3                  sheet: 1                 money: 2000
//           };                    };                          pillow: 2            };
//                                                          };
let pockets = {
    money: 2000,
};

let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: pockets
};

let table = {
    pen: 3,
    __proto__: bed
};

let head = {
    glasses: 1,
    __proto__: table
};




//      3. การเขียนโค๊ดแบบนี้ object ไหนจะเป็นคนได้ property full ไป
//              let animal = {
//                      eat() {
//                          this.full = true;
//                      }
//                  };  
//              let rabbit = {
//                      __proto__: animal
//              };  
//              rabbit.eat();
//          ตอบ  raabit




// 4. การเขียนโค๊ดแบบนี้ กระเพราะจะถูกแชร์กันจะแก้ไขยังไงดี
// let hamster = {                         let speedy = {                          // This one found the food
//     stomach: [],                            __proto__: hamster              speedy.eat("apple");
//                                         };                                  alert( speedy.stomach ); // apple
//     eat(food) {                         let lazy = {                            // This one also has it, why? fix please.
//       this.stomach.push(food);              __proto__: hamster              alert( lazy.stomach ); // apple
//     }                                   };
//   };
  
let hamster = { 
    eat(food) {
        if(!this.stomach) this.stomach=[]
      this.stomach.push(food);
    }
  };

let speedy = {
    __proto__: hamster
};
  
let lazy = {
    __proto__: hamster
};

speedy.eat("apple");
alert( speedy.stomach );
lazy.eat('orange');
alert( lazy.stomach );



          
