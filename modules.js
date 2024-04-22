// Ecmascript Modules

// podemos dividir una aplicacion
// en modulos reutilizables

// podria crear una funcion de sumar
// exportarla y luego importarla
// en otro archivo para usarla

// puedo exportar una funcion
export function add(x, y) {
  return x + y
}

// tambien puedo exportar dos funciones
export function multiply(x, y) {
  return x * y
}

// tambien puedo exportar una constante
export const title = 'js for React by Fazt'

// tambien puedo exportar un valor booleano
export const active = true

// tambien puedo exportar un arreglo
export const points = [10, 20, 30]

// tambien puedo exportar algo por defecto
export default title
/* si exporto algo por defecto
al momento de importar el modulo
le puedo asignar un nombre
para despues usar el export defautl
*/

/*
Tambien puedo elegir que funciones importar
para esto uso destructuring
import { add, multiply, title, active, points } from './modules.js'
acabo de importar todas las funciones
*/

/*
para que el navegador reconozca 
los modulos debemos especificar 
dentro del archivo HTML
de la siguiente manera
<script type="module" src="./modules.js"></script> 
*/

/*
el estandar de Ecmascript Modules
nos dice que tenemos que usar .js
sin embargo muchas herramientas 
no necesitas usar el .js
en react no usamos el .js
*/

