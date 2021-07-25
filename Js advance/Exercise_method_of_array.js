// 1.   ให้สร้าง array2 จาก array1 ตามที่โจทย์กำหนด โดยใช้ฟังก์ชัน Array.map()
//      1.1   array1 = [1, 2, 30, 400]
//            array2 [2, 4, 60, 800]
let array1 = [1,2,30,400];
let array2 = array1.map( item => item * 2);




//      1.2   array1 = [1, 2, 3, 4]
//            array2 ["1", "2", "3", "4"]
let array1 = [1,2,3,4];
let array2 = array1.map( item => item.toString() );




//      1.3   array1 = [1, "1", 2, {}] 
//            array2 ["number", "string", "number", "object"]
let array1 = [1, "1", 2, {}];
let array2 = array1.map( item => typeof item );




//      1.4   array1 = ["apple", "banana", "orange"]
//            array2 ["APPLE", "BANANA", "ORANGE"]
let array1 = ["apple", "banana", "orange"];
let array2 = array1.map( item => item.toUpperCase() );




//      1.5 array1 = [
//          { name: "apple", age: 14 },
//          { name: "banana", age: 18 },
//          { name: "watermelon", age: 32 },
//         ]
//          array2 ["apple", "banana", "watermelon"]
let array1 = [
        { name: "apple", age: 14 },
        { name: "banana", age: 18 },
        { name: "watermelon", age: 32 },
    ];
let array2 = array1.map( item => item.name );




//      1.6 array1 = [
//            { name: "apple", age: 14 },
//            { name: "banana", age: 18 },
//            { name: "watermelon", age: 32 },
//          ]
//          array2 [14, 18, 32]
let array1 = [
        { name: "apple", age: 14 },
        { name: "banana", age: 18 },
        { name: "watermelon", age: 32 },
    ];
let array2 = array1.map( item => item.age );




//      1.7 array1 = [
//              { name: "apple", surname: "London" },
//              { name: "banana", surname: "Bangkok" },
//              { name: "watermelon", surname: "Singapore" },
//          ]
//          array2 ["apple London", "banana Bangkok", "watermelon Singapore"]
let array1 = [
        { name: "apple", surname: "London" },
        { name: "banana", surname: "Bangkok" },
        { name: "watermelon", surname: "Singapore" },
    ]
let array2 = array1.map( item => {
    let text = `${item.name} ${item.surname}`;
    return text;
});




//      1.8 array1 = [1,3,4,5,6,7,8]
//          array2 ["odd", "odd", "even", "odd", "even", "odd", "even"]
let array1 = [1,3,4,5,6,7,8];
let array2 = array1.map( item => ( item % 2 === 0 )?'even' :'odd' );




//      1.9 array1 = [1, -3, 2, 8, -4, 5]
//          array2 [1, 3, 2, 8, 4, 5]
let array1 = [1, -3, 2, 8, -4, 5];
let array2 = array1.map( item => Math.abs(item) );




//      1.10 array1 = [100, 200.25, 300.84, 400.3]
//           array2 ["100.00", "200.25", "300.84", "400.30"]
let array1 = [100, 200.25, 300.84, 400.3];
let array2 = array1.map( item => item.toFixed(2).toString() );




//      1.11 array1 = [
//          { name: "apple", birth: "2000-01-01" },
//          { name: "banana", birth: "1990-10-01" },
//          { name: "watermelon", birth: "1985-12-01" },
//        ]
//          array2 [
//          { name: "apple", birth: "2000-01-01", age: 19 },
//          { name: "banana", birth: "1990-10-01", age: 29 },
//          { name: "watermelon", birth: "1985-12-01", age: 33 },
//        ] 
let array1 = [
        { name: "apple", birth: "2000-01-01" },
        { name: "banana", birth: "1990-10-01" },
        { name: "watermelon", birth: "1985-12-01" },
    ]
let array2 = array1.map( item => ({
    name: item.name,
    birth: item.birth,
    age : function() {
        let birthday = new Date(item.birth);
        let birth_day = birthday.getDate()
        let birth_month = birthday.getMonth() + 1;
        let birth_year = birthday.getFullYear();

        let current_date = new Date();
        let current_day = current_date.getDate();
        let current_month = current_date.getMonth() + 1;
        let current_year = current_date.getFullYear();

        let current_age = 0;
        if (current_month > birth_month) {
            if (current_day > birth_day) {
                current_age = current_year - birth_year;
            }else current_age = current_year - birth_year - 1;
        }else current_age = current_year - birth_year - 1;
        return current_age;
    }()
}));




//      1.12 array1 = [
//              { name: "apple", birth: "2000-01-01" },
//              { name: "banana", birth: "1990-10-10" },
//              { name: "watermelon", birth: "1985-12-30" },
//           ]
//          array2 [
//              "<tr>
//              <td>apple</td> 
//              <td>01 jan 2000</td>
//              </tr>",
//              "<tr> <td>banana</td> <td>10 oct 1990</td> </tr>",
//              "<tr> <td>watermelon</td> <td>30 dec 1985</td> </tr>",
//          ] 

let array1 = [
        { name: "apple", birth: "2000-01-01" },
        { name: "banana", birth: "1990-10-10" },
        { name: "watermelon", birth: "1985-12-30" },
    ]
let array2 = array1.map( item => {
    let birthday = new Date(item.birth);
    let month = ['Jan', 'Feb', 'Mar', 'Apr', 'May' ,'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let txt =`<tr> <td>${item.name}</td> <td>${birthday.getDate()} ${month[birthday.getMonth()]} `;
    txt += `${birthday.getFullYear()}</td> </tr>`
    return txt;
})

// -------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------


// 2.   ให้สร้าง array2 จาก array1 ตามที่โจทย์กำหนด โดยใช้ฟังก์ชัน Array.filter()
//      2.1  array1 = [1, 2, 30, 400] 
//           array2 [30, 400] // filter เลขที่มากกว่า 10

let array1 = [1, 2, 30, 400];
let array2 = array1.filter( item => item > 10 );




//      2.2  array1 = [1, 2, 3, 4]
//           array2 [1, 3] // filter เลขคี่

let array1 = [1, 2, 3, 4];
let array2 = array1.filter( item => item % 2 !== 0);




//      2.3  array1 = [1, "1", 2, {}] 
//           array2 [1, 2] // filter Number

let array1 = [1, "1", 2, {}] ;
let array2 = array1.filter( item => typeof item === 'number');




//      2.4  array1 = ["apple", "banana", "orange", "pineapple", "watermeon"]
//           array2 ["pineapple", "watermeon"] // filter ตัวอักษร > 6

let array1 = ["apple", "banana", "orange", "pineapple", "watermeon"];
let array2 = array1.filter( item => item.length > 6 );




//      2.5 array1 = [
//              { name: "apple", age: 14 },
//              { name: "banana", age: 18 },
//              { name: "watermelon", age: 32 },
//              { name: "pineapple", age: 16 },
//              { name: "peach", age: 24 },
//          ]
//          array2 [
//              { name: "apple", age: 14 },
//              { name: "pineapple", age: 16 },
//          ] // filter age < 18

let array1 = [
        { name: "apple", age: 14 },
        { name: "banana", age: 18 },
        { name: "watermelon", age: 32 },
        { name: "pineapple", age: 16 },
        { name: "peach", age: 24 },
    ]
let array2 = array1.filter( item => item.age < 18 );




//      2.6 array1 = [
//              { name: "apple", age: 14 },
//              { name: "banana", age: 18 },
//              { name: "watermelon", age: 32 },
//              { name: "pineapple", age: 16 },
//              { name: "peach", age: 24 },
//          ]
//          array2 [
//              { name: "apple", age: 14 },
//              { name: "banana", age: 18 },
//              { name: "pineapple", age: 16 },
//              { name: "peach", age: 24 },
//          ] // filter ไม่เอาคนที่อายุ 32

let array1 = [
        { name: "apple", age: 14 },
        { name: "banana", age: 18 },
        { name: "watermelon", age: 32 },
        { name: "pineapple", age: 16 },
        { name: "peach", age: 24 },
    ] 
let array2 = array1.filter( item => item.age !== 32 );




//      2.7  array1 = [1, -3, 2, 8, -4, 5]
//           array2 [1, 2, 8, 5] // filter เลขบวก

let array1 = [1, -3, 2, 8, -4, 5];
let array2 = array1.filter( item => item > 0 );




//      2.8  array1 = [1,3,4,5,6,7,8]
//           array2 [3, 6] // filter เลขหาร 3 ลงตัว

let array1 = [1,3,4,5,6,7,8];
let array2 = array1.filter( item => item % 3 === 0 );




//      2.9  array1 = ["peach", 1, -3, "2", {}, []]
//           array2 ["peach", "2"] // filter string

let array1 = ["peach", 1, -3, "2", {}, []];
let array2 = array1.filter( item => typeof item === 'string' );




//      2.10 array1 = ["APPLE", "appLE", "PEACH", "PEach"]
//           array2 = ["APPLE", "PEACH"] // filter คำที่เป็นอักษรใหญ่ทุกตัว

let array1 = ["APPLE", "appLE", "PEACH", "PEach"];
let array2 = array1.filter( item => item === item.toUpperCase() );




//      2.11 array1 = [
//              { name: "apple", birth: "2001-01-01" },
//              { name: "banana", birth: "1990-10-10" },
//              { name: "watermelon", birth: "1985-12-30" },
//              { name: "peach", birth: "2002-10-13" },
//          ]
//          array2 [
//              { name: "banana", birth: "1990-10-10" },
//              { name: "peach", birth: "2002-10-13" },
//          ] // filter คนเกิดเดือน 10

let array1 = [
        { name: "apple", birth: "2001-01-01" },
        { name: "banana", birth: "1990-10-10" },
        { name: "watermelon", birth: "1985-12-30" },
        { name: "peach", birth: "2002-10-13" },
    ]
let array2 = array1.filter( item => {
    let birthday = new Date(item.birth);
    return birthday.getMonth()+1 === 10;
})




//      2.12 array1 = [
//              { name: "apple", birth: "2001-01-01" },
//              { name: "banana", birth: "1990-10-10" },
//              { name: "watermelon", birth: "1985-12-30" },
//              { name: "peach", birth: "2002-10-13" },
//          ]
//          array2 [
//              { name: "banana", birth: "1990-10-10" },
//              { name: "watermelon", birth: "1985-12-30" },
//          ] // filter คนเกิดก่อนปี 2000

let array1 = [
        { name: "apple", birth: "2001-01-01" },
        { name: "banana", birth: "1990-10-10" },
        { name: "watermelon", birth: "1985-12-30" },
        { name: "peach", birth: "2002-10-13" },
    ]
let array2 = array1.filter( item => {
    let birthday = new Date(item.birth);
    return birthday.getFullYear() < 2000;
});