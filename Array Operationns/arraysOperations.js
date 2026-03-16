// Array Operations

// let teams = ["Pakistan", "India", "England", "Austrailia"];
// console.log(teams.sort());

// let teams = ["Pakistan", "India", "England", "Austrailia"];
// teams.push("NewZealand");  // Adds in End
// teams.unshift("Zimbave"); //Adds in Beginning
// // teams.pop();  // Delete the last element
// // teams.shift(); //Delete the first Element
// teams.splice(1, 2); //Removes elements from index 1 to forward 2 indexes
// /*
// //teams = [];
// //teams.length = 0;
// Empty the array
// */
// console.log(teams);

// let teams = "Austrailia";
// console.log(Array.isArray(teams));

// let message = "Hello There! I'm Salman A Web Developer Jr";
// let splitting = message.split(" ");
// console.log(splitting);

// let arr1 = ["Salman ", "Khan ", "Ahmed"];
// let arr2 = ["Kamran ", "Imran ", "Ali"];
// let newArr = arr1.concat(arr2);
// console.log(newArr);

// let books = [
//     ["Maths", "Calculus"],
//     ["Bio", "Zoology"],
//     ["Computer", "Ai"]
// ];
// let arr = books[1][0];
// console.log(arr);

let teams = ["Pakistan", "India", "England", "Austrailia"];
for( let index = 0; index< teams.length; index++){
    console.log(`Elements of Teams Array are: ${index} of ${teams[index]}`);
}