/* 
SWITCH:
A block of code depending on different cases. (Conditional Statement)
Syntax: 
switch(expression)
{
    case x:
        code
        break;
    case y:
        code
        break;
    .
    .
    .
    .
    .
    default:
        code

}
*/

// let day = 8;
// switch(day)
// {
//     case 1:
//         document.write("Monday");
//         break;
//     case 2:
//         document.write("Tuesday");
//         break;
//     case 3:
//         document.write("Wednesday");
//         break;
//     case 4:
//         document.write("Thursday");
//         break;
//     case 5:
//         document.write("Friday");
//         break;
//     case 6:
//         document.write("Saturday");
//         break;
//     case 7:
//         document.write("Sunday");
//         break;
//     default:
//         document.write("Invalid");
// }

let variable = "no";
switch(variable)
{
    case 1:
        document.write("True");
        break;
    case 'y':
        document.write("True");
        break;
    case "yes":
        document.write("True");
        break;
    case 0:
        document.write("False");
        break;
    case 'n':
        document.write("False");
        break;
    case "no":
        document.write("False");
        break;
    default:
        document.write("Invalid");
    
}