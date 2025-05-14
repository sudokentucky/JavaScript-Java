// ============================
// 🗺️ EJERCICIOS DE MAPS EN JAVASCRIPT
// ============================

// EJERCICIO 1: Crear y manipular un Map básico
// Crea una función que reciba 3 pares clave-valor y devuelva un Map con esos elementos.

function crearMap(clave1, valor1, clave2, valor2, clave3, valor3) {
    const Mapa = new Map();

    Mapa.set(clave1,valor1);
    Mapa.set(clave2, valor2);
    Mapa.set(clave3, valor3);
    return Mapa;
}

console.log(crearMap("nombre", "Ana", "edad", 25, "ciudad", "Madrid"));
// Debe retornar: Map(3) { 'nombre' => 'Ana', 'edad' => 25, 'ciudad' => 'Madrid' }


// EJERCICIO 2: Verificar existencia y obtener valores
// Crea una función que reciba un Map y una clave, y devuelva "Existe: [valor]" si la clave existe,
// o "No existe" si la clave no está en el Map.

function verificarClave(mapa, clave) {
    return mapa.has(clave)?`Existe: ${mapa.get(clave)}`:`No existe`;
}

const usuariosEdad = new Map([
    ["Juan", 30],
    ["María", 25],
    ["Carlos", 42]
]);

console.log(verificarClave(usuariosEdad, "María"));    // Debe retornar: "Existe: 25"
console.log(verificarClave(usuariosEdad, "Pedro"));    // Debe retornar: "No existe"


// EJERCICIO 3: Actualizar valores en un Map
// Crea una función que reciba un Map, una clave y un valor. Si la clave existe, actualiza su valor;
// si no existe, añade el par clave-valor. Devuelve el Map modificado.

function actualizarMap(mapa, clave, valor) {
    return mapa.set(clave, valor);
}

const frutasPrecio = new Map([
    ["manzana", 1.5],
    ["plátano", 0.8],
    ["naranja", 1.2]
]);

console.log(actualizarMap(frutasPrecio, "manzana", 1.8));
// Debe actualizar el precio de manzana a 1.8
console.log(actualizarMap(frutasPrecio, "pera", 2.0));
// Debe añadir pera con precio 2.0


// EJERCICIO 4: Eliminar elementos de un Map
// Crea una función que reciba un Map y elimine todos los elementos 
// cuyo valor sea menor que un límite dado. Devuelve el Map modificado.

function filtrarPorValor(mapa, limite) {
    for([producto, stock] of mapa){
        if(stock < limite){
            mapa.delete(producto)
        }
    }
    return mapa;
}

const productosStock = new Map([
    ["laptop", 15],
    ["móvil", 8],
    ["tablet", 3],
    ["auriculares", 23]
]);

console.log(filtrarPorValor(productosStock, 10));
// Debe eliminar "móvil" y "tablet", dejando solo "laptop" y "auriculares"


// EJERCICIO 5: Convertir un objeto a Map
// Crea una función que reciba un objeto y lo convierta en un Map.

function objetoAMap(objeto) {
    return new Map(Object.entries(objeto));
}

const persona = {
    nombre: "Luis",
    edad: 35,
    profesion: "desarrollador"
};

console.log(objetoAMap(persona));
// Debe retornar: Map(3) { 'nombre' => 'Luis', 'edad' => 35, 'profesion' => 'desarrollador' }


// EJERCICIO 6: Convertir un Map a objeto
// Crea una función que reciba un Map y lo convierta en un objeto.
// Nota: Asume que todas las claves del Map son strings.

function mapAObjeto(mapa) {
    return Object.fromEntries(mapa);
}

const configuracion = new Map([
    ["tema", "oscuro"],
    ["idioma", "español"],
    ["notificaciones", true]
]);

console.log(mapAObjeto(configuracion));
// Debe retornar: { tema: 'oscuro', idioma: 'español', notificaciones: true }


// EJERCICIO 7: Fusionar dos Maps
// Crea una función que reciba dos Maps y devuelva un nuevo Map con todos los elementos de ambos.
// Si hay claves duplicadas, el valor del segundo Map debe prevalecer.

function fusionarMaps(mapa1, mapa2) {
    // Tu código aquí
    return new Map([...mapa1, ...mapa2])
}

const mapaA = new Map([["a", 1], ["b", 2]]);
const mapaB = new Map([["b", 3], ["c", 4]]);

console.log(fusionarMaps(mapaA, mapaB));
// Debe retornar: Map(3) { 'a' => 1, 'b' => 3, 'c' => 4 }


// EJERCICIO 8: Invertir un Map (intercambiar claves y valores)
// Crea una función que reciba un Map y devuelva un nuevo Map donde las claves sean los valores originales
// y los valores sean las claves originales.

function invertirMap(mapa) {
    const nuevoMapa = new Map();

    for([codigo, pais] of mapa){
        nuevoMapa.set(pais, codigo);
    }
    return nuevoMapa;
}

const codigosPaises = new Map([
    ["ES", "España"],
    ["FR", "Francia"],
    ["IT", "Italia"]
]);

console.log(invertirMap(codigosPaises));
// Debe retornar: Map(3) { 'España' => 'ES', 'Francia' => 'FR', 'Italia' => 'IT' }


// EJERCICIO 9: Contar ocurrencias en un array
// Crea una función que reciba un array y devuelva un Map donde las claves sean los elementos
// del array y los valores sean el número de veces que aparece cada elemento.

function contarOcurrencias(array) {
    const nuevoMapa = new Map();
    for (let elemento of array) {
        nuevoMapa.set(elemento, (nuevoMapa.get(elemento) || 0) + 1);
    }
    return nuevoMapa;
}


const numeros = [1, 2, 3, 1, 2, 1, 4, 5, 4];
console.log(contarOcurrencias(numeros));
// Debe retornar: Map(5) { 1 => 3, 2 => 2, 3 => 1, 4 => 2, 5 => 1 }


// EJERCICIO 10: Filtrar un Map por condición del valor
// Crea una función que reciba un Map y una función de condición, y devuelva un
// nuevo Map con solo los elementos cuyo valor cumpla la condición.

function filtrarMap(mapa, condicion) {
    // Tu código aquí
    const nuevoMapa =  new Map();
    for([persona, edad] of mapa){
        if(condicion(edad)){
            nuevoMapa.set(persona, edad);
        }
    }
    return nuevoMapa;
}

const personas = new Map([
    ["Ana", 28],
    ["Luis", 17],
    ["María", 42],
    ["Carlos", 15]
]);

console.log(filtrarMap(personas, edad => edad >= 18));
// Debe retornar: Map(2) { 'Ana' => 28, 'María' => 42 }


// EJERCICIO 11: Agrupar elementos de un array en un Map
// Crea una función que reciba un array de objetos y el nombre de una propiedad,
// y devuelva un Map donde las claves sean los valores de esa propiedad y
// los valores sean arrays con los objetos que tienen ese valor en común.

function agruparPor(array, propiedad) {
    const nuevoMapa = new Map();
    for(objeto of array){
        let clave = objeto[propiedad]
        if(!nuevoMapa.has(clave)){
            nuevoMapa.set(clave, []);
        }
        nuevoMapa.get(clave).push(objeto);
    }
    return nuevoMapa;
}

const estudiantes = [
    { nombre: "Ana", curso: "JavaScript" },
    { nombre: "Luis", curso: "Python" },
    { nombre: "Carlos", curso: "JavaScript" },
    { nombre: "María", curso: "Python" }
];

console.log(agruparPor(estudiantes, "curso"));
/* Debe retornar un Map como:
  Map(2) {
    'JavaScript' => [
      { nombre: 'Ana', curso: 'JavaScript' },
      { nombre: 'Carlos', curso: 'JavaScript' }
    ],
    'Python' => [
      { nombre: 'Luis', curso: 'Python' },
      { nombre: 'María', curso: 'Python' }
    ]
  }
*/


// EJERCICIO 12: Implementar un sistema de caché
// Crea una clase Cache que utilice un Map para almacenar resultados.
// Debe tener métodos para guardar un valor, obtener un valor y limpiar la caché.

class Cache {
    constructor(){
        this.cache = new Map();
    }

    guardar(clave, valor){
        this.cache.set(clave, valor);
    }

    obtener(clave){
        const valor = this.cache.get(clave);
        return valor;
    }

    limpiar(){
        this.cache.clear();
    }
}

const miCache = new Cache();
miCache.guardar("usuario:1", { nombre: "Ana", edad: 28 });
console.log(miCache.obtener("usuario:1")); // Debe retornar: { nombre: "Ana", edad: 28 }
console.log(miCache.obtener("usuario:2")); // Debe retornar: null o undefined
miCache.limpiar();
console.log(miCache.obtener("usuario:1")); // Debe retornar: null o undefined


// EJERCICIO 13: Implementar un sistema de traducción bidireccional
// Crea una clase Traductor que permita traducir palabras de un idioma a otro en ambos sentidos.

class Traductor {
    constructor(){
        this.espanolAingles = new Map();
        this.inglesAespanol = new Map();
    }
    agregarPalabra(ingles, espanol){
        this.inglesAespanol.set(ingles, espanol);
        this.espanolAingles.set(espanol, ingles);
    }

    traducir(palabra, destino){
        let palabraDestino;
        if(destino == 'es'){
            palabraDestino = this.inglesAespanol.get(palabra);
        }else{
            palabraDestino = this.espanolAingles.get(palabra);
        }
        return palabraDestino;
    }
}

const traductor = new Traductor();
traductor.agregarPalabra("hello", "hola");
traductor.agregarPalabra("goodbye", "adiós");

console.log(traductor.traducir("hello", "es")); // Debe retornar: "hola"
console.log(traductor.traducir("adiós", "en")); // Debe retornar: "goodbye"


// EJERCICIO 14: Crear un sistema de registros (logs) con timestamp
// Implementa una clase Logger que use un Map para almacenar mensajes con su timestamp.
// Debe permitir agregar mensajes y mostrar el historial.

class Logger {
    constructor(){
        this.registro = new Map();
    }
    log(log){
        let timestamp = new Date().toISOString();
        let mensaje = log;
        this.registro.set(timestamp, mensaje);
    }
    obtenerHistorial(){
        const historial = [];
        for(let [timestamp, mensaje] of this.registro){
            historial.push({timestamp, mensaje});
        }
        return historial;
    }
}

const logger = new Logger();
logger.log("Aplicación iniciada");
// Espera un poco
setTimeout(() => {
    logger.log("Usuario autenticado");
    console.log(logger.obtenerHistorial());
    // Debe mostrar algo como:
    // [
    //   { timestamp: '2025-04-16T10:30:15.123Z', mensaje: 'Aplicación iniciada' },
    //   { timestamp: '2025-04-16T10:30:16.456Z', mensaje: 'Usuario autenticado' }
    // ]
}, 1000);


// EJERCICIO 15: Implementar un sistema de votación
// Crea una clase SistemaVotacion que permita votar por diferentes opciones y contar los votos.

class SistemaVotacion {
    constructor (Opciones){
        this.Votos = new Map();
        for(const opcion of Opciones){
            this.Votos.set(opcion, 0);
        }
    }

    votar(Opcion){
        let numeroDeVotosAntes = this.Votos.get(Opcion);
        this.Votos.set(Opcion, numeroDeVotosAntes + 1);
    }

    contarVotos(){
        return this.Votos
    }

    obtenerGanador(){
        let maxVotos = -1;
        let opcionGanadora = null;

        for (let [opcion, votos] of this.Votos) {
            if (votos > maxVotos) {
                maxVotos = votos;
                opcionGanadora = opcion;
            }
        }
        return opcionGanadora;

    }
}

const votacion = new SistemaVotacion(["Opción A", "Opción B", "Opción C"]);
votacion.votar("Opción A");
votacion.votar("Opción B");
votacion.votar("Opción A");
votacion.votar("Opción C");
votacion.votar("Opción A");

console.log(votacion.contarVotos()); 
// Debe retornar: Map(3) { 'Opción A' => 3, 'Opción B' => 1, 'Opción C' => 1 }
console.log(votacion.obtenerGanador()); // Debe retornar: "Opción A"


// EJERCICIO 16: Crear un sistema de plugins
// Implementa un gestor de plugins que permita registrar, activar, desactivar y ejecutar plugins.

class GestorPlugins {
    // Tu código aquí
}

const gestor = new GestorPlugins();
gestor.registrar("logger", () => console.log("Plugin de logs ejecutado"));
gestor.registrar("formatter", () => console.log("Plugin de formato ejecutado"));
gestor.activar("logger");
gestor.ejecutar("logger"); // Debe imprimir: "Plugin de logs ejecutado"
gestor.ejecutar("formatter"); // Debe imprimir un error o mensaje indicando que no está activo
gestor.desactivar("logger");
gestor.ejecutar("logger"); // Debe imprimir un error o mensaje indicando que no está activo


// EJERCICIO 17: Implementar un grafo dirigido simple usando Map
// Crea una clase Grafo que permita añadir nodos, conectarlos con aristas y recorrer el grafo.

class Grafo {
    // Tu código aquí
}

const grafo = new Grafo();
grafo.agregarNodo("A");
grafo.agregarNodo("B");
grafo.agregarNodo("C");
grafo.conectar("A", "B");
grafo.conectar("B", "C");
grafo.conectar("C", "A");

console.log(grafo.adyacentes("A")); // Debe retornar: ["B"]
console.log(grafo.existeRuta("A", "C")); // Debe retornar: true


// EJERCICIO 18: Implementar un sistema de caché LRU (Least Recently Used)
// Crea una clase LRUCache con un límite de capacidad que elimine automáticamente
// los elementos menos usados recientemente cuando se alcanza la capacidad.

class LRUCache {
    // Tu código aquí
}

const lruCache = new LRUCache(3);
lruCache.put("A", 1);
lruCache.put("B", 2);
lruCache.put("C", 3);
console.log(lruCache.get("A")); // Debe retornar: 1 (y A se convierte en el más reciente)
lruCache.put("D", 4); // Debe eliminar B (el menos usado) y añadir D
console.log(lruCache.get("B")); // Debe retornar: undefined o null
console.log(lruCache.get("C")); // Debe retornar: 3
console.log(lruCache.get("D")); // Debe retornar: 4


// EJERCICIO 19: Sistema de permisos por rol
// Implementa un sistema que use Map para asignar permisos a diferentes roles
// y verificar si un usuario con cierto rol tiene un permiso específico.

class SistemaPermisos {
    // Tu código aquí
}

const permisos = new SistemaPermisos();
permisos.agregarRol("admin", ["leer", "escribir", "eliminar"]);
permisos.agregarRol("editor", ["leer", "escribir"]);
permisos.agregarRol("lector", ["leer"]);

console.log(permisos.tienePermiso("admin", "eliminar")); // Debe retornar: true
console.log(permisos.tienePermiso("editor", "eliminar")); // Debe retornar: false
console.log(permisos.tienePermiso("lector", "leer")); // Debe retornar: true


// EJERCICIO 20: Crear un enrutador simple
// Implementa una clase Enrutador que use Map para asociar rutas con funciones manejadoras.

class Enrutador {
    // Tu código aquí
}

const enrutador = new Enrutador();

enrutador.agregarRuta("/inicio", () => "Página de inicio");
enrutador.agregarRuta("/contacto", () => "Página de contacto");
enrutador.agregarRuta("/perfil/:id", (params) => `Perfil del usuario ${params.id}`);

console.log(enrutador.manejarSolicitud("/inicio")); // Debe retornar: "Página de inicio"
console.log(enrutador.manejarSolicitud("/perfil/123")); // Debe retornar: "Perfil del usuario 123"
console.log(enrutador.manejarSolicitud("/noexiste")); // Debe retornar un mensaje de error o undefined