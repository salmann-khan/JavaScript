// Array Operations

// let teams = ["Pakistan", "India", "England", "Austrailia"];
// console.log(teams.sort());

let teams = ["Pakistan", "India", "England", "Austrailia"];
teams.push("NewZealand");  // Adds in End
teams.unshift("Zimbave"); //Adds in Beginning
// teams.pop();  // Delete the last element
// teams.shift(); //Delete the first Element
teams.splice(1, 2); //Removes elements from index 1 to forward 2 indexes
console.log(teams);