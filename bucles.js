// LECCIÓN: BUCLES Y SENTENCIAS DE CONTROL EN JAVASCRIPT
// Fecha: 16 de abril de 2025

/**
 * MÓDULO 1: INTRODUCCIÓN A LOS BUCLES
 * ===============================
 * Los bucles o ciclos permiten ejecutar un bloque de código repetidamente hasta que
 * se cumpla una condición específica.
 * Son fundamentales para automatizar tareas repetitivas y procesar colecciones de datos.
 */

console.log("===== MÓDULO 1: INTRODUCCIÓN A LOS BUCLES =====");

// Ejemplo de operación repetitiva sin bucle (ineficiente)
console.log("1. Suma sin bucle:");
console.log(1);
console.log(1 + 2);
console.log(1 + 2 + 3);
console.log(1 + 2 + 3 + 4);
console.log(1 + 2 + 3 + 4 + 5);

// Ejemplo de la misma operación con un bucle (eficiente)
console.log("\n2. Suma con bucle:");
let suma = 0;
for (let i = 1; i <= 5; i++) {
    suma += i;
    console.log(`La suma hasta ${i} es: ${suma}`);
}

// Tipos principales de bucles en JavaScript
console.log("\n3. Tipos de bucles en JavaScript:");
console.log("- for: para un número conocido de iteraciones");
console.log("- while: para ejecutar mientras una condición sea verdadera");
console.log("- do-while: para ejecutar al menos una vez y luego mientras la condición sea verdadera");
console.log("- for...in: para iterar propiedades enumerables de un objeto");
console.log("- for...of: para iterar elementos de objetos iterables (arrays, strings, etc.)");
console.log("- forEach, map, filter, etc.: métodos de iteración para arrays");

/**
 * MÓDULO 2: EL BUCLE FOR
 * =================
 * El bucle for es el más utilizado cuando se conoce el número de iteraciones.
 * Sintaxis: for (inicialización; condición; incremento) { código }
 */

console.log("\n===== MÓDULO 2: EL BUCLE FOR =====");

// Estructura básica del bucle for
console.log("1. Ejemplo básico de bucle for:");
for (let i = 0; i < 5; i++) {
    console.log(`Iteración ${i + 1}: i = ${i}`);
}

// Anatomía del bucle for
console.log("\n2. Anatomía del bucle for:");
console.log("- Inicialización: let i = 0");
console.log("- Condición: i < 5 (bucle continúa mientras esta condición sea true)");
console.log("- Incremento: i++ (ejecutado después de cada iteración)");
console.log("- Bloque de código: lo que está entre { }");

// Bucle for con múltiples variables de control
console.log("\n3. Bucle for con múltiples variables:");
for (let i = 0, j = 10; i <= 5; i++, j--) {
    console.log(`i = ${i}, j = ${j}`);
}

// Bucle for para recorrer un array
console.log("\n4. Recorrer un array con for:");
const frutas = ["Manzana", "Banana", "Pera", "Naranja", "Uva"];
for (let i = 0; i < frutas.length; i++) {
    console.log(`Fruta ${i + 1}: ${frutas[i]}`);
}

// Bucle for en reversa
console.log("\n5. Bucle for en reversa:");
for (let i = 5; i >= 0; i--) {
    console.log(`Cuenta atrás: ${i}`);
}

// Bucle for con incremento personalizado
console.log("\n6. Bucle for con saltos:");
for (let i = 0; i <= 10; i += 2) {
    console.log(`Número par: ${i}`);
}

/**
 * MÓDULO 3: EL BUCLE WHILE
 * ===================
 * El bucle while ejecuta un bloque de código mientras una condición sea true.
 * Es útil cuando no se sabe exactamente cuántas iteraciones serán necesarias.
 */

console.log("\n===== MÓDULO 3: EL BUCLE WHILE =====");

// Estructura básica del bucle while
console.log("1. Ejemplo básico de bucle while:");
let contador = 0;
while (contador < 5) {
    console.log(`Iteración ${contador + 1}: contador = ${contador}`);
    contador++;
}

// Uso de while para validación de entrada
console.log("\n2. While para validación (simulado):");
let intentos = 0;
let accesoConcedido = false;

// Simulamos un proceso de validación
while (!accesoConcedido && intentos < 3) {
    intentos++;
    // En un escenario real, aquí iría código para solicitar credenciales al usuario
    accesoConcedido = intentos === 2; // Simulamos éxito en el segundo intento
    
    console.log(`Intento ${intentos}: ${accesoConcedido ? "Acceso concedido" : "Acceso denegado"}`);
}

// While con condiciones complejas
console.log("\n3. While con múltiples condiciones:");
let a = 5;
let b = 10;

while (a > 0 && b < 15) {
    console.log(`a = ${a}, b = ${b}`);
    a--;
    b++;
}

// Bucle while infinito (comentado para evitar bloqueos)
console.log("\n4. Advertencia: bucle while infinito");
console.log("// while (true) { ... } // Necesita una forma de salir, como un 'break'");

/**
 * MÓDULO 4: EL BUCLE DO-WHILE
 * =======================
 * El bucle do-while es similar a while, pero garantiza al menos una ejecución
 * del bloque, ya que la condición se evalúa al final.
 */

console.log("\n===== MÓDULO 4: EL BUCLE DO-WHILE =====");

// Estructura básica del bucle do-while
console.log("1. Ejemplo básico de do-while:");
let i = 0;
do {
    console.log(`Iteración ${i + 1}: i = ${i}`);
    i++;
} while (i < 5);

// Comparación con while cuando la condición es false inicialmente
console.log("\n2. Do-while vs while con condición inicialmente falsa:");

console.log("  Con do-while (ejecuta una vez aunque la condición sea false):");
let contador1 = 10;
do {
    console.log(`Este mensaje se muestra aunque contador1 = ${contador1} > 5`);
} while (contador1 < 5);

console.log("\n  Con while (no ejecuta si la condición es false):");
let contador2 = 10;
while (contador2 < 5) {
    console.log("Este mensaje nunca se muestra");
}

// Uso práctico de do-while: menú de opciones
console.log("\n3. Do-while para un menú (simulado):");
let opcion;
let iteracion = 0;

// Simulamos selección de opciones
do {
    iteracion++;
    console.log("MENÚ: 1-Ver productos, 2-Comprar, 3-Salir");
    // Aquí normalmente iría código para leer la entrada del usuario
    opcion = iteracion === 3 ? 3 : iteracion; // Simulamos que en la 3ra iteración se selecciona salir
    console.log(`Opción seleccionada: ${opcion}`);
} while (opcion !== 3);

console.log("Has salido del menú");

/**
 * MÓDULO 5: SENTENCIAS BREAK Y CONTINUE
 * =================================
 * Break se usa para salir completamente de un bucle.
 * Continue se usa para saltar a la siguiente iteración.
 */

console.log("\n===== MÓDULO 5: SENTENCIAS BREAK Y CONTINUE =====");

// Uso de break para salir de un bucle
console.log("1. Break para salir de un bucle:");
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        console.log("Encontrado el número 5, saliendo del bucle...");
        break;
    }
    console.log(`Número: ${i}`);
}
console.log("Bucle terminado por break");

// Uso de continue para saltar una iteración
console.log("\n2. Continue para saltar una iteración:");
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        console.log("Saltando el número 2...");
        continue;
    }
    console.log(`Número: ${i}`);
}

// Break con bucles anidados (con etiquetas)
console.log("\n3. Break con etiquetas para bucles anidados:");
bucleExterno: for (let i = 0; i < 3; i++) {
    console.log(`Bucle externo: ${i}`);
    
    for (let j = 0; j < 3; j++) {
        if (i === 1 && j === 1) {
            console.log("Encontrado i=1, j=1. Saliendo del bucle externo...");
            break bucleExterno;
        }
        console.log(`  Bucle interno: j = ${j}`);
    }
}

// Ejemplo práctico: buscar un elemento en un array bidimensional
console.log("\n4. Ejemplo práctico: buscar en matriz con break:");
const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
const buscar = 5;
let encontrado = false;

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        if (matriz[i][j] === buscar) {
            console.log(`¡Encontrado ${buscar} en posición [${i}][${j}]!`);
            encontrado = true;
            break; // Solo sale del bucle interno
        }
    }
    if (encontrado) break; // Sale del bucle externo si ya encontró el elemento
}

/**
 * MÓDULO 6: BUCLES FOR...IN Y FOR...OF
 * ================================
 * Formas más modernas y concisas para iterar sobre objetos y colecciones.
 */

console.log("\n===== MÓDULO 6: BUCLES FOR...IN Y FOR...OF =====");

// For...in para iterar sobre las propiedades de un objeto
console.log("1. For...in para objetos:");
const persona = {
    nombre: "Ana",
    edad: 28,
    ciudad: "Madrid",
    profesion: "Desarrolladora"
};

for (const propiedad in persona) {
    console.log(`${propiedad}: ${persona[propiedad]}`);
}

// For...in también funciona con arrays (pero no es recomendado)
console.log("\n2. For...in con arrays (muestra los índices):");
const colores = ["rojo", "verde", "azul"];

for (const indice in colores) {
    console.log(`Índice: ${indice}, Valor: ${colores[indice]}`);
}

// For...of para iterar sobre elementos de objetos iterables
console.log("\n3. For...of para arrays (muestra los valores):");
for (const color of colores) {
    console.log(`Color: ${color}`);
}

// For...of con strings
console.log("\n4. For...of con strings (itera caracteres):");
const palabra = "Hola";
for (const letra of palabra) {
    console.log(`Letra: ${letra}`);
}

// For...of con Map
console.log("\n5. For...of con Map:");
const mapaUsuarios = new Map([
    [1, { nombre: "Carlos", activo: true }],
    [2, { nombre: "Elena", activo: false }],
    [3, { nombre: "Miguel", activo: true }]
]);

for (const [id, usuario] of mapaUsuarios) {
    console.log(`ID: ${id}, Nombre: ${usuario.nombre}, Activo: ${usuario.activo}`);
}

// For...of con Set
console.log("\n6. For...of con Set:");
const conjuntoNumeros = new Set([1, 2, 3, 2, 1, 4]);
for (const numero of conjuntoNumeros) {
    console.log(`Número: ${numero}`);
}

// Comparación práctica: for tradicional vs for...of
console.log("\n7. Comparación: for tradicional vs for...of:");
const nombres = ["Juan", "María", "Pedro", "Laura"];

console.log("  Con for tradicional:");
for (let i = 0; i < nombres.length; i++) {
    console.log(`- ${nombres[i]}`);
}

console.log("\n  Con for...of:");
for (const nombre of nombres) {
    console.log(`- ${nombre}`);
}

/**
 * MÓDULO 7: MÉTODOS DE ITERACIÓN EN ARRAYS
 * ====================================
 * Los arrays en JavaScript ofrecen métodos integrados para iteración
 * que son más declarativos y funcionales.
 */

console.log("\n===== MÓDULO 7: MÉTODOS DE ITERACIÓN EN ARRAYS =====");

// Datos para los ejemplos
const productos = [
    { id: 1, nombre: "Laptop", precio: 1200, stock: 5 },
    { id: 2, nombre: "Teléfono", precio: 800, stock: 0 },
    { id: 3, nombre: "Tablet", precio: 300, stock: 8 },
    { id: 4, nombre: "Auriculares", precio: 80, stock: 3 },
    { id: 5, nombre: "Monitor", precio: 400, stock: 2 }
];

// forEach: ejecuta una función para cada elemento, no devuelve nada
console.log("1. forEach - mostrar elementos:");
productos.forEach((producto, index) => {
    console.log(`${index + 1}. ${producto.nombre} - $${producto.precio}`);
});

// map: crea un nuevo array con los resultados de la función aplicada a cada elemento
console.log("\n2. map - crear un nuevo array transformado:");
const nombreProductos = productos.map(producto => producto.nombre);
console.log("Nombres de productos:", nombreProductos);

// filter: crea un nuevo array con elementos que cumplan una condición
console.log("\n3. filter - filtrar elementos que cumplan condición:");
const enStock = productos.filter(producto => producto.stock > 0);
console.log("Productos en stock:", enStock);

// find: devuelve el primer elemento que cumple una condición
console.log("\n4. find - encontrar un elemento:");
const laptopEncontrada = productos.find(producto => producto.nombre === "Laptop");
console.log("Laptop encontrada:", laptopEncontrada);

// some: verifica si al menos un elemento cumple una condición
console.log("\n5. some - verificar si existe algún elemento que cumpla condición:");
const hayProductoCaro = productos.some(producto => producto.precio > 1000);
console.log("¿Hay algún producto que cueste más de $1000?", hayProductoCaro);

// every: verifica si todos los elementos cumplen una condición
console.log("\n6. every - verificar si todos los elementos cumplen condición:");
const todosEnStock = productos.every(producto => producto.stock > 0);
console.log("¿Todos los productos tienen stock?", todosEnStock);

// reduce: acumula valores de un array en un único resultado
console.log("\n7. reduce - acumular valores:");
const valorTotalInventario = productos.reduce(
    (acumulado, producto) => acumulado + (producto.precio * producto.stock), 
    0
);
console.log("Valor total del inventario: $" + valorTotalInventario);

// Encadenamiento de métodos
console.log("\n8. Encadenamiento de métodos:");
const totalProductosBaratos = productos
    .filter(producto => producto.precio < 500)
    .map(producto => producto.precio * producto.stock)
    .reduce((total, valor) => total + valor, 0);

console.log("Valor total de productos baratos (<$500): $" + totalProductosBaratos);

/**
 * MÓDULO 8: BUCLES ASÍNCRONOS Y PROMESAS
 * ==================================
 * Trabajar con bucles en código asíncrono requiere consideraciones especiales.
 */

console.log("\n===== MÓDULO 8: BUCLES ASÍNCRONOS Y PROMESAS =====");

// Función asíncrona de ejemplo que simula una petición a API
async function fetchData(id) {
    // Simulamos un delay con Promise
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`Datos para ID ${id}`);
        }, 100); // 100ms de delay
    });
}

// Problema común: bucle asíncrono con forEach
console.log("1. Problema con forEach en código asíncrono:");
console.log("El código no espera a que se resuelvan las promesas");

function ejemploForEachAsincrono() {
    const ids = [1, 2, 3];
    ids.forEach(async id => {
        const datos = await fetchData(id);
        console.log(`ForEach: ${datos}`);
    });
    console.log("ForEach: Este mensaje aparece ANTES de los resultados");
}

// Solución 1: usar for...of en una función async
console.log("\n2. Solución con for...of en función async:");

async function ejemploForOfAsincrono() {
    const ids = [1, 2, 3];
    for (const id of ids) {
        const datos = await fetchData(id);
        console.log(`For...of: ${datos}`);
    }
    console.log("For...of: Este mensaje aparece DESPUÉS de los resultados");
}

// Solución 2: usar Promise.all con map
console.log("\n3. Solución con Promise.all y map:");

async function ejemploPromiseAll() {
    const ids = [1, 2, 3];
    const promesas = ids.map(id => fetchData(id));
    const resultados = await Promise.all(promesas);
    
    resultados.forEach((datos, index) => {
        console.log(`Promise.all: ${datos}`);
    });
    console.log("Promise.all: Este mensaje aparece DESPUÉS de todos los resultados");
}

// Ejecutamos los ejemplos (descomentando uno a la vez para ver resultados)
console.log("\nEjecutando ejemplos (ver código para más detalles):");
// ejemploForEachAsincrono();
// ejemploForOfAsincrono();
// ejemploPromiseAll();
console.log("Nota: Los ejemplos están comentados en el código para evitar confusión en la salida.");

/**
 * MÓDULO 9: PATRONES Y MEJORES PRÁCTICAS
 * ==================================
 * Consejos para escribir bucles eficientes y legibles.
 */

console.log("\n===== MÓDULO 9: PATRONES Y MEJORES PRÁCTICAS =====");

// 1. Evitar modificar la variable de iteración dentro del bucle
console.log("1. Evitar modificar la variable de iteración:");

console.log("  ❌ Código problemático:");
console.log("  for (let i = 0; i < 5; i++) {");
console.log("      console.log(i);");
console.log("      i++; // Mal: modifica la variable de iteración");
console.log("  }");

console.log("\n  ✅ Mejor enfoque:");
console.log("  for (let i = 0; i < 5; i += 2) {");
console.log("      console.log(i);");
console.log("  }");

// 2. Cachear la longitud en bucles for
console.log("\n2. Cachear la longitud del array:");

console.log("  ❌ Ineficiente (recalcula length en cada iteración):");
console.log("  for (let i = 0; i < array.length; i++) { ... }");

console.log("\n  ✅ Más eficiente (calcula length una sola vez):");
console.log("  for (let i = 0, len = array.length; i < len; i++) { ... }");

// 3. Elegir el bucle adecuado para cada caso
console.log("\n3. Elegir el bucle adecuado:");
console.log("  • For tradicional: cuando necesitas el índice o control preciso");
console.log("  • For...of: para iterar valores de arrays o colecciones");
console.log("  • For...in: para iterar propiedades de objetos");
console.log("  • forEach/map/filter: para operaciones funcionales en arrays");
console.log("  • While/do-while: cuando la condición de salida no es predecible");

// 4. Evitar bucles anidados profundos por rendimiento
console.log("\n4. Evitar bucles anidados profundos:");
console.log("  Los bucles anidados tienen complejidad O(n²) o peor.");
console.log("  Busca algoritmos más eficientes o estructuras de datos alternativas.");

// 5. Usar funciones para encapsular lógica repetitiva
console.log("\n5. Encapsular lógica de bucles en funciones:");

function procesarDatos(items, procesador) {
    const resultados = [];
    for (const item of items) {
        resultados.push(procesador(item));
    }
    return resultados;
}

const numeros = [1, 2, 3, 4, 5];
const duplicados = procesarDatos(numeros, n => n * 2);
console.log("  Ejemplo de encapsulación:", duplicados);

/**
 * MÓDULO 10: CASOS DE USO PRÁCTICOS
 * ===============================
 * Ejemplos realistas de uso de bucles en aplicaciones.
 */

console.log("\n===== MÓDULO 10: CASOS DE USO PRÁCTICOS =====");

// Caso 1: Generación de tabla HTML
console.log("1. Generación de tabla HTML:");

function generarTablaHTML(datos) {
    let html = '<table border="1">\n';
    
    // Encabezados
    html += '  <tr>\n';
    for (const clave of Object.keys(datos[0])) {
        html += `    <th>${clave}</th>\n`;
    }
    html += '  </tr>\n';
    
    // Filas de datos
    for (const fila of datos) {
        html += '  <tr>\n';
        for (const valor of Object.values(fila)) {
            html += `    <td>${valor}</td>\n`;
        }
        html += '  </tr>\n';
    }
    
    html += '</table>';
    return html;
}

const datosUsuarios = [
    { id: 1, nombre: "Juan", email: "juan@ejemplo.com" },
    { id: 2, nombre: "Ana", email: "ana@ejemplo.com" },
    { id: 3, nombre: "Carlos", email: "carlos@ejemplo.com" }
];

console.log(generarTablaHTML(datosUsuarios));

// Caso 2: Agrupación de datos
console.log("\n2. Agrupación de datos:");

function agruparPor(array, propiedad) {
    return array.reduce((agrupado, elemento) => {
        const clave = elemento[propiedad];
        
        if (!agrupado[clave]) {
            agrupado[clave] = [];
        }
        
        agrupado[clave].push(elemento);
        return agrupado;
    }, {});
}

const ventas = [
    { producto: "Laptop", categoria: "Electrónica", monto: 1200 },
    { producto: "Camisa", categoria: "Ropa", monto: 25 },
    { producto: "Auriculares", categoria: "Electrónica", monto: 100 },
    { producto: "Pantalón", categoria: "Ropa", monto: 35 },
    { producto: "Tablet", categoria: "Electrónica", monto: 300 }
];

const ventasPorCategoria = agruparPor(ventas, "categoria");
console.log(ventasPorCategoria);

// Caso 3: Búsqueda en árbol con recursividad
console.log("\n3. Búsqueda en estructura de árbol:");

const categorias = {
    id: "root",
    nombre: "Categorías",
    subcategorias: [
        {
            id: "electronics",
            nombre: "Electrónica",
            subcategorias: [
                { id: "smartphones", nombre: "Smartphones" },
                { id: "laptops", nombre: "Portátiles" }
            ]
        },
        {
            id: "clothing",
            nombre: "Ropa",
            subcategorias: [
                { id: "men", nombre: "Hombre" },
                { id: "women", nombre: "Mujer" }
            ]
        }
    ]
};

function buscarCategoriaPorId(categoria, idBuscado) {
    if (categoria.id === idBuscado) {
        return categoria;
    }
    
    if (categoria.subcategorias) {
        for (const subcategoria of categoria.subcategorias) {
            const resultado = buscarCategoriaPorId(subcategoria, idBuscado);
            if (resultado) return resultado;
        }
    }
    
    return null;
}

console.log(buscarCategoriaPorId(categorias, "laptops"));
console.log(buscarCategoriaPorId(categorias, "women"));
console.log(buscarCategoriaPorId(categorias, "nonexistent"));

// Caso 4: Simulación de animación
console.log("\n4. Simulación de animación (código):");
console.log(`
function animar() {
    let posicion = 0;
    const elemento = document.getElementById("animado");
    
    // Bucle de animación usando setInterval
    const intervalo = setInterval(() => {
        posicion += 5;
        elemento.style.left = posicion + "px";
        
        // Condición de parada
        if (posicion >= 300) {
            clearInterval(intervalo);
            console.log("Animación completada");
        }
    }, 50);  // 50ms por frame = 20fps
}
`);

// Resumen de la lección
console.log("\n===== RESUMEN DE LA LECCIÓN =====");
console.log("- Los bucles son estructuras fundamentales para automatizar tareas repetitivas");
console.log("- Diferentes tipos de bucles para diferentes situaciones:");
console.log("  * for: para número conocido de iteraciones");
console.log("  * while/do-while: para condiciones variables");
console.log("  * for...in/for...of: para iterar objetos y colecciones");
console.log("  * Métodos de array: para operaciones funcionales");
console.log("- Break y continue permiten control adicional del flujo");
console.log("- Los bucles asíncronos requieren consideraciones especiales");
console.log("- La elección del bucle correcto mejora la legibilidad y rendimiento");
console.log("- Los bucles son esenciales en muchos casos de uso reales");