
// ============================
// EJERCICIOS DE ARRAYS EN JAVASCRIPT (NO RESUELTOS)
// ============================

// EJERCICIO 1: Acceso a elementos de un array
// Crea una función que reciba un array y devuelva su último elemento, sin importar la longitud del array.

function obtenerUltimoElemento(array) {
    let maxIndice = array.length -1;
    return array[maxIndice]
}

console.log(obtenerUltimoElemento([1, 2, 3, 4, 5]));     // Debe retornar: 5
console.log(obtenerUltimoElemento(["a", "b", "c"]));     // Debe retornar: "c"
console.log(obtenerUltimoElemento([true]));              // Debe retornar: true


// EJERCICIO 2: Agregar y eliminar elementos
// Crea una función que reciba un array y un elemento, agregue el elemento al final del array,
// luego elimine el primer elemento y finalmente retorne el array modificado.

function agregarYEliminar(array, elemento) {
    array.push(elemento);
    array.shift();
    return array;
}

console.log(agregarYEliminar([1, 2, 3], 4));            // Debe retornar: [2, 3, 4]
console.log(agregarYEliminar(["a", "b"], "c"));         // Debe retornar: ["b", "c"]


// EJERCICIO 3: Combinar métodos de array
// Crea una función que reciba un array de números, elimine el último número, 
// agregue los números 10, 20 y 30 al inicio, y retorne el nuevo array.

function manipularArray(array) {
    array.pop();
    array.unshift(10, 20, 30);
    return array;
}

console.log(manipularArray([1, 2, 3, 4]));              // Debe retornar: [10, 20, 30, 1, 2, 3]
console.log(manipularArray([5, 6]));                    // Debe retornar: [10, 20, 30, 5]


// EJERCICIO 4: Uso de splice para reemplazar elementos
// Crea una función que reemplace los elementos en las posiciones 1 y 2 de un array
// por los strings "reemplazo1" y "reemplazo2", y retorne el array modificado.

function reemplazarElementos(array) {
    array.splice(1,2, 'reemplazo1', 'reemplazo2');
    return array;
}

console.log(reemplazarElementos([10, 20, 30, 40]));     // Debe retornar: [10, "reemplazo1", "reemplazo2", 40]
console.log(reemplazarElementos(["a", "b", "c", "d", "e"])); // Debe retornar: ["a", "reemplazo1", "reemplazo2", "d", "e"]


// EJERCICIO 5: Crear un subarray con slice
// Crea una función que extraiga una porción de un array desde el índice 2 hasta el final.

function extraerPorcion(array) {
    let subarray = array.slice(2, array.length);
    return subarray
}

console.log(extraerPorcion([10, 20, 30, 40, 50]));     // Debe retornar: [30, 40, 50]
console.log(extraerPorcion(["a", "b", "c", "d"]));     // Debe retornar: ["c", "d"]


// EJERCICIO 6: Recorrer un array con bucle for
// Crea una función que reciba un array y retorne un nuevo array donde cada elemento
// ha sido incrementado en 5.

function incrementarPorCinco(array) {
    for(const indice in array){
        array[indice] +=5
    }
    return array;
}

console.log(incrementarPorCinco([1, 2, 3]));           // Debe retornar: [6, 7, 8]
console.log(incrementarPorCinco([10, 20]));            // Debe retornar: [15, 25]


// EJERCICIO 7: Uso de forEach
// Crea una función que calcule la suma de todos los elementos de un array de números utilizando forEach.

function sumarConForEach(array) {
    let sumaTotal = 0;
    array.forEach((numero)=>{
        sumaTotal += numero;
    });
    return sumaTotal;
}

console.log(sumarConForEach([1, 2, 3, 4]));            // Debe retornar: 10
console.log(sumarConForEach([5, 10, 15]));             // Debe retornar: 30


// EJERCICIO 8: Uso de map
// Crea una función que utilice map para convertir un array de números a un array 
// con los cuadrados de esos números.

function calcularCuadrados(array) {
    const arrayDeCuadrados = array.map(numero => numero**2);
    return arrayDeCuadrados;
}

console.log(calcularCuadrados([1, 2, 3]));             // Debe retornar: [1, 4, 9]
console.log(calcularCuadrados([4, 5]));                // Debe retornar: [16, 25]


// EJERCICIO 9: Buscar en un array con indexOf
// Crea una función que determine si un elemento existe en un array, retornando true o false.

function existeElemento(array, elemento) {
    return array.indexOf(elemento) == 1;
}
console.log(existeElemento([10, 20, 30], 20));         // Debe retornar: true
console.log(existeElemento([10, 20, 30], 50));         // Debe retornar: false


// EJERCICIO 10: Uso de find
// Crea una función que encuentre y retorne el primer número mayor que 10 en un array.
// Si no existe ninguno, retornar null.

function encontrarMayorQue10(array) {
    const resultado = array.find(num => num > 10);
    return resultado !== undefined ? resultado : null;
}

console.log(encontrarMayorQue10([5, 8, 12, 15]));      // Debe retornar: 12
console.log(encontrarMayorQue10([1, 2, 3, 4]));        // Debe retornar: null


// EJERCICIO 11: Filtrado con filter
// Crea una función que filtre un array y retorne solo los strings que tengan
// más de 5 caracteres.

function filtrarStringLargos(array) {
    return array.filter(elemento => typeof elemento == string && elemento.length > 5);
}

console.log(filtrarStringLargos(["hola", "programación", "js", "desarrollo", "web"]));  
// Debe retornar: ["programación", "desarrollo"]


// EJERCICIO 12: Transformar array con map
// Crea una función que reciba un array de nombres y retorne un array de mensajes de saludo
// en el formato "¡Hola, [nombre]!".

function saludarPersonas(nombres) {
    return nombres.map(nombre => `¡Hola, ${nombre}`)
}

console.log(saludarPersonas(["Ana", "Juan", "María"]));
// Debe retornar: ["¡Hola, Ana!", "¡Hola, Juan!", "¡Hola, María!"]


// EJERCICIO 13: Reducir un array con reduce
// Crea una función que calcule el producto de todos los números en un array.

function calcularProducto(numeros) {
    return numeros.reduce((producto, numero) => producto*numero)
}

console.log(calcularProducto([1, 2, 3, 4]));           // Debe retornar: 24
console.log(calcularProducto([2, 5, 10]));             // Debe retornar: 100


// EJERCICIO 14: Ordenar un array de objetos
// Crea una función que ordene un array de objetos persona por su edad de menor a mayor.

function ordenarPorEdad(personas) {
    return personas.sort((p1, p2)=>(p1.edad - p2.edad));
}

const personas = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Carlos", edad: 18 },
    { nombre: "Diana", edad: 32 }
];

console.log(ordenarPorEdad(personas));
// Debe retornar: [{ nombre: "Carlos", edad: 18 }, { nombre: "Ana", edad: 25 }, { nombre: "Diana", edad: 32 }]


// EJERCICIO 15: Trabajar con arrays multidimensionales
// Crea una función que sume todos los elementos de una matriz 3x3.

function sumarMatriz(matriz) {
    let sumaTotal = 0;
    for(let i =0; i<matriz.length; i++){
        for (let j=0; j<matriz[i].length; j++){
            sumaTotal += matriz[i][j]
        }
    }
    return sumaTotal
}

const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(sumarMatriz(matriz));                      // Debe retornar: 45


// EJERCICIO 16: Verificar con every
// Crea una función que verifique si todos los elementos de un array son positivos.

function sonTodosPositivos(array) {
    return array.every(num => num>0);
}

console.log(sonTodosPositivos([1, 2, 3]));             // Debe retornar: true
console.log(sonTodosPositivos([1, -2, 3]));            // Debe retornar: false


// EJERCICIO 17: Comprobar con some
// Crea una función que determine si al menos un elemento del array es par.

function hayAlgunPar(array) {
    return array.some(num => num%2 == 0);
}

console.log(hayAlgunPar([1, 2, 3, 8]));                   // Debe retornar: true
console.log(hayAlgunPar([1, 3, 5]));                   // Debe retornar: false


// EJERCICIO 18: Convertir string a array
// Crea una función que reciba una cadena de texto y la convierta en un array de palabras.

function convertirAArrayDePalabras(texto) {
    let arrayPalabras =  texto.slice();
    return arrayPalabras;
}

console.log(convertirAArrayDePalabras("Hola mundo JavaScript"));
// Debe retornar: ["Hola", "mundo", "JavaScript"]


// EJERCICIO 19: Unir arrays con spread operator
// Crea una función que una tres arrays utilizando el operador spread.

function unirArrays(array1, array2, array3) {
    return [...array1, ...array2, ...array3]
}

console.log(unirArrays([1, 2], [3, 4], [5, 6]));
// Debe retornar: [1, 2, 3, 4, 5, 6]


// EJERCICIO 20: Eliminar duplicados
// Crea una función que elimine los elementos duplicados de un array.

function eliminarDuplicados(array) {
    const numerosSinRepetir = [...new Set (array)];
    return numerosSinRepetir
}

console.log(eliminarDuplicados([1, 2, 2, 3, 3, 3, 4, 5]));
// Debe retornar: [1, 2, 3, 4, 5]