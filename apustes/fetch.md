# Fetch

fetch es una función incorporada de JavaScript
que se utiliza para hacer solicitudes HTTP
desde el navegador hacia recursos en la web,
como archivos JSON, HTML, imágenes, etc.
Permite realizar peticiones asíncronas
y manejar las respuestas de manera flexible utilizando Promesas.

## Ejemplo

```js
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => console.log(data))
```
