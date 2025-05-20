// LECCIÓN: OBJETOS EN JAVASCRIPT
// Fecha: 16 de mayo de 2025

/**
 * MÓDULO 1: ¿QUÉ ES UN OBJETO?
 * ============================
 * Un objeto es una colección de pares clave-valor. Las claves son strings o símbolos,
 * y los valores pueden ser de cualquier tipo (primitivos, funciones, otros objetos, etc.).
 */

console.log("===== MÓDULO 1: ¿QUÉ ES UN OBJETO? =====");

// Ejemplo de objeto literal
const persona = {
    nombre: "Ana",
    edad: 28,
    ciudad: "Madrid"
};
console.log("Objeto persona:", persona);

// Objeto con propiedad anidada y función como método
const curso = {
    titulo: "JavaScript Avanzado",
    duracion: 30,
    contenido: ["Objetos", "Funciones", "Asincronía"],
    describir() {
        return `${this.titulo} dura ${this.duracion} horas.`;
    }
};
console.log("Descripción del curso:", curso.describir());

/**
 * MÓDULO 2: ACCESO, AGREGAR Y ELIMINAR PROPIEDADES
 * ================================================
 */

console.log("\n===== MÓDULO 2: ACCESO, AGREGAR Y ELIMINAR PROPIEDADES =====");

// Acceder a propiedades: notación de punto y corchetes
console.log("Nombre de persona (punto):", persona.nombre);
console.log("Ciudad de persona (corchetes):", persona['ciudad']);

// Agregar o actualizar propiedades
persona.profesion = "Ingeniera";
persona['edad'] = 29;
console.log("Persona después de agregar/actualizar:", persona);

// Eliminar una propiedad
delete persona.ciudad;
console.log("Persona después de delete ciudad:", persona);

/**
 * MÓDULO 3: MÉTODOS Y THIS
 * =======================
 */

console.log("\n===== MÓDULO 3: MÉTODOS Y THIS =====");

const calculadora = {
    valor: 0,
    sumar(x) {
        this.valor += x;
    },
    restar(x) {
        this.valor -= x;
    }
};
calculadora.sumar(15);
calculadora.restar(5);
console.log("Resultado calculadora:", calculadora.valor);

/**
 * MÓDULO 4: ITERAR PROPIEDADES DE UN OBJETO
 * ========================================
 */

console.log("\n===== MÓDULO 4: ITERAR PROPIEDADES DE UN OBJETO =====");

const libro = {
    titulo: "1984",
    autor: "George Orwell",
    año: 1949
};

// 1. for...in
console.log("Iteración con for...in:");
for (const clave in libro) {
    console.log(`${clave}: ${libro[clave]}`);
}

// 2. Object.keys()
console.log("\nClaves con Object.keys():", Object.keys(libro));

// 3. Object.values()
console.log("Valores con Object.values():", Object.values(libro));

// 4. Object.entries()
console.log("Entradas con Object.entries():");
for (const [clave, valor] of Object.entries(libro)) {
    console.log(`${clave} => ${valor}`);
}

/**
 * MÓDULO 5: CLONACIÓN Y COMBINACIÓN DE OBJETOS
 * ===========================================
 */

console.log("\n===== MÓDULO 5: CLONACIÓN Y COMBINACIÓN DE OBJETOS =====");

const objA = { a: 1, b: 2 };
const objB = { b: 3, c: 4 };

// Object.assign()
const combinado1 = Object.assign({}, objA, objB);
console.log("Combinado con Object.assign:", combinado1);

// Spread operator
const combinado2 = { ...objA, ...objB };
console.log("Combinado con spread:", combinado2);

/**
 * MÓDULO 6: CONVERSIÓN OBJETO <-> JSON
 * ====================================
 */

console.log("\n===== MÓDULO 6: CONVERSIÓN OBJETO <-> JSON =====");

const producto = { id: 101, nombre: "Teclado", precio: 25 };
// a JSON string
const jsonStr = JSON.stringify(producto);
console.log("Objeto a JSON:", jsonStr);

// de JSON a objeto
const objDesdeJson = JSON.parse(jsonStr);
console.log("JSON a objeto:", objDesdeJson);

/**
 * MÓDULO 7: CASOS DE USO Y CONSIDERACIONES
 * =======================================
 */

console.log("\n===== MÓDULO 7: CASOS DE USO Y CONSIDERACIONES =====");

// Caso: Modelar usuarios en memoria
const usuarios = {};
function agregarUsuario(id, datos) {
    usuarios[id] = datos;
}
function obtenerUsuario(id) {
    return usuarios[id] || null;
}
agregarUsuario('u01', { nombre: "Luis", rol: "admin" });
console.log("Usuario u01:", obtenerUsuario('u01')); // existe
console.log("Usuario u99:", obtenerUsuario('u99')); // null

// Comparación: igual por referencia, no por valor
const obj1 = { x: 10 };
const obj2 = { x: 10 };
console.log("obj1 === obj2:", obj1 === obj2); // false
console.log("obj1 == obj2:", obj1 == obj2);   // false

// Fin de la lección
console.log("===== FIN DE LA LECCIÓN OBJETOS EN JAVASCRIPT =====");