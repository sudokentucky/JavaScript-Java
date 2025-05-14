// LECCIÓN: ARRAYS EN JAVASCRIPT
// Fecha: 13 de abril de 2025

/**
 * MÓDULO 1: FUNDAMENTOS DE ARRAYS
 * ==============================
 * Los arrays son estructuras que permiten almacenar múltiples valores en una sola variable.
 * Son colecciones ordenadas donde cada elemento tiene un índice numérico.
 */

console.log("===== MÓDULO 1: FUNDAMENTOS DE ARRAYS =====");

// Creación de arrays
const frutas = ["manzana", "plátano", "naranja", "fresa"];
const numeros = [1, 2, 3, 4, 5];
const mixto = [1, "hola", true, null, { nombre: "Juan" }];
const arrayVacio = [];

// Array utilizando el constructor Array()
const diasSemana = new Array("Lunes", "Martes", "Miércoles", "Jueves", "Viernes");

// Acceder a elementos por índice (los índices comienzan en 0)
console.log("Primera fruta:", frutas[0]); // manzana
console.log("Segundo número:", numeros[1]); // 2
console.log("Último día:", diasSemana[4]); // Viernes

// Longitud del array (propiedad length)
console.log("Cantidad de frutas:", frutas.length); // 4

// Modificar elementos por índice
frutas[1] = "uva";
console.log("Frutas después de modificar:", frutas); // ["manzana", "uva", "naranja", "fresa"]

// Añadir un elemento al final (sin método)
frutas[frutas.length] = "kiwi";
console.log("Frutas después de añadir kiwi:", frutas); // ["manzana", "uva", "naranja", "fresa", "kiwi"]

// Intento de acceso a un índice inexistente
console.log("Elemento en posición 10:", numeros[10]); // undefined, no da error

/**
 * MÓDULO 2: MÉTODOS BÁSICOS PARA MANIPULAR ARRAYS
 * ============================================
 * JavaScript proporciona métodos integrados para facilitar la manipulación de arrays.
 */

console.log("\n===== MÓDULO 2: MÉTODOS BÁSICOS PARA MANIPULAR ARRAYS =====");

// Crear un array para los ejemplos
let colores = ["rojo", "verde", "azul"];
console.log("Array original:", colores);

// push() - Añade elementos al final del array
colores.push("amarillo");
console.log("Después de push:", colores); // ["rojo", "verde", "azul", "amarillo"]

// pop() - Elimina y devuelve el último elemento
const ultimoColor = colores.pop();
console.log("Elemento extraído con pop:", ultimoColor); // amarillo
console.log("Después de pop:", colores); // ["rojo", "verde", "azul"]

// unshift() - Añade elementos al principio del array
colores.unshift("negro");
console.log("Después de unshift:", colores); // ["negro", "rojo", "verde", "azul"]

// shift() - Elimina y devuelve el primer elemento
const primerColor = colores.shift();
console.log("Elemento extraído con shift:", primerColor); // negro
console.log("Después de shift:", colores); // ["rojo", "verde", "azul"]

// splice() - Elimina, reemplaza o inserta elementos en cualquier posición
// splice(posición, cantidadAEliminar, item1, item2, ...)
colores.splice(1, 0, "amarillo", "naranja"); // Inserta sin eliminar
console.log("Después de splice (inserción):", colores); // ["rojo", "amarillo", "naranja", "verde", "azul"]

colores.splice(1, 2); // Elimina 2 elementos desde la posición 1
console.log("Después de splice (eliminación):", colores); // ["rojo", "verde", "azul"]

colores.splice(0, 1, "magenta"); // Reemplaza 1 elemento desde la posición 0
console.log("Después de splice (reemplazo):", colores); // ["magenta", "verde", "azul"]

// slice() - Crea una copia de una porción del array
const nuevosColores = colores.slice(1, 3); // Desde índice 1 hasta el 2 (el 3 no se incluye)
console.log("Nuevo array con slice:", nuevosColores); // ["verde", "azul"]
console.log("Array original después de slice:", colores); // ["magenta", "verde", "azul"] (no modifica el original)

/**
 * MÓDULO 3: RECORRER ARRAYS
 * ======================
 * Existen varias formas de iterar o recorrer los elementos de un array.
 */

console.log("\n===== MÓDULO 3: RECORRER ARRAYS =====");

const animales = ["perro", "gato", "conejo", "tortuga", "pez"];

// 1. Bucle for clásico
console.log("Recorrido con for clásico:");
for (let i = 0; i < animales.length; i++) {
    console.log(`Índice ${i}: ${animales[i]}`);
}

// 2. Bucle for...of (ES6) - para valores, más simple
console.log("\nRecorrido con for...of:");
for (const animal of animales) {
    console.log(animal);
}

// 3. Bucle for...in - para índices (normalmente usado con objetos)
console.log("\nRecorrido con for...in:");
for (const indice in animales) {
    console.log(`Índice ${indice}: ${animales[indice]}`);
}

// 4. Método forEach - función ejecutada para cada elemento
console.log("\nRecorrido con forEach:");
animales.forEach((animal, indice) => {
    console.log(`Índice ${indice}: ${animal}`);
});

/**
 * MÓDULO 4: BÚSQUEDA EN ARRAYS
 * =========================
 * Métodos para encontrar elementos dentro de un array.
 */

console.log("\n===== MÓDULO 4: BÚSQUEDA EN ARRAYS =====");

const puntuaciones = [75, 50, 95, 30, 85, 70, 60, 90];

// indexOf() - Devuelve el primer índice donde se encuentra un elemento
const indice50 = puntuaciones.indexOf(50);
console.log("Índice de 50:", indice50); // 1

// indexOf() cuando el elemento no existe
const indice100 = puntuaciones.indexOf(100);
console.log("Índice de 100:", indice100); // -1 (no encontrado)

// lastIndexOf() - Devuelve el último índice donde se encuentra un elemento
const numerosRepetidos = [5, 10, 15, 10, 20];
const primerIndice10 = numerosRepetidos.indexOf(10);
const ultimoIndice10 = numerosRepetidos.lastIndexOf(10);
console.log("Primer índice de 10:", primerIndice10); // 1
console.log("Último índice de 10:", ultimoIndice10); // 3

// includes() - Comprueba si el elemento existe (devuelve true o false)
const tieneEl95 = puntuaciones.includes(95);
const tieneEl100 = puntuaciones.includes(100);
console.log("¿Incluye 95?:", tieneEl95); // true
console.log("¿Incluye 100?:", tieneEl100); // false

// find() - Devuelve el primer elemento que cumple una condición
const primerPuntuacionAlta = puntuaciones.find(puntuacion => puntuacion > 80);
console.log("Primera puntuación > 80:", primerPuntuacionAlta); // 95

// findIndex() - Devuelve el índice del primer elemento que cumple una condición
const indicePrimerPuntuacionAlta = puntuaciones.findIndex(puntuacion => puntuacion > 80);
console.log("Índice de la primera puntuación > 80:", indicePrimerPuntuacionAlta); // 2

/**
 * MÓDULO 5: TRANSFORMACIÓN DE ARRAYS
 * ===============================
 * Métodos que crean nuevos arrays basados en el original.
 */

console.log("\n===== MÓDULO 5: TRANSFORMACIÓN DE ARRAYS =====");

const precios = [19.99, 9.99, 15.50, 4.99, 29.99];

// map() - Crea un nuevo array aplicando una función a cada elemento
const preciosRedondeados = precios.map(precio => Math.round(precio));
console.log("Precios originales:", precios);
console.log("Precios redondeados:", preciosRedondeados); // [20, 10, 16, 5, 30]

// filter() - Crea un nuevo array con elementos que cumplen una condición
const preciosBajos = precios.filter(precio => precio < 10);
console.log("Precios menores a 10:", preciosBajos); // [9.99, 4.99]

// reduce() - Reduce el array a un solo valor
const total = precios.reduce((suma, precio) => suma + precio, 0);
console.log("Suma total de precios:", total.toFixed(2)); // 80.46

// sort() - Ordena el array (modifica el original)
// Por defecto, ordena como strings
const numerosDesordenados = [10, 5, 40, 25, 1];
numerosDesordenados.sort();
console.log("Ordenado como strings:", numerosDesordenados); // [1, 10, 25, 40, 5]

// Para ordenar numéricamente, se usa una función de comparación
numerosDesordenados.sort((a, b) => a - b);
console.log("Ordenado numéricamente:", numerosDesordenados); // [1, 5, 10, 25, 40]

// reverse() - Invierte el orden del array (modifica el original)
numerosDesordenados.reverse();
console.log("Orden invertido:", numerosDesordenados); // [40, 25, 10, 5, 1]

/**
 * MÓDULO 6: ARRAYS MULTIDIMENSIONALES
 * ===============================
 * Arrays que contienen otros arrays, formando estructuras más complejas.
 */

console.log("\n===== MÓDULO 6: ARRAYS MULTIDIMENSIONALES =====");

// Array bidimensional (matriz)
const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Acceso a elementos de un array bidimensional
console.log("Elemento en fila 1, columna 2:", matriz[1][2]); // 6

// Recorrer un array bidimensional
console.log("Recorrido de una matriz:");
for (let i = 0; i < matriz.length; i++) {
    let fila = "";
    for (let j = 0; j < matriz[i].length; j++) {
        fila += matriz[i][j] + " ";
    }
    console.log(fila);
}

// Ejemplo: Tabla de multiplicar del 1 al 5
const tablaMultiplicar = [];

for (let i = 1; i <= 5; i++) {
    const fila = [];
    for (let j = 1; j <= 5; j++) {
        fila.push(i * j);
    }
    tablaMultiplicar.push(fila);
}

console.log("Tabla de multiplicar (1-5):");
console.table(tablaMultiplicar); // Muestra una tabla formateada en consola

/**
 * MÓDULO 7: MÉTODOS AVANZADOS Y OPERACIONES CON ARRAYS
 * ================================================
 * Técnicas y métodos para operaciones más complejas.
 */

console.log("\n===== MÓDULO 7: MÉTODOS AVANZADOS Y OPERACIONES CON ARRAYS =====");

// Comprobar si una variable es un array
const esUnArray = Array.isArray([1, 2, 3]);
const noEsUnArray = Array.isArray("Hola");
console.log("¿[1, 2, 3] es un array?:", esUnArray); // true
console.log("¿'Hola' es un array?:", noEsUnArray); // false

// Convertir un array a string
const letras = ["a", "b", "c", "d"];
const cadenaLetras = letras.join("-");
console.log("Array unido con join:", cadenaLetras); // "a-b-c-d"

// Convertir un string a array
const frase = "JavaScript es divertido";
const palabras = frase.split(" ");
console.log("String dividido con split:", palabras); // ["JavaScript", "es", "divertido"]

// Concatenar arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const arrayConcatenado = array1.concat(array2);
console.log("Arrays concatenados:", arrayConcatenado); // [1, 2, 3, 4, 5, 6]

// Operador spread (...) para concatenar (ES6)
const arrayConcatenadoSpread = [...array1, ...array2];
console.log("Arrays concatenados con spread:", arrayConcatenadoSpread); // [1, 2, 3, 4, 5, 6]

// every() - Comprueba si todos los elementos cumplen una condición
const todosMayoresQue10 = [12, 54, 18, 130, 44].every(num => num > 10);
console.log("¿Todos los números son mayores que 10?:", todosMayoresQue10); // true

// some() - Comprueba si al menos un elemento cumple una condición
const algunoMayorQue100 = [12, 54, 18, 130, 44].some(num => num > 100);
console.log("¿Algún número es mayor que 100?:", algunoMayorQue100); // true

/**
 * MÓDULO 8: APLICACIONES PRÁCTICAS
 * =============================
 * Ejemplos de uso real de arrays para resolver problemas comunes.
 */

console.log("\n===== MÓDULO 8: APLICACIONES PRÁCTICAS =====");

// Ejemplo 1: Filtrar datos de usuarios
const usuarios = [
    { id: 1, nombre: "Ana", edad: 28, activo: true },
    { id: 2, nombre: "Carlos", edad: 17, activo: false },
    { id: 3, nombre: "Elena", edad: 32, activo: true },
    { id: 4, nombre: "Miguel", edad: 24, activo: true },
    { id: 5, nombre: "Sofía", edad: 16, activo: false }
];

// Obtener usuarios activos mayores de edad
const usuariosActivosAdultos = usuarios
    .filter(usuario => usuario.activo && usuario.edad >= 18)
    .map(usuario => usuario.nombre);

console.log("Usuarios activos y adultos:", usuariosActivosAdultos); // ["Ana", "Elena", "Miguel"]

// Ejemplo 2: Calcular estadísticas
const calificaciones = [85, 90, 78, 92, 88, 72];

const estadisticas = {
    promedio: calificaciones.reduce((sum, cal) => sum + cal, 0) / calificaciones.length,
    maxima: Math.max(...calificaciones),
    minima: Math.min(...calificaciones),
    aprobados: calificaciones.filter(cal => cal >= 70).length
};

console.log("Estadísticas de calificaciones:", estadisticas);
// { promedio: 84.17, maxima: 92, minima: 72, aprobados: 6 }

// Ejemplo 3: Eliminar duplicados de un array
const numerosConDuplicados = [1, 2, 2, 3, 4, 4, 5, 5, 5];

// Método 1: Usando Set
const numerosUnicos1 = [...new Set(numerosConDuplicados)];

// Método 2: Usando filter
const numerosUnicos2 = numerosConDuplicados.filter(
    (valor, indice, array) => array.indexOf(valor) === indice
);

console.log("Array original con duplicados:", numerosConDuplicados);
console.log("Sin duplicados (usando Set):", numerosUnicos1); // [1, 2, 3, 4, 5]
console.log("Sin duplicados (usando filter):", numerosUnicos2); // [1, 2, 3, 4, 5]

// Ejemplo 4: Agrupar elementos por una propiedad
const productos = [
    { nombre: "Laptop", categoria: "Electrónica", precio: 1200 },
    { nombre: "Libro", categoria: "Lectura", precio: 20 },
    { nombre: "Teléfono", categoria: "Electrónica", precio: 800 },
    { nombre: "Mesa", categoria: "Hogar", precio: 150 },
    { nombre: "Lámpara", categoria: "Hogar", precio: 50 }
];

const productosPorCategoria = productos.reduce((grupos, producto) => {
    const categoria = producto.categoria;
    if (!grupos[categoria]) {
        grupos[categoria] = [];
    }
    grupos[categoria].push(producto.nombre);
    return grupos;
}, {});

console.log("Productos agrupados por categoría:", productosPorCategoria);
// { Electrónica: ["Laptop", "Teléfono"], Lectura: ["Libro"], Hogar: ["Mesa", "Lámpara"] }

/**
 * EJERCICIOS PARA PRACTICAR
 * =======================
 * Prueba tus conocimientos con estos ejercicios.
 */

console.log("\n===== EJERCICIOS PARA PRACTICAR =====");

// Ejercicio 1: Sumar todos los números pares de un array
function sumarPares(numeros) {
    // Tu solución aquí
    return numeros.filter(num => num % 2 === 0).reduce((suma, num) => suma + num, 0);
}

console.log("Suma de pares [1, 2, 3, 4, 5, 6]:", sumarPares([1, 2, 3, 4, 5, 6])); // 12

// Ejercicio 2: Encontrar el elemento más frecuente en un array
function elementoMasFrecuente(arr) {
    const frecuencias = {};
    let maxFrecuencia = 0;
    let elementoMasRepetido;
    
    for (const elemento of arr) {
        frecuencias[elemento] = (frecuencias[elemento] || 0) + 1;
        
        if (frecuencias[elemento] > maxFrecuencia) {
            maxFrecuencia = frecuencias[elemento];
            elementoMasRepetido = elemento;
        }
    }
    
    return elementoMasRepetido;
}

console.log("Elemento más frecuente [3, 7, 3, 1, 7, 7, 2]:", 
            elementoMasFrecuente([3, 7, 3, 1, 7, 7, 2])); // 7

// Ejercicio 3: Rotar un array n posiciones a la derecha
function rotarArray(arr, n) {
    // Aseguramos que n sea positivo y módulo longitud array
    const rotaciones = n % arr.length;
    
    if (rotaciones === 0) return arr.slice(); // Retorna copia si no hay rotación
    
    const parteFinal = arr.slice(0, arr.length - rotaciones);
    const parteInicial = arr.slice(arr.length - rotaciones);
    
    return [...parteInicial, ...parteFinal];
}

console.log("Array [1, 2, 3, 4, 5] rotado 2 posiciones:", 
            rotarArray([1, 2, 3, 4, 5], 2)); // [4, 5, 1, 2, 3]
console.log("Array [1, 2, 3, 4, 5] rotado 7 posiciones:", 
            rotarArray([1, 2, 3, 4, 5], 7)); // [4, 5, 1, 2, 3] (equivalente a rotar 2)