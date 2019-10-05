const array = ["Banana", "Apples", "Oranges", "Blueberries"];

console.log(`Remove Banana from ${array}`);
array.shift();
console.log(array);

console.log("*****************************");

console.log("Sort array in order");
array.sort();
console.log(array);

console.log("*****************************");

console.log('Put "Kiwi" at the end of the array');
array.push("Kiwi");
console.log(array);

console.log("*****************************");

console.log('Remove "Apples" from the array');
const appleIndex = array.indexOf("Apples");
array.splice(appleIndex, 1);

console.log("*****************************");

console.log("Sort the array in reverse order.");
array.sort().reverse();
console.log(array);

console.log("*****************************");

const array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(array2[1][1][0]);
