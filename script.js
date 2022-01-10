// hello world javascript
console.log('hello world 👋')

/*
this is a multiline comment
*/

// variables - named storage

// declaring a variable
// let user;

// assigning a value to user
// user = 'stephen'

// initializing a variable
// let client = 'Mac'
client = 'Windows'
// console.log(user)
// console.log(client)

// declaring variables in one line

// let cat
// let dog
// let cat, dog
// console.log(cat, dog)

// using const - cannot be reassigned

const user = 'Rahaf'

// user = 'Stephen' -> this does not work

// naming is really important !!!!!

// camelCase -> userName

// there are other methods on the console
// console.table(['a', 'b', 'c'])

// data types

// primitive data types and objects
// primitives: number, string, boolean, null, undefined, Symbol

// js is dynamically typed - not strictly typed

let str = 'hello'
console.log(typeof str) // -> string
str = 42
console.log(typeof str) // -> number

console.clear()

// Number

const distance = 7000
const price = 19.99

console.log('hello' * 2) // -> NaN - Not a number

// mathematical operators

// + , - , / , *

const sum = 3 + 5
console.log(sum)

// modulo -> % -> remainder

console.log(7 % 2)

console.clear()

let x = 4
// x = x + 1
x += 1 // x = x + 1 
x++ // x += 1 -> x = x + 1

console.log(x)

// this is also possible with
// x -= 5, x *= 3, 

console.clear()
let y = 1

// some additional info
console.log(y++) // -> 1 -> y is used first and then incremented
console.log(y) // -> 2

console.clear()

// Strings
// '' , "" , ``
const name = '' // -> this is an empty string
const greeting = 'hello'
// concatenation of strings
const message = greeting + ' ' + 'world'
// template string
const mWithBackticks = `${greeting} world`
console.log(message)
console.log(mWithBackticks)

// string properties and methods

// length property
const numOfChars = greeting.length

console.log(numOfChars)

// const greeting = 'hello'
// accessing characters of a string
console.log(greeting.charAt(4))
console.log(greeting[0])
console.clear()
const word = 'worslds'
// access the last char of that word


// bonus
// for (let i = 0; i < word.length; i++) {
// 	// console.log(word[i])
// 	if (word[i] === 's') {
// 		console.log(i)
// 	}
// }


console.log(word.charAt(word.length - 1))

console.clear()
// indexOf() -> returns the index of a char -> returns the index of a char -> returns the index of a char -> returns the index of a char -> returns the index of a char -> returns the index of a char -> returns the index of a char -> returns the index of a char

console.log(word.indexOf('s')) // -> 5
// lastIndexOf()
console.log(word.lastIndexOf('s')) // -> 5

// slice() -> returns a substring within a given range
console.log(word.slice(1, 4))

let username = 'alice'

// toUpperCase()
// strings are immutable
console.log(username.toUpperCase())
// change username 
username = username.toUpperCase()
console.log(username)
const username2 = 'bob'
const upperCased = username2[0].toUpperCase() + username2.slice(1)
console.log(upperCased)

// boolean, undefined and null
// undefined is the unintentional absence of a value
// null is the intentional absence of a value

// boolean -> is either true of false

console.log(2 > 3)
/*
< less than
> larger than
<= less than or equal
>= larger than or equal
*/
console.clear()
// equality
const num1 = 5
const num2 = '5'
// === -> strictly equal / also checks the type
// == -> equal / converts one of the types before comparison
const equal = num1 === num2
console.log(equal)
// ! -> not
console.log(4 !== 3)
console.log(!true)

// logical operators
// logical and : &&
// logical or : ||
console.log(4 > 3 && 7 > 5) // true
console.log(4 > 3 || false) // true

// conditionals and loops
// if statements
// const age = Number(prompt('how old are you?'))

// console.log(typeof age)
// if (age > 18) {
// 	console.log('you are allowed to drive')
// } else if (age === 17) {
// 	console.log('you are allowed to drive with an adult')
// } else {
// 	console.log('you are too young to drive')
// }

console.clear()

// truthy and falsy values
// falsy values are: '', 0, undefined, null, NaN

let password = '123456'

// check if password is set -> not an empty string
if (password) {
	console.log('password is set')
} else {
	console.log('password is not set')
}

// switch case
// const language = prompt('what is your mother tongue?')
// switch (language) {
// 	case 'french':
// 		console.log('bonjour')
// 		break;
// 	case 'english':
// 		console.log('hi')
// 		break;
// 	case 'croatian':
// 		console.log('bok')
// 		break;
// 	default:
// 		console.log('non recognized language')
// }

// iterations
console.clear()
// for loop
// log the numbers one to ten
// for (let i = 1; i < 11; i++) {
// 	console.log(i)
// }

// for (let str = ''; str !== 'aaaa'; str += 'a') {
// 	console.log('hello')
// }

// same counter but with a while loop
// let i = 1;
// while (i < 11) {
// 	console.log(i)
// 	i++
// }

let password2 = prompt('enter your password')
const correctPassword = '123456'
while (password2 !== correctPassword) {
	password2 = prompt('enter your password')
}
alert('you can enter the site')