// creo un objeto
const user = {
  name: 'John',
  age: 10
}

// creo una funcion
function printInfo(user) {
  return '<h1>Hola ' + user.name + '</h1>'
}
// ejecuta la funcion en la consola
console.log(printInfo(user))

// atravez de una funcion inserto la informacion
// de un objeto dentro del dom
document.body.innerHTML = printInfo(user)

// distintas formas de acceder 
// a la informacion de un objeto
console.log(user.name)
console.log(user['name'])

// destructuring

function printInfo2(user) {
  const { name, age } = user
  console.log(name, age)
  return '<h1>Hola tigre ' + name + '</h1>'
}
console.log(printInfo2(user))

document.body.innerHTML = printInfo2(user)