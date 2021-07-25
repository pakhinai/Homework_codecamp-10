# Codecamp 10
# นายภคินัย   ไวแสน
* Exercise การเขียน Code     >>>>>> [Exercise Code](./Exercise_code.js) <<<<<<
    * แก้ไขการเขียนโค้ดต่อไปนี้
* Exercise การสร้าง Object     >>>>>> [Exercise Create Object](./Exercise_create_object.js) <<<<<<
    * ให้สร้าง Object แบบ Object Iteral โดยให้กำหนดตัวแปรชื่อ human โดยมี Properties ทั้ง 5 อย่าง
        - ชื่อของผู้เรียน เป็น String
        - อายุของผู้เรียนเป็น number
        - บ้านของตัวเองเป็น String
        - โสดหรือไม่โสดเป็น boolean
        - คะแนนความฉลาดของตัวเองเป็น number (เต็ม 10)
* Exercise Computed Properties     >>>>>> [Exercise Computed properties](./Exercise_computed_property.js) <<<<<<
    * ให้เขียนโปรแกรมที่รับค่า key และ value ของ Properties ของ Object หนึ่ง จนกว่าจะเจอคำว่า stop 
        และนำค่าเหล่านั้นมาสร้าง Object หลังจากนั้น console.log() object นั้นออกมา
    * ให้เขียนโปรแกรมที่รับค่า key และ value ของ Properties ของ Object หนึ่ง โดยให้ key เป็นชื่อของผลไม้ 
        และ value เป็นจำนวนของผลไม้ (number) โดยถ้า ผลไม้ชนิดไหนที่มีมากกว่า 1 ผล ให้เติม s ไปหลัง key นั้นด้วย
* Exercise Object     >>>>>> [Exercise Object](./Exercise_object.js) <<<<<<
    * ให้ทำตามคำสั่งต่อไปนี้
        - สร้าง Object เปล่าขึ้นมา
        - เพิ่ม properties name เข้าไปและให้ value เป็น “Sonter”
        - เพิ่ม properties surname เข้าไปและให้ value เป็น “Pakorn”
        - เปลี่ยน properties name เป็น “Boy”
        - ลบ properties name ออกจาก Object
    * ให้เขียนฟังก์ชันชื่อ isEmpty(obj) โดยจะมี parameters เป็น obj และ ฟังก์ชันนี้จะเช็คว่า obj นี้มี properties  
        ไหม ถ้ามีให้คืนค่า false ถ้าไม่มีให้คืนค่า true
    * การเขียนข้างล่างต่อไปนี้ Error ไหม
    * จงเขียนฟังก์ชัน sum(obj) ที่รับ obj ที่เก็บ properties โดยมี key เป็นชื่อพนักงานและมี value เป็นเงินเดือน 
        ให้ฟังก์ชันคืนค่าเป็นผลรวมของเงินเดือนพนักงานทั้งหมด
    * จงเขียนฟังก์ชัน multiplyNumeric(obj, times) โดยถ้า properties นั้นมี value เป็น number 
        ให้คูณ value นั้นด้วย times ถ้าข้อมูลเเป็นอย่างอื่นไม่ต้องทำอะไร
* Exercise Methods ของ Object     >>>>>> [Exercise Method of Object](./Exercise_method_of_object.js) <<<<<<
    * การทำงานของ code ดังกล่าวจะได้อะไรออกมา
    * การทำงานของ code ดังกล่าวจะได้อะไรออกมา
    * สร้าง object calculator จาก 3 methods
        - read() ใช้ prompts สำหรับรับค่ามา 2 ค่าและเก็บเป็น object properties
        - sum() คืนค่าผลบวกของ 2 ค่านั้น
        - mul() คืนค่าผลคูณของ 2 ค่านั้น
    * ให้ Object ชื่อ ladder มี method ขึ้น และ ลง
        - Object ชื่อ ladder สามารถเรียก function แบบนี้ได้
        - ดัดแปลง Object ชื่อ ladder สามารถเรียก function แบบนี้ได้
* Exercise Constructor กับ New     >>>>>> [Exercise Constructor New](./Exercise_constructor_new.js) <<<<<<
    * สร้าง constructor function ที่ใช้สำหรับสร้าง Calculator โดยต้องมี 3 Methods
        - read(): รับค่าจาก propmt สองตัว
        - sum() คืนค่าผลบวกของ 2 ค่านั้น
        - mul() คืนค่าผลคูณของ 2 ค่านั้น
    * สร้าง constructor function Accumulator(startingValue)
        - โดยที่ Object ดังกล่าวควร เก็บผลรวมไว้ใน property ที่มี key ชื่อว่า value, ค่าเริ่มต้นของ key ชื่อ value นี้ คือ startingValue
        - ฟังก์ชัน read() ควรอ่านค่าจาก propmt() และ เพิ่มค่าที่ใส่เข้ามาใน key ชื่อ value
        - พูดง่าย ๆ ก็คือ value คือผลรวมของ prompt โดยเริ่มจาก startingValue
* Exercise Number     >>>>>> [Exercise Number](./Exercise_number.js) <<<<<<
    * ให้เขียนฟังก์ชัน random(min, max) ที่จะ random เลข float ตั้งแต่ min จนถึง max มาให้เรา (ไม่รวม max)
* Exercise String     >>>>>> [Exercise String](./Exercise_string.js) <<<<<<
    * เขียนฟังก์ชัน ucFirst(string) โดยทำคืนค่าเป็น string เดิม แต่ตัวแรกของ string กลายเป็นพิมพ์ใหญ่
    * เขียนฟังก์ชันที่ checkSpam โดยถ้าข้อความดังกล่าวมีคำว่า “xxx” หรือ “viagra” ให้คืนค่าเป็น true      
        ถ้าไม่มีให้คืนค่าเป็น false
    * เขียนฟังก์ชันที่ truncate(str, maxlength) โดยฟังก์ชันดังกล่าวจะเช็คว่า string 
        ที่ถูกส่งเข้ามามีความยาวเกิน maxlength ไหม ถ้าเกินให้แทน ข้อความต่อจากนั้นด้วย “...”
    * เขียนฟังก์ชันที่ extractCurrencyValue(string, rate) โดยที่ฟังก์ชันดังกล่าวจะแปลง string ที่เป็นค่าเงิน dollar 
        ให้เป็น number ที่มีค่าเป็นเงินบาทไทย โดยอ้างอิง  rate จาก parameters ตัวที่สอง ที่ส่งมาให้
* Exercise Array     >>>>>> [Exercise Array](./Exercise_array.js) <<<<<<
    * ผลลัพธ์ของความยาว array คืออะไร
    * ให้ทำตามขั้นตอนต่อไปนี้
        - สร้าง array ชื่อ styles ที่มี items ชื่อ “Jazz” และ “Blues”
        - เพิ่ม “Rock-n-Roll” ต่อท้าย
        - นำค่า Classics ไปทับค่าตรงกลางของ Array
        - นำ items ตัวแรกออกมาและลบ items ตัวนั้นออกจาก array
        - เพิ่ม “Rap” และ “Reggae” ไปข้างหน้าของ Array
    * เขียนฟังก์ชัน sumInput()
        - ใช้ propmt รับ value มาเก็บใน array
        - หยุดถามเมื่อเจอค่าที่ไม่ใช่ ตัวเลข
        - คำนวณผลรวมของตัวเลขทั้งหมดใน Array
    * Maximal contiguous subarray ( Optional )
        - ให้เขียนฟังก์ชัน getMaxSubSum(arr) ที่ return ผลรวมของ subarray ที่มากที่สุดที่ติดกัน
* Exercise Methods ของ Array     >>>>>> [Exercise Method of Array](./Exercise_method_of_array.js) <<<<<<
    * ให้สร้าง array2 จาก array1 ตามที่โจทย์กำหนด โดยใช้ฟังก์ชัน Array.map()
    * ให้สร้าง array2 จาก array1 ตามที่โจทย์กำหนด โดยใช้ฟังก์ชัน Array.filter()
* Exercise Map และ Set     >>>>>> [Exercise Map and Set](./Exercise_map_set.js) <<<<<<
    * ให้ arr เป็น Array สร้าง function ชื่อ unique(arr) ให้คืนค่าเป็น unique items ของ arr
    * Anagram เป็นตัวอักษรที่มีจำนวนตัวอักษรแต่ละตัวที่เท่ากัน แต่เรียงไม่เหมือนกัน ( Optional )
    * เราได้ array จาก map.keys() แต่ไม่สามารถใช้ push ได้เราจะทำยังไงให้ keys.push สามารถทำงานได้
* Exercise Keys, Values และ Entities     >>>>>> [Exercise Key Values Entities](./Exercise_keys_values_entities.js) <<<<<<
    * กำหนดให้ salaries เป็น Object ให้เขียนฟังก์ชัน sumSalaries(salaries) ที่คืนค่าเป็นผลผมรวมของเงินเดือน 
        ถ้า salaries ไม่มีสมาชิก ให้คืนค่าเป็น 0
    * ให้เขียนฟังก์ชัน count(obj) ที่คืนค่าเป็นจำนวน properties ใน object
    