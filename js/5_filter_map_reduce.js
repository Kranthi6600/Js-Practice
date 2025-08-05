// const nums = [1,2,3,4,5,6,7,8,9,10]

// //  here we didn't used curly braces so the output is able to return

// const nums2 = nums.filter( (i) => i>4)

// console.log(nums2)

// // here if we don't give return when we write the code in curly braces we must and should returrn the function if not it prints only an empty array

// const nums3 = nums.filter( (i) => {
//    return i>4
// })


// console.log(nums3)




//////////////////////////////////////////////////////////

// Map, filter, reduce

// const cart = [
//     {
//         item : 'PS5',
//         price : 55999
//     },
//     {
//         item : 'God Of War',
//         price : 2999
//     },
//     {
//         item : 'RDR2',
//         price : 4999
//     },
//     {
//         item : 'GTA6',
//         price : 5999
//     },
//     {
//         item : 'All Of Us Are Dead',
//         price : 6999
//     },
// ]

// // total bill

// const totalBill = cart.reduce((acc, i) => (acc + i.price), 0)

// console.log(totalBill)

// // desired priced items filter

// const priceFilter = cart.filter(i => i.price > 5000)

// console.log(priceFilter)

// // names of the choosed items

// const choosedItem = cart
//                     .filter((i) =>  i.price < 6000)
//                     .map(i => i.item);

// console.log(choosedItem)

// // all the names of the items present in the array

// const itemName = cart.map(i => i.item)

// console.log(itemName)
