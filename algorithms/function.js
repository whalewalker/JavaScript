// const callback = (n) => {
//   return n ** 2;
// };
// function take other function as a callback
// function cube(n) {
//     return callback(n) * n
// }
// console.log(cube(3))

// const higherOrder = n =>{
//     const add = m =>{
//         const product = t =>{
//             return 2 * n + 3 * m + t;
//         }
//         return product;
//     }
//     return add;
// }
//
// console.log(higherOrder(2)(3)(10))

// const counter = count =>{
//     setInterval(increment, 1000)
//     function increment(){
//         count++;
//     }
//     return increment()
// }
//
// console.log(counter(1))

//ForEach callback function
// let numbers = [1, 2, 3, 4, 5, 6];
// const sumArray = arr =>{
//     let sum = 0;
//     const callback = (element) =>{
//         sum += element
//     }
//     numbers.forEach(callback)
//         return sum
// }
//
// console.log(sumArray(numbers))

// counter = 0;
// const greet = () =>{
//     return counter++
// }
//
// setInterval(greet, 2000)

// function greet() {
//     console.log("Good Day")
// }
//
// setTimeout(greet, 2000)

// higher order function

// numbers.forEach((element, index, arr) => console.log(index, element, arr))

// const multiple = numbers.map(num => num * 2);

// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// const namesToUpperCase = names.map((name) => name.toUpperCase())
// console.log(namesToUpperCase.join(', '))

// const countries = [
//   "Albania",
//   "Bolivia",
//   "Canada",
//   "Denmark",
//   "Ethiopia",
//   "Finland",
//   "Germany",
//   "Hungary",
//   "Ireland",
//   "Japan",
//   "Kenya",
// ];
// // const countriesContainingLand = (arr) => arr.includes('land');
// console.log(countriesContainingLand('Helloland'))

// const countriesToUpperCase = countries.map((country) => country.toUpperCase());
// console.log(countriesToUpperCase);

// const countriesFirstThreeLetters = countries.map(country => countriesContainingLand(country).slice(0, 3).toUpperCase());
// console.log(countriesFirstThreeLetters)

// const countryWithFiveLetters = countries.filter(country => country.length === 5);
// console.log(countryWithFiveLetters)

// const scores = [
//     { name: 'Asabeneh', score: 95 },
//     { name: 'Mathias', score: 80 },
//     { name: 'Elias', score: 50 },
//     { name: 'Martha', score: 85 },
//     { name: 'John', score: 100 },
//   ]


// const scoreGreaterThanEighty = scores.filter(student => student.score >= 80);
// console.log(scoreGreaterThanEighty)


// const sum = numbers.reduce((acc, cur) => acc * cur);

// console.log(sum)

// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

// const areAllStr = names.every(user => typeof user === 'string');
// console.log(areAllStr)

// const ages = [24, 22, 25, 32, 35, 18]
// ages.sort()
// const myAge = ages.find(age => age > 20);

// console.log(myAge)
// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// const bools = [true, true, true, false, 'Hello'];

// const isTrue = bools.some(bool => typeof bool === 'string');
// console.log(isTrue)

// numbers = [9.81, 3.14, 100, 37];

// console.log(numbers.sort((a, b) => a - b))


// const users = [
//     { name: 'Brook', age: 50 },
//     { name: 'Eyo', age: 100 },
//     { name: 'Asabeneh', age: 150 },
//     { name: 'Elias', age: 22 },
//   ]

// users.sort((a, b) => {
//     if(a.name > b.name) return 1;
//     if(a.name < b.name) return -1;
//     return 0;
// }) 

// console.log(users)

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

const productsWithPrize = products.filter(product => typeof product.price === 'number');
// console.log(productsWithPrize)

// const sentences = countries.reduce((acc, curr) => acc + " " +  curr)

// const newSentence = sentences.split(' ');
// let northside = newSentence.slice(0, newSentence.length - 1).join(', ');
// let lastCountry =  newSentence.slice(newSentence.length - 1).join('');
// console.log(`${northside} and ${lastCountry} are north European countries`)

// const total = productsWithPrize.forEach(product =>{
//    return  Object.keys(product).reduce(sum => sum + parseFloat(product[1]), 0)
// })

// console.log(total)

// const sumValues = productsWithPrize => Object.values(obj).reduce((a, b) => a + b);

const total = productsWithPrize.map(element => {
  return Object.values(element).filter(val => typeof val !== 'string').reduce(acc, cur => acc + cur);
});


console.log(total)

