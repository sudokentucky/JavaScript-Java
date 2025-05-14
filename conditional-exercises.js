// ============================
// 🚦 EJERCICIOS DE CONDICIONALES EN JAVASCRIPT
// ============================

// EJERCICIO 1: Verificar si un número es positivo, negativo o cero
// Escribe una función que reciba un número y devuelva un mensaje indicando si es positivo, negativo o cero.

function verificarNumero(numero) {
    let mensaje;
    if (numero > 0) {
        mensaje = `el numero ${numero} es positivo`;
    } else if (numero < 0) {
        mensaje = `el numero ${numero} es negativo`;
    } else {
        mensaje = `el numero es cero.`;
    }
    return mensaje;
}

console.log(verificarNumero(5));     // "Positivo"
console.log(verificarNumero(-3));    // "Negativo"
console.log(verificarNumero(0));     // "Cero"


// EJERCICIO 2: Determinar si una persona puede votar
// Escribe una función que reciba una edad y devuelva "Puede votar" si es mayor o igual a 18, o "No puede votar" en caso contrario.

function puedeVotar(edad) {
    let mensaje
    if (edad >= 18) {
        mensaje = 'puede votar';
    } else {
        mensaje = 'no puede votar'
    }
    return mensaje
}

console.log(puedeVotar(20));  // "Puede votar"
console.log(puedeVotar(15));  // "No puede votar"


// EJERCICIO 3: Clasificación por nota numérica
// Crea una función que reciba una nota (0 a 100) y devuelva:
// "A" (90-100), "B" (80-89), "C" (70-79), "D" (60-69), "F" (<60)

function obtenerCalificacion(nota) {
    let mensaje;
    if (nota >= 90 && nota <= 100){
        mensaje = 'A';
    }else if (nota >= 80 && nota <= 89){
        mensaje = 'B'
    }else if (nota >=70 && nota <=79){
        mensaje = 'C'
    }else if(nota >=60 && nota <= 69){
        mensaje = 'D'
    }else {
        mensaje = 'F'
    }
    return mensaje;
}

console.log(obtenerCalificacion(92)); // "A"
console.log(obtenerCalificacion(74)); // "C"
console.log(obtenerCalificacion(50)); // "F"


// EJERCICIO 4: Determinar si un año es bisiesto
// Escribe una función que diga si un año es bisiesto:
// Un año es bisiesto si es divisible por 4, pero no por 100, salvo que también sea divisible por 400.

function esBisiesto(anio) {
    let esBisiesto;
    if(anio%4==0 && anio%100 !=0 || anio%400==0){
        esBisiesto = true;
    }else{
        esBisiesto = false;
    }
    return esBisiesto
}

console.log(esBisiesto(2020)); // true
console.log(esBisiesto(1900)); // false
console.log(esBisiesto(2000)); // true


// EJERCICIO 5: Saludo según la hora
// Dada una hora (número entre 0 y 23), retorna:
// "Buenos días" (5-11), "Buenas tardes" (12-18), "Buenas noches" (19-4)

function obtenerSaludo(hora) {
    let mensaje;
    if(hora>=5 && hora<=11){
        mensaje = 'Buenos dias';
    }else if(hora >=12 && hora <= 18){
        mensaje = 'Buenas tardes'
    }else {
        mensaje = "Buenas noches"
    }
    return mensaje;
}

console.log(obtenerSaludo(9));  // "Buenos días"
console.log(obtenerSaludo(15)); // "Buenas tardes"
console.log(obtenerSaludo(22)); // "Buenas noches"
console.log(obtenerSaludo(3));  // "Buenas noches"


// EJERCICIO 6: Calculadora básica
// Recibe dos números y una operación (“+”, “-”, “*”, “/”) y devuelve el resultado.

function calculadora(a, b, operacion) {
    let resultado;
    if(operacion == "+"){
        resultado = a+b;
    }else if(operacion == "-"){
        resultado = a-b;
    }else if(operacion == "*"){
        resultado = a*b;
    }else if(operacion == "/"){
        if(b ==0){
            resultado = "Error: Division por cero"
        }else{
            resultado = a/b;
        }
    }
    return resultado;
}

console.log(calculadora(5, 3, "+")); // 8
console.log(calculadora(10, 2, "*")); // 20
console.log(calculadora(8, 0, "/")); // "Error: División por cero"


// EJERCICIO 7: Determinar si un valor es falsy
// Escribe una función que reciba cualquier valor y devuelva si es falsy o truthy.

function esFalsy(valor) {
    let mensaje
    if(valor ==false || valor == "" || valor == undefined){
        mensaje =  "Falsy"
    }else{
        mensaje = "Truthy"
    }
    return mensaje;
}

console.log(esFalsy(false));       // "Falsy"
console.log(esFalsy(""));          // "Falsy"
console.log(esFalsy("Hola"));      // "Truthy"
console.log(esFalsy(undefined));   // "Falsy"


// EJERCICIO 8: Validar nombre de usuario con OR (||)
// Si el nombre de usuario está vacío, mostrar "Invitado"

function obtenerNombreUsuario(nombre) {
    let name
    if (nombre){
        name = nombre;
    }else{
        name = "Invitado";
    }
    return name;
}

console.log(obtenerNombreUsuario("Keneth")); // "Keneth"
console.log(obtenerNombreUsuario(""));       // "Invitado"


// EJERCICIO 9: Asignar valor usando fusión nula (??)
// Si un valor es null o undefined, devolver "Sin valor"

function valorSeguro(valor) {
    return valor ?? "Sin valor"
}

console.log(valorSeguro(undefined)); // "Sin valor"
console.log(valorSeguro(null));      // "Sin valor"
console.log(valorSeguro(0));         // 0
console.log(valorSeguro(""));        // ""


// EJERCICIO 10: Validar si un número está entre 1 y 100
// Retornar "Válido" si está en el rango, "Inválido" si no.

function validarRango(numero) {
    let mensaje
    if(numero >=1 && numero<=100){
        mensaje = 'Valido'
    }else{
        mensaje = 'Invalido';
    }
    return mensaje;
}

console.log(validarRango(50));   // "Válido"
console.log(validarRango(150));  // "Inválido"
console.log(validarRango(-5));   // "Inválido"
