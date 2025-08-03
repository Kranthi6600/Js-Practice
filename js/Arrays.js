

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
