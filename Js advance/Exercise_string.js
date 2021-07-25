// 1. เขียนฟังก์ชัน ucFirst(string) โดยทำคืนค่าเป็น string เดิม แต่ตัวแรกของ string กลายเป็นพิมพ์ใหญ่

function ucFirst(text) {
    let temp = text.charAt(0);
    temp = temp.toUpperCase();
    temp += text.slice(1);
    return temp;
}




// 2.	เขียนฟังก์ชันที่ checkSpam โดยถ้าข้อความดังกล่าวมีคำว่า “xxx” หรือ “viagra” ให้คืนค่าเป็น true ถ้าไม่มีให้คืนค่าเป็น false

function checkSpam(txt) {
    return ( txt.includes('xxx') || txt.includes('viagra') )? true : false;
}




// 3.	เขียนฟังก์ชันที่ truncate(str, maxlength) โดยฟังก์ชันดังกล่าวจะเช็คว่า string 
//      ที่ถูกส่งเข้ามามีความยาวเกิน maxlength ไหม ถ้าเกินให้แทน ข้อความต่อจากนั้นด้วย “...”
//      truncate("What I'd like to tell on this topic is:", 20) = "What I'd like to te…"
//      truncate("Hi everyone!", 20) = "Hi everyone!"

function truncate(str, maxlength) {
    let text='';
    for ( let i = 0; i < str.length; i++ ) {
        ( i > maxlength )? text += '.' : text += str[i];
    } 
    return text;
}




// 4.	เขียนฟังก์ชันที่ extractCurrencyValue(string, rate) โดยที่ฟังก์ชันดังกล่าวจะแปลง string 
//      ที่เป็นค่าเงิน dollar ให้เป็น number ที่มีค่าเป็นเงินบาทไทย โดยอ้างอิง  rate จาก parameters ตัวที่สอง ที่ส่งมาให้
//      alert( extractCurrencyValue('$120', 30.5) === 3660 ); // true

function extractCurrencyValue(text, rate) {
    let temp = '';
    for ( let i of text ) {
        if ( isNaN(i) ) continue;
        temp += i;
    }
    return Number(temp) * rate;
}