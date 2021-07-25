//  1. ผลลัพธ์ของความยาว array คืออะไร
//      let fruits = ["Apples", "Pear", "Orange"];
//      let shoppingCart = fruits;
//      shoppingCart.push("Banana");
//      alert( fruits.length );
//    ตอบ  4




// 2.	ให้ทำตามขั้นตอนต่อไปนี้
//      - สร้าง array ชื่อ styles ที่มี items ชื่อ “Jazz” และ “Blues”
//      - เพิ่ม “Rock-n-Roll” ต่อท้าย
//      - นำค่า Classics ไปทับค่าตรงกลางของ Array
//      - นำ items ตัวแรกออกมาและลบ items ตัวนั้นออกจาก array
//      - เพิ่ม “Rap” และ “Reggae” ไปข้างหน้าของ Array

let styles = ['Jazz', 'Blues'];
styles.push('Rock-n-Roll');
styles[1] = 'Classics';
let item = styles.shift();
styles.unshift('Rap','Reggae')




// 3.	เขียนฟังก์ชัน sumInput() ที่
//      - ใช้ propmt รับ value มาเก็บใน array
//      - หยุดถามเมื่อเจอค่าที่ไม่ใช่ ตัวเลข
//      - คำนวณผลรวมของตัวเลขทั้งหมดใน Array

function sumInput() {
    let temp = [];
    let sum= 0;
    let value = prompt("Enter number");
    while ( isNaN(value) === false) {
        temp.push( Number(value) );
        sum += Number(value);
        value = prompt("Enter number");
    }
    return sum;
}




// 4.	Maximal contiguous subarray (**Optional**)
//      ให้เขียนฟังก์ชัน getMaxSubSum(arr) ที่ return ผลรวมของ subarray ที่มากที่สุดที่ติดกัน
//      getMaxSubSum([-1, 2, 3, -9]) == 5 (the sum of highlighted items)
//      getMaxSubSum([2, -1, 2, 3, -9]) == 6
//      getMaxSubSum([-1, 2, 3, -9, 11]) == 11
//      getMaxSubSum([-2, -1, 1, 2]) == 3
//      getMaxSubSum([100, -9, 2, -3, 5]) == 100
//      getMaxSubSum([1, 2, 3]) == 6 (take all)

function getMaxSubSum(arr) {
    let maxCurrent = arr[0];
    let maxTotal = arr[0];

  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    maxCurrent = Math.max(current, current + maxCurrent);
    maxTotal = Math.max(maxTotal, maxCurrent);
  }
  return maxTotal;
}