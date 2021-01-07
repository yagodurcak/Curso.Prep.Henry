// No cambies los nombres de las funciones.

const { suma } = require("../../02-JS-I/homework/homework");

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  
  return array[0]
}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  var ultimo = array.length - 1;
  return array[ultimo]
}

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length
}

  function incrementarPorUno(array) {
    
    
    for (i = 0; i < array.length; i++) {
      
      array[i] = array[i] + 1;
      }
    return array; 
    
      }
  

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array
}

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var str = palabras[0];
  //var palabras = ["hola", "mundo", "nuevo"];
  for(i= 1; i < palabras.length; i++){

    str = str + " " + palabras[i] ;
    
  }
  
  return str; }


 

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  
  //var result = null;
  for(i= 0; i < array.length; i++){


    if (array[i] == elemento){ 
      //result = array[i];
      return true}
      
  }
  return false
}


function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var suma = 0;
  for (i=0; i < numeros.length; i++){
    var suma = suma + numeros[i];
    
  }
  return suma 
}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var promedio = 0;
  for (i=0; i < resultadosTest.length; i++){
    var promedio = (promedio + resultadosTest[i]);
    //var  suma = promedio / resultadosTest.length
      }
  var suma= promedio / resultadosTest.length;
  return suma}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:

  var mayor = null;

  for (i=0; i < numeros.length; i++){
    
    if (numeros[i] > mayor){
      mayor = numeros[i]
    }
  }
  return mayor
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0
  // Si se pasa un argumento, simplemente devuélvelo
  // Tu código:
  
  var producto = 1;
  if (arguments.length < 1) return 0;

  for (i=0; i < arguments.length; i++){
    
    producto = producto * arguments[i];
  }
  return producto
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
};
