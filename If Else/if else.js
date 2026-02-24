/*
Syntax of if and else:

if(condition)
{
block of code to be executed if the above condition is true
}
else{
    block of code executed if the above condition is false
    }

Nested If:
if(condition){
    if(condition){
        code
    }
        else{
            code
        }
}
else{
    block of code
}   
    
If Else If Ladder:
if(condition){
    code
}
else if(condition){
    code
}
    .
    .
    .
    .
    .
else{
    code
    }


TERNIARY OPERATOR:
variable(condition) ? {output if the value is true} : {output if the value is false}


Nullish Coalescing Operator:
syntax:
valueToCheck ?? defaultValue;
*/

let number = 4;

// if(number>2){
//     document.write("True");
// }
// else{
//     document.write("Number is less than 2");
// }

// Nested IF

// if(number>3){
//     if(number>7){
//         document.write("Number is greater than 3 and 7");
//     }
//     else{
//         document.write("Number is less than 7");
//     }
// }
// else{
//     document.write("Number is less than 3");
// }

// IF ELSE IF LADDER
// number = 3;
// if(number>0 && number<5){
//     document.write("Number is Positive");
// }
// else if(number==0){
//     document.write("Number is 0");
// }
// else{
//     document.write("Number is Negative");
// }



// number = 8;

// if(number>0 && number<5){
//     document.write("IF CONDITION");
// }
// else if(number>5 && number<7){
//     document.write("ELSE IF");
// }
// else if(number>7 && number<9){
//     document.write("ELSE IF 2");
// }
// else{
//     document.write("ELSE");
// }


// TERNARY OPERATOR

// let result;
// result = 0;  
// let status = result == 1 ? "Pass" : "Fail";
// document.write(status);

//Nullish Operator

let firstName;
let defaultName = "Guest";
let result = firstName ?? defaultName;
document.write(result);
