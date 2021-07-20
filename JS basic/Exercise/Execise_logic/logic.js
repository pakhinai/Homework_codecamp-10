// 1. คำสั่งต่อไปนี้จะแสดงค่าเป็นอะไร
alert( null || 2 || undefined );            //  2
alert( alert(1) || 2 || alert(3) );         //  alert(1) เสร็จแล้ว จะ alert(2) ต่อ
alert( 1 && null && 2 );                    //  null
alert( alert(1) && alert(2) );              //  alert(1) แล้ว alert(undefine)
alert( null || 2 && 3 || 4 );               //  3

// 2. เขียนคำสั่ง if ที่เช็คอายุว่าอยู่ระหว่าง 18 - 60
let age = +prompt("Enter age")
if(age >=18 && age <61){
    console.log("อายุอยู่ในช่วง 18-60")
}else{
    console.log("อายุอยู่นอกช่วง")
}

// 3. เขียนคำสั่ง if ที่เช็คอายุว่าไม่อยู่ระหว่าง 18 - 60
let age2 = +prompt("Enter age")
if( !(age2 >=18 && age2 <61)){
    console.log("อายุอยู่นอกช่วง")
}else{
    console.log("อายุอยู่ในช่วง 18-60")
}

// 4. คำสั่ง alert ไหนที่จะถูกรันบ้าง
if (-1 || 0) alert( 'first' );              //  รัน
if (-1 && 0) alert( 'second' );             //  ไม่รัน
if (null || -1 && 0) alert( 'third' );      //  ไม่รัน

// 5. ให้เขียนระบบ login
// ให้ใช้ prompt ในการถามใครเป็นคน login
// ถ้าผู้ใช้กรอกว่า “Admin” ให้ใช้ prompt ถาม password
// วิธีเช็ค Password
// ถ้า string นั้นเป็น “codecamp#10” ให้ alert “ยินดีต้อนรับ”
// ถ้า string เป็นอย่างอื่นให้ alert เป็น “Wrong password”
// ถ้าเป็น string ว่าง หรือ กด cancel ให้ alert ว่า “ยกเลิก”
// ถ้าผู้ใช้กรอกอย่างอื่นที่ไม่ใช่ “Admin” ให้ alert ว่า “ผมไม่รู้จักคุณ”
// ถ้าผู้ใช้กรอก input เป็น string ว่าง หรือกด Esc ให้ alert ว่า “ยกเลิก”
let name = prompt("login:")
if(name === "Admin" || name === "admin"){
    let password = prompt("password:")
    if(password === "codecamp#10") alert("ยินดีต้อนรับ")
    else if(password === "" || password === "cancel") alert("ยกเลิก")
    else alert("Wrong password")    
}else if(name === "" || name === "Esc") alert("ยกเลิก")
else alert("ผมไม่รู้จักคุณ")

