// ============================
// 🔄 EJERCICIOS DE BUCLES EN JAVASCRIPT
// ============================

// EJERCICIO 1: Contar del 1 al 10 con un bucle for
// Escribe un bucle for que muestre por consola los números del 1 al 10.

function contarHastaDiez() {
    for(let i = 1; i<11; i++){
        console.log(i);
    }
}

contarHastaDiez();
// Resultado esperado:
// 1
// 2
// ...
// 10


// EJERCICIO 2: Suma de números pares
// Crea una función que sume todos los números pares del 1 al 100 usando un bucle while.

function sumarPares() {
    let contador = 0;
    let resultado = 0;
    while (contador <= 100){
        resultado += contador;
        contador +=2;
    }
    return resultado;
}

console.log(sumarPares()); // Resultado esperado: 2550


// EJERCICIO 3: Tabla de multiplicar
// Escribe una función que reciba un número y muestre su tabla de multiplicar (del 1 al 10) usando un bucle do-while.

function tablaDeMultiplicar(numero) {
    let i = 1;
    do{
        console.log(i*numero);
        i++;
    }while(i<11);
}

tablaDeMultiplicar(7);
// Resultado esperado:
// 7 x 1 = 7
// 7 x 2 = 14
// ...
// 7 x 10 = 70


// EJERCICIO 4: Factorial de un número
// Calcula el factorial de un número usando un bucle for.
// Recuerda: El factorial de n (n!) es el producto de todos los números enteros positivos desde 1 hasta n.

function factorial(n) {
    if (n < 0) return undefined; 
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }
    return factorial;
}


console.log(factorial(5)); // Resultado esperado: 120 (1*2*3*4*5)

// EJERCICIO 5: Romper un bucle con break
// Escribe un bucle que cuente del 1 al 100 pero se detenga al encontrar el primer múltiplo de 23.

function encontrarMultiploDe23() {
    let i = 1;
    let resultado = 0;
    do {
        if (i % 23 === 0) {
            resultado = i;
            break;
        }
        i++;
    } while (i <= 100);
    return resultado;
}

console.log(encontrarMultiploDe23()); // 23



// EJERCICIO 6: Saltar iteraciones con continue
// Muestra por consola todos los números del 1 al 20, excepto los múltiplos de 3.

function saltarMultiplosDeTres() {
    for(let i =0; i<=20; i++){
        if(i % 3 === 0){
            continue;
        }
        console.log(i)
    }
}

saltarMultiplosDeTres();
// Resultado esperado: 1, 2, 4, 5, 7, 8, 10, 11, 13, 14, 16, 17, 19, 20


// EJERCICIO 7: Iterar sobre propiedades de un objeto
// Crea una función que reciba un objeto y muestre sus propiedades y valores usando un bucle for...in.

function mostrarPropiedades(objeto) {
    for (const propiedad in objeto){
        console.log(`${propiedad}: ${objeto[propiedad]}`);
    }
}

mostrarPropiedades({nombre: "Juan", edad: 25, ciudad: "Madrid"});
// Resultado esperado:
// nombre: Juan
// edad: 25
// ciudad: Madrid


// EJERCICIO 8: Iterar sobre elementos de un array
// Usa un bucle for...of para sumar todos los elementos de un array.

function sumarElementos(array) {
    let resultado = 0;
    array.forEach(element => {
        resultado += element;
    });
    return resultado;
}

console.log(sumarElementos([1, 2, 3, 4, 5])); // Resultado esperado: 15


// EJERCICIO 9: Procesar un array con métodos funcionales
// Dado un array de números, usa map para duplicar cada valor, filter para quedarte solo con los mayores a 5,
// y reduce para sumar el resultado.

function procesarArray(numeros) {
    return numeros
        .map(n => n * 2)
        .filter(n => n > 5)
        .reduce((acc, n) => acc + n, 0);
}

console.log(procesarArray([1, 2, 3, 4, 5])); // Resultado esperado: 24 (solo (2*3), (2*4) y (2*5) son mayores a 5)


// EJERCICIO 10: Generar una secuencia Fibonacci
// Escribe una función que genere los primeros n números de la secuencia Fibonacci usando un bucle.
// La secuencia Fibonacci comienza con 0 y 1, y cada número siguiente es la suma de los dos anteriores.

function fibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];

    let secuencia = [0, 1];
    let i = 2;
    while (i < n) {
        secuencia.push(secuencia[i - 1] + secuencia[i - 2]);
        i++;
    }
    return secuencia;
}


console.log(fibonacci(8)); // Resultado esperado: [0, 1, 1, 2, 3, 5, 8, 13]


// EJERCICIO 11: Pirámide de asteriscos
// Crea una función que dibuje una pirámide de asteriscos de n niveles.

function piramide(niveles) {
   for (let i = 0; i < niveles; i++){
        console.log(' '.repeat(niveles-i)+"*".repeat(2*i+1));
   }
}

piramide(5);
// Resultado esperado:
//     *
//    ***
//   *****
//  *******
// *********


// EJERCICIO 12: Búsqueda en un array
// Implementa una función que busque un elemento en un array y devuelva su posición (o -1 si no lo encuentra).
// Implementa dos versiones: una con un bucle for normal y otra con el método indexOf.

function buscarElemento(array, elemento) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === elemento) {
            return i; 
        }
    }
    return -1; 
}

function buscarElementoConIndexOf(array, elemento) {
    return array.indexOf(elemento);
}

console.log(buscarElemento([10, 20, 30, 40, 50], 30)); // Resultado esperado: 2
console.log(buscarElementoConIndexOf([10, 20, 30, 40, 50], 60)); // Resultado esperado: -1


// EJERCICIO 13: Bucles anidados - Matriz de multiplicación
// Crea y muestra una matriz de multiplicación (tabla de multiplicar) de 10x10 usando bucles for anidados.

function matrizMultiplicacion() {
    for (let fila = 1; fila <= 10; fila++) {
        let linea = '';
        for (let columna = 1; columna <= 10; columna++) {
            linea += `${(fila * columna).toString().padStart(4)} `;
        }
        console.log(linea);
    }
}


matrizMultiplicacion();
// Resultado: Una tabla de multiplicar de 10x10


// EJERCICIO 14: Usar Promise.all con bucles
// Simula 5 peticiones asíncronas usando Promises y espera a que todas se resuelvan con Promise.all.

function simularPeticiones() {
    const promesas = [];

    for (let i = 1; i <= 5; i++) {
        const promesa = new Promise((resolve) => {
            const tiempo = Math.floor(Math.random() * 3000) + 1000; // entre 1s y 4s
            setTimeout(() => {
                resolve(`Petición ${i} completada en ${tiempo}ms`);
            }, tiempo);
        });
        promesas.push(promesa);
    }

    return Promise.all(promesas);
}

simularPeticiones()
    .then(resultados => console.log("Resultados:", resultados))
    .catch(error => console.error("Error:", error));


simularPeticiones()
    .then(resultados => console.log("Resultados:", resultados))
    .catch(error => console.error("Error:", error));


// EJERCICIO 15: Generador de patrones
// Escribe una función que genere diferentes patrones de texto según un parámetro tipo.
// Por ejemplo: cuadrado, triángulo, diamante, etc.

function generarPatron(tipo, tamaño) {
    let resultado = '';

    if (tipo === "cuadrado") {
        for (let i = 0; i < tamaño; i++) {
            resultado += '*'.repeat(tamaño) + '\n';
        }
    } else if (tipo === "triangulo") {
        for (let i = 1; i <= tamaño; i++) {
            resultado += '*'.repeat(i) + '\n';
        }
    } else {
        resultado = "Tipo de patrón no reconocido.";
    }

    console.log(resultado);
}

generarPatron("cuadrado", 4);
// Resultado esperado:
// ****
// ****
// ****
// ****

generarPatron("triangulo", 4);
// Resultado esperado:
// *
// **
// ***
// ****