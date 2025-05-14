// LECCIÓN: MAPS EN JAVASCRIPT
// Fecha: 16 de abril de 2025

/**
 * MÓDULO 1: INTRODUCCIÓN A LOS MAPS
 * ==============================
 * Un Map es una colección de pares clave-valor donde cada clave es única.
 * A diferencia de los objetos, las claves pueden ser de cualquier tipo (funciones, objetos, primitivos).
 */

console.log("===== MÓDULO 1: INTRODUCCIÓN A LOS MAPS =====");

// Creando un Map vacío
const mapVacio = new Map();
console.log("Map vacío:", mapVacio);

// Creando un Map con valores iniciales
const mapUsuarios = new Map([
    ["u001", "María"],
    ["u002", "Carlos"],
    ["u003", "Ana"]
]);
console.log("Map con valores iniciales:", mapUsuarios);

// Diferencias entre Map y objeto:
// 1. Un Map puede tener claves de cualquier tipo
const mapConClavesVariadas = new Map();
mapConClavesVariadas.set("string", "Soy un string");
mapConClavesVariadas.set(123, "Soy un número");
mapConClavesVariadas.set(true, "Soy un booleano");
mapConClavesVariadas.set({id: 1}, "Soy un objeto");
mapConClavesVariadas.set(() => {}, "Soy una función");

console.log("Map con claves de diferentes tipos:", mapConClavesVariadas);
console.log("Valor asociado con la clave true:", mapConClavesVariadas.get(true));

// Verificando el tamaño de un Map
console.log("Tamaño del map de usuarios:", mapUsuarios.size);

/**
 * MÓDULO 2: MÉTODOS BÁSICOS DE MAPS
 * ==============================
 * Los Maps proporcionan métodos para agregar, obtener, eliminar y verificar existencia de elementos.
 */

console.log("\n===== MÓDULO 2: MÉTODOS BÁSICOS DE MAPS =====");

const productos = new Map();

// set() - Agregar o actualizar elementos al Map
productos.set("p001", { nombre: "Laptop", precio: 1200 });
productos.set("p002", { nombre: "Teléfono", precio: 800 });
productos.set("p003", { nombre: "Tablet", precio: 500 });
console.log("Map después de set():", productos);

// Encadenar llamadas a set()
productos.set("p004", { nombre: "Auriculares", precio: 100 })
productos.set("p005", { nombre: "Monitor", precio: 300 });
console.log("Map después de encadenar set():", productos);

// get() - Obtener un valor por su clave
console.log("Producto p002:", productos.get("p002"));
console.log("Producto inexistente:", productos.get("p999")); // undefined

// has() - Verificar si una clave existe en el Map
console.log("¿Existe el producto p003?", productos.has("p003")); // true
console.log("¿Existe el producto p999?", productos.has("p999")); // false

// delete() - Eliminar un elemento específico por su clave
productos.delete("p001");
console.log("Map después de delete():", productos);
console.log("¿Se eliminó p001?", !productos.has("p001")); // true

// clear() - Eliminar todos los elementos
const temporalMap = new Map([["a", 1], ["b", 2]]);
console.log("Map antes de clear():", temporalMap);
temporalMap.clear();
console.log("Map después de clear():", temporalMap);

/**
 * MÓDULO 3: ITERACIÓN SOBRE MAPS
 * ==========================
 * Existen varias formas de recorrer los elementos de un Map.
 */

console.log("\n===== MÓDULO 3: ITERACIÓN SOBRE MAPS =====");

const ciudadesPoblacion = new Map([
    ["Madrid", 3223000],
    ["Barcelona", 1620000],
    ["Valencia", 791000],
    ["Sevilla", 688000],
    ["Zaragoza", 666000]
]);

// Método 1: forEach - para cada par clave-valor
console.log("Iteración con forEach:");
ciudadesPoblacion.forEach((poblacion, ciudad) => {
    console.log(`${ciudad}: ${poblacion} habitantes`);
});

// Método 2: for...of con entries() - devuelve pares [clave, valor]
console.log("\nIteración con for...of y entries():");
for (const [ciudad, poblacion] of ciudadesPoblacion.entries()) {
    console.log(`${ciudad}: ${poblacion} habitantes`);
}

// Método 3: for...of directamente sobre el Map (es equivalente a entries())
console.log("\nIteración con for...of directamente:");
for (const [ciudad, poblacion] of ciudadesPoblacion) {
    console.log(`${ciudad}: ${poblacion} habitantes`);
}

// Método 4: Obtener todas las claves con keys()
console.log("\nIteración sobre claves con keys():");
for (const ciudad of ciudadesPoblacion.keys()) {
    console.log(ciudad);
}

// Método 5: Obtener todos los valores con values()
console.log("\nIteración sobre valores con values():");
for (const poblacion of ciudadesPoblacion.values()) {
    console.log(poblacion);
}

/**
 * MÓDULO 4: CONVERTIR ENTRE MAPS Y ARRAYS/OBJETOS
 * ==========================================
 * Es frecuente necesitar convertir Maps a otros formatos y viceversa.
 */

console.log("\n===== MÓDULO 4: CONVERTIR ENTRE MAPS Y ARRAYS/OBJETOS =====");

// Convertir Map a Array de pares [clave, valor]
const mapTareas = new Map([
    ["tarea1", "Comprar comida"],
    ["tarea2", "Hacer ejercicio"],
    ["tarea3", "Estudiar JavaScript"]
]);

const arrayDeTareas = Array.from(mapTareas);
console.log("Map convertido a Array:", arrayDeTareas);

// Convertir Map a Array de claves
const arrayDeClaves = Array.from(mapTareas.keys());
console.log("Array de claves:", arrayDeClaves);

// Convertir Map a Array de valores
const arrayDeValores = Array.from(mapTareas.values());
console.log("Array de valores:", arrayDeValores);

// Convertir Objeto a Map
const objetoPersona = {
    nombre: "Laura",
    edad: 28,
    profesion: "Ingeniera"
};

const mapPersona = new Map(Object.entries(objetoPersona));
console.log("Objeto convertido a Map:", mapPersona);

// Convertir Map a Objeto (solo funciona bien si las claves son strings)
const mapConClavesString = new Map([
    ["nombre", "Daniel"],
    ["edad", 35],
    ["profesion", "Médico"]
]);

const objetoDesdeMap = Object.fromEntries(mapConClavesString);
console.log("Map convertido a Objeto:", objetoDesdeMap);

/**
 * MÓDULO 5: CASOS DE USO COMUNES DE MAPS
 * ==================================
 * Maps son especialmente útiles en ciertos escenarios.
 */

console.log("\n===== MÓDULO 5: CASOS DE USO COMUNES DE MAPS =====");

// Caso 1: Mapeo de IDs a objetos (simulando una base de datos)
const usuariosDB = new Map();

function agregarUsuario(id, datos) {
    usuariosDB.set(id, datos);
}

function obtenerUsuario(id) {
    return usuariosDB.get(id) || "Usuario no encontrado";
}

agregarUsuario(101, { nombre: "Elena", rol: "admin" });
agregarUsuario(102, { nombre: "Pablo", rol: "editor" });
agregarUsuario(103, { nombre: "Lucía", rol: "usuario" });

console.log("Usuario 102:", obtenerUsuario(102));
console.log("Usuario 104:", obtenerUsuario(104));

// Caso 2: Contador de frecuencias (por ejemplo, contar palabras en un texto)
function contarPalabras(texto) {
    const palabras = texto.toLowerCase().split(/\W+/).filter(palabra => palabra.length > 0);
    const frecuencias = new Map();
    
    for (const palabra of palabras) {
        const conteo = frecuencias.get(palabra) || 0;
        frecuencias.set(palabra, conteo + 1);
    }
    
    return frecuencias;
}

const texto = "Era el mejor de los tiempos, era el peor de los tiempos, era la edad de la sabiduría, era la edad de la necedad.";
const conteo = contarPalabras(texto);
console.log("Frecuencia de palabras:", conteo);

// Caso 3: Caché de resultados (memoización)
const resultadosCache = new Map();

function calcularFactorial(n) {
    if (resultadosCache.has(n)) {
        console.log(`Usando resultado en caché para ${n}!`);
        return resultadosCache.get(n);
    }
    
    console.log(`Calculando ${n}!...`);
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }
    
    resultadosCache.set(n, resultado);
    return resultado;
}

console.log("5! =", calcularFactorial(5)); // Calcula
console.log("3! =", calcularFactorial(3)); // Calcula
console.log("5! =", calcularFactorial(5)); // Usa caché

/**
 * MÓDULO 6: MAPS VS OBJETOS
 * =====================
 * Comparación entre Maps y objetos para comprender cuándo usar cada uno.
 */

console.log("\n===== MÓDULO 6: MAPS VS OBJETOS =====");

// Tabla comparativa:
console.log("Comparación entre Map y Objeto:");
console.log("1. Claves: Map puede usar cualquier valor como clave, Objeto solo strings y símbolos");
console.log("2. Orden: Map mantiene el orden de inserción, Objeto no lo garantiza (aunque en implementaciones modernas sí)");
console.log("3. Tamaño: Map tiene propiedad .size, Objeto requiere Object.keys(obj).length");
console.log("4. Iteración: Map es directamente iterable, Objeto requiere Object.entries()");
console.log("5. Rendimiento: Map mejor para adiciones/eliminaciones frecuentes, Objeto mejor como estructura de datos de configuración");

// Ejemplo de rendimiento (creación y acceso)
function compararRendimiento() {
    const ITERACIONES = 1000000;
    
    console.time("Objeto - Creación");
    const obj = {};
    for (let i = 0; i < ITERACIONES; i++) {
        obj[`clave${i}`] = i;
    }
    console.timeEnd("Objeto - Creación");
    
    console.time("Map - Creación");
    const map = new Map();
    for (let i = 0; i < ITERACIONES; i++) {
        map.set(`clave${i}`, i);
    }
    console.timeEnd("Map - Creación");
    
    console.time("Objeto - Acceso");
    for (let i = 0; i < 1000; i++) {
        const valor = obj[`clave$// Tu código aquí{Math.floor(Math.random() * ITERACIONES)}`];
    }
    console.timeEnd("Objeto - Acceso");
    
    console.time("Map - Acceso");
    for (let i = 0; i < 1000; i++) {
        const valor = map.get(`clave${Math.floor(Math.random() * ITERACIONES)}`);
    }
    console.timeEnd("Map - Acceso");
}

// Descomenta para ejecutar la comparación de rendimiento
//compararRendimiento();

/**
 * MÓDULO 7: MAPS ANIDADOS Y ESTRUCTURAS COMPLEJAS
 * ==========================================
 * Maps pueden contener otros Maps como valores, creando estructuras de datos jerárquicas.
 */

console.log("\n===== MÓDULO 7: MAPS ANIDADOS Y ESTRUCTURAS COMPLEJAS =====");

// Map anidado que representa un organigrama de empresa
const empresa = new Map();

// Departamento: Tecnología
const tecnologia = new Map();
tecnologia.set("director", "Ana Martínez");
tecnologia.set("empleados", ["Juan", "Sofía", "Carlos"]);
tecnologia.set("presupuesto", 500000);

// Departamento: Marketing
const marketing = new Map();
marketing.set("director", "Miguel López");
marketing.set("empleados", ["Laura", "Diego"]);
marketing.set("presupuesto", 300000);

// Añadir departamentos a la empresa
empresa.set("tecnologia", tecnologia);
empresa.set("marketing", marketing);

// Acceder a datos anidados
console.log("Director de Tecnología:", empresa.get("tecnologia").get("director"));
console.log("Empleados de Marketing:", empresa.get("marketing").get("empleados"));

// Añadir un nuevo departamento
const rrhh = new Map();
rrhh.set("director", "Elena Gómez");
rrhh.set("empleados", ["Pedro", "Lucía"]);
rrhh.set("presupuesto", 200000);
empresa.set("rrhh", rrhh);

// Función para calcular el presupuesto total
function calcularPresupuestoTotal(organizacion) {
    let total = 0;
    for (const [nombre, departamento] of organizacion) {
        total += departamento.get("presupuesto");
    }
    return total;
}

console.log("Presupuesto total de la empresa:", calcularPresupuestoTotal(empresa));

/**
 * MÓDULO 8: WEAKMAPS
 * ==============
 * Los WeakMaps son una variante especial de los Maps con características particulares.
 */

console.log("\n===== MÓDULO 8: WEAKMAPS =====");

// Creando un WeakMap
const weakMap = new WeakMap();
console.log("WeakMap vacío:", weakMap);

// Los WeakMaps solo pueden tener objetos como claves (no valores primitivos)
// weakMap.set(1, "valor"); // Error: clave inválida
// weakMap.set("clave", "valor"); // Error: clave inválida

let objetoClave1 = { id: 1 };
let objetoClave2 = { id: 2 };

weakMap.set(objetoClave1, "Datos asociados al objeto 1");
weakMap.set(objetoClave2, "Datos asociados al objeto 2");

// Verificando si una clave existe en el WeakMap
console.log("¿Contiene objetoClave1?:", weakMap.has(objetoClave1)); // true
console.log("Valor asociado a objetoClave1:", weakMap.get(objetoClave1));

// Eliminando una entrada
weakMap.delete(objetoClave2);
console.log("¿Contiene objetoClave2 después de delete?:", weakMap.has(objetoClave2)); // false

// Característica principal: referencia débil a las claves
console.log("Antes de que se recolecte basura, ¿contiene objetoClave1?:", weakMap.has(objetoClave1)); // true
objetoClave1 = null; // Eliminamos la referencia fuerte
// En algún momento, el recolector de basura liberará objetoClave1 y se eliminará automáticamente del WeakMap

// Los WeakMaps no son iterables y no tienen propiedades size, keys(), values(), etc.
// No se puede usar forEach, entries(), keys() o values()

// Uso común: almacenar datos privados asociados a objetos
const datosPrivados = new WeakMap();

class Usuario {
    constructor(id, nombre) {
        this.id = id;
        this.nombre = nombre;
        // Almacenar datos privados asociados a esta instancia
        datosPrivados.set(this, {
            password: "contraseña_secreta",
            ultimoAcceso: new Date()
        });
    }
    
    // Método que accede a los datos privados
    verificarPassword(intentoPassword) {
        return datosPrivados.get(this).password === intentoPassword;
    }
}

const usuario = new Usuario(1, "Juan");
console.log("¿Password correcto?:", usuario.verificarPassword("contraseña_secreta"));
console.log("¿Password incorrecto?:", usuario.verificarPassword("clave_incorrecta"));
// Los datos privados no son accesibles directamente: console.log(usuario.password) daría undefined

/**
 * MÓDULO 9: EJERCICIOS PRÁCTICOS
 * ===========================
 * Ejemplos prácticos para consolidar el conocimiento sobre Maps.
 */

console.log("\n===== MÓDULO 9: EJERCICIOS PRÁCTICOS =====");

// Ejercicio 1: Crear un sistema simple de traducción
function crearDiccionario() {
    const espanolIngles = new Map([
        ["hola", "hello"],
        ["adiós", "goodbye"],
        ["gracias", "thank you"],
        ["por favor", "please"],
        ["sí", "yes"],
        ["no", "no"]
    ]);
    
    const inglesEspanol = new Map();
    for (const [espanol, ingles] of espanolIngles) {
        inglesEspanol.set(ingles, espanol);
    }
    
    return {
        traducirAIngles(palabra) {
            return espanolIngles.get(palabra.toLowerCase()) || "Traducción no encontrada";
        },
        traducirAEspanol(palabra) {
            return inglesEspanol.get(palabra.toLowerCase()) || "Traducción no encontrada";
        },
        agregarPalabra(espanol, ingles) {
            espanolIngles.set(espanol.toLowerCase(), ingles.toLowerCase());
            inglesEspanol.set(ingles.toLowerCase(), espanol.toLowerCase());
        }
    };
}

const diccionario = crearDiccionario();
console.log("Traducción de 'hola':", diccionario.traducirAIngles("hola"));
console.log("Traducción de 'thank you':", diccionario.traducirAEspanol("thank you"));
diccionario.agregarPalabra("libro", "book");
console.log("Traducción de 'libro':", diccionario.traducirAIngles("libro"));

// Ejercicio 2: Implementar un caché LRU (Least Recently Used)
class LRUCache {
    constructor(capacidad) {
        this.capacidad = capacidad;
        this.cache = new Map();
    }
    
    get(clave) {
        if (!this.cache.has(clave)) return -1;
        
        // Mover el elemento al final (más reciente)
        const valor = this.cache.get(clave);
        this.cache.delete(clave);
        this.cache.set(clave, valor);
        
        return valor;
    }
    
    put(clave, valor) {
        // Si la clave ya existe, eliminarla primero
        if (this.cache.has(clave)) {
            this.cache.delete(clave);
        }
        // Si el caché está lleno, eliminar el elemento menos usado (el primero)
        else if (this.cache.size >= this.capacidad) {
            const primeraLlave = this.cache.keys().next().value;
            this.cache.delete(primeraLlave);
        }
        
        this.cache.set(clave, valor);
    }
}

const cache = new LRUCache(3);
cache.put("a", 1);
cache.put("b", 2);
cache.put("c", 3);
console.log("Valor de 'b':", cache.get("b")); // 2 (y ahora b es el más reciente)
cache.put("d", 4); // Elimina a porque es el menos usado
console.log("Valor de 'a':", cache.get("a")); // -1 (no encontrado)
console.log("Valor de 'c':", cache.get("c")); // 3

// Ejercicio 3: Agrupar personas por ciudad
const personas = [
    { nombre: "Ana", ciudad: "Madrid" },
    { nombre: "Luis", ciudad: "Barcelona" },
    { nombre: "Carlos", ciudad: "Madrid" },
    { nombre: "Elena", ciudad: "Valencia" },
    { nombre: "Miguel", ciudad: "Barcelona" }
];

function agruparPorCiudad(listaPersonas) {
    const agrupacion = new Map();
    
    for (const persona of listaPersonas) {
        if (!agrupacion.has(persona.ciudad)) {
            agrupacion.set(persona.ciudad, []);
        }
        
        agrupacion.get(persona.ciudad).push(persona.nombre);
    }
    
    return agrupacion;
}

const personasPorCiudad = agruparPorCiudad(personas);
console.log("Personas agrupadas por ciudad:", personasPorCiudad);
console.log("Personas en Madrid:", personasPorCiudad.get("Madrid"));
console.log("Personas en Valencia:", personasPorCiudad.get("Valencia"));