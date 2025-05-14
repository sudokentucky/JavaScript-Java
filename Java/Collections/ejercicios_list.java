package Java.Collections;

import java.util.List;

public class ejercicios_list {

    // EJERCICIO 1: Agregar elementos
    // ==============================
    // Enunciado: Crea un ArrayList de Strings. Agrega los valores "Java", "Python", "C++".
    // Luego imprime todos los elementos.
    //
    // Entrada esperada: ninguna
    // Salida esperada:
    // [Java, Python, C++]
    public static void agregarElementos() {
        // TODO: Crea un ArrayList, agrega los lenguajes, imprime el contenido
    }

    // EJERCICIO 2: Actualizar y acceder
    // ================================
    // Enunciado: Crea una lista con 3 frutas. Cambia la fruta en la posición 1 a "Kiwi".
    // Luego imprime solo la fruta de la posición 1.
    //
    // Entrada esperada: ninguna
    // Salida esperada:
    // Kiwi
    public static void actualizarYAcceder() {
        // TODO: Usa .set() y .get()
    }

    // EJERCICIO 3: Buscar elementos
    // =============================
    // Enunciado: Dado un ArrayList con varios nombres, determina si contiene el nombre "Daniel".
    //
    // Entrada esperada: ["Luis", "Sofía", "Daniel", "Ana"]
    // Salida esperada: true
    public static boolean contieneNombre(List<String> nombres) {
        // TODO: Usa .contains()
        return false;
    }

    // EJERCICIO 4: Eliminar elementos
    // ===============================
    // Enunciado: Crea una lista con los números del 1 al 5. Elimina el número 3 y muestra el resultado.
    //
    // Entrada esperada: ninguna
    // Salida esperada:
    // [1, 2, 4, 5]
    public static void eliminarElemento() {
        // TODO: Usa remove() con valor o índice
    }

    // EJERCICIO 5: Recorrido con for-each
    // ===================================
    // Enunciado: Recorre una lista de nombres e imprime cada uno con saludo: "Hola, <nombre>"
    //
    // Entrada esperada: ["Mario", "Lucía"]
    // Salida esperada:
    // Hola, Mario
    // Hola, Lucía
    public static void saludarLista(List<String> nombres) {
        // TODO: Recorre con for-each
    }

    // EJERCICIO 6: Recorrido inverso con ListIterator
    // ===============================================
    // Enunciado: Recorre e imprime una lista de números en orden inverso usando ListIterator.
    //
    // Entrada esperada: [10, 20, 30]
    // Salida esperada:
    // 30
    // 20
    // 10
    public static void recorridoInverso(List<Integer> numeros) {
        // TODO: Usa ListIterator para recorrer de atrás hacia adelante
    }

    // EJERCICIO 7: Comparar ArrayList vs LinkedList (tiempo simple)
    // =============================================================
    // Enunciado: Agrega 10000 elementos a ArrayList y LinkedList, y compara cuánto tarda cada uno.
    //
    // Entrada esperada: ninguna
    // Salida esperada: tiempo aproximado de ejecución en nanosegundos o milisegundos.
    public static void compararRendimiento() {
        // TODO: Usa System.nanoTime() antes y después de los bucles para comparar
    }

    // EJERCICIO 8: Simular pila con Stack
    // ===================================
    // Enunciado: Usa Stack para simular una pila de platos. Agrega 3 elementos y luego retíralos.
    //
    // Entrada esperada: ninguna
    // Salida esperada:
    // Plato A agregado
    // Plato B agregado
    // Plato C agregado
    // Último en salir: Plato C
    // Último en salir: Plato B
    // Último en salir: Plato A
    public static void simularPila() {
        // TODO: Usa push(), pop(), peek()
    }

    // EJERCICIO 9: Intercambiar elementos
    // ===================================
    // Enunciado: Crea una lista con 3 elementos y luego intercambia el primero con el último.
    //
    // Entrada esperada: [1, 2, 3]
    // Salida esperada: [3, 2, 1]
    public static void intercambiarElementos() {
        // TODO: Usa .get(), .set()
    }

    // EJERCICIO 10: Eliminar duplicados (extra)
    // =========================================
    // Enunciado: Elimina elementos duplicados de un ArrayList sin usar Set.
    //
    // Entrada esperada: ["A", "B", "A", "C", "B"]
    // Salida esperada: ["A", "B", "C"]
    public static void eliminarDuplicados(List<String> lista) {
        // TODO: Usa una lista auxiliar para evitar agregar duplicados
    }

    // EJERCICIO 11: Índices con indexOf y lastIndexOf
    // Enunciado: Dada una lista de Strings, muestra la primera y la última posición de un valor dado.
    // Entrada esperada: (lista=["A","B","A"], valor="A") → Salida esperada:
    // indexOf(A): 0
    // lastIndexOf(A): 2
    public static void buscarIndices(List<String> lista, String valor) {
        // TODO: Usa .indexOf(valor) y .lastIndexOf(valor) para imprimir ambas posiciones
    }

    // EJERCICIO 12: Limpiar lista
    // Enunciado: Dada una lista con elementos cualquiera, vacíala y muestra su tamaño.
    // Entrada esperada: lista con 5 elementos → Salida esperada: 0
    public static void limpiarLista(List<?> lista) {
        // TODO: Usa .clear() y luego imprime lista.size()
    }

    // EJERCICIO 13: Crear instancias de implementaciones
    // Enunciado: Declara y crea objetos de ArrayList, LinkedList y Vector sin agregar elementos.
    // Luego imprime sus clases.
    public static void crearInstancias() {
        // TODO: new ArrayList<>(), new LinkedList<>(), new Vector<>() y System.out.println(obj.getClass())
    }

    // EJERCICIO 14: Buenas prácticas
    // Enunciado: Explica en un comentario cuándo usar ArrayList vs LinkedList y la importancia de genéricos.
    public static void buenasPracticas() {
        // TODO: Escribe un comentario describiendo casos de uso recomendados.
    }

    public static void main(String[] args) {
        // Aquí podés llamar y probar los métodos si querés
    }
}
