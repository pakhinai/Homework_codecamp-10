// แปลง function ข้างล่างให้อยู่ในรูป arrow function
// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
  
//   ask(
//     "Do you agree?",
//     function() { alert("You agreed."); },
//     function() { alert("You canceled the execution."); }
//   );
let ask = (question,yes,no) => {
    if(confirm(question)) yes();
    else no();
}
ask("Do you agree?",() => alert("You agreed."), () => alert("You canceled the execution") )
  