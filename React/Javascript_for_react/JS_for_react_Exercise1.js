//      1. ถ้าเรามี object
//          let user = {
//                  name: 'John',
//                  year: 30
//              };
//          ให้เขียน Destrucutring  assignment ที่ให้
//          1. property ที่ชื่อ name อยู่ในตัวแปร name
//          2. property ที่ชื่อ year อยู่ในตัวแปร age
//          3. property ที่ชื่อ isAdmin ไปอยู่ในตัวแปร isAdmin ให้เป็น false ถ้าไม่มีค่ากำหนด
let user = {
        name: 'John',
        year: 30
    };
let {name, year: age, isAdmin = false} = user;




//      2. ถ้าเรามี Object ชื่อ salaries
//          let salaries = {
// 	                "John": 100,
// 	                "Pete": 300,
// 	                "Mary": 250
//              };
//          ให้สร้าง function topSalaly(salaries) ที่คืนค่าชื่อคนที่มีเงินเดือนสูงสุด
//          1. ถ้า salaries ไม่มีข้อมูลให้คืนค่า null
//          2. ถ้าสูงสุดมีหลายคนให้คืนใครก็ได้สักคน 
let salaries = {
    'John': 100,
    'Pete': 300,
    'Mary': 250
};

function topSalaly(salaries) {
    let max = 0;
    let temp = null;
    for (let i in salaries) {
        if (salaries[i] > max) {
            max = salaries[i];
            temp = i;
        }
    }
    return temp;
}