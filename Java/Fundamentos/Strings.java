package Java.Fundamentos;

import java.util.List;
import java.util.Scanner;

public class Strings {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int opcion;

        do {
            mostrarMenu();
            System.out.print("Selecciona un módulo (0 para salir): ");
            opcion = scanner.nextInt();
            scanner.nextLine(); // limpiar buffer

            switch (opcion) {
                case 1 -> modulo1();
                case 2 -> modulo2();
                case 3 -> modulo3();
                case 4 -> modulo4();
                case 5 -> modulo5();
                case 6 -> modulo6();
                case 7 -> modulo7();
                case 8 -> modulo8();
                case 9 -> modulo9();
                case 10 -> modulo10();
                case 11 -> modulo11();
                case 0 -> System.out.println("Saliendo del programa...");
                default -> System.out.println("Opción no válida. Intenta de nuevo.");
            }

            System.out.println("\n--- Presiona Enter para continuar ---");
            scanner.nextLine(); // pausa
        } while (opcion != 0);

        scanner.close();
    }

    private static void mostrarMenu() {
        System.out.println("\n===== MENÚ DE STRINGS EN JAVA =====");
        System.out.println("1. ¿Qué es un String?");
        System.out.println("2. Métodos básicos: length(), charAt(), substring()");
        System.out.println("3. Recorrido con for y for-each");
        System.out.println("4. Comparaciones: equals(), equalsIgnoreCase(), compareTo()");
        System.out.println("5. Búsqueda y validaciones: contains(), indexOf(), startsWith(), endsWith()");
        System.out.println("6. Transformaciones: toUpperCase(), toLowerCase(), trim()");
        System.out.println("7. División y reemplazo: split(), replace()");
        System.out.println("8. Conversión y casting: String.valueOf(), parseInt(), concatenación");
        System.out.println("9. Casos prácticos y errores comunes");
        System.out.println("10. StringBuilder y StringBuffer");
        System.out.println("11. Expresiones regulares con Strings");
        System.out.println("0. Salir");
    }

    private static void modulo1() {
        /*
         * ===== MÓDULO 1: ¿QUÉ ES UN STRING? =====
         * - Un String en Java es un objeto que representa una secuencia de caracteres.
         * - Es inmutable: no se puede modificar su contenido original, solo crear
         * nuevos.
         * - Se declara con comillas dobles: String saludo = "Hola";
         */
        String ejemplo = "Hola";
        System.out.println("Ejemplo de String: " + ejemplo);
    }

    private static void modulo2() {
        /*
         * ===== MÓDULO 2: MÉTODOS BÁSICOS =====
         * - .length() devuelve la longitud
         * - .charAt(i) accede al carácter en la posición i
         * - .substring(inicio, fin) devuelve una subcadena
         */
        String texto = "Programación";
        System.out.println("Longitud: " + texto.length());
        System.out.println("Primer carácter: " + texto.charAt(0));
        System.out.println("Subcadena (0,5): " + texto.substring(0, 5));
    }

    private static void modulo3() {
        /*
         * ===== MÓDULO 3: RECORRIDO DE STRINGS =====
         * - Puedes recorrer un String con un bucle for
         */
        String palabra = "Java";
        System.out.println("Recorrido con for:");
        for (int i = 0; i < palabra.length(); i++) {
            System.out.println(palabra.charAt(i));
        }
        System.out.println("Recorrido con for-each:");
        for (char letra : palabra.toCharArray()) {
            System.out.println(letra);
        }
    }

    private static void modulo4() {
        /*
         * ===== MÓDULO 4: COMPARACIONES =====
         * - .equals() compara con distinción de mayúsculas
         * - .equalsIgnoreCase() compara sin distinción
         * - .compareTo() devuelve 0 si son iguales, negativo o positivo según orden
         * alfabético
         */
        String a = "Java";
        String b = "java";
        System.out.println("equals(): " + a.equals(b));
        System.out.println("equalsIgnoreCase(): " + a.equalsIgnoreCase(b));
        System.out.println("compareTo(): " + a.compareTo(b));
    }

    private static void modulo5() {
        /*
         * ===== MÓDULO 5: BÚSQUEDA Y VALIDACIÓN =====
         * - .contains("texto")
         * - .indexOf("carácter o palabra")
         * - .startsWith(), .endsWith()
         */
        String mensaje = "Bienvenido a Java";
        System.out.println("Contiene 'Java'? " + mensaje.contains("Java"));
        System.out.println("Posición de 'a': " + mensaje.indexOf('a'));
        System.out.println("¿Empieza con 'Bien'? " + mensaje.startsWith("Bien"));
        System.out.println("¿Termina con 'Java'? " + mensaje.endsWith("Java"));
    }

    private static void modulo6() {
        /*
         * ===== MÓDULO 6: TRANSFORMACIONES =====
         * - .toUpperCase(), .toLowerCase(), .trim()
         */
        String original = "  hola Mundo  ";
        System.out.println("Mayúsculas: " + original.toUpperCase());
        System.out.println("Minúsculas: " + original.toLowerCase());
        System.out.println("Sin espacios extremos: '" + original.trim() + "'");
    }

    private static void modulo7() {
        /*
         * ===== MÓDULO 7: SPLIT Y REEMPLAZO =====
         * - .split(" ") divide por espacios (u otro patrón)
         * - .replace('a', '@') reemplaza caracteres
         */
        String frase = "Java es divertido";
        String[] palabras = frase.split(" ");
        System.out.println("Palabras separadas:");
        for (String p : palabras) {
            System.out.println(p);
        }
        System.out.println("Reemplazo: " + frase.replace("a", "@"));
    }

    private static void modulo8() {
        /*
         * ===== MÓDULO 8: CONVERSIÓN Y CASTING =====
         * - String.valueOf(numero) → convierte a texto
         * - Integer.parseInt("123") → convierte a entero
         * - Concatenación con + o .concat()
         */
        int edad = 25;
        String edadTexto = String.valueOf(edad);
        System.out.println("Edad como texto: " + edadTexto);

        String numeroStr = "123";
        int numero = Integer.parseInt(numeroStr);
        System.out.println("Texto convertido a entero: " + (numero + 1));

        String saludo = "Hola";
        String nombre = "Daniel";
        System.out.println(saludo + " " + nombre);
        System.out.println(saludo.concat(" ").concat(nombre));
    }

    private static void modulo9() {
        /*
         * ===== MÓDULO 9: CASOS PRÁCTICOS Y ERRORES COMUNES =====
         * - Comparar Strings con == da error lógico, usar .equals()
         * - Siempre validar nulidad antes de usar métodos: texto != null &&
         * texto.contains(...)
         * - .split() puede fallar si no manejas expresiones regulares correctamente
         */
        String a = "Java";
        String b = new String("Java");
        System.out.println("a == b: " + (a == b)); // false
        System.out.println("a.equals(b): " + a.equals(b)); // true
    }

    private static void modulo10() {
        /*
         * ===== MÓDULO 10: STRINGBUILDER Y STRINGBUFFER =====
         * - StringBuilder y StringBuffer son clases para manipular cadenas de forma
         * mutable.
         * - StringBuilder no es thread-safe, pero es más eficiente.
         */
        StringBuilder sb = new StringBuilder();
        sb.append("Hola");
        sb.append(" ").append("Mundo");
        System.out.println("Concatenación mutable: " + sb.toString());
        sb.insert(5, " Java");
        System.out.println("Insertar texto: " + sb.toString());
        sb.delete(5, 10);
        System.out.println("Eliminar texto: " + sb.toString());
        // Ejemplo con StringBuffer (thread-safe)
        StringBuffer sBuf = new StringBuffer("Buffer");
        sBuf.append(" seguro");
        System.out.println("StringBuffer: " + sBuf.toString());
    }

    private static void modulo11() {
        /*
         * ===== MÓDULO 11: EXPRESIONES REGULARES CON STRINGS =====
         * - matches(): comprueba si toda la cadena coincide con el patrón.
         * - replaceAll(): reemplaza todas las coincidencias.
         */
        String email = "usuario@ejemplo.com";
        boolean valido = email.matches("^[\\w.-]+@[\\w.-]+\\.[a-zA-Z]{2,6}$");
        System.out.println("Email válido? " + valido);
        String texto = "Java es genial. Java es potente.";
        String reemplazado = texto.replaceAll("Java", "Python");
        System.out.println("Texto modificado: " + reemplazado);
    }

    /*
     * === PATRONES MÁS COMUNES EN EXPRESIONES REGULARES ===
     *
     * \\s → Cualquier espacio en blanco (espacio, tab, newline)
     * \\S → Cualquier carácter que NO sea espacio
     * \\t → Tabulación
     * \\n → Nueva línea (line break)
     * \\d → Dígito (equivale a [0-9])
     * \\D → No dígito
     * \\w → Caracter de palabra (letras, números, guion bajo)
     * \\W → No palabra
     * \\b → Límite de palabra (inicio o fin de palabra)
     * . → Cualquier carácter excepto salto de línea
     * + → Uno o más del patrón anterior
     * * → Cero o más del patrón anterior
     * ? → Cero o uno del patrón anterior
     * [] → Conjunto de caracteres permitidos (ej. [aeiou])
     * [^] → Conjunto negado (ej. [^0-9] = todo excepto números)
     * ^ → Inicio de línea
     * $ → Fin de línea
     */

    // === Ejemplo de uso básico con split ===
    public class RegexDemo {
        public static void main(String[] args) {
            String texto = "Hola   mundo\testo es\tojito";

            System.out.println("Split con espacio simple:");
            for (String palabra : texto.split(" ")) {
                System.out.println("[" + palabra + "]");
            }

            System.out.println("\nSplit con \\s+: (maneja múltiples espacios, tabs, etc)");
            for (String palabra : texto.split("\\s+")) {
                System.out.println("[" + palabra + "]");
            }
        }
    }

    public static int divisibleSumPairs(int n, int k, List<Integer> ar) {
        // Write your code here
        int contador = 0;
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                if ((ar.get(i) + ar.get(j)) % k == 0) {
                    contador++;
                }
            }
        }

        return contador;

    }

}
