package Java.Collections;

import java.util.Scanner;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.Vector;
import java.util.Stack;
import java.util.Iterator;
import java.util.ListIterator;

public class List {

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
                case 8 -> modulo8();
                case 9 -> modulo9();
                case 10 -> modulo10();
                case 0 -> System.out.println("Saliendo del programa...");
                default -> System.out.println("Opción no válida. Intenta de nuevo.");
            }

            System.out.println("\n--- Presiona Enter para continuar ---");
            scanner.nextLine();
        } while (opcion != 0);

        scanner.close();
    }

    private static void mostrarMenu() {
        System.out.println("\n===== MENÚ DE LIST INTERFACE EN JAVA =====");
        System.out.println("1. Introducción a List interface");
        System.out.println("2. Sintaxis y creación de instancias");
        System.out.println("3. Métodos básicos: add(), set(), get()");
        System.out.println("4. Búsqueda: indexOf(), lastIndexOf(), contains()");
        System.out.println("5. Eliminación: remove(), clear()");
        System.out.println("6. Iteradores: Iterator y ListIterator");
        System.out.println("7. Implementaciones ArrayList vs LinkedList");
        System.out.println("8. Otras implementaciones: Vector y Stack");
        System.out.println("9. Complejidad y rendimiento");
        System.out.println("10. Buenas prácticas y conclusiones");
        System.out.println("0. Salir");
    }

    private static void modulo1() {
        /*
         * ===== MÓDULO 1: INTRODUCCIÓN A LIST =====
         * - List extiende Collection y mantiene orden de inserción.
         * - Permite duplicados y valores null (según implementación).
         * - Se accede por índice y permite traversal bidireccional con ListIterator.
         */
        System.out.println("Un List es una colección ordenada de elementos, con índice y duplicados permitidos.");
    }

    private static void modulo2() {
        /*
         * ===== MÓDULO 2: SINTAXIS Y CREACIÓN =====
         * List<Obj> list = new ArrayList<>();
         * También: new LinkedList<>(), new Vector<>(), new Stack<>().
         */
        java.util.List<String> lista = new ArrayList<>();
        lista.add("Java");
        lista.add("Python");
        System.out.println("Ejemplo de ArrayList: " + lista);
    }

    private static void modulo3() {
        /*
         * ===== MÓDULO 3: ADD, SET, GET =====
         */
        java.util.List<String> l = new ArrayList<>();
        l.add("Uno");            // al final
        l.add(0, "Cero");        // en índice 0
        System.out.println("Lista tras add(): " + l);
        l.set(1, "Mejor Uno");    // reemplaza elemento en índice
        System.out.println("Elemento en índice 1: " + l.get(1));
        System.out.println("Lista actualizada: " + l);
    }

    private static void modulo4() {
        /*
         * ===== MÓDULO 4: BÚSQUEDA =====
         * - indexOf(obj)
         * - lastIndexOf(obj)
         * - contains(obj)
         */
        java.util.List<String> l = new ArrayList<>();
        l.add("A"); l.add("B"); l.add("A");
        System.out.println("indexOf(A): " + l.indexOf("A"));
        System.out.println("lastIndexOf(A): " + l.lastIndexOf("A"));
        System.out.println("Contiene 'C'? " + l.contains("C"));
    }

    private static void modulo5() {
        /*
         * ===== MÓDULO 5: ELIMINACIÓN =====
         * - remove(index)
         * - remove(obj)
         * - clear()
         */
        java.util.List<String> l = new ArrayList<>(java.util.Arrays.asList("X","Y","Z"));
        l.remove(1);
        System.out.println("Después remove(1): " + l);
        l.remove("Z");
        System.out.println("Después remove(\"Z\"): " + l);
        l.clear();
        System.out.println("Después clear(): " + l);
    }

    private static void modulo6() {
        /*
         * ===== MÓDULO 6: ITERADORES =====
         */
        java.util.List<String> l = new ArrayList<>(java.util.Arrays.asList("uno","dos","tres"));
        System.out.println("Recorriendo con Iterator:");
        Iterator<String> it = l.iterator();
        while (it.hasNext()) {
            System.out.println(it.next());
        }
        System.out.println("Recorriendo con ListIterator inverso:");
        ListIterator<String> litr = l.listIterator(l.size());
        while (litr.hasPrevious()) {
            System.out.println(litr.previous());
        }
    }

    private static void modulo7() {
        /*
         * ===== MÓDULO 7: ARRAYLIST vs LINKEDLIST =====
         */
        java.util.List<Integer> arrayList = new ArrayList<>();
        java.util.List<Integer> linkedList = new LinkedList<>();
        for (int i = 0; i < 5; i++) {
            arrayList.add(i);
            linkedList.add(i);
        }
        System.out.println("ArrayList: " + arrayList);
        System.out.println("LinkedList: " + linkedList);
    }

    private static void modulo8() {
        /*
         * ===== MÓDULO 8: VECTOR y STACK =====
         */
        java.util.List<String> vector = new Vector<>();
        java.util.List<String> stack = new Stack<>();
        vector.add("V1"); vector.add("V2");
        stack.add("S1"); stack.add("S2");
        System.out.println("Vector: " + vector);
        System.out.println("Stack (LIFO) peek y pop no disponibles en List): " + stack);
    }

    private static void modulo9() {
        /*
         * ===== MÓDULO 9: COMPLEJIDAD =====
         * add: O(1)
         * get: O(1) en ArrayList, O(n) en LinkedList
         * remove: O(n)
         * contains/indexOf: O(n)
         */
        System.out.println("add(): O(1), get(): O(1) ArrayList, O(n) LinkedList, remove(): O(n)");
    }

    private static void modulo10() {
        /*
         * ===== MÓDULO 10: BUENAS PRÁCTICAS =====
         * - Usar genéricos para evitar casts.
         * - Elegir implementación según patrón de acceso.
         * - Evitar sincronización innecesaria (usar Vector sólo si es necesario).
         */
        System.out.println("Usa List<tipo> lista = new ArrayList<>(); y elige la implementación adecuada.");
    }
}
