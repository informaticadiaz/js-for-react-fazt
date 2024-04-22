// arrays
const names = ['John', 'Connor', 'T-800']
const namesDos = ['marcos', 'pedro', 'laura']

// recorro el array con un for
for (let i = 0; i < names.length; i++) {
  const element = names[i];
  console.log(`Esto viene de un for: ${element}`)
}

// recorro el array con un forEach
names.forEach(function (name) {
  console.log(`Esto viene de un forEach: ${name}`)
})

// recorro el array con un forEach 
// con arrow function
names.forEach(name => console.log(`Foreach con arrow function:${name}`))

// utilizo el methodo map
names.map(function (name) {
  console.log(`map ${name}`)
})

names.map(name => console.log(`map con arrow function: ${name}`))

const newNames = names.map(function (name) {
  return name
})

// esta arrow function no necesita el return
const newNames2 = names.map(name => name)

// devuelve un nuevo array con las modificaciones
// no modifica el array original
const newNames3 = names.map((name) => `Hola ${name}`)

// utilizo el methodo find
const nameFound = names.find(function (name) {
  if (name === 'John') {
    return name
  }
})

// utilizo el methodo filter
const nameFilter = names.filter(function (name) {
  if (name === 'T-800') {
    return name
  }
})

// utilizo el methodo filter con !
// devuelve un nuevo array sin la coincidencia
// uso arrow function para escribir menos codigo
const filterNegado = names.filter(name => name !== 'T-800')

// uniendo arreglos con concat
const concat = names.concat(namesDos)

// variante de concat 
// spread operator o operador de propagación
const concat2 = [...names, ...namesDos]

// ejemplo spread operator
const user = {
  name: 'John',
  lastname: 'Connor'
}

const address = {
  country: 'USA',
  city: ' Los Ángeles',
  street: 'Plummer',
  number: 1414
}

const userInfo = {
  ...user,
  ...address
}

// tambien podemos 

// métodos como map, filter, find, reduce, son 
// bastante utilizados en react


console.log(`Esto es newNames: ${newNames}`)
console.log(`esto es newNames2: ${newNames2}`)
console.log(`esto es newNames3: ${newNames3}`)
console.log(`esto es nameFound: ${nameFound}`)
console.log(`esto es nameFilter: ${nameFilter}`)
console.log(`esto es filterNegado: ${filterNegado}`)
console.log(`esto es concat: ${concat}`)
console.log(`esto es concat2: ${concat2}`)
console.log(`esto es user: ${user}`)
console.log(`esto es address: ${address}`)
console.log(`esto es userInfo: ${userInfo}`)