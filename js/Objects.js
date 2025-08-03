// const user = {
//     name: 'spidey',
//     age: 21,
//     isLoggedIn: false
// }
// const me = Object.create(user)

// console.log(user)

// const user2 = function() {
//     return {fullName: 'spidey'}
// }

// console.log(user2)
// console.log(typeof user2)
// console.log(user.toString())
// console.log(me.age)
// console.log(user.name)


// const obj3 = {}

// Object.defineProperty(obj3, 'foo', {
//     value : '21'
// })

// console.log(obj3.foo)
// // const user2 = {
// //     age: 21,
//     name: {
//         username: {
//             firstname: 'spider',
//             lastname: 'man'
//         }
//     }
// }

// console.log(user2.name.username.firstname);
// const obj1 = {a : 1, b: 2}
// const obj2 = {c : 3, d: 4}
// console.log(Object.assign(obj1,obj2));
// console.log({...obj1, ...obj2})
// console.log(Object.keys(user))
// console.log(Object.values(user))
// console.log(Object.entries(user))



// const num = [2,4,5,6,7,8]

// const max = Math.max.apply(null, num);
// const min = Math.min.apply(null, num)

// console.log(num)
// console.log(max)
// console.log(min)

// function Product(name, age) {
//     this.name = name;
//     this.age = age;
// }

// function Food(name, age) {
//     Product.call(this, name, age)
//     this.category = 'food'
// }

// const obj4 = new Food('Kratos', 30);

// function func1(a, b, c) {}
// console.log(func1.length)

// console.log(new Food('spidey', 21).name)
// console.log(new Food('spidey', 21).age)
// console.log(new Food('rice', 5).name)
// console.log(new Food('rice', 5).age)
// console.log(obj4.name)
// console.log(obj4.age)

