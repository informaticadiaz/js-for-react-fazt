const background = 'yellow'
const color = 'white'
const backgroundTrue = 'green'
const backgroundFalse = 'red'
// para jugar con el codigo
// cambio el valor de true a false
const isAuthorized = true

const button = document.createElement('button')
button.innerText = 'Click me!'
// dando estilos al boton con js
button.style = 'background-color: red; color: white'
// usando string literals para dar estilos
button.style = `background-color: ${background}; color: ${color}`
// usando operador ternario y variables para dar estilos
// si isAuthorized es true
// background es backgroundTrue
// si isAuthorized es false
// background es backgroundFalse
button.style = `background-color: ${isAuthorized ? backgroundTrue : backgroundFalse}; color: ${color}`

button.addEventListener('click', () => {
  if (isAuthorized) {
    return alert('Authorized')
  }
  alert('Not Authorized')
})

document.body.append(button)

// el operador ternario es un if else en una sola linea
// ? es el if, : es el else

// recuerda vincular este archivo con el index.js
// para poder ver el resultado en el navegador