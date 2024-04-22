// funcion que imprime un mensaje en consola
function holaMundo() {
  console.log('Hola Mundo')
}

// ejecuta la funcion
holaMundo()

// Funcion que retorna un valor
function helloWorld() {
  return 'Hello World'
}

// ejecuta la funcion
// guarda el valor retornado
// en una variable
const hello = helloWorld()

// imprime el valor
console.log(hello)

// las funciones pueden devolver multiples valores

// pueden devolver numeros
function numero() {
  return 20
}

// puede devolver texto
function texto() {
  return 'Hello World'
}

// puede devolver un valor booleano
function booleano() {
  return true
}

// tambien puede devolver un arreglo
function arreglo() {
  return [1, 2, 3]
}

// puede devolver un objeto
function objeto() {
  return { name: 'John', age: 30 }
}

// una function puede devolver una funcion
function funcion() {
  return function () {
    return 'Hello World'
  }
}

// ejecuto la primer funcion
console.log(funcion())

// ejecuto la segunda funcion
console.log(funcion()())

// parametros
function parametros(name) {
  return `Hello ${name}`
}

// ejecuto la funcion con el parametro
console.log(parametros('John'))

// funcion con dos parametros
function add(x, y) {
  return x + y
}

// ejecuto la funcion con dos parametros
console.log(add(1, 2))

// parametros con un valor por defecto
function sum(x = 0, y = 0) {
  return x + y
}

// ejecuto la funcion con un valor por defecto
console.log(sum(10))

