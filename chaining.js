// optional chaining

// esta caracteristica es util 
// para cuando traemos datos de un backend

const person = {
  name: 'John',
  address: {
    country: 'USA',
    city: ' Los Ángeles',
    street: 'Plummer',
    number: 1414
  }
}

// acceso a propiedades de objetos
console.log(person.address.city)

/*
al acceder a propiedades de un objeto
que no existen generamos un error
usando optional chaining
evitamos el error y retornamos undefined
*/

// uso de optional chaining
console.log(person?.address?.city)