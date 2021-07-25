//      1. ให้ arr เป็น Array
//          สร้าง function ชื่อ unique(arr) ให้คืนค่าเป็น unique items ของ arr 
//          function unique(arr) {
//               /* your code */
//          }  
//          let values = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O" ];  
//          alert( unique(values) ); // Hare, Krishna, :-O

function unique(arr) {
    return new Set(arr);
}




//      2.	Anagram เป็นตัวอักษรที่มีจำนวนตัวอักษรแต่ละตัวที่เท่ากัน แต่เรียงไม่เหมือนกัน ( Optional )
//          let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
//          alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"
function anagram(arr) {
    let newArr = new Map();
    for (let i of arr) {
        let text = i.toLowerCase().split('').sort().join('');
        newArr.set(text,i);
    }
    return Array.from(newArr.values());
}
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
console.log( anagram( arr ) );




//      3.	เราได้ array จาก map.keys() แต่ไม่สามารถใช้ push ได้
// 	        เราจะทำยังไงให้ keys.push สามารถทำงานได้
//          let map = new Map();
//          map.set("name", "John");
//          let keys = map.keys();
//          // Error: keys.push is not a function
//          keys.push("more");

let map = new Map();
map.set('name','John');
let key = Array.from( map.values() );
key.push('more');
