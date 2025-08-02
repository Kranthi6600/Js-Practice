/*const obj = {
    name:'kranthi'
}

console.log(obj);
console.log(Object());
console.log(obj.isPrototypeOf());




const myFunc = function() {
    console.log('hello world');
}

myFunc(console.log('hi'));
myFunc(console.log('hello'))

const id = Symbol('abc');
const anotherId = Symbol('abc');

const number = 33223423432423424242344234;
const big = 2334242323324234324n

console.log(typeof big);
console.log(typeof number);





const str = 'kranthi';
console.log(str.at(0));
console.log(str.anchor(5));
console.log(str.big());
console.log(str.blink());
console.log(str.bold(5));
console.log(str.charAt(5));
console.log(str.charCodeAt(1));
console.log(str.codePointAt(5));
console.log(str.concat(5));
console.log(str.constructor(1));
console.log(str.endsWith('i'));
console.log(str.endsWith());
console.log(str.includes(''));
console.log(str.includes(''));
console.log(str.indexOf('t'));
console.log(str.italics());
console.log(str.fixed());
console.log(str.fontcolor('green'));
console.log(str.fontsize('15px'));
console.log(str.isWellFormed());
console.log(str.lastIndexOf(''));
console.log(str.lastIndexOf('x'));
console.log(str.lastIndexOf('kranthi'));
console.log(str.lastIndexOf(str));
console.log(str.link(str));
console.log(str.localeCompare(''));
console.log(str.localeCompare('d'));
console.log(str.localeCompare(str));
console.log(str.localeCompare('kranthi'));
console.log(str.match(1));
console.log(str.match('kranthi'));
console.log(str.match());
console.log(str.matchAll(1));
console.log(str.matchAll());
console.log(str.normalize());
console.log(str.padEnd(10));
console.log(str.padEnd(10, '3'));
console.log(str.padStart());
console.log(str.repeat('kranthi'));
console.log(str.repeat(3));
console.log(str.replace());
console.log(str.replace(''));
console.log(str.replace('kranthi'));
console.log(str.replaceAll(''));
console.log(str.replaceAll(1));
console.log(str.search('k'));
console.log(str.search(''));
console.log(str.search(1));
console.log(str.slice(3));
console.log(str.split('kranthi'));
console.log(str.split(''));
console.log(str.split());
console.log(str.small());
console.log(str.startsWith(''));
console.log(str.startsWith());
console.log(str.strike());
console.log(str.sub());
console.log(str.substr());
console.log(str.substring());
console.log(str.sup());
console.log(str.toLocaleLowerCase());
console.log(str.toLocaleUpperCase());
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.toWellFormed());
console.log(str.trim());
console.log(str.valueOf('k'));
console.log(str.valueOf(1));
console.log(str);

console.log(String.prototype);

*/




// const myFunc = function () {
//     console.log('hello');
//     return;
// }


// myFunc()

// console.log(myFunc.prototype);



// const arr1 = [1,2,3,4,5];
// const arr2 = [6,7,8,9,10]
// const arr3 = [1,2,3 ,[4,5,[9,10,11], 6], 7,8]
// const arr4 = [11,22,44,12,42,45,13]
// const initialValue = 0
// const sumWithInitial = arr2.reduce((acc, currentValue) => acc + currentValue,initialValue,)
// const iterator = arr1.entries()
// const words = ['spray', 'spidey', 'kratos', 'loki']
// const even = (e) => e % 2 === 0

// console.log(arr1)
// console.log(arr1.at(1)) // finds and prints the value at index 1
// console.log(arr1.concat(arr2)) // attaching the arr2 to arr1
// console.log(arr1.copyWithin(2, 1)) // copying the element in index 2 and pasting the value in index 1
// console.log(iterator.next().value) // prints the value right after the 
// console.log(arr1.fill(1)) // fills the whole array elements with 1
// console.log(words.filter((word)=> word.length > 4))// filters and prints the elements which are greater than 4
// console.log(arr2.find((e)=> e < 7)) //// finds and prints the first element which is smaller than 7
// console.log(arr2.find((e)=> e > 7)) // finds and prints the first element which is greater than 7
// console.log(arr2.findIndex((e) => e > 8)) // finds the first element's index which is greater than 8
// console.log(arr2.findLast((e) => e > 4)) // finds the last element's index which is greater than 4
// console.log(arr3.flat(Infinity)) // converts or mixes the baby arrays into the parent
// console.log(arr2.flatMap((e) => (e === 7 ? [2,2,3,5] : 1))) // if the value exists, the value is changed to the desired values and rest of all would change the derised value leaving the compared one
// console.log(arr2.map((e) => e)) // prints the whole array
// arr2.forEach(((e) => console.log(e))) // prints all the elements individually
// console.log(arr2.includes(6)) //checks the value if exists
// console.log(arr2.includes(3)) //checks the value if exists
// console.log(arr2.indexOf(8)) // gives the value of the index
// console.log(arr2.join()) // coverts to string 
// console.log(sumWithInitial) //adds all the elements form 0th index to the last
// console.log(arr2.reverse()) // reverses the string 
// console.log(arr2.some(even)) // checks if the array consists an even value in it
// console.log(arr4.sort()) //sorting the elements in the array in ascending order
// console.log(arr4.toLocaleString()) //coverting to string
// console.log(arr4.toString()) //converting to string 
// console.log(arr4.toReversed()) // reversing the array
// console.log(arr4.values())
// console.log(arr4.with(3,2)) // replacing the value in the index
// console.log(Array.isArray(arr2)); // true
// console.log(Array.isArray('spidey')) // false
// console.log(Array.from('spidey')) // prints ['s', 'p', 'i', 'd', 'e', 'y']
// console.log(Array.isArray(Array.from('spidey'))) // true

// // converting into array

// let b1 = 100 
// let b2 = 200
// let b3 = 300
// console.log(Array.of(b1, b2, b3))  //[100, 200, 300]


// let arr = 'spidey'
// let arr5 = Array.from(arr)
// console.log(Array.isArray(arr5))




// const arr2 = arr1.slice(1, 3)
// console.log(arr2)

// const arr3 = arr1.splice(1,3)
// console.log(arr3)


