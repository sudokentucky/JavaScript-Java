// ============================
// EJERCICIOS DE SETS EN JAVASCRIPT
// ============================

// EJERCICIO 1: Creación y manipulación básica de Sets
// Crea una función que reciba un array con elementos duplicados y devuelva un Set con los elementos únicos.

function crearSetUnico(array) {
    const unico = new Set(array);
    return unico;
}

console.log(crearSetUnico([1, 2, 2, 3, 3, 3, 4, 5, 5]));     // Debe retornar: Set {1, 2, 3, 4, 5}
console.log(crearSetUnico(["a", "b", "a", "c", "b"]));       // Debe retornar: Set {"a", "b", "c"}


// EJERCICIO 2: Verificación de existencia de elementos
// Crea una función que reciba un Set y un elemento, y verifique si el elemento existe en el Set.

function existeEnSet(conjunto, elemento) {
    return conjunto.has(elemento);
}

const frutas = new Set(["manzana", "pera", "naranja"]);
console.log(existeEnSet(frutas, "pera"));            // Debe retornar: true
console.log(existeEnSet(frutas, "sandía"));          // Debe retornar: false


// EJERCICIO 3: Tamaño de un Set
// Crea una función que reciba un Set y devuelva cuántos elementos únicos contiene.

function contarElementosUnicos(conjunto) {
    /*let contador = 0;*/
    /*  
    conjunto.forEach(_ =>{
        contador +=1;
    });
    return contador;  Version 1*/
    /*for(const _ of conjunto){
        contador +=1;
    }
    return contador;*/ 
    return conjunto.size;
    
    
}

const colores = new Set(["rojo", "verde", "azul", "amarillo"]);
console.log(contarElementosUnicos(colores));         // Debe retornar: 4
console.log(contarElementosUnicos(new Set()));       // Debe retornar: 0


// EJERCICIO 4: Eliminar elementos de un Set
// Crea una función que reciba un Set y un elemento, elimine ese elemento del Set y devuelva el Set modificado.

function eliminarDelSet(conjunto, elemento) {
    conjunto.delete(elemento);
    return conjunto;
}

const numeros = new Set([1, 2, 3, 4, 5]);
console.log(eliminarDelSet(numeros, 3));             // Debe retornar: Set {1, 2, 4, 5}
console.log(eliminarDelSet(numeros, 10));            // Debe retornar: Set {1, 2, 4, 5} (no cambia)


// EJERCICIO 5: Conversión entre Array y Set
// Crea dos funciones:
// 1. Una que convierta un Set a un Array
// 2. Otra que convierta un Array a un Set

function setAArray(conjunto) {
    const nuevoSet = Array.from(conjunto)
    return nuevoSet;
}

function arrayASet(array) {
    const nuevoArray = new Set(array)
    return nuevoArray;

}

const setEjemplo = new Set([1, 2, 3]);
console.log(setAArray(setEjemplo));                  // Debe retornar: [1, 2, 3]
console.log(arrayASet([4, 5, 5, 6]));                // Debe retornar: Set {4, 5, 6}


// EJERCICIO 6: Iteración sobre un Set
// Crea una función que reciba un Set y devuelva un nuevo Set con los elementos originales transformados a mayúsculas.
// Nota: asume que todos los elementos son strings.

function convertirAMayusculas(conjunto) {
    const mayusculas = new Set();
    conjunto.forEach(palabras => {
        mayusculas.add(palabras.toUpperCase());
    });
    return mayusculas;
}

const palabras = new Set(["hola", "mundo", "javascript"]);
console.log(convertirAMayusculas(palabras));         // Debe retornar: Set {"HOLA", "MUNDO", "JAVASCRIPT"}


// EJERCICIO 7: Unión de Sets
// Crea una función que reciba dos Sets y devuelva un nuevo Set con la unión de ambos (todos los elementos).

function unionSets(conjunto1, conjunto2) {
    return new Set([...conjunto1, ...conjunto2]);
}

const setA = new Set([1, 2, 3]);
const setB = new Set([3, 4, 5]);
console.log(unionSets(setA, setB));                  // Debe retornar: Set {1, 2, 3, 4, 5}


// EJERCICIO 8: Intersección de Sets
// Crea una función que reciba dos Sets y devuelva un nuevo Set con la intersección (elementos comunes).

function interseccionSets(conjunto1, conjunto2) {
    return new Set([...conjunto1].filter(x => conjunto2.has(x)));
}

const set1 = new Set([1, 2, 3, 4]);
const set2 = new Set([3, 4, 5, 6]);
console.log(interseccionSets(set1, set2));           // Debe retornar: Set {3, 4}


// EJERCICIO 9: Diferencia de Sets
// Crea una función que reciba dos Sets (A y B) y devuelva un nuevo Set con los elementos que están en A pero no en B.

function diferenciaSets(conjuntoA, conjuntoB) {
    return new Set([...conjuntoA].filter(x => !conjuntoB.has(x)));
}

const setX = new Set([1, 2, 3, 4, 5]);
const setY = new Set([4, 5, 6]);
console.log(diferenciaSets(setX, setY));             // Debe retornar: Set {1, 2, 3}


// EJERCICIO 10: Diferencia simétrica de Sets
// Crea una función que reciba dos Sets y devuelva un nuevo Set con los elementos que están en uno u otro Set, pero no en ambos.

function diferenciaSimetricaSets(conjuntoA, conjuntoB) {
    return new Set([
        ...[...conjuntoA].filter(x => !conjuntoB.has(x)),
        ...[...conjuntoB].filter(x => !conjuntoA.has(x))
    ]);
}

const setC = new Set([1, 2, 3, 4]);
const setD = new Set([3, 4, 5, 6]);
console.log(diferenciaSimetricaSets(setC, setD));    // Debe retornar: Set {1, 2, 5, 6}


// EJERCICIO 11: Eliminación de duplicados en un array usando Set
// Crea una función que reciba un array con elementos duplicados y devuelva un array con elementos únicos.

function eliminarDuplicados(array) {
    return [...new Set(array)];
}

console.log(eliminarDuplicados([1, 2, 2, 3, 4, 4, 5]));  // Debe retornar: [1, 2, 3, 4, 5]
console.log(eliminarDuplicados(["a", "a", "b", "c", "c"])); // Debe retornar: ["a", "b", "c"]


// EJERCICIO 12: Filtrar usuarios únicos
// Simula el Caso 1 de la lección: crea una función que reciba un array de objetos usuario y
// devuelva un array con usuarios únicos (sin duplicados por ID).

function filtrarUsuariosUnicos(usuarios) {
    const idUnicos = new Set();
    const usuariosUnicos = [];

    usuarios.forEach((usuario) =>{
        if(!idUnicos.has(usuario.id)){
            idUnicos.add(usuario.id)
            usuariosUnicos.push(usuario)
        }
    });
    return usuariosUnicos;
}

const usuariosConDuplicados = [
    { id: 1, nombre: "Ana" },
    { id: 2, nombre: "Luis" },
    { id: 1, nombre: "Ana" },  // Duplicado
    { id: 3, nombre: "Carlos" },
    { id: 2, nombre: "Luis" }  // Duplicado
];
console.log(filtrarUsuariosUnicos(usuariosConDuplicados));
// Debe retornar: [{ id: 1, nombre: "Ana" }, { id: 2, nombre: "Luis" }, { id: 3, nombre: "Carlos" }]


// EJERCICIO 13: Verificar subconjunto
// Crea una función que reciba dos Sets (A y B) y determine si A es un subconjunto de B
// (todos los elementos de A están en B).

function esSubconjunto(conjuntoA, conjuntoB) {
    for (A of conjuntoA){
        if(!conjuntoB.has(A)){
            return false;
        }
    }
    return true;
}

const conjuntoMenor = new Set([1, 2]);
const conjuntoMayor = new Set([1, 2, 3, 4]);
console.log(esSubconjunto(conjuntoMenor, conjuntoMayor));  // Debe retornar: true
console.log(esSubconjunto(new Set([1, 5]), conjuntoMayor));  // Debe retornar: false


// EJERCICIO 14: Contar caracteres únicos
// Crea una función que reciba un string y devuelva la cantidad de caracteres únicos que contiene.

function contarCaracteresUnicos(texto) {
    const numeroDeCaracteresUnicos = new Set(texto).size;
    return numeroDeCaracteresUnicos;
}

console.log(contarCaracteresUnicos("javascript"));       // Debe retornar: 9
console.log(contarCaracteresUnicos("mississippi"));      // Debe retornar: 4


// EJERCICIO 15: Implementación de WeakSet
// Crea una función que demuestre el uso de WeakSet permitiendo registrar objetos
// y comprobar si un objeto ya está registrado.

function registrarObjetos() {
    // Tu código aquí - crea un WeakSet y registra algunos objetos
    // La función debe devolver un objeto con dos métodos:
    // 1. registrar(obj): añade un objeto al WeakSet y devuelve true
    // 2. estaRegistrado(obj): verifica si el objeto está en el WeakSet
    const registros = new WeakSet();
    return{
        registrar(obj){
            registros.add(obj);
            return true;
        },
        estaRegistrado(obj){
            return registros.has(obj);
        }
    };
}

const registro = registrarObjetos();
const obj1 = { nombre: "Objeto 1" };
const obj2 = { nombre: "Objeto 2" };

console.log(registro.registrar(obj1));                  // Debe retornar: true
console.log(registro.estaRegistrado(obj1));             // Debe retornar: true
console.log(registro.estaRegistrado(obj2));             // Debe retornar: false


// EJERCICIO 16: Validar permisos de usuario
// Simula el Caso 3 de la lección: crea una función que reciba un conjunto de permisos de usuario
// y un permiso a verificar, y determine si el usuario tiene ese permiso.

function verificarPermiso(permisosUsuario, permisoRequerido) {
    return permisosUsuario.has(permisoRequerido);
}

const permisosAdmin = new Set(["leer", "escribir", "eliminar"]);
const permisosEditor = new Set(["leer", "escribir"]);
const permisosLector = new Set(["leer"]);

console.log(verificarPermiso(permisosAdmin, "eliminar"));    // Debe retornar: true
console.log(verificarPermiso(permisosEditor, "eliminar"));   // Debe retornar: false
console.log(verificarPermiso(permisosLector, "leer"));       // Debe retornar: true


// EJERCICIO 17: Historial de navegación
// Simula el Caso 2 de la lección: crea una función que reciba un array con el historial de páginas visitadas
// y devuelva un array con las páginas únicas visitadas, sin repeticiones.

function paginasUnicasVisitadas(historial) {
    return [...new Set(historial)];
}

const historialNavegacion = [
    "inicio.html",
    "productos.html",
    "inicio.html",
    "contacto.html",
    "productos.html",
    "about.html"
];
console.log(paginasUnicasVisitadas(historialNavegacion));
// Debe retornar: ["inicio.html", "productos.html", "contacto.html", "about.html"]


// EJERCICIO 18: Comparar rendimiento
// Crea una función que compare el rendimiento de búsqueda entre un Array y un Set para un elemento específico.
// La función debe retornar un objeto con los tiempos de ejecución para cada estructura.

function compararRendimiento(tamano, valorBuscado) {
    // Crear el array y el set con valores del 0 al tamano - 1
    const arrayPrueba = [];
    for (let i = 0; i < tamano; i++) {
        arrayPrueba.push(i);
    }

    const setPrueba = new Set(arrayPrueba);

    const inicioArray = performance.now();
    arrayPrueba.includes(valorBuscado);
    const finArray = performance.now();
    const tiempoArray = finArray - inicioArray;

    const inicioSet = performance.now();
    setPrueba.has(valorBuscado);
    const finSet = performance.now();
    const tiempoSet = finSet - inicioSet;

    return {
        tiempoArray: tiempoArray.toFixed(6) + ' ms',
        tiempoSet: tiempoSet.toFixed(6) + ' ms'
    };
}


console.log(compararRendimiento(10000, 9999));
// Debe retornar algo como: { tiempoArray: X, tiempoSet: Y }


// EJERCICIO 19: Comprobación estricta de unicidad de objetos
// Crea una función que demuestre cómo los objetos con la misma estructura son tratados como diferentes en un Set.

function demostrarUnicidadDeObjetos() {
    const setDeObjetos = new Set();

    const obj1 = { nombre: "Ana" };
    const obj2 = { nombre: "Ana" }; // Misma estructura que obj1
    const obj3 = obj1;              // Misma referencia que obj1

    setDeObjetos.add(obj1);
    setDeObjetos.add(obj2); // Distinta referencia → se agrega
    setDeObjetos.add(obj3); // Misma referencia → no se agrega

    return {
        tamañoDelSet: setDeObjetos.size,
        contenido: [...setDeObjetos]
    };
}

console.log(demostrarUnicidadDeObjetos());
// Esperado: tamaño 2 (porque obj1 y obj2 son diferentes referencias)

// EJERCICIO 20: Combinar múltiples Sets
// Crea una función que reciba un número variable de Sets y devuelva un único Set
// con la unión de todos los elementos de todos los Sets recibidos.

function combinarSets(...conjuntos) {
    const combinado = new Set();
    for (const conjunto of conjuntos) {
        for (const valor of conjunto) {
            combinado.add(valor);
        }
    }
    return combinado;
}

// O versión compacta:
// function combinarSets(...conjuntos) {
//     return new Set(conjuntos.flatMap(set => [...set]));
// }

const conjunto1 = new Set([1, 2]);
const conjunto2 = new Set([2, 3]);
const conjunto3 = new Set([3, 4, 5]);

console.log(combinarSets(conjunto1, conjunto2, conjunto3));
// Esperado: Set {1, 2, 3, 4, 5}
