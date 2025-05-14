// TEMARIO DE ESTUDIO: STRINGS EN JAVASCRIPT
// Fecha: 13 de abril de 2025

/**
 * MÓDULO 1: FUNDAMENTOS DE STRINGS EN JAVASCRIPT
 * =============================================
 * 1.1 - ¿Qué son los strings?
 * 1.2 - Declaración de strings: comillas simples, dobles y backticks
 * 1.3 - Concatenación básica
 * 1.4 - Escape de caracteres
 * 1.5 - Strings multilínea
 */

// Ejemplos de declaración de strings
const stringSimple = 'Hola con comillas simples';
const stringDoble = "Hola con comillas dobles";
const stringTemplate = `Hola con backticks`;
const stringMultilinea = `Este es un ejemplo
de texto en 
múltiples líneas`;

/**
 * MÓDULO 2: PROPIEDADES Y MÉTODOS BÁSICOS
 * ======================================
 * 2.1 - Propiedad length
 * 2.2 - Acceso a caracteres por índice
 * 2.3 - Métodos básicos: toUpperCase() y toLowerCase()
 * 2.4 - trim(), trimStart() y trimEnd()
 * 2.5 - charAt() vs acceso por índice
 */

// Ejemplos de propiedades y métodos básicos
let ejemplo = "JavaScript";
console.log(ejemplo.length); // 10
console.log(ejemplo[0]); // "J"
console.log(ejemplo.charAt(0)); // "J"
console.log(ejemplo.toUpperCase()); // "JAVASCRIPT"
console.log(ejemplo.toLowerCase()); // "javascript"

/**
 * MÓDULO 3: BÚSQUEDA Y EXTRACCIÓN
 * ==============================
 * 3.1 - indexOf() y lastIndexOf()
 * 3.2 - includes(), startsWith() y endsWith()
 * 3.3 - substring(), substr() y slice()
 * 3.4 - Diferencias entre métodos de extracción
 * 3.5 - search() con expresiones regulares
 */

// Ejemplos de búsqueda y extracción
let texto = "Aprendiendo JavaScript es divertido";
console.log(texto.indexOf("JavaScript")); // 12
console.log(texto.includes("divertido")); // true
console.log(texto.startsWith("Aprendiendo")); // true
console.log(texto.slice(0, 11)); // "Aprendiendo"

/**
 * MÓDULO 4: MANIPULACIÓN DE STRINGS
 * ================================
 * 4.1 - replace() y replaceAll()
 * 4.2 - repeat()
 * 4.3 - padStart() y padEnd()
 * 4.4 - split() para convertir a arrays
 * 4.5 - join() para convertir arrays a strings
 */

// Ejemplos de manipulación
let mensaje = "Hola Mundo";
console.log(mensaje.replace("Mundo", "JavaScript")); // "Hola JavaScript"
console.log("=".repeat(20)); // "===================="
console.log("42".padStart(5, "0")); // "00042"
console.log(mensaje.split(" ")); // ["Hola", "Mundo"]

/**
 * MÓDULO 5: TEMPLATE LITERALS AVANZADOS
 * ===================================
 * 5.1 - Interpolación de variables
 * 5.2 - Expresiones en template literals
 * 5.3 - Template literals multilínea
 * 5.4 - Tagged templates
 * 5.5 - Casos de uso comunes
 */

// Ejemplos de template literals
const nombre = "Ana";
const edad = 25;
console.log(`${nombre} tiene ${edad} años y el año que viene tendrá ${edad + 1}`);

// Tagged template example
function highlight(strings, ...values) {
  return strings.reduce((result, str, i) => 
    `${result}${str}${values[i] ? `<strong>${values[i]}</strong>` : ''}`, '');
}
const highlighted = highlight`${nombre} tiene ${edad} años`;

/**
 * MÓDULO 6: EXPRESIONES REGULARES CON STRINGS
 * =========================================
 * 6.1 - Creación de expresiones regulares
 * 6.2 - test() y exec()
 * 6.3 - match() y matchAll()
 * 6.4 - Patrones comunes (email, teléfono, etc.)
 * 6.5 - Flags en expresiones regulares
 */

// Ejemplos con expresiones regulares
const email = "usuario@dominio.com";
const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
console.log(emailRegex.test(email)); // true

const texto2 = "Mi número es 123-456-7890 y mi otro número es 098-765-4321";
console.log(texto2.match(/\d{3}-\d{3}-\d{4}/g)); // ["123-456-7890", "098-765-4321"]

/**
 * MÓDULO 7: COMPARACIÓN Y NORMALIZACIÓN
 * ===================================
 * 7.1 - Comparación de strings (==, ===, localeCompare())
 * 7.2 - Normalización Unicode (normalize())
 * 7.3 - Ordenamiento de strings
 * 7.4 - Case-insensitive comparisons
 * 7.5 - Collation y configuraciones locales
 */

// 7.1 - Comparación de strings (==, ===, localeCompare())
console.log("Hola" == "Hola");         // true
console.log("Hola" === "hola");        // false
console.log("á".localeCompare("a"));   // 1 (mayor, depende del idioma)

// 7.2 - Normalización Unicode (normalize())
const str1 = "café";                     // é como un solo carácter
const str2 = "café";                    // e + acento (unicode separado)
console.log(str1 === str2);             // false
console.log(str1.normalize() === str2.normalize()); // true ✅

// 7.3 - Ordenamiento de strings
const palabras = ["zapato", "Árbol", "banana", "árbol", "manzana"];
console.log(palabras.sort()); // Orden sin collation
console.log(palabras.sort((a, b) => a.localeCompare(b, 'es', { sensitivity: 'base' })));
// ["Árbol", "árbol", "banana", "manzana", "zapato"]

// 7.4 - Comparación case-insensitive
let a = "Hola";
let b = "hola";
console.log(a.toLowerCase() === b.toLowerCase()); // true

// 7.5 - Collation y configuraciones locales
let nombres = ["José", "Ana", "Ángel", "Juan"];
console.log(nombres.sort((a, b) => a.localeCompare(b, 'es', { sensitivity: 'base' })));
// ["Ana", "Ángel", "José", "Juan"]

/**
 * MÓDULO 8: CODIFICACIÓN Y DECODIFICACIÓN
 * =====================================
 * 8.1 - charCodeAt() y fromCharCode()
 * 8.2 - codePointAt() y fromCodePoin// 1. Eliminar espacios al inicio y al finalt()
 * 8.3 - encodeURI() y decodeURI()
 * 8.4 - encodeURIComponent() y decodeURIComponent()
 * 8.5 - Manejo de caracteres Unicode y emoji
 */

// 8.1 - charCodeAt() y fromCharCode()
let letra = "B";
console.log(letra.charCodeAt(0)); // 66
console.log(String.fromCharCode(66)); // "B"

// 8.2 - codePointAt() y fromCodePoint()
let emoji = "💻";
console.log(emoji.codePointAt(0)); // 128187
console.log(String.fromCodePoint(128187)); // "💻"

// 8.3 - encodeURI() y decodeURI()
const uri = "https://ejemplo.com/archivo con espacio.html";
console.log(encodeURI(uri));     // https://ejemplo.com/archivo%20con%20espacio.html
console.log(decodeURI("https://ejemplo.com/archivo%20con%20espacio.html"));

// 8.4 - encodeURIComponent() y decodeURIComponent()
const query = "q=búsqueda avanzada";
console.log(encodeURIComponent(query)); // q%3Db%C3%BAsqueda%20avanzada

// 8.5 - Manejo de caracteres Unicode y emoji
let mensaje1 = "Programar es divertido 😄";
console.log([...mensaje1]); // Array con caracteres y emoji individuales
console.log(mensaje1.length); // cuidado: puede incluir 2 unidades por emoji


/**
 * MÓDULO 9: RENDIMIENTO Y OPTIMIZACIÓN
 * ==================================
 * 9.1 - Inmutabilidad de strings
 * 9.2 - Concatenación eficiente (Array.join vs +=)
 * 9.3 - StringBuffer y StringBuilder en JavaScript
 * 9.4 - Optimización de operaciones con strings
 * 9.5 - Memoria y strings
 */

// 9.1 - Inmutabilidad de strings
let original = "Hola";
let modificado = original + " Mundo";
console.log(original); // "Hola" — sigue igual (inmutable)

// 9.2 - Concatenación eficiente
let partes = [];
for (let i = 0; i < 10000; i++) {
  partes.push("a");
}
let resultado = partes.join(""); // Mucho más eficiente que +=

// 9.3 - StringBuffer y StringBuilder en JavaScript
// No existen como clases nativas, pero usamos arrays como buffer
let buffer = [];
buffer.push("Hola");
buffer.push(" ");
buffer.push("Mundo");
console.log(buffer.join(""));

// 9.4 - Optimización: evita muchas operaciones repetitivas con strings largos
let texto3 = "x".repeat(1000000);
console.time("replace");
let nuevoTexto = texto3.replace(/x/g, "y");
console.timeEnd("replace"); // mide el tiempo

// 9.5 - Memoria: cuidado con strings grandes duplicados innecesariamente
function generaTextoGrande() {
  return "a".repeat(10**7);
}
let grande1 = generaTextoGrande();
let grande2 = grande1; // no duplica memoria (mismo string)


/**
 * MÓDULO 10: CASOS PRÁCTICOS Y EJERCICIOS
 * =====================================
 * 10.1 - Validación de formularios con strings
 * 10.2 - Manipulación de URLs
 * 10.3 - Procesamiento de texto (conteo de palabras, etc.)
 * 10.4 - Formateo de datos (moneda, fechas, etc.)
 * 10.5 - Internacionalización con strings
 * 10.6 - Proyectos prácticos
 */

// 10.1 - Validación de formularios con strings
function validarNombre(nombre) {
    return nombre.trim().length >= 3;
  }
  console.log(validarNombre("  Ana  ")); // true
  
  // 10.2 - Manipulación de URLs
  let url = "https://ejemplo.com/tienda?producto=zapato rojo";
  let encoded = encodeURI(url);
  console.log(encoded); // con espacios codificados
  console.log(decodeURI(encoded));
  
  // 10.3 - Procesamiento de texto
  function contarFrecuenciaPalabras(texto) {
    let palabras = texto.toLowerCase().match(/\w+/g);
    let conteo = {};
    palabras.forEach(p => conteo[p] = (conteo[p] || 0) + 1);
    return conteo;
  }
  console.log(contarFrecuenciaPalabras("Hola hola mundo Mundo mundo"));
  
  // 10.4 - Formateo de datos
  let fecha = new Date();
  console.log(fecha.toLocaleDateString('es-ES')); // fecha en español
  console.log(new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(1540.75));
  // "$1,540.75"
  
  // 10.5 - Internacionalización
  const saludoIntl = new Intl.Collator('es', { sensitivity: 'base' });
  console.log(saludoIntl.compare("café", "café")); // 0 (considera iguales)
  console.log(["zorro", "Árbol", "perro"].sort(saludoIntl.compare));
  
  // 10.6 - Proyecto: convertir frase a objeto
  const entrada = "Nombre: Ana, Edad: 30, Ciudad: Lima";
  function parsearInfo(str) {
    const partes = str.split(',').map(x => x.trim().split(':'));
    return Object.fromEntries(partes.map(([k, v]) => [k.toLowerCase(), isNaN(v) ? v.trim() : +v]));
  }
  console.log(parsearInfo(entrada));
  

console.log(formatearMoneda(1234.56)); // "1.234,56 €"