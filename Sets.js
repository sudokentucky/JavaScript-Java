// LECCIÓN: SETS EN JAVASCRIPT
// Fecha: 14 de abril de 2025

/**
 * MÓDULO 1: INTRODUCCIÓN A LOS SETS
 * ==============================
 * Un Set es una colección de valores únicos, donde cada valor puede aparecer solo una vez.
 * A diferencia de los arrays, los Sets no tienen un orden específico y no permiten duplicados.
 */

console.log("===== MÓDULO 1: INTRODUCCIÓN A LOS SETS =====");

// Creando un Set vacío
const setVacio = new Set();
console.log("Set vacío:", setVacio);

// Creando un Set con valores iniciales
const colores = new Set(["rojo", "verde", "azul", "rojo"]);
console.log("Set de colores:", colores); // Nota: "rojo" aparece solo una vez

// Verificando el tamaño (cantidad de elementos) de un Set
console.log("Cantidad de colores únicos:", colores.size); // 3

// Los Sets pueden contener cualquier tipo de valor
const mixto = new Set([1, "texto", true, { nombre: "Ana" }, [1, 2, 3]]);
console.log("Set con valores mixtos:", mixto);

/**
 * MÓDULO 2: MÉTODOS BÁSICOS DE SETS
 * ==============================
 * Los Sets proporcionan métodos para agregar, eliminar y verificar la existencia de elementos.
 */

console.log("\n===== MÓDULO 2: MÉTODOS BÁSICOS DE SETS =====");

const frutas = new Set();

// add() - Agregar elementos al Set
frutas.add("manzana");
frutas.add("naranja");
frutas.add("plátano");
console.log("Set después de add():", frutas);

// Intentar agregar un elemento duplicado (no tiene efecto)
frutas.add("manzana");
console.log("Set después de intentar agregar un duplicado:", frutas);

// has() - Verificar si un elemento existe en el Set
console.log("¿Contiene 'naranja'?:", frutas.has("naranja")); // true
console.log("¿Contiene 'uva'?:", frutas.has("uva")); // false

// delete() - Eliminar un elemento específico
frutas.delete("naranja");
console.log("Set después de delete('naranja'):", frutas);

// clear() - Eliminar todos los elementos
const numerosSet = new Set([1, 2, 3, 4, 5]);
console.log("Set original:", numerosSet);
numerosSet.clear();
console.log("Set después de clear():", numerosSet);

/**
 * MÓDULO 3: ITERACIÓN EN SETS
 * =======================
 * Existen varias formas de recorrer los elementos de un Set.
 */

console.log("\n===== MÓDULO 3: ITERACIÓN EN SETS =====");

const letras = new Set(["a", "b", "c", "d", "e"]);

// Método 1: Utilizando forEach
console.log("Iteración con forEach:");
letras.forEach(letra => {
    console.log(letra);
});

// Método 2: Utilizando for...of
console.log("\nIteración con for...of:");
for (const letra of letras) {
    console.log(letra);
}

// Método 3: Convertir a array y usar métodos de array
console.log("\nConvirtiendo a array y usando map:");
const letrasArray = [...letras];
const letrasMayusculas = letrasArray.map(letra => letra.toUpperCase());
console.log(letrasMayusculas);

/**
 * MÓDULO 4: ELIMINACIÓN DE DUPLICADOS EN ARRAYS
 * =========================================
 * Una de las aplicaciones más comunes de Sets es eliminar duplicados en arrays.
 */

console.log("\n===== MÓDULO 4: ELIMINACIÓN DE DUPLICADOS EN ARRAYS =====");

const arrayConDuplicados = [1, 2, 3, 3, 4, 5, 5, 5, 6];
console.log("Array original con duplicados:", arrayConDuplicados);

// Método 1: Usando Set y spread operator
const arraySinDuplicados1 = [...new Set(arrayConDuplicados)];
console.log("Array sin duplicados (usando Set y spread):", arraySinDuplicados1);

// Método 2: Usando Set y Array.from()
const arraySinDuplicados2 = Array.from(new Set(arrayConDuplicados));
console.log("Array sin duplicados (usando Set y Array.from):", arraySinDuplicados2);

// Ejemplo con strings
const nombres = ["Juan", "María", "Pedro", "Juan", "Ana", "María"];
const nombresSinDuplicados = [...new Set(nombres)];
console.log("Nombres originales:", nombres);
console.log("Nombres sin duplicados:", nombresSinDuplicados);

/**
 * MÓDULO 5: OPERACIONES CON SETS (SIMULANDO OPERACIONES DE CONJUNTOS)
 * =============================================================
 * Podemos simular operaciones matemáticas de conjuntos con Sets.
 */

console.log("\n===== MÓDULO 5: OPERACIONES CON SETS =====");

const setA = new Set([1, 2, 3, 4, 5]);
const setB = new Set([4, 5, 6, 7, 8]);

// Unión de sets (A ∪ B): Elementos que están en A o en B o en ambos
const union = new Set([...setA, ...setB]);
console.log("Unión:", [...union]);

// Intersección de sets (A ∩ B): Elementos que están tanto en A como en B
const interseccion = new Set([...setA].filter(x => setB.has(x)));
console.log("Intersección:", [...interseccion]);

// Diferencia de sets (A - B): Elementos que están en A pero no en B
const diferencia = new Set([...setA].filter(x => !setB.has(x)));
console.log("Diferencia (A - B):", [...diferencia]);

// Diferencia simétrica de sets (A ∆ B): Elementos que están en A o en B, pero no en ambos
const diferenciaSimetrica = new Set([
    ...[...setA].filter(x => !setB.has(x)),
    ...[...setB].filter(x => !setA.has(x))
]);
console.log("Diferencia simétrica:", [...diferenciaSimetrica]);

/**
 * MÓDULO 6: CASOS PRÁCTICOS DE USO DE SETS
 * =====================================
 * Ejemplos reales donde los Sets son particularmente útiles.
 */

console.log("\n===== MÓDULO 6: CASOS PRÁCTICOS DE USO DE SETS =====");

// Caso 1: Filtrar valores únicos de datos de usuarios
const usuariosDataset = [
    { id: 1, nombre: "Ana" },
    { id: 2, nombre: "Juan" },
    { id: 1, nombre: "Ana" }, // Duplicado
    { id: 3, nombre: "Pedro" },
    { id: 2, nombre: "Juan" }  // Duplicado
];

// Obtener IDs únicos de usuarios
const idsUnicos = new Set();
const usuariosUnicos = [];

for (const usuario of usuariosDataset) {
    if (!idsUnicos.has(usuario.id)) {
        idsUnicos.add(usuario.id);
        usuariosUnicos.push(usuario);
    }
}

console.log("Usuarios únicos por ID:", usuariosUnicos);

// Caso 2: Historial de navegación con páginas únicas
const historialNavegacion = [
    "inicio.html",
    "productos.html",
    "inicio.html",
    "contacto.html",
    "productos.html",
    "about.html"
];

const paginasUnicas = new Set(historialNavegacion);
console.log("Páginas visitadas (sin repetir):", [...paginasUnicas]);
console.log("Cantidad de páginas únicas visitadas:", paginasUnicas.size);

// Caso 3: Verificación de permisos
const permisoNecesarios = new Set(["leer", "escribir", "eliminar"]);
const permisosUsuario = new Set(["leer", "escribir"]);

function tienePermiso(permiso) {
    return permisosUsuario.has(permiso) ? "Permitido" : "Denegado";
}

console.log("Permiso de lectura:", tienePermiso("leer"));       // Permitido
console.log("Permiso de escritura:", tienePermiso("escribir")); // Permitido
console.log("Permiso de eliminación:", tienePermiso("eliminar")); // Denegado

/**
 * MÓDULO 7: LIMITACIONES Y CONSIDERACIONES DE SETS
 * ============================================
 * Es importante conocer qué pueden y qué no pueden hacer los Sets.
 */

console.log("\n===== MÓDULO 7: LIMITACIONES Y CONSIDERACIONES DE SETS =====");

// Los Sets no tienen índices como los arrays
const numSet = new Set([10, 20, 30, 40]);
console.log("Intentando acceder como array:", numSet[0]); // undefined

// No se pueden obtener elementos por posición directamente
// El siguiente es un workaround usando conversión a array
console.log("Obteniendo por posición (indirectamente):", [...numSet][2]); // 30

// Los Sets consideran objetos distintos aunque tengan la misma estructura
const set1 = new Set();
set1.add({ id: 1 });
set1.add({ id: 1 }); // Esto NO se considera duplicado
console.log("Set con objetos 'iguales':", set1); // Set con 2 elementos

// Comparación de igualdad en Sets usa el algoritmo "same-value-zero"
// Similar a usar === pero trata NaN como igual a sí mismo
const setNaN = new Set([NaN, NaN, NaN]);
console.log("Set con múltiples NaN:", setNaN); // Set con 1 elemento (NaN)

/**
 * MÓDULO 8: WEAKSETS
 * ==============
 * Los WeakSets son una variante especial de los Sets con características particulares.
 */

console.log("\n===== MÓDULO 8: WEAKSETS =====");

// Creando un WeakSet
const weakSet = new WeakSet();
console.log("WeakSet vacío:", weakSet);

// Los WeakSets solo pueden contener objetos (no valores primitivos)
let obj1 = { nombre: "Objeto 1" };
let obj2 = { nombre: "Objeto 2" };
let obj3 = { nombre: "Objeto 3" };

weakSet.add(obj1);
weakSet.add(obj2);
weakSet.add(obj3);

// Verificando si un objeto existe en el WeakSet
console.log("¿Contiene obj1?:", weakSet.has(obj1)); // true
console.log("¿Contiene obj2?:", weakSet.has(obj2)); // true

// Eliminando un objeto
weakSet.delete(obj2);
console.log("¿Contiene obj2 después de delete?:", weakSet.has(obj2)); // false

// Característica principal: referencia débil que permite la recolección de basura
console.log("Antes de la recolección de basura, ¿contiene obj1?:", weakSet.has(obj1)); // true
obj1 = null; // Eliminamos la referencia fuerte
// En algún momento, el recolector de basura liberará obj1 y se eliminará automáticamente del WeakSet

// Los WeakSets no son iterables y no tienen propiedades size, keys(), values(), etc.
// No se puede usar forEach o convertirlos directamente a arrays

/**
 * MÓDULO 9: COMPARACIÓN ENTRE SET Y ARRAY
 * ==================================
 * Ventajas y desventajas de utilizar Sets frente a Arrays.
 */

console.log("\n===== MÓDULO 9: COMPARACIÓN ENTRE SET Y ARRAY =====");

// Rendimiento en búsqueda
function compararBusqueda() {
    const tamano = 1000000;
    const valorBuscado = 999999;
    
    // Preparar datos
    const arrGrande = [];
    for (let i = 0; i < tamano; i++) {
        arrGrande.push(i);
    }
    const setGrande = new Set(arrGrande);
    
    // Medir tiempo de búsqueda en Array
    console.time("Búsqueda en Array");
    const resultadoArray = arrGrande.includes(valorBuscado);
    console.timeEnd("Búsqueda en Array");
    
    // Medir tiempo de búsqueda en Set
    console.time("Búsqueda en Set");
    const resultadoSet = setGrande.has(valorBuscado);
    console.timeEnd("Búsqueda en Set");
    
    return { resultadoArray, resultadoSet };
}

// Ventajas de Sets:
// 1. Valores únicos garantizados
// 2. Búsqueda más eficiente (O(1) vs O(n) en arrays)
// 3. Operaciones de conjuntos matemáticos más fáciles de implementar

// Ventajas de Arrays:
// 1. Acceso por índice
// 2. Ordenamiento garantizado
// 3. Más métodos incorporados (map, filter, reduce, etc.)
// 4. Mejor para colecciones ordenadas o con duplicados

// Ejecutar comparación (comentado para evitar consumir recursos innecesariamente)
// compararBusqueda();

/**
 * EJERCICIOS PRÁCTICOS
 * =================
 * Ahora que entendemos los Sets, apliquemos este conocimiento.
 */

console.log("\n===== EJERCICIOS PRÁCTICOS =====");

// Ejercicio 1: Contar caracteres únicos en una cadena
function contarCaracteresUnicos(texto) {
    return new Set(texto).size;
}

console.log("Caracteres únicos en 'programación':", contarCaracteresUnicos("programación"));
console.log("Caracteres únicos en 'mississippi':", contarCaracteresUnicos("mississippi"));

// Ejercicio 2: Encontrar elementos únicos combinando dos arrays
function elementosUnicos(array1, array2) {
    return [...new Set([...array1, ...array2])];
}

console.log("Elementos únicos de [1, 2, 3] y [2, 3, 4]:", elementosUnicos([1, 2, 3], [2, 3, 4]));

// Ejercicio 3: Verificar si un array es un subconjunto de otro
function esSubconjunto(subconjunto, conjunto) {
    const setConjunto = new Set(conjunto);
    return subconjunto.every(elemento => setConjunto.has(elemento));
}

console.log("[1, 2] es subconjunto de [1, 2, 3, 4]:", esSubconjunto([1, 2], [1, 2, 3, 4])); // true
console.log("[1, 5] es subconjunto de [1, 2, 3, 4]:", esSubconjunto([1, 5], [1, 2, 3, 4])); // false