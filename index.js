/* Question 1
What are the differences between mutating array methods and non-mutation array methods in JavaScript. List 5 array methods that fall under each of them.

In JavaScript, arrays are objects and come with a variety of methods to manipulate their contents. 
Array methods can be classified into two categories: mutating methods and non-mutating methods. 
Mutating methods modify the original array, while non-mutating methods return a new array without modifying the original one. 
Here are five examples of each:

Mutating methods:
push() - adds one or more elements to the end of an array
pop() - removes the last element from an array
splice() - adds or removes elements from an array at a specified index
sort() - sorts the elements of an array in place
reverse() - reverses the order of the elements in an array in place

Non-mutating methods:
concat() - combines two or more arrays and returns a new array
slice() - returns a portion of an array as a new array
map() - creates a new array by applying a function to each element of an array
filter() - creates a new array by filtering out elements that don't pass a test function
reduce() - reduces an array to a single value by applying a function to each element and accumulating the result.
*/

/* Question 2
Here is an array of languages: [‘C#’, ‘JavaScript’, ‘Ruby’, ‘PHP’, ‘Python’]. Perform this operation on them 
Add ‘Kotlin’ to the end of the array
Add ‘Java’ after ‘Ruby’
Remove the first item in the array
Add ’Scala’ and ‘Swift’ to the beginning of the array
Replace ‘PHP’ with ‘Go’ and ‘Rust’
*/
let languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python']
//Added kotlin to the end using the push() method
languages.push('Kotlin');
console.log(languages);

//Added Java after Ruby using splice() method
languages.splice(3, 0, 'Java');
console.log(languages);

//Removed the first item in the array using shift() method
languages.shift();
console.log(languages);

//Added ’Scala’ and ‘Swift’ to the beginning of the array using the unshift() method
languages.unshift('Scala', 'Swift');
console.log(languages);

//Replace ‘PHP’ with ‘Go’ and ‘Rust’
languages.splice(3, 1, 'Go', 'Rust');
console.log(languages);

//Question number 3
//What will be the value of fruit after calling the function changeFruit?
let fruit = ['apple', 'mango', 'banana'];
		function changeFruit( fruit ) {
    			fruit[2] = "orange";
    			return fruit;
		}
console.log(fruit);
//The value of fruit will be ['apple', 'mango', 'banana']

/*
Question number 4
Write a function that accepts an array of numbers as an argument. Return the maximum value in the array.
e.g., max([4, 5, 10, -2]) // maximum value is 10
*/
let maxValue = [1, 2, 3, 4, 5,].reduce(function(number) {
    let result = number + 2;
    return result 
})
console.log(maxValue); //maxValue is 9

/*Question number 5
Write a function called valTimesIndex which accepts an array of numbers and returns a new array with each value multiplied by the index it is at in the array:
e.g.,
 valTimesIndex([1,2,3]) // [0,2,6]
		valTimesIndex([5,10,15]) // [0,10,30]
*/
let valTimesIndex = [2, 4, 6, 8].map(function(number) {
    let result = number * [4];
    return result 
})
console.log(valTimesIndex); 
