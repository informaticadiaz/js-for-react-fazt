// manipular el DOM con JS

// guardo en la variable title el elemento h1
const title = document.createElement('h1')

// agregando contenido al h1
title.innerText = 'Hello World'

// agregando una etiqueta h1 al body
document.body.append(title)

// guardo en la variable button el elemento button
const button = document.createElement('button')

// agregando contenido al button
button.innerText = 'Click me!'

// agrego una "escucha" (addEventListener)
// al boton
button.addEventListener('click', function () {
  title.innerText = 'Hello World desde Button'
  alert('se presiono el button')
})

// agrego el button al body
document.body.append(button)

