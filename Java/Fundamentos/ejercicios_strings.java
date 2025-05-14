package Java.Fundamentos;

import java.util.Scanner;

public class ejercicios_strings {

    // ===============================
    // MÓDULO 1: INTRODUCCIÓN A STRINGS
    // ===============================
    // En Java, los Strings no son tipos primitivos sino objetos de la clase String.
    // Son inmutables, lo que significa que no se pueden modificar directamente.

    // EJERCICIO 1: Mostrar longitud y primer carácter
    // Enunciado: Recibe un String e imprime su longitud y su primer carácter.
    public static void mostrarInfoBasica(String texto) {
        // TODO: Usa .length() y .charAt(0)
        System.out.println("Longitud" + texto.length());
        System.out.println("Primer Caracter" + texto.charAt(0));
    }

    // EJERCICIO 2: Comparar dos Strings
    // Enunciado: Compara dos strings y retorna si son iguales (ignora mayúsculas).
    public static boolean compararStrings(String a, String b) {
        // TODO: Usa .equalsIgnoreCase() para comparar sin distinguir mayúsculas
        if (a.compareToIgnoreCase(b) == 0) {
            System.out.println("Son iguales");
            return true;
        }
        System.out.println("No son iguales");
        return false;
    }

    // ===================================
    // MÓDULO 2: RECORRIDO Y MANIPULACIÓN
    // ===================================
    // Puedes recorrer un String como un array de caracteres con un bucle for.

    // EJERCICIO 3: Contar vocales en un texto
    // Enunciado: Cuenta cuántas vocales tiene un String.
    public static int contarVocales(String texto) {
        int contador = 0;
        // TODO: Recorre con un for y usa charAt(i). Convierte a minúscula para comparar
        for (char letra : texto.toLowerCase().toCharArray()) {
            switch (letra) {
                case 'a':
                    System.out.println("contiene a");
                    contador++;
                    break;
                case 'e':
                    System.out.println("contine e");
                    contador++;
                    break;
                case 'i':
                    System.out.println("contiene i");
                    contador++;
                    break;
                case 'o':
                    System.out.println("contiene o");
                    contador++;
                    break;
                case 'u':
                    System.out.println("contiene u");
                    contador++;
                    break;
            }
        }
        System.out.println("La palabra "+ texto+" contiene "+ contador + " vocales");
        return contador;
    }
    // EJERCICIO 4: Invertir un String
    // Enunciado: Imprime los caracteres del String en orden inverso.
    public static String invertir(String texto) {
        StringBuilder textoInvertido = new StringBuilder();
        // TODO: Recorre de atrás hacia adelante y arma un nuevo String
        for(int i = texto.length() -1 ; i>=0; i--){
            textoInvertido.append(texto.charAt(i));
        }
        return textoInvertido.toString();
    }

    // ============================================
    // MÓDULO 3: MÉTODOS ÚTILES DE LA CLASE STRING
    // ============================================

    // EJERCICIO 5: Reemplazar caracteres
    // Enunciado: Reemplaza todas las 'a' por '@' en el String.
    public static String reemplazarA(String texto) {
            // TODO: Versión sensible a mayúsculas (solo 'a')
            // TODO: Versión insensible a mayúsculas (tanto 'a' como 'A')
        String textoNuevo = "";
        textoNuevo = texto.replace('a', '@').replace('A', '@');
        return textoNuevo;
    }

    // EJERCICIO 6: Separar palabras
    // Enunciado: Separa las palabras de una frase y las imprime una por línea.
    public static void imprimirPalabras(String frase) {
        // TODO: Usa .split(" ") y recorre el array resultante
        String[] palabras = frase.split("\\s+");
        for(String palabra: palabras){
            System.out.println(palabra);
        }
    }

    // EJERCICIO 7: Convertir texto
    // Enunciado: Imprime el texto en mayúsculas, minúsculas y sin espacios.
    public static void transformarTexto(String texto) {
        // TODO: Usa .toUpperCase(), .toLowerCase(), y .replace(" ", "")
        System.out.println(texto.toUpperCase());
        System.out.println(texto.toLowerCase());
        System.out.println(texto.replace("\\s", ""));
    }

    // ======================================
    // MÓDULO 4: BÚSQUEDA Y VALIDACIÓN BÁSICA
    // ======================================

    // EJERCICIO 8: Buscar palabra clave
    // Enunciado: Verifica si un texto contiene la palabra "Java".
    public static boolean contieneJava(String texto) {
        // TODO: Usa .toLowerCase().contains("java")
        return texto.toLowerCase().contains("java");
    }

    // EJERCICIO 9: Validar correo electrónico
    // Enunciado: Verifica si un texto contiene un "@" y un "." para simular
    // validación básica.
    public static boolean validarCorreo(String correo) {
        // TODO: Usa .contains("@") y .contains(".")
        return correo.contains("@") && correo.contains(".");
    }

    // EJERCICIO 10: Palíndromo
    // Enunciado: Determina si una palabra es un palíndromo (se lee igual al revés). Ejemplo radar
    public static boolean esPalindromo(String texto) {
        // TODO: Compara el texto con su reverso. Elimina espacios y pasa todo a minúsculas
        return (new StringBuilder(texto.toLowerCase()).reverse().toString().equals(texto.toLowerCase()));
    }

    public static boolean esPalindromoconWhile(String texto) {
        texto = texto.toLowerCase().replaceAll("\\s+", ""); 
    
        int i = 0;
        int j = texto.length() - 1;
    
        while (i < j) {
            if (texto.charAt(i) != texto.charAt(j)) {
                return false; // Si no coinciden, ya no es palíndromo
            }
            i++; 
            j--; 
        }
    
        return true; // Si nunca falló la comparación, es palíndromo
    }
    

    // MÓDULO 5: COMPARACIONES
    // EJERCICIO 11: Comparación lexicográfica con compareTo
    public static int compararLexico(String a, String b) {
        // TODO: Usa compareTo() para determinar el orden lexicográfico de a y b
        return a.compareTo(b);
    }

    // MÓDULO 6: TRANSFORMACIONES
    // EJERCICIO 12: Transformaciones de texto
    public static void transformaciones(String texto) {
        System.out.println("Original: '" + texto + "'");
        System.out.println("Mayúsculas: '" + texto.toUpperCase() + "'");
        System.out.println("Minúsculas: '" + texto.toLowerCase() + "'");
        System.out.println("Sin espacios extremos: '" + texto.trim() + "'");
    }
    
// MÓDULO 7: DIVISIÓN Y REEMPLAZO
// ==============================

// EJERCICIO 13: Split y replace
// -----------------------------
// - Separar las palabras de una frase sin importar si hay uno o varios espacios entre ellas.
// - Retornar un arreglo con las palabras resultantes.
//
// Ejemplo de entrada:
// dividirTexto("Hola    mundo desde    Java");
//
// Salida esperada:
// ["Hola", "mundo", "desde", "Java"]

public static String[] dividirTexto(String frase) {
    // TODO: Usa split("\\s+") para separar las palabras y retorna el array
    return frase.trim().split("\\s+");
}

    public static String reemplazoCaracteres(String texto) {
        // TODO: Usa replace() y replaceAll() para diferentes transformaciones
        return "";
    }

    // MÓDULO 8: CONVERSIÓN Y CONCATENACIÓN
    // EJERCICIO 14: Convertir tipos y concatenar
    public static String conversionYCatenacion(int numero, String texto) {
        // TODO: Usa String.valueOf(numero), Integer.parseInt(), concat() y retorna el
        // resultado
        return "";
    }

    // MÓDULO 9: CASOS PRÁCTICOS Y ERRORES COMUNES
    // EJERCICIO 15: Comparación con == vs equals y validación nula
    public static boolean comparacionEInstancias(String a, String b) {
        // TODO: Verifica null antes y compara usando == y equals(), explica diferencias
        return false;
    }

    // MÓDULO 10: STRINGBUILDER Y STRINGBUFFER
    // EJERCICIO 16: Uso de StringBuilder para concatenar partes
    public static String builderEjemplo(String[] partes) {
        // TODO: Usa StringBuilder para concatenar el array de Strings y devuelve el
        // resultado
        return "";
    }

    // MÓDULO 11: EXPRESIONES REGULARES
// EJERCICIO 17: Validar formato con regex
// ---------------------------------------
// - Valida que el texto cumpla con una expresión regular específica
// - Usa .matches() para hacer la comparación completa
//
// Ejemplo de entrada:
// validarConRegex("abc123", "[a-z]+\\d+");
//
// Salida esperada:
// true
public static boolean validarConRegex(String texto, String regex) {
    // TODO: Usa matches() para validar texto contra la expresión regular
    return texto.matches(regex);
}


    // ======================
    // Método main de prueba
    // ======================
    public static void main(String[] args) {
        // Aquí puedes probar los ejercicios manualmente
        Scanner sc = new Scanner(System.in);
        System.out.print("Escribe una palabra: ");
        String palabra = sc.nextLine();

        mostrarInfoBasica(palabra);
        invertir(palabra);
    }
}
