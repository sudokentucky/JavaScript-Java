package Java.Fundamentos;

import java.util.Scanner;

public class Bucles {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int opcion;

        do {
            mostrarMenu();
            System.out.print("Selecciona un módulo (0 para salir): ");
            opcion = scanner.nextInt();

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
                case 11 -> modulo11(scanner);
                case 12 -> modulo12();
                case 13 -> modulo13();
                case 14 -> modulo14();
                case 0 -> System.out.println("Saliendo del programa...");
                default -> System.out.println("Opción no válida. Intenta de nuevo.");
            }

            System.out.println("\n--- Presiona Enter para continuar ---");
            scanner.nextLine(); // consumir salto pendiente
            scanner.nextLine(); // pausa
        } while (opcion != 0);

        scanner.close();
    }

    private static void mostrarMenu() {
        System.out.println("\n===== MENÚ DE BUCLES EN JAVA =====");
        System.out.println("1. Introducción a los Bucles");
        System.out.println("2. Bucle for");
        System.out.println("3. Bucle while");
        System.out.println("4. Bucle do-while");
        System.out.println("5. Sentencias break y continue");
        System.out.println("6. Bucle for-each");
        System.out.println("7. Bucle for con múltiples variables");
        System.out.println("8. Bucle for inverso");
        System.out.println("9. For con saltos personalizados");
        System.out.println("10. Bucles anidados y break con etiquetas");
        System.out.println("11. Validación de entrada (Scanner)");
        System.out.println("12. Menú simulado con do-while");
        System.out.println("13. Buenas prácticas");
        System.out.println("14. Casos prácticos");
        System.out.println("0. Salir");
    }

    private static void modulo1() {
        /*
         * ===== MÓDULO 1: INTRODUCCIÓN A LOS BUCLES =====
         *
         * ¿Por qué usar bucles?
         * - Permiten ejecutar una serie de instrucciones múltiples veces sin repetir código.
         * - Son fundamentales para recorrer estructuras como arrays o repetir tareas bajo una condición.
         *
         * Ejemplo clásico: sumar los números del 1 al 5 sin bucles sería repetitivo.
         */
        System.out.println(1);
        System.out.println(1 + 2);
        System.out.println(1 + 2 + 3);
        System.out.println(1 + 2 + 3 + 4);
        System.out.println(1 + 2 + 3 + 4 + 5);

        int suma = 0;
        for (int i = 1; i <= 5; i++) {
            suma += i;
            System.out.println("La suma hasta " + i + " es: " + suma);
        }
    }

    private static void modulo2() {
        /*
         * ===== MÓDULO 2: EL BUCLE FOR =====
         *
         * Se usa cuando sabemos cuántas veces queremos repetir algo.
         *
         * Sintaxis:
         * for (inicialización; condición; incremento/decremento) {
         *     // bloque de instrucciones
         * }
         *
         * Ejemplo: imprimir del 0 al 4
         */
        for (int i = 0; i < 5; i++) {
            System.out.println("Iteración " + (i + 1) + ": i = " + i);
        }
    }

    private static void modulo3() {
        /*
         * ===== MÓDULO 3: EL BUCLE WHILE =====
         *
         * Se usa cuando no sabemos cuántas veces repetiremos, pero tenemos una condición que lo controla.
         *
         * Sintaxis:
         * while (condición) {
         *     // bloque de instrucciones
         * }
         *
         * Ejemplo: imprimir del 0 al 4
         */
        int contador = 0;
        while (contador < 5) {
            System.out.println("Iteración " + (contador + 1) + ": contador = " + contador);
            contador++;
        }
    }

    private static void modulo4() {
        /*
         * ===== MÓDULO 4: EL BUCLE DO-WHILE =====
         *
         * Igual que while, pero garantiza al menos una ejecución del bloque.
         *
         * Sintaxis:
         * do {
         *     // bloque de instrucciones
         * } while (condición);
         *
         * Ejemplo: imprimir del 0 al 4
         */
        int j = 0;
        do {
            System.out.println("Iteración " + (j + 1) + ": j = " + j);
            j++;
        } while (j < 5);
    }

    private static void modulo5() {
        /*
         * ===== MÓDULO 5: BREAK Y CONTINUE =====
         *
         * - break: sale inmediatamente del bucle en curso.
         * - continue: salta a la siguiente iteración del bucle.
         *
         * Útiles para controlar el flujo dentro de un bucle.
         */
        System.out.println("Break en un for:");
        for (int i = 0; i < 10; i++) {
            if (i == 5) {
                System.out.println("Encontrado 5, saliendo del bucle");
                break;
            }
            System.out.println("Número: " + i);
        }

        System.out.println("\nContinue en un for:");
        for (int i = 0; i < 5; i++) {
            if (i == 2) {
                System.out.println("Saltando 2");
                continue;
            }
            System.out.println("Número: " + i);
        }
    }

    private static void modulo6() {
        /*
         * ===== MÓDULO 6: BUCLE FOR-EACH =====
         *
         * Sirve para recorrer elementos de una colección o array de forma simplificada.
         *
         * Sintaxis:
         * for (tipo variable : arreglo) {
         *     // bloque de instrucciones
         * }
         *
         * No permite modificar los elementos ni acceder por índice directamente.
         */
        String[] frutas = {"Manzana", "Banana", "Pera", "Naranja"};
        for (String fruta : frutas) {
            System.out.println("Fruta: " + fruta);
        }
    }

    private static void modulo7() {
        /*
         * ===== MÓDULO 7: BUCLE FOR CON MÚLTIPLES VARIABLES =====
         *
         * Permite usar múltiples variables en la inicialización y actualización.
         *          
         * Ejemplo: imprimir valores de i y j
         */
        for (int i = 0, j = 5; i <= 5; i++, j--) {
            System.out.println("i = " + i + ", j = " + j);
        }
    }

    private static void modulo8() {
        /*
         * ===== MÓDULO 8: BUCLE FOR INVERSO =====
         *
         * Permite recorrer en orden inverso.
         *
         * Ejemplo: cuenta atrás
         */
        for (int i = 5; i >= 0; i--) {
            System.out.println("Cuenta atrás: " + i);
        }
    }

    private static void modulo9() {
        /*
         * ===== MÓDULO 9: FOR CON SALTOS PERSONALIZADOS =====
         *
         * Permite definir saltos personalizados en el incremento.
         *
         * Ejemplo: imprimir números pares
         */
        for (int i = 0; i <= 10; i += 2) {
            System.out.println("Número par: " + i);
        }
    }

    private static void modulo10() {
        /*
         * ===== MÓDULO 10: BUCLES ANIDADOS Y BREAK CON ETIQUETAS =====
         *
         * Permite usar etiquetas para romper bucles anidados.
         *
         * Ejemplo: bucles anidados con break etiquetado
         */
        bucleExterno:
        for (int i = 0; i < 3; i++) {
            System.out.println("Externo: " + i);
            for (int k = 0; k < 3; k++) {
                if (i == 1 && k == 1) {
                    System.out.println("Rompiendo bucle externo en i=1,k=1");
                    break bucleExterno;
                }
                System.out.println("  Interno: " + k);
            }
        }
    }

    private static void modulo11(Scanner scanner) {
        /*
         * ===== MÓDULO 11: VALIDACIÓN DE ENTRADA (Scanner) =====
         *
         * Permite validar la entrada del usuario.
         *
         * Ejemplo: solicitar un entero positivo
         */
        int valor;
        do {
            System.out.print("Ingrese un entero positivo: ");
            valor = scanner.nextInt();
        } while (valor <= 0);
        System.out.println("Número válido: " + valor);
    }

    private static void modulo12() {
        /*
         * ===== MÓDULO 12: MENÚ SIMULADO CON DO-WHILE =====
         *
         * Permite simular un menú con do-while.
         *
         * Ejemplo: menú simulado
         */
        int opcion;
        int iter = 0;
        do {
            iter++;
            System.out.println("MENÚ: 1-Ver, 2-Comprar, 3-Salir");
            opcion = iter == 3 ? 3 : iter; // simulación
            System.out.println("Opción: " + opcion);
        } while (opcion != 3);
        System.out.println("Fin del menú");
    }

    private static void modulo13() {
        /*
         * ===== MÓDULO 13: BUENAS PRÁCTICAS =====
         *
         * Recomendaciones para escribir bucles de manera eficiente.
         */
        System.out.println("- No modificar variable de iteración dentro del bucle");
        System.out.println("- Cachear longitud de arrays cuando sea posible");
        System.out.println("- Elegir el tipo de bucle adecuado según necesidad");
    }

    private static void modulo14() {
        /*
         * ===== MÓDULO 14: CASOS PRÁCTICOS =====
         *
         * Ejemplos prácticos de uso de bucles.
         *
         * Ejemplo: generación de tabla HTML (simulado)
         */
        StringBuilder tabla = new StringBuilder("<table border=\"1\">\n");
        String[][] datos = {{"ID","Nombre"},{"1","Juan"},{"2","Ana"}};
        for (String[] fila : datos) {
            tabla.append("<tr>");
            for (String celda : fila) {
                tabla.append("<td>").append(celda).append("</td>");
            }
            tabla.append("</tr>\n");
        }
        tabla.append("</table>");
        System.out.println(tabla.toString());
    }
}
