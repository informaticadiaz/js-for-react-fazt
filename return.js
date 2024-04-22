const button = document.createElement('button')
button.innerText = 'Click me!'

// creando una condicional
// que retorne un valor u otro
const isAuthorized = true

button.addEventListener('click', () => {
  if (isAuthorized) {
    return alert('Authorized')
  }
  alert('Not Authorized')
})

document.body.append(button)

// al escribir return 
// termino con la ejeccucion de la funcion