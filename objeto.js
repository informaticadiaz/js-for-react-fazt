// creo un objeto
const lider = {
  name: 'John',
  lastname: 'Connor',
  age: 10,
  address: {
    country: 'USA',
    city: ' Los Ángeles',
    street: 'Plummer',
    number: 1414
  },
  friends: ['T-800', 'T-800'],
  active: true,
  sendMail: function () {
    return 'sending email...'
  }
}

// imprimo el objeto
console.log(lider);

// imprimo el nombre
console.log(lider.name);

// imprimo el objeto address
console.log(lider.address);

// imprimo el objeto address city
console.log(lider.address.city);

// de esta forma se puede 
// acceder a los valores del objeto

// el objeto puede estar formado por 
// propertys o methods
// property: pares clave valor
// por ejemplo name: John
// methods funciones dentro del objeto
// por ejemplo sendMail: () => 'sending email...'

// creando un objeto apartir de variables

const liderName = 'John';
const liderLastName = 'Connor';

// el objeto tiene una propiedad y un valor
// la propiedad es liderName
// el valor es el valor de la variable liderName
// al coincidir la propiedad
// con el nombre de la variable
// se puede declarar una sola vez

const person = {
  liderName,
  liderLastName,
}

// si el valor de la propiedad
// no coincide con el valor de la variable
// hay que declararla de esta manera

const person2 = {
  name: liderName,
  lastName: liderLastName,
}

// podes usar node para jugar con este codigo