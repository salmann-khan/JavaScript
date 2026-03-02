/*
 Break: the control exits from loop
 Continue: skip particular iteration of the loop but control remain within the loop.
 Nested loop: a loop presented inside the another loop
 */

// Break
// for(let i=0; i<=10; i++){
//     if(i==5){
//         break;
//     }
//     document.write("The value is: " + i + "<br>");
// }

// Continue
// for(let i=0; i<=10; i++){
//     if(i==5){
//         continue;
//     }
//     document.write("The value is: " + i + "<br>");
// }

// NEsted loop
// for(let i = 0; i<=10; i++)
// {
//     document.write("The value of i: " + i + "<br>");

//     for(let j=0; j<2; j++){
//      document.write("The value of j: " + j + "<br>")   
//     }
// }


// outer: for(let i = 0; i<=5; i++)
// {
//     document.write("The value of i: " + i + "<br>");

//     for(let j=0; j<2; j++){
//         if(i==2){
//             break outer;
//         }
//      document.write("The value of j: " + j + "<br>")   
//     }
// }


let count = 0;
while(count<10)
{
    count++;
    if(count%2 == 0){
        break;
    }
    document.write("Odd Number: " + count + "<br>");
}