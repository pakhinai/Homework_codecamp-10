# Codecamp 10
# นายภคินัย   ไวแสน
* Exercise ตัวแปรและประเภทของข้อมูล >>>>>> [Exercise variable](./Exercise/Exercise_variable/variable.js) <<<<<<
    * ผลลัพธ์ทั้ง console.log ทั้งสามคืออะไร
    * กำหนดตัวแปรสำหรับเก็บชื่อ และกำหนดค่าเริ่มต้นเป็นชื่อของผู้เรียน
    * กำหนดตัวแปรสำหรับเก็บอายุ และกำหนดค่าเริ่มต้นเป็นอายุของผู้เรียน
    * กำหนดตัวแปรสำหรับเก็บที่อยู่ และกำหนดค่าเริ่มต้นเป็นที่อยู่ของผู้เรียน
    * กำหนดตัวแปรสำหรับเก็บประวัติของนักเรียนโดยใช้ตัวแปรทั้ง 3 ตัวด้านบนประกอบการเขียนประวัตินี้ด้วย
* Exercise การดำเนินการเบื้องต้น  >>>>>> [Exercise operator](./Exercise/Exercise_operator/operator.js) <<<<<<
    * ให้ระบุค่าของ a, b, c และ d หลังจากจบ statements ทั้งสามบรรทัด
    * จงหาผลลัพธ์ของ Statement ต่อไปนี้"
* Exercise การเปรียบเทียบ  >>>>>> [Exercise comparison](./Exercise/Exercise_comparison/comparison.js) <<<<<<
    > จงหาค่าของการเปรียบเทียบต่อไปนี้
        5 > 4\
        “apple” > “pineapple”\
        “2” > “12”\
        undefined == null\
        undefined === null\
        “bee” < “be”\
        “bee” > “Bee”\
        “Bee” < “be”
* Exercise การเขียนเงื่อนไข  >>>>>> [Exercise condition](./Exercise/Exercise_condition/condition.js) <<<<<<
    * Browser จะโชว์ข้อความ “Hello Codecamp #5” ไหม
    * ใช้ if else ในการเขียนถามชื่อของคุณ
        * ถ้าตอบถูกให้แสดงคำว่า “เก่งมาก”
        * ถ้าตอบผิดให้แสดงคำว่า “คุณไม่รู้จักชื่อฉัน”
    * ใช้ prompt ในการรับคะแนนมาคำนวณเกรด
        > ถ้าคะแนน มากกว่าเท่ากับ 80       ได้ A\
          ถ้าคะแนน อยู่ระหว่าง 70 - 79     ได้ B\
          ถ้าคะแนน อยู่ระหว่าง 60 - 69     ได้ C\
          ถ้าคะแนน อยู่ระหว่าง 50 - 59     ได้ D\
          ถ้าคะแนน น้อยกว่า 50            ได้ F
    * เปลี่ยน if-else ข้างล่างในอยู่ในรูปของ Ternary Operators"
* Exercise ตัวดำเนินการแบบตรรกะ  >>>>>> [Exercise logic](./Exercise/Exercise_logic/logic.js) <<<<<<
    * คำสั่งต่อไปนี้จะแสดงค่าเป็นอะไร
        > alert( null || 2 || undefined );\
          alert( alert(1) || 2 || alert(3) );\
          alert( 1 && null && 2 );\
          alert( alert(1) && alert(2) );\
          alert( null || 2 && 3 || 4 );
    * เขียนคำสั่ง if ที่เช็คอายุว่าอยู่ระหว่าง 18 - 60
    * เขียนคำสั่ง if ที่เช็คอายุว่าไม่อยู่ระหว่าง 18 - 60
    * คำสั่ง alert ไหนที่จะถูกรันบ้าง
        > if (-1 || 0) alert( 'first' );\
          if (-1 && 0) alert( 'second' );\
          if (null || -1 && 0) alert( 'third' );
    * ให้เขียนระบบ login
        > ให้ใช้ prompt ในการถามใครเป็นคน login\
          ถ้าผู้ใช้กรอกว่า “Admin” ให้ใช้ prompt ถาม password\
          วิธีเช็ค Password\
          ถ้า string นั้นเป็น “codecamp#5” ให้ alert “ยินดีต้อนรับ”\
          ถ้า string เป็นอย่างอื่นให้ alert เป็น “Wrong password”\
          ถ้าเป็น string ว่าง หรือ กด cancel ให้ alert ว่า “ยกเลิก”\
          ถ้าผู้ใช้กรอกอย่างอื่นที่ไม่ใช่ “Admin” ให้ alert ว่า “ผมไม่รู้จักคุณ”\
          ถ้าผู้ใช้กรอก input เป็น string ว่าง หรือกด Esc ให้ alert ว่า “ยกเลิก”
* Exercise for และ while  >>>>>> [Exercise for & while](./Exercise/Exercise_for_while/for_while.js) <<<<<<
    * ลขที่ถูก alert เป็นลำดับสุดท้ายคือเลขอะไร
    * code ทั้งสองอันนี้จะแสดง alert ออกมาเหมือนกันทั้งหมดหรือไม่
    * code ทั้งสองอันนี้จะแสดง alert ออกมาเหมือนกันทั้งหมดหรือไม่
    * ให้เขียน loop ทั้งแสดงเลข 2 ถึง 10 ออกมา
    * เปลี่ยน code for loop ด้านล่างนี้ให้เป็น while loop โดยที่ผลลัพธ์ยังเหมือนเดิม
    * ให้เขียนเกมส์ทายตัวเลขสำหรับเล่นสองคน โดย
        * ให้ผู้เล่นคนแรกพิมพ์เลขใส่ใน prompt ที่อยู่ระหว่าง 1 ถึง 100 โดยไม่ให้ผู้เล่นคนที่สองรู้ว่าตัวเลขเป็นอะไร\
        *  และให้ผู้เล่นคนที่สองทายเลขโดยการพิมพ์เลขใส่ใน prompt จนกว่าจะถูก ถ้าไม่ถูก จะต้องบอกด้วยว่าเลขที่ผู้เล่นคนที่สองพิมพ์เข้ามา มากกว่า หรือ น้อยกว่าคำตอบนั้น"
* Exercise Switch Cases  >>>>>> [Exercise switch case](./Exercise/Exercise_switch_cases/switch_cases.js) <<<<<<
    * แปลง Code ดังกล่าวเป็น if-else statement
    * แปลง Code ดังกล่าวเป็น Switch cases
* Exercise Function  >>>>>> [Exercise function](./Exercise/Exercise_Function) <<<<<<
* Exercise Arrow Function >>>>>> [Exercise arrow function](./Exercise/Exercise_Arrow_function/arrow_function.js) <<<<<<
    * แปลง function ข้างล่างให้อยู่ในรูป arrow function
* Homework  >>>>>> [Homework](./Homework/homework.js) <<<<<<
