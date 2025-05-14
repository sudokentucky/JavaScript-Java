package Java.POO;

import java.util.Scanner;

public class Interfaces {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int opcion;

        do {
            mostrarMenu();
            System.out.print("Selecciona un módulo (0 para salir): ");
            opcion = scanner.nextInt();
            scanner.nextLine();

            switch (opcion) {
                case 1 -> modulo1();
                case 2 -> modulo2();
                case 3 -> modulo3();
                case 4 -> modulo4();
                case 5 -> modulo5();
                case 6 -> modulo6();
                case 7 -> modulo7();
                case 0 -> System.out.println("Saliendo del programa...");
                default -> System.out.println("Opción no válida. Intenta de nuevo.");
            }

            System.out.println("\n--- Presiona Enter para continuar ---");
            scanner.nextLine();
        } while (opcion != 0);

        scanner.close();
    }

    private static void mostrarMenu() {
        System.out.println("\n===== MENÚ DE INTERFACES EN JAVA =====");
        System.out.println("1. ¿Qué es una interfaz?");
        System.out.println("2. Sintaxis y ejemplo básico");
        System.out.println("3. Implementación en múltiples clases");
        System.out.println("4. Métodos default y static");
        System.out.println("5. Herencia múltiple con interfaces");
        System.out.println("6. Uso real: sistema de pagos");
        System.out.println("7. Buenas prácticas y cuándo usar interfaces");
        System.out.println("0. Salir");
    }

    private static void modulo1() {
        /*
         * ===== MÓDULO 1: ¿QUÉ ES UNA INTERFAZ? =====
         * Una interfaz es un contrato: define qué debe hacer una clase, no cómo.
         * No tiene lógica interna en sus métodos (salvo default o static).
         * Las variables son constantes públicas por defecto.
         */
        System.out.println("Una interfaz es un contrato que define métodos que una clase debe implementar.");
    }

    private static void modulo2() {
        /*
         * ===== MÓDULO 2: SINTAXIS Y EJEMPLO BÁSICO =====
         */
        System.out.println("interface Vehiculo { void acelerar(); }");
        System.out.println("class Auto implements Vehiculo {");
        System.out.println("   public void acelerar() { System.out.println(\"Acelerando...\"); }");
        System.out.println("}");
    }

    private static void modulo3() {
        /*
         * ===== MÓDULO 3: IMPLEMENTACIÓN EN MÚLTIPLES CLASES =====
         */
        System.out.println("Varias clases pueden implementar la misma interfaz:");
        System.out.println("- Coche, Moto, Bicicleta pueden implementar Vehiculo");
        System.out.println("- Cada una define su propio comportamiento del método acelerar()");
    }

    private static void modulo4() {
        /*
         * ===== MÓDULO 4: MÉTODOS DEFAULT Y STATIC (JDK 8+) =====
         */
        System.out.println("Desde Java 8, puedes usar:");
        System.out.println("- Métodos default: tienen implementación en la interfaz.");
        System.out.println("- Métodos static: se llaman desde la interfaz directamente.");
        System.out.println("Ejemplo:");
        System.out.println("default void info() { System.out.println(\"Vehículo base\"); }");
    }

    private static void modulo5() {
        /*
         * ===== MÓDULO 5: HERENCIA MÚLTIPLE CON INTERFACES =====
         */
        System.out.println("Una clase puede implementar múltiples interfaces:");
        System.out.println("interface A { void metodoA(); }");
        System.out.println("interface B { void metodoB(); }");
        System.out.println("class C implements A, B { ... }");
    }

    private static void modulo6() {
        /*
         * ===== MÓDULO 6: CASO DE USO REAL - SISTEMA DE PAGOS =====
         */
        System.out.println("interface MetodoPago {");
        System.out.println("  void procesarPago(double monto);");
        System.out.println("  String obtenerMetodo();");
        System.out.println("}");
        System.out.println("Implementaciones: TarjetaCredito, PayPal, Transferencia");
        System.out.println("Cada clase procesa el pago con su propia lógica.");
    }

    private static void modulo7() {
        /*
         * ===== MÓDULO 7: BUENAS PRÁCTICAS =====
         * - Usa interfaces cuando varias clases deben compartir un comportamiento.
         * - Nombra claramente los métodos y evita lógica compleja dentro de default.
         * - Aplica interfaces en sistemas donde puedes cambiar la implementación fácilmente.
         */
        System.out.println("✅ Usa interfaces cuando quieras flexibilidad y desacoplamiento entre clases.");
    }
}
