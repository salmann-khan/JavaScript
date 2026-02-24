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

if(number>3){
    if(number>7){
        document.write("Number is greater than 3 and 7");
    }
    else{
        document.write("Number is less than 7");
    }
}
else{
    document.write("Number is less than 3");
}