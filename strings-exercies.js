//MOD 1
const nombre = "Keneth";
const ciudadFav = 'Japon';
const comidaFav = `Pizza`;

console.log("Me llamo: " + nombre + " me gustaria vivir en: " + ciudadFav + " me gusta comer: " + comidaFav);

//MOD2
const saludo = " ¡Hola JavaScript! "
/* 
1. Elimina los espacios sobrantes al inicio y al final.
2. Convierte el string a mayúsculas.
3. Muestra el carácter en la posición 6.
4. Muestra la longitud del string original.
*/

let SaludoSinEspacios = saludo.trim();
let SaludoEnMayusculas = SaludoSinEspacios.toUpperCase();
let SaludoEnPosicion = saludo.charAt(6);
let LongituSaludo = saludo.length;
console.log(SaludoSinEspacios, SaludoEnMayusculas, SaludoEnPosicion, LongituSaludo);

//MOD3
const frase = "Estoy aprendiendo JavaScript con muchas ganas";
/*
1. Verifica si la frase incluye la palabra "JavaScript".
2. Extrae la palabra "JavaScript" usando slice().
3. ¿La frase empieza con "Estoy"? ¿Termina con "ganas"?
*/
let SeIncluye = frase.includes("JavaScript") ? "Si lo contiene":"No lo contiene";
console.log("la cadena 'JavaScript' esta en la frase? ", SeIncluye)
let indiceFrase = frase.indexOf("JavaScript");
let indiceFinalFrase = frase.indexOf("con");
let extraerPalabra = frase.slice(indiceFrase, indiceFinalFrase-1)
let empiezaTermina = frase.startsWith("Estoy") && frase.endsWith("ganas") ?"Si empieza y termina":"Alguna de las 2 no cumple";
console.log(ExtraerPalabra);
console.log("pregunta 3:", empiezaTermina)

//MOD4
let texto = "Hoy es un buen día para aprender programación";
/*
1. Reemplaza la palabra "programación" por "JavaScript".
2. Divide la frase en palabras y guárdalas en un array.
3. Usa padStart() para convertir el número "5" en "00005". 
*/
let textoModificado = texto.replace("programación", "JavaScript");
let textoEnArray = texto.split(" ");
let textoPadStart = ("42".padStart(5,"0"));
console.log(textoModificado+"\n", textoEnArray, "\n"+textoPadStart)
//MOD5
/*
Crea una función que reciba nombre y edad, y devuelva un string como:
"Hola, soy Ana y tengo 25 años."usando template literals.
(Opcional) Usa una tagged template para resaltar variables como en tu ejemplo highlight.
*/
const NombreEdad = (nombre, edad) =>{
    return console.log(`Hola, soy ${nombre} y tengo ${edad} de edad`)
};
NombreEdad("Keneth", "25")
//MOD6
/*
1. Verifica si los siguientes strings son correos válidos:
"test@gmail.com", "mal@correo", "otro.mail@dominio.co"
usando una expresión regular.
2. Extrae todos los números de este texto:
"En 2025 aprendí JavaScript y en 2024 aprendí HTML"
*/
const texto6 = 'En 2025 aprendí JavaScript y en 2024 aprendí HTML';
const expresionEmail = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
const esCorreoValido = (correo) =>{
    let esValido = expresionEmail.test(correo)?`El correo: ${correo} es valido`:`El correo ${correo} no es valido`;
    return console.log(esValido);
};
esCorreoValido('test@gmail.com');
esCorreoValido("mal@correo");
esCorreoValido('otro.mail@dominio.co');

console.log(texto6.match(/\d{4}/g))

//MOD7
/*
1. Compara "café" y "café" usando normalize() (la segunda tiene tilde como carácter separado).
2. Ordena alfabéticamente este array:
["manzana", "Árbol", "zapato", "árbol", "banana"]
*/
//MOD8
//MOD9
//MOD10
