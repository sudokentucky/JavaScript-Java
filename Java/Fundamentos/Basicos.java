package Java.Fundamentos;

public class Basicos {
    public static void main(String[] args) {
        // MÓDULO 1: SINTAXIS BÁSICA DE JAVA
        System.out.println("===== MÓDULO 1: SINTAXIS BÁSICA DE JAVA =====");
        System.out.println("Clase pública, método main y llaves para delimitar bloques.");
        System.out.println("Java es sensible a mayúsculas y minúsculas.");
        System.out.println();

        // MÓDULO 2: VARIABLES Y TIPOS PRIMITIVOS
        System.out.println("===== MÓDULO 2: VARIABLES Y TIPOS PRIMITIVOS =====");
        int entero = 10;
        double decimal = 3.14;
        char caracter = 'A';
        boolean bandera = true;
        byte pequeño = 100;
        long largo = 10000000000L;
        float flotante = 2.5f;
        System.out.println("int entero = " + entero);
        System.out.println("double decimal = " + decimal);
        System.out.println("char caracter = " + caracter);
        System.out.println("boolean bandera = " + bandera);
        System.out.println();

        // MÓDULO 3: OPERADORES ARITMÉTICOS
        System.out.println("===== MÓDULO 3: OPERADORES ARITMÉTICOS =====");
        int a = 7, b = 3;
        System.out.println("Suma: a + b = " + (a + b));
        System.out.println("Resta: a - b = " + (a - b));
        System.out.println("Multiplicación: a * b = " + (a * b));
        System.out.println("División: a / b = " + (a / b));
        System.out.println("Módulo: a % b = " + (a % b));
        System.out.println();

        // MÓDULO 4: OPERADORES RELACIONALES Y LÓGICOS
        System.out.println("===== MÓDULO 4: OPERADORES RELACIONALES Y LÓGICOS =====");
        System.out.println("a == b: " + (a == b));
        System.out.println("a != b: " + (a != b));
        System.out.println("a > b: " + (a > b));
        System.out.println("a < b: " + (a < b));
        System.out.println("Condición AND (a > 5 && b < 5): " + (a > 5 && b < 5));
        System.out.println("Condición OR  (a < 5 || b < 5): " + (a < 5 || b < 5));
        System.out.println("Negación: !(a == b): " + !(a == b));
        System.out.println();

        // MÓDULO 5: CONSTANTES
        System.out.println("===== MÓDULO 5: CONSTANTES =====");
        final double PI = 3.14159;
        final String SALUDO = "¡Hola, Java!";
        System.out.println("Constante PI = " + PI);
        System.out.println("Constante SALUDO = " + SALUDO);
        System.out.println();

        // MÓDULO 6: CONVERSIONES Y CASTING
        System.out.println("===== MÓDULO 6: CONVERSIONES Y CASTING =====");
        int numEntero = 5;
        double numDouble = numEntero;                 // conversión implícita
        System.out.println("Conversion implícita int -> double: " + numDouble);
        double otroDouble = 9.78;
        int otroEntero = (int) otroDouble;            // casting explícito
        System.out.println("Casting explícito double -> int: " + otroEntero);
        System.out.println();

        // MÓDULO 7: COMENTARIOS Y BUENAS PRÁCTICAS
        System.out.println("===== MÓDULO 7: COMENTARIOS Y BUENAS PRÁCTICAS =====");
        // Comentario de una línea
        /* Comentario de 
           varias líneas */
        System.out.println("Usa nombres descriptivos y sigue la convención CamelCase.");
    }
}
