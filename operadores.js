// LECCIÓN: OPERADORES EN JAVASCRIPT
// Fecha: 13 de abril de 2025

/**
 * OPERADORES ARITMÉTICOS
 * ======================
 * Los operadores aritméticos realizan operaciones matemáticas básicas.
 */

// Operador de adición (+)
let suma = 5 + 3;            // suma = 8
console.log("Suma:", suma);

// Operador de sustracción (-)
let resta = 10 - 4;          // resta = 6
console.log("Resta:", resta);

// Operador de multiplicación (*)
let multiplicacion = 6 * 3;  // multiplicacion = 18
console.log("Multiplicación:", multiplicacion);

// Operador de división (/)
let division = 15 / 3;       // division = 5
console.log("División:", division);

// Operador de módulo (%) - Devuelve el resto de una división
let modulo = 17 % 5;         // modulo = 2 (17 dividido por 5 da 3 con resto 2)
console.log("Módulo:", modulo);

// Operador de exponenciación (**) - Eleva un número a una potencia
let exponente = 2 ** 3;      // exponente = 8 (2³)
console.log("Exponenciación:", exponente);

// Incremento (++) y decremento (--)
let contador = 5;
console.log("Contador inicial:", contador);     // 5

// Post-incremento (primero devuelve el valor, luego incrementa)
console.log("Post-incremento:", contador++);    // Muestra 5, luego contador = 6
console.log("Después del post-incremento:", contador);  // 6

// Pre-incremento (primero incrementa, luego devuelve el valor)
console.log("Pre-incremento:", ++contador);     // Incrementa a 7, luego muestra 7
console.log("Después del pre-incremento:", contador);   // 7

// Post-decremento y pre-decremento funcionan igual pero restando 1
console.log("Post-decremento:", contador--);    // Muestra 7, luego contador = 6
console.log("Pre-decremento:", --contador);     // Decrementa a 5, luego muestra 5


/**
 * OPERADORES DE ASIGNACIÓN
 * =======================
 * Asignan valores a variables, a menudo combinados con otras operaciones.
 */

let x = 10;
console.log("x inicial:", x);  // 10

// Asignación con adición (+=)
x += 5;         // Equivalente a: x = x + 5
console.log("x += 5:", x);  // 15

// Asignación con sustracción (-=)
x -= 3;         // Equivalente a: x = x - 3
console.log("x -= 3:", x);  // 12

// Asignación con multiplicación (*=)
x *= 2;         // Equivalente a: x = x * 2
console.log("x *= 2:", x);  // 24

// Asignación con división (/=)
x /= 4;         // Equivalente a: x = x / 4
console.log("x /= 4:", x);  // 6

// Asignación con módulo (%=)
x %= 4;         // Equivalente a: x = x % 4
console.log("x %= 4:", x);  // 2

// Asignación con exponenciación (**=)
x **= 3;        // Equivalente a: x = x ** 3
console.log("x **= 3:", x); // 8


/**
 * OPERADORES DE COMPARACIÓN
 * =======================
 * Comparan valores y devuelven un valor booleano (true o false).
 */

// Operador igual (==) - Compara valor (con conversión de tipo)
console.log("5 == 5:", 5 == 5);           // true
console.log("5 == '5':", 5 == '5');       // true (convierte tipos)
console.log("0 == false:", 0 == false);   // true (conversión de tipo)

// Operador estrictamente igual (===) - Compara valor y tipo
console.log("5 === 5:", 5 === 5);         // true
console.log("5 === '5':", 5 === '5');     // false (tipos diferentes)
console.log("0 === false:", 0 === false); // false (tipos diferentes)

// Operador distinto (!=) - Compara si los valores son diferentes
console.log("5 != 8:", 5 != 8);           // true
console.log("5 != '5':", 5 != '5');       // false (convierte tipos)

// Operador estrictamente distinto (!==) - Compara si valor o tipo son diferentes
console.log("5 !== 8:", 5 !== 8);         // true
console.log("5 !== '5':", 5 !== '5');     // true (tipos diferentes)

// Operador mayor que (>)
console.log("8 > 5:", 8 > 5);             // true

// Operador menor que (<)
console.log("8 < 5:", 8 < 5);             // false

// Operador mayor o igual que (>=)
console.log("8 >= 8:", 8 >= 8);           // true

// Operador menor o igual que (<=)
console.log("5 <= 5:", 5 <= 5);           // true


/**
 * OPERADORES LÓGICOS
 * ================
 * Operan con valores booleanos y devuelven un valor booleano.
 */

// Operador AND lógico (&&) - Devuelve true si ambos operandos son true
console.log("true && true:", true && true);           // true
console.log("true && false:", true && false);         // false
console.log("false && true:", false && true);         // false
console.log("false && false:", false && false);       // false

// Operador OR lógico (||) - Devuelve true si al menos un operando es true
console.log("true || true:", true || true);           // true
console.log("true || false:", true || false);         // true
console.log("false || true:", false || true);         // true
console.log("false || false:", false || false);       // false

// Operador NOT lógico (!) - Invierte el valor booleano
console.log("!true:", !true);                         // false
console.log("!false:", !false);                       // true

// Evaluación de cortocircuito con && y ||
// Con && el segundo operando solo se evalúa si el primero es true
// Con || el segundo operando solo se evalúa si el primero es false

let a = 0;
let b = "Hola";
let resultado1 = a && b;    // resultado1 = 0 (devuelve el primer falsy)
let resultado2 = b && a;    // resultado2 = 0 (evalúa ambos, devuelve el último)
let resultado3 = a || b;    // resultado3 = "Hola" (devuelve el primer truthy)
let resultado4 = b || a;    // resultado4 = "Hola" (devuelve el primer truthy)

console.log("a && b:", resultado1);
console.log("b && a:", resultado2);
console.log("a || b:", resultado3);
console.log("b || a:", resultado4);


/**
 * OPERADOR TERNARIO (CONDICIONAL)
 * =============================
 * Es el único operador de JavaScript que tiene tres operandos.
 * Sintaxis: condición ? expresión_si_verdadero : expresión_si_falso
 */

let edad = 20;
let mensaje = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
console.log("Con edad 20:", mensaje);  // "Eres mayor de edad"

edad = 15;
mensaje = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
console.log("Con edad 15:", mensaje);  // "Eres menor de edad"

// Operadores ternarios anidados (evitar el abuso, reduce legibilidad)
let puntuacion = 75;
let calificacion = puntuacion >= 90 ? "Sobresaliente" : 
                  puntuacion >= 70 ? "Notable" : 
                  puntuacion >= 60 ? "Bien" : 
                  puntuacion >= 50 ? "Aprobado" : "Suspenso";
console.log("Calificación:", calificacion);  // "Notable"


/**
 * OPERADORES DE TIPO
 * ================
 * Operan sobre tipos de datos.
 */

// Operador typeof - Devuelve el tipo de dato
console.log("typeof 42:", typeof 42);                // "number"
console.log("typeof 'Hola':", typeof 'Hola');        // "string"
console.log("typeof true:", typeof true);            // "boolean"
console.log("typeof undefined:", typeof undefined);  // "undefined"
console.log("typeof null:", typeof null);            // "object" (esto es un error histórico en JavaScript)
console.log("typeof []:", typeof []);                // "object"
console.log("typeof {}:", typeof {});                // "object"
console.log("typeof function(){}:", typeof function(){}); // "function"

// Operador instanceof - Comprueba si un objeto es instancia de una clase
let array = [1, 2, 3];
let fecha = new Date();
console.log("array instanceof Array:", array instanceof Array);         // true
console.log("fecha instanceof Date:", fecha instanceof Date);           // true
console.log("fecha instanceof Array:", fecha instanceof Array);         // false


/**
 * OPERADORES DE BITS
 * ================
 * Trabajan con los bits individuales de los números.
 */

// AND a nivel de bits (&)
console.log("5 & 3:", 5 & 3);  // 1 (0101 & 0011 = 0001 en binario)

// OR a nivel de bits (|)
console.log("5 | 3:", 5 | 3);  // 7 (0101 | 0011 = 0111 en binario)

// XOR a nivel de bits (^)
console.log("5 ^ 3:", 5 ^ 3);  // 6 (0101 ^ 0011 = 0110 en binario)

// NOT a nivel de bits (~)
console.log("~5:", ~5);        // -6 (invierte todos los bits y suma 1)

// Desplazamiento a la izquierda (<<)
console.log("5 << 1:", 5 << 1);  // 10 (0101 -> 1010)

// Desplazamiento a la derecha (>>)
console.log("5 >> 1:", 5 >> 1);  // 2 (0101 -> 0010)


/**
 * OPERADORES DE CADENA (STRING)
 * ===========================
 */

// Concatenación (+)
let saludo = "Hola, " + "mundo!";
console.log("Concatenación:", saludo);  // "Hola, mundo!"

// Concatenación con asignación (+=)
let frase = "JavaScript ";
frase += "es genial";
console.log("Concatenación con +=:", frase);  // "JavaScript es genial"


/**
 * OPERADORES DE PROPAGACIÓN (SPREAD) Y REPOSO (REST)
 * ===============================================
 * Introducidos en ES6 (ES2015)
 */

// Operador spread (...) con arrays
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let arrayCombinado = [...array1, ...array2];
console.log("Spread con arrays:", arrayCombinado);  // [1, 2, 3, 4, 5, 6]

// Operador spread con objetos
let persona = { nombre: "Ana", edad: 30 };
let empleado = { ...persona, cargo: "Desarrolladora", salario: 50000 };
console.log("Spread con objetos:", empleado);  
// { nombre: "Ana", edad: 30, cargo: "Desarrolladora", salario: 50000 }

// Operador rest en parámetros de función
function sumar(...numeros) {
  return numeros.reduce((total, num) => total + num, 0);
}
console.log("Rest en función:", sumar(1, 2, 3, 4, 5));  // 15


/**
 * OPERADORES DE DESESTRUCTURACIÓN
 * =============================
 * Permiten extraer valores de arrays o propiedades de objetos.
 */

// Desestructuración de arrays
let numeros = [10, 20, 30];
let [primero, segundo, tercero] = numeros;
console.log("Desestructuración de array:", primero, segundo, tercero);  // 10 20 30

// Desestructuración de objetos
let usuario = { nombre: "Carlos", correo: "carlos@ejemplo.com", ciudad: "Madrid" };
let { nombre, correo } = usuario;
console.log("Desestructuración de objeto:", nombre, correo);  // Carlos carlos@ejemplo.com

// Desestructuración con valores predeterminados
let [a1 = 1, b1 = 2, c1 = 3] = [5, undefined];
console.log("Desestructuración con valores predeterminados:", a1, b1, c1);  // 5 2 3


/**
 * OPERADOR DE ENCADENAMIENTO OPCIONAL (?.)
 * =====================================
 * Permite leer el valor de una propiedad ubicada dentro de una cadena
 * de objetos conectados sin tener que validar cada referencia.
 */

let cliente = {
  nombre: "María",
  direccion: {
    calle: "Av. Principal"
  }
};

let otroCliente = {
  nombre: "Pedro"
  // No tiene propiedad dirección
};

// Sin operador de encadenamiento opcional
// let calleSinOperador = otroCliente.direccion.calle; // Error: Cannot read properties of undefined

// Con operador de encadenamiento opcional
let calleConOperador = otroCliente?.direccion?.calle;
console.log("Encadenamiento opcional:", calleConOperador);  // undefined (sin error)


/**
 * OPERADOR DE FUSIÓN NULA (??)
 * ==========================
 * Devuelve el operando del lado derecho cuando el operando del lado izquierdo es null o undefined.
 * Similar a ||, pero solo considera null y undefined como falsy.
 */

let valor1 = null ?? "Valor predeterminado";
let valor2 = 0 ?? "Valor predeterminado";
let valor3 = "" ?? "Valor predeterminado";
let valor4 = false ?? "Valor predeterminado";
let valor5 = undefined ?? "Valor predeterminado";

console.log("null ??:", valor1);       // "Valor predeterminado"
console.log("0 ??:", valor2);          // 0 (a diferencia de ||, 0 se considera truthy para ??)
console.log("'' ??:", valor3);         // "" (a diferencia de ||, string vacío se considera truthy para ??)
console.log("false ??:", valor4);      // false (a diferencia de ||, false se considera truthy para ??)
console.log("undefined ??:", valor5);  // "Valor predeterminado"


/**
 * EJERCICIOS PRÁCTICOS
 * ==================
 * Aplica lo aprendido en ejercicios reales.
 */

// Ejercicio 1: Conversión de temperatura Fahrenheit a Celsius
function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}
console.log("32°F en Celsius:", fahrenheitToCelsius(32));  // 0°C
console.log("98.6°F en Celsius:", fahrenheitToCelsius(98.6).toFixed(1));  // 37.0°C

// Ejercicio 2: Verificar si un número es par o impar usando operador ternario
function esParOImpar(numero) {
  return numero % 2 === 0 ? "Par" : "Impar";
}
console.log("¿Es 7 par o impar?", esParOImpar(7));  // Impar
console.log("¿Es 10 par o impar?", esParOImpar(10));  // Par

// Ejercicio 3: Usar operador de fusión nula para valores predeterminados
function saludarUsuario(usuario) {
  const nombre = usuario?.nombre ?? "Invitado";
  return `¡Hola, ${nombre}!`;
}
console.log(saludarUsuario({nombre: "Laura"}));  // ¡Hola, Laura!
console.log(saludarUsuario({}));  // ¡Hola, Invitado!
console.log(saludarUsuario());  // ¡Hola, Invitado!