// LECCIÓN: CONDICIONALES EN JAVASCRIPT

/**
 * CONDICIONALES EN JAVASCRIPT
 * ==========================
 * Los condicionales son estructuras de control que permiten ejecutar
 * diferentes bloques de código según se cumplan o no ciertas condiciones.
 */


/**
 * 1. DECLARACIÓN IF SIMPLE
 * =======================
 * La forma más básica de condicional. Ejecuta un bloque de código
 * si la condición evaluada es verdadera (truthy).
 * 
 * Sintaxis:
 * if (condición) {
 *    // código a ejecutar si la condición es verdadera
 * }
 */

console.log("--- DECLARACIÓN IF SIMPLE ---");

let edad = 18;

if (edad >= 18) {
    console.log("Eres mayor de edad.");
}

// Ejemplo con valor truthy (cualquier valor que no sea falsy)
let nombre = "Ana";

if (nombre) {
    console.log("El nombre está definido:", nombre);
}

// Recordatorio: Valores falsy en JavaScript
// - false
// - 0, -0, 0n (BigInt cero)
// - "" (string vacío)
// - null
// - undefined
// - NaN (Not a Number)


/**
 * 2. DECLARACIÓN IF-ELSE
 * =====================
 * Permite ejecutar un bloque de código si la condición es verdadera
 * y otro bloque diferente si es falsa.
 * 
 * Sintaxis:
 * if (condición) {
 *    // código si la condición es verdadera
 * } else {
 *    // código si la condición es falsa
 * }
 */

console.log("\n--- DECLARACIÓN IF-ELSE ---");

let hora = 20;

if (hora < 12) {
    console.log("Buenos días");
} else {
    console.log("Buenas tardes/noches");
}

// Ejemplo con operador ternario (forma abreviada del if-else)
let saludo = hora < 12 ? "Buenos días" : "Buenas tardes/noches";
console.log("Saludo usando operador ternario:", saludo);


/**
 * 3. DECLARACIÓN IF-ELSE IF-ELSE
 * =============================
 * Permite evaluar múltiples condiciones en secuencia.
 * 
 * Sintaxis:
 * if (condición1) {
 *    // código si condición1 es verdadera
 * } else if (condición2) {
 *    // código si condición2 es verdadera
 * } else {
 *    // código si ninguna condición es verdadera
 * }
 */

console.log("\n--- DECLARACIÓN IF-ELSE IF-ELSE ---");

let horaActual = 14;

if (horaActual < 12) {
    console.log("Buenos días");
} else if (horaActual < 18) {
    console.log("Buenas tardes");
} else {
    console.log("Buenas noches");
}

// Ejemplo con calificaciones
let puntuacion = 85;
let calificacion;

if (puntuacion >= 90) {
    calificacion = "Sobresaliente";
} else if (puntuacion >= 80) {
    calificacion = "Notable";
} else if (puntuacion >= 70) {
    calificacion = "Bien";
} else if (puntuacion >= 60) {
    calificacion = "Suficiente";
} else {
    calificacion = "Insuficiente";
}

console.log(`Con una puntuación de ${puntuacion}, la calificación es: ${calificacion}`);


/**
 * 4. CONDICIONALES ANIDADOS
 * =======================
 * Se pueden anidar declaraciones if dentro de otras estructuras condicionales.
 * Es útil para evaluar condiciones más complejas, pero puede reducir la legibilidad.
 */

console.log("\n--- CONDICIONALES ANIDADOS ---");

let usuario = {
    nombre: "Carlos",
    edad: 25,
    permisosAdmin: true
};

if (usuario.edad >= 18) {
    console.log("El usuario es mayor de edad");
    
    if (usuario.permisosAdmin) {
        console.log("Y tiene permisos de administrador");
    } else {
        console.log("Pero no tiene permisos de administrador");
    }
} else {
    console.log("El usuario es menor de edad y no puede acceder");
}

// Alternativa más legible usando operadores lógicos
if (usuario.edad >= 18 && usuario.permisosAdmin) {
    console.log("El usuario es mayor de edad y tiene permisos de administrador");
} else if (usuario.edad >= 18) {
    console.log("El usuario es mayor de edad pero no tiene permisos de administrador");
} else {
    console.log("El usuario es menor de edad y no puede acceder");
}


/**
 * 5. OPERADOR LÓGICO && COMO CONDICIONAL
 * ====================================
 * Aprovecha el funcionamiento de cortocircuito de &&.
 * Si la primera expresión es true, evalúa y devuelve la segunda.
 * Si la primera expresión es false, la devuelve sin evaluar la segunda.
 */

console.log("\n--- OPERADOR LÓGICO && COMO CONDICIONAL ---");

let esAdmin = true;
esAdmin && console.log("Este mensaje solo se muestra si esAdmin es true");

// Equivalente a:
if (esAdmin) {
    console.log("Este mensaje solo se muestra si esAdmin es true (con if)");
}

// Ejemplo práctico
let usuarios = ["Ana", "Carlos", "Elena"];
usuarios.length > 0 && console.log(`Hay ${usuarios.length} usuarios registrados`);


/**
 * 6. OPERADOR LÓGICO || COMO CONDICIONAL
 * ====================================
 * Aprovecha el funcionamiento de cortocircuito de ||.
 * Si la primera expresión es true, la devuelve sin evaluar la segunda.
 * Si la primera expresión es false, evalúa y devuelve la segunda.
 * Muy útil para valores predeterminados.
 */

console.log("\n--- OPERADOR LÓGICO || COMO CONDICIONAL ---");

let nombreUsuario = "";
let nombreMostrado = nombreUsuario || "Invitado";
console.log("Bienvenido,", nombreMostrado); // Muestra "Bienvenido, Invitado"

// Equivalente a:
if (nombreUsuario) {
    console.log("Bienvenido,", nombreUsuario);
} else {
    console.log("Bienvenido, Invitado");
}

// Cuidado con 0 y string vacío considerados falsy
let cantidad = 0;
let mensajeCantidad = cantidad || "No hay elementos";
console.log(mensajeCantidad); // Muestra "No hay elementos" aunque cantidad es 0


/**
 * 7. OPERADOR DE FUSIÓN NULA (??)
 * =============================
 * Similar a ||, pero solo considera null o undefined como falsy.
 * Útil cuando 0, string vacío o false son valores válidos.
 */

console.log("\n--- OPERADOR DE FUSIÓN NULA (??) ---");

let cantidad2 = 0;
let mensajeCantidad2 = cantidad2 ?? "No hay elementos";
console.log(mensajeCantidad2); // Muestra 0, ya que 0 es un valor válido para ?? 

let texto = "";
let mensajeTexto = texto ?? "Sin texto";
console.log(mensajeTexto); // Muestra "", ya que string vacío es un valor válido para ??

let valorNulo = null;
let valorPredeterminado = valorNulo ?? "Valor predeterminado";
console.log(valorPredeterminado); // Muestra "Valor predeterminado"


/**
 * 8. DECLARACIÓN SWITCH
 * ===================
 * Evalúa una expresión y ejecuta bloques de código según coincida con diferentes casos.
 * Alternativa más limpia a múltiples if-else if cuando se compara una única expresión.
 * 
 * Sintaxis:
 * switch (expresión) {
 *   case valor1:
 *     // código si expresión === valor1
 *     break;
 *   case valor2:
 *     // código si expresión === valor2
 *     break;
 *   default:
 *     // código si ningún caso coincide
 * }
 */

console.log("\n--- DECLARACIÓN SWITCH ---");

let diaSemana = 3;
let nombreDia;

switch (diaSemana) {
    case 1:
        nombreDia = "Lunes";
        break;
    case 2:
        nombreDia = "Martes";
        break;
    case 3:
        nombreDia = "Miércoles";
        break;
    case 4:
        nombreDia = "Jueves";
        break;
    case 5:
        nombreDia = "Viernes";
        break;
    case 6:
        nombreDia = "Sábado";
        break;
    case 7:
        nombreDia = "Domingo";
        break;
    default:
        nombreDia = "Día inválido";
}

console.log(`El día número ${diaSemana} es: ${nombreDia}`);

// Importante: El break evita que la ejecución continúe a los siguientes casos
// Si lo omitimos, se produce un "fall-through" (caída) 

// Ejemplo de fall-through intencionado
let mes = 7;
let estacion;

switch (mes) {
    case 12:
    case 1:
    case 2:
        estacion = "Invierno";
        break;
    case 3:
    case 4:
    case 5:
        estacion = "Primavera";
        break;
    case 6:
    case 7:
    case 8:
        estacion = "Verano";
        break;
    case 9:
    case 10:
    case 11:
        estacion = "Otoño";
        break;
    default:
        estacion = "Mes inválido";
}

console.log(`El mes ${mes} corresponde a: ${estacion}`);


/**
 * 9. EVALUACIÓN DE CORTOCIRCUITO
 * ============================
 * Los operadores lógicos evalúan de izquierda a derecha y se detienen
 * tan pronto como se puede determinar el resultado (cortocircuito).
 */

console.log("\n--- EVALUACIÓN DE CORTOCIRCUITO ---");

// AND (&&): Si el primer operando es falsy, devuelve ese operando sin evaluar el segundo
let resultado1 = false && console.log("Este mensaje nunca se mostrará");
console.log("Resultado1:", resultado1); // false

// OR (||): Si el primer operando es truthy, devuelve ese operando sin evaluar el segundo
let resultado2 = true || console.log("Este mensaje nunca se mostrará");
console.log("Resultado2:", resultado2); // true

// Encadenamiento de operadores lógicos
let a = 10;
let b = 20;
let c = 0;

// Se evalúa de izquierda a derecha: a > 5 es true, así que evalúa b < 30 que es true
// por lo que evalúa c que es 0 (falsy), así que devuelve 0
let resultado3 = a > 5 && b < 30 && c;
console.log("Resultado3:", resultado3); // 0

// a > 5 es true, así que evalúa c que es 0 (falsy), 
// como estamos con OR, evalúa b < 30 que es true, así que devuelve true
let resultado4 = a > 5 || c || b < 30;
console.log("Resultado4:", resultado4); // true


/**
 * 10. OBJETO COMO ALTERNATIVA A SWITCH
 * =================================
 * Un enfoque más moderno y eficiente para múltiples condiciones.
 */

console.log("\n--- OBJETO COMO ALTERNATIVA A SWITCH ---");

const diasSemana = {
    1: "Lunes",
    2: "Martes",
    3: "Miércoles",
    4: "Jueves",
    5: "Viernes",
    6: "Sábado",
    7: "Domingo"
};

let dia = 4;
console.log(`El día ${dia} es: ${diasSemana[dia] || "Día inválido"}`);

// Ejemplo con funciones
const operaciones = {
    suma: (a, b) => a + b,
    resta: (a, b) => a - b,
    multiplicacion: (a, b) => a * b,
    division: (a, b) => (b !== 0 ? a / b : "Error: División por cero")
};

let operacion = "multiplicacion";
let num1 = 10;
let num2 = 5;
let resultadoOperacion = operaciones[operacion] ? 
                       operaciones[operacion](num1, num2) : 
                       "Operación no soportada";

console.log(`${operacion} de ${num1} y ${num2} = ${resultadoOperacion}`);


/**
 * 11. OPERADOR DE ENCADENAMIENTO OPCIONAL (?.)
 * ========================================
 * Permite leer valores de propiedades anidadas sin verificar explícitamente
 * si cada referencia es null o undefined.
 */

console.log("\n--- OPERADOR DE ENCADENAMIENTO OPCIONAL (?.) ---");

let persona = {
    nombre: "Elena",
    trabajo: {
        empresa: "TechCorp",
        puesto: "Desarrollador"
    }
};

let otraPersona = {
    nombre: "Pablo"
    // No tiene propiedad trabajo
};

// Sin operador de encadenamiento opcional causaría error
// console.log(otraPersona.trabajo.empresa); // Error: Cannot read properties of undefined

// Con operador de encadenamiento opcional
console.log(persona.trabajo?.empresa); // "TechCorp"
console.log(otraPersona.trabajo?.empresa); // undefined, sin error

// Combinado con operador de fusión nula
let empresaPersona = otraPersona.trabajo?.empresa ?? "No trabaja";
console.log(`Empresa de otraPersona: ${empresaPersona}`); // "No trabaja"


/**
 * 12. CONDICIONALES CON ARREGLOS
 * ============================
 * Técnicas para condiciones basadas en arreglos.
 */

console.log("\n--- CONDICIONALES CON ARREGLOS ---");

// Verificar si un elemento existe en un arreglo
const frutas = ["manzana", "banana", "naranja", "pera"];

if (frutas.includes("banana")) {
    console.log("Sí, tenemos bananas");
}

// Condicional con método some() - devuelve true si al menos un elemento cumple la condición
const numeros = [10, 15, 20, 25, 30];
const hayMayorA20 = numeros.some(num => num > 20);
if (hayMayorA20) {
    console.log("Al menos un número es mayor que 20");
}

// Condicional con método every() - devuelve true si todos los elementos cumplen la condición
const todosMayoresA5 = numeros.every(num => num > 5);
if (todosMayoresA5) {
    console.log("Todos los números son mayores que 5");
}

// Filtrado condicional
const numerosPares = numeros.filter(num => num % 2 === 0);
console.log("Números pares:", numerosPares); // [10, 20, 30]


/**
 * 13. PATRONES AVANZADOS DE CONDICIONALES
 * ====================================
 * Técnicas y patrones modernos para manejar condicionales.
 */

console.log("\n--- PATRONES AVANZADOS DE CONDICIONALES ---");

// Destructuración con valores predeterminados
const obtenerConfig = () => ({
    darkMode: true,
    // notifications: true, // Comentado para mostrar valor predeterminado
    language: "es"
});

const { darkMode, notifications = false, language } = obtenerConfig();
console.log(`Modo oscuro: ${darkMode}, Notificaciones: ${notifications}, Idioma: ${language}`);

// Asignación de valor según condición con Map
const statusMessages = new Map([
    [404, "Página no encontrada"],
    [200, "OK"],
    [500, "Error del servidor"]
]);

const getStatusMessage = (code) => {
    return statusMessages.get(code) || "Código de estado desconocido";
};

console.log(getStatusMessage(404)); // "Página no encontrada"
console.log(getStatusMessage(403)); // "Código de estado desconocido"

// Guards como patrón condicional
function procesarDatos(datos) {
    // Guards: verificaciones tempranas que retornan para evitar anidamientos
    if (!datos) {
        console.log("No hay datos para procesar");
        return;
    }
    
    if (!Array.isArray(datos)) {
        console.log("Los datos deben ser un arreglo");
        return;
    }
    
    if (datos.length === 0) {
        console.log("El arreglo de datos está vacío");
        return;
    }
    
    // Procesamiento principal (solo se ejecuta si pasó todas las verificaciones)
    console.log(`Procesando ${datos.length} elementos de datos...`);
}

procesarDatos(null); // "No hay datos para procesar"
procesarDatos("datos"); // "Los datos deben ser un arreglo"
procesarDatos([]); // "El arreglo de datos está vacío"
procesarDatos([1, 2, 3]); // "Procesando 3 elementos de datos..."


/**
 * 14. ERRORES COMUNES Y MEJORES PRÁCTICAS
 * ====================================
 * Consejos para evitar problemas habituales con condicionales.
 */

console.log("\n--- ERRORES COMUNES Y MEJORES PRÁCTICAS ---");

// ❌ EVITAR: Igualdad no estricta 
let valor = 0;
if (valor == "") {
    console.log("❌ Esto se ejecutará porque 0 == '' es true (coerción de tipos)");
}

// ✅ MEJOR: Usar igualdad estricta
if (valor === "") {
    console.log("Esto NO se ejecutará porque 0 !== ''");
} else {
    console.log("✅ Usando igualdad estricta evitamos comparaciones inesperadas");
}

// ❌ EVITAR: Olvidar el break en switch
let opcion = 2;
switch (opcion) {
    case 1:
        console.log("Opción 1");
        // falta break; aquí 
    case 2:
        console.log("Opción 2"); // Se ejecuta correctamente
        // falta break; aquí
    case 3:
        console.log("❌ Esta línea también se ejecutará debido a fall-through"); // No deseado
        break;
    default:
        console.log("Otra opción");
}

// ✅ MEJOR: No olvidar break en switch (a menos que sea intencionado)
console.log("Versión correcta del switch:");
switch (opcion) {
    case 1:
        console.log("Opción 1");
        break;
    case 2:
        console.log("✅ Opción 2");
        break;
    case 3:
        console.log("Opción 3");
        break;
    default:
        console.log("Otra opción");
}

// ❌ EVITAR: Demasiados if-else anidados
function calcularDescuento(usuario, compra) {
    let descuento = 0;
    if (usuario.esPremium) {
        if (compra.monto > 1000) {
            if (compra.categoriaProducto === "electrónica") {
                descuento = 0.15;
            } else {
                descuento = 0.1;
            }
        } else {
            descuento = 0.05;
        }
    } else {
        if (compra.monto > 1000) {
            descuento = 0.05;
        } else {
            descuento = 0;
        }
    }
    return descuento;
}

// ✅ MEJOR: Usar early returns o simplificar las condiciones
function calcularDescuentoMejorado(usuario, compra) {
    // Descuento base
    let descuento = 0;
    
    // Descuento por monto elevado
    if (compra.monto > 1000) {
        descuento += 0.05;
    }
    
    // Descuento adicional para usuarios premium
    if (usuario.esPremium) {
        descuento += 0.05;
        
        // Descuento adicional para premium en electrónica
        if (compra.categoriaProducto === "electrónica" && compra.monto > 1000) {
            descuento += 0.05;
        }
    }
    
    return descuento;
}

// Ejemplos para probar
const usuarioPremium = { esPremium: true };
const usuarioRegular = { esPremium: false };
const compraElectronicaGrande = { monto: 1500, categoriaProducto: "electrónica" };
const compraElectronicaPequeña = { monto: 500, categoriaProducto: "electrónica" };

console.log("Descuentos calculados con método anidado vs mejorado:");
console.log(`Usuario premium, electrónica > 1000: ${calcularDescuento(usuarioPremium, compraElectronicaGrande)} vs ${calcularDescuentoMejorado(usuarioPremium, compraElectronicaGrande)}`);
console.log(`Usuario premium, electrónica < 1000: ${calcularDescuento(usuarioPremium, compraElectronicaPequeña)} vs ${calcularDescuentoMejorado(usuarioPremium, compraElectronicaPequeña)}`);


/**
 * 15. EJERCICIOS PRÁCTICOS
 * ======================
 * Ejemplos para aplicar lo aprendido sobre condicionales.
 */

console.log("\n--- EJERCICIOS PRÁCTICOS ---");

// Ejercicio 1: Sistema de calificación
console.log("Ejercicio 1: Sistema de calificación");

function obtenerCalificacion(puntuacion) {
    if (typeof puntuacion !== 'number' || puntuacion < 0 || puntuacion > 100) {
        return "Puntuación inválida";
    }
    
    if (puntuacion >= 90) return "A";
    if (puntuacion >= 80) return "B";
    if (puntuacion >= 70) return "C";
    if (puntuacion >= 60) return "D";
    return "F";
}

console.log(`Puntuación 95: ${obtenerCalificacion(95)}`);
console.log(`Puntuación 83: ${obtenerCalificacion(83)}`);
console.log(`Puntuación 75: ${obtenerCalificacion(75)}`);
console.log(`Puntuación 62: ${obtenerCalificacion(62)}`);
console.log(`Puntuación 45: ${obtenerCalificacion(45)}`);
console.log(`Puntuación 'no numérica': ${obtenerCalificacion("noventa")}`);

// Ejercicio 2: Calculadora con switch
console.log("\nEjercicio 2: Calculadora con switch");

function calculadora(num1, num2, operacion) {
    let resultado;
    
    switch (operacion) {
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "*":
            resultado = num1 * num2;
            break;
        case "/":
            resultado = num2 !== 0 ? num1 / num2 : "Error: División por cero";
            break;
        case "%":
            resultado = num2 !== 0 ? num1 % num2 : "Error: Módulo por cero";
            break;
        default:
            resultado = "Operación no soportada";
    }
    
    return resultado;
}

console.log(`5 + 3 = ${calculadora(5, 3, "+")}`);
console.log(`10 - 4 = ${calculadora(10, 4, "-")}`);
console.log(`6 * 7 = ${calculadora(6, 7, "*")}`);
console.log(`9 / 3 = ${calculadora(9, 3, "/")}`);
console.log(`9 / 0 = ${calculadora(9, 0, "/")}`);
console.log(`10 % 3 = ${calculadora(10, 3, "%")}`);
console.log(`10 ^ 2 = ${calculadora(10, 2, "^")}`);

// Ejercicio 3: Validación de formulario
console.log("\nEjercicio 3: Validación de formulario");

function validarFormulario(formulario) {
    const errores = [];
    
    // Validación del nombre
    if (!formulario.nombre) {
        errores.push("El nombre es obligatorio");
    } else if (formulario.nombre.length < 2) {
        errores.push("El nombre debe tener al menos 2 caracteres");
    }
    
    // Validación del correo
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formulario.email) {
        errores.push("El email es obligatorio");
    } else if (!emailRegex.test(formulario.email)) {
        errores.push("El email no tiene un formato válido");
    }
    
    // Validación de la contraseña
    if (!formulario.password) {
        errores.push("La contraseña es obligatoria");
    } else if (formulario.password.length < 6) {
        errores.push("La contraseña debe tener al menos 6 caracteres");
    }
    
    // Validación de la edad (opcional)
    if (formulario.edad !== undefined) {
        if (isNaN(formulario.edad) || formulario.edad < 18) {
            errores.push("Debes ser mayor de 18 años");
        }
    }
    
    return {
        esValido: errores.length === 0,
        errores: errores
    };
}

const formularioValido = {
    nombre: "Ana García",
    email: "ana@ejemplo.com",
    password: "secreto123",
    edad: 25
};

const formularioInvalido = {
    nombre: "J",
    email: "correo-invalido",
    password: "123",
    edad: 16
};

console.log("Formulario válido:", validarFormulario(formularioValido));
console.log("Formulario inválido:", validarFormulario(formularioInvalido));


/**
 * RESUMEN Y CONSEJOS FINALES
 * =========================
 * 1. Usa igualdad estricta (===) para evitar conversiones de tipo implícitas
 * 2. Simplifica condicionales complejos extrayendo funciones con nombres descriptivos
 * 3. Usa operadores de cortocircuito (&&, ||) para código más conciso
 * 4. Ten cuidado con los valores falsy en JavaScript
 * 5. El operador de fusión nula (??) es mejor para valores predeterminados que ||
 * 6. Usa early returns para evitar el anidamiento excesivo
 * 7. Los objetos y mapas pueden ser alternativas más mantenibles que switch
 * 8. El operador ternario es útil para asignaciones simples, pero no abuses de él
 */