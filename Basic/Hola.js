/**
 * TUTORIAL BÁSICO DE JAVASCRIPT
 * Siguiendo buenas prácticas de programación
 */

// ==========================================
// 1. VARIABLES Y TIPOS DE DATOS
// ==========================================

// Uso de const para valores que no cambian (preferido)
const PI = 3.14159;
const DIAS_SEMANA = 7;

// Uso de let para variables que pueden cambiar
let contador = 0;
let nombre = 'Usuario';

// Evitar var (ámbito de función en lugar de bloque)
// ❌ var edad = 25;  // No recomendado

// Tipos de datos básicos
const entero = 42;             // Number (entero)
const decimal = 3.14;          // Number (decimal)
const texto = 'Hola mundo';    // String (texto)
const esActivo = true;         // Boolean (booleano)
const noDefinido = undefined;  // Undefined
const nulo = null;             // Null
const arreglo = [1, 2, 3];     // Array (arreglo)
const objeto = {               // Object (objeto)
  nombre: 'JavaScript',
  año: 1995
};

// Usar nombres descriptivos con camelCase
const precioUnitario = 29.99;
const nombreCompleto = 'Juan Pérez';

// ==========================================
// 2. FUNCIONES
// ==========================================

// Función de flecha (arrow function) - Preferida para funciones anónimas
const sumar = (a, b) => {
  return a + b;
};

// Versión simplificada cuando solo hay un return
const multiplicar = (a, b) => a * b;

// Función tradicional - Útil cuando se necesita this o arguments
function saludar(nombre) {
  return `¡Hola, ${nombre}!`;
}

// Parámetros por defecto
const crearUsuario = (nombre, edad = 18, activo = true) => {
  return {
    nombre,  // Propiedad abreviada (equivalente a nombre: nombre)
    edad,
    activo
  };
};

// ==========================================
// 3. ESTRUCTURAS DE CONTROL
// ==========================================

// Condicionales - Usar siempre llaves para bloques
const evaluarPuntaje = (puntaje) => {
  if (puntaje >= 90) {
    return 'Excelente';
  } else if (puntaje >= 70) {
    return 'Bueno';
  } else if (puntaje >= 50) {
    return 'Regular';
  } else {
    return 'Insuficiente';
  }
};

// Operador ternario para condiciones simples
const esMayorDeEdad = (edad) => (edad >= 18) ? 'Adulto' : 'Menor';

// Bucles
const imprimirNumeros = (max) => {
  // For tradicional
  for (let i = 0; i < max; i++) {
    console.log(`Número: ${i}`);
  }
};

// For...of para iterar elementos de un array
const procesarFrutas = (frutas) => {
  for (const fruta of frutas) {
    console.log(`Procesando: ${fruta}`);
  }
};

// ==========================================
// 4. ARRAYS Y MÉTODOS
// ==========================================

// Manipulación de arrays
const numeros = [1, 2, 3, 4, 5];

// map - Transformar elementos
const duplicados = numeros.map(num => num * 2);

// filter - Filtrar elementos
const mayoresQueDos = numeros.filter(num => num > 2);

// reduce - Acumular valores
const suma = numeros.reduce((total, num) => total + num, 0);

// forEach - Iterar sin crear nuevo array
const imprimirNumero = () => {
  numeros.forEach(num => {
    console.log(`El número es: ${num}`);
  });
};

// ==========================================
// 5. OBJETOS Y DESESTRUCTURACIÓN
// ==========================================

// Crear objetos
const producto = {
  id: 1,
  nombre: 'Laptop',
  precio: 999.99,
  disponible: true,
  especificaciones: {
    marca: 'TechBrand',
    modelo: 'X200',
    año: 2025
  }
};

// Desestructuración de objetos
const obtenerDatosProducto = () => {
  const { nombre, precio, especificaciones } = producto;
  const { marca, modelo } = especificaciones;
  
  console.log(`${nombre} ${marca} ${modelo}: $${precio}`);
};

// Desestructuración en parámetros de función
const mostrarProducto = ({ nombre, precio }) => {
  console.log(`Producto: ${nombre}, Precio: $${precio}`);
};

// ==========================================
// 6. MANEJO DE ERRORES
// ==========================================

const dividir = (a, b) => {
  try {
    if (b === 0) {
      throw new Error('No se puede dividir por cero');
    }
    return a / b;
  } catch (error) {
    console.error(`Error: ${error.message}`);
    return null;
  }
};

// ==========================================
// 7. FUNCIONES ASÍNCRONAS
// ==========================================

// Promesas
const obtenerDatos = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) {
        resolve({ id, nombre: 'Producto ejemplo', precio: 99.99 });
      } else {
        reject(new Error('ID de producto no válido'));
      }
    }, 1000);
  });
};

// Async/Await
const procesarDatosAsync = async (id) => {
  try {
    console.log('Obteniendo datos...');
    const resultado = await obtenerDatos(id);
    console.log('Datos obtenidos:', resultado);
    return resultado;
  } catch (error) {
    console.error('Error al procesar datos:', error.message);
    return null;
  }
};

// ==========================================
// 8. MÓDULOS (ES6)
// ==========================================

// En archivo utilidades.js:
/*
export const formatearPrecio = (precio) => {
  return `$${precio.toFixed(2)}`;
};

export const calcularImpuesto = (precio, tasa = 0.16) => {
  return precio * tasa;
};
*/

// En archivo principal:
/*
import { formatearPrecio, calcularImpuesto } from './utilidades.js';

const precioFinal = formatearPrecio(calcularImpuesto(100));
*/

// ==========================================
// 9. EJEMPLO PRÁCTICO
// ==========================================

// Lista de productos
const productos = [
  { id: 1, nombre: 'Laptop', precio: 999.99, categoria: 'Electrónica' },
  { id: 2, nombre: 'Teléfono', precio: 699.99, categoria: 'Electrónica' },
  { id: 3, nombre: 'Libro', precio: 19.99, categoria: 'Libros' },
  { id: 4, nombre: 'Taza', precio: 5.99, categoria: 'Hogar' },
  { id: 5, nombre: 'Audífonos', precio: 149.99, categoria: 'Electrónica' }
];

// Funciones para manipular los productos
const filtrarPorCategoria = (productos, categoria) => {
  return productos.filter(producto => producto.categoria === categoria);
};

const calcularTotal = (productos) => {
  return productos.reduce((total, producto) => total + producto.precio, 0).toFixed(2);
};

const mostrarProductos = (productos) => {
  console.log('Lista de productos:');
  productos.forEach(({ id, nombre, precio, categoria }) => {
    console.log(`[${id}] ${nombre} - $${precio} (${categoria})`);
  });
  
  const total = calcularTotal(productos);
  console.log(`\nTotal: $${total}`);
};

// Ejecutar ejemplo
const electronicos = filtrarPorCategoria(productos, 'Electrónica');
mostrarProductos(electronicos);

// Salida esperada:
// Lista de productos:
// [1] Laptop - $999.99 (Electrónica)
// [2] Teléfono - $699.99 (Electrónica)
// [5] Audífonos - $149.99 (Electrónica)
//
// Total: $1849.97

// ==========================================
// 10. CONCLUSIONES Y BUENAS PRÁCTICAS
// ==========================================

/*
Resumen de buenas prácticas:
1. Usar const por defecto, let cuando sea necesario, evitar var
2. Usar nombres descriptivos en camelCase
3. Preferir arrow functions para funciones anónimas
4. Usar siempre llaves en estructuras de control
5. Aprovechar métodos de array como map, filter, reduce
6. Manejar errores adecuadamente con try/catch
7. Usar async/await para código asíncrono
8. Comentar el código cuando sea necesario
9. Mantener funciones pequeñas y con propósito único
10. Seguir un estilo consistente en todo el código
*/

// Fin del tutorial básico de JavaScript