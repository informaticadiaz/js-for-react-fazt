// async await

// util para cuando
// pedimos datos de un backend
// con react

const ul = document.createElement('ul')

// biblioteca del navegador llama fetch

let data = fetch('https://jsonplaceholder.typicode.com/users')

// esto nos devolvera una promesa
console.log("datos desde fetch")
console.log("fetch devuelve una promesa")
console.log(data)

// las promesas sirven
// para no bloquear los procesos


// para manejar las respuestas
// podemos convertir la respuesta a un json

fetch('https://jsonplaceholder.typicode.com/users')
  .then(function (response) {
    return response.json()
  }).then(function (data) {
    console.log(data)
    data.forEach(function (user) {
      const li = document.createElement('li')
      li.innerText = user.name
      ul.append(li)
    })
    document.body.append(ul)
  })

async function loadData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const dataResponse = await response.json()
  console.log("datos desde async await")
  console.log(dataResponse)
}

loadData()