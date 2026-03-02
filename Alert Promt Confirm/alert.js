// Alert Prompt Confirm --> Functions
/*
alert() -> display a message

prompt() -> show a message, a input textbox, it returns the input on ok or, if cancel button or ESC button it returns null;

confirm() -> show a message to confirm, returns true when ok is clicked and return false when cancel/esc is clicked
 */


// Alert
// alert("You are loggedIn!");
// alert("Welcome");


// Prompt
// let age = prompt("Enter your age", 20);

// // document.write(age);  

// if(age>=18){
//     document.write("You are Adult");
// }
// else{
//     document.write("You are Kid");
// }

let number = confirm("Confirm Deleting?");
if(number){
    document.write("Deleted");
}
else{
    document.write("Not Deleted");
}