// funcion sin nombre o anonima
console.log(function () {
  return 'Starting...'
}())

// las funciones anonimas 
// son utiles cuando trabajamos con eventos

const button = document.createElement('button')
button.innerText = 'Click me!'

button.addEventListener('click', function () {
  alert('se presiono el button')
})

document.body.append(button)

// arrow functions
const add = (x, y) => {
 return x + y
}

// inline arrow functions
const sum = (x, y) => x + y
const showText = () => 'Hello World'
const showNumber = () => 20
const showBoolean = () => true
const showArray = () => [1, 2, 3]
const showObject = () => ({ name: 'John', age: 30 })
