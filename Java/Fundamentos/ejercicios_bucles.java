package Java.Fundamentos;

import java.util.Scanner;

public class ejercicios_bucles {
    // EJERCICIOS DE BUCLES EN JAVA
    // ============================

    // MÓDULO 1: Bucle FOR - Repeticiones controladas por contador
    // ------------------------------------------------------------

    // EJERCICIO 1: Contar del 1 al N
    // Enunciado: Dado un número N, imprime los números del 1 al N usando un bucle for.
    // Ejemplo: contarHasta(5)
    // Salida esperada: 1 2 3 4 5
    public static void contarHasta(int n) {
        // TODO: Usa un bucle for desde 1 hasta n inclusive
        for(int i=0; i<=n;i++){
            System.out.println(i);
        }
    }

    // EJERCICIO 2: Sumar números pares hasta N
    // Ejemplo: sumarPares(10)
    // Salida esperada: 30 (2+4+6+8+10)
    public static int sumarPares(int n) {
        int sumaTotal = 0;
        // TODO: Usa un bucle for que salte de 2 en 2, acumulando en una variable suma
        for(int i=0; i<=n; i+=2){
            sumaTotal +=i;
        }
        return sumaTotal;
    }

    // EJERCICIO 3: Revertir una palabra
    // Ejemplo: invertirPalabra("hola")
    // Salida esperada: "aloh"
    public static void invertirPalabra(String palabra) {
        StringBuilder sb = new StringBuilder();
        // TODO: Recorre la palabra desde el último carácter hasta el primero e imprime
        for(int i=palabra.length()-1; i>=0; i--){
            sb.append(palabra.charAt(i));
            System.out.println(sb);
        }
    }

    // MÓDULO 2: Bucle WHILE
    // ----------------------

    // EJERCICIO 4: Tabla de multiplicar
    // Ejemplo: tablaMultiplicar(3)
    // Salida esperada: 3 x 1 = 3 ... 3 x 10 = 30
    public static void tablaMultiplicar(int num) {
        // TODO: Usa while para multiplicar desde 1 hasta 10 e imprimir cada línea
        int i = 1;
        while (i <= 10) {
            System.out.println(num + " * " + i + " = " + (num * i));
            i++;
        }
    }

    // EJERCICIO 5: Contar dígitos
    // Ejemplo: contarDigitos(12345)
    // Salida esperada: 5
    public static int contarDigitos(int numero) {
        int contador = 0;
        // TODO: Usa while dividiendo entre 10 hasta que el número sea 0
        if (numero == 0) return 1;
        while (numero > 0) {
            numero = numero / 10;
            contador++;
        }
        return contador;
    }

    // MÓDULO 3: DO-WHILE
    // ------------------

    // EJERCICIO 6: Pedir números hasta 0
    // Entrada simulada: 5, 3, -1, 0
    // Salida esperada: imprime cada número hasta que se ingresa 0
    public static void pedirNumeros() {
        // TODO: Usa Scanner y un do-while
        int valor;
        Scanner entrada = new Scanner(System.in);
        do{
            System.out.println("Ingresa un entero positivo");
            valor = entrada.nextInt();
            System.out.println("Tu numero es " + valor);
        }while(valor != 0);
    }

    // EJERCICIO 7: Adivinar número secreto
    // Número secreto: 7, intentos: 3, 5, 7
    // Salida esperada: pide hasta que se adivina el 7
    public static void adivinarNumeroSecreto() {
        final int SECRETO = 7;
        Scanner entrada = new Scanner(System.in);
        int valor;
    
        do {
            System.out.print("Ingresa tu intento: ");
            valor = entrada.nextInt();
    
            if (valor < SECRETO) {
                System.out.println("El número secreto es mayor.");
            } else if (valor > SECRETO) {
                System.out.println("El número secreto es menor.");
            }
    
        } while (valor != SECRETO);
    
        System.out.println("¡Has adivinado el número secreto!");
    }
    

    // MÓDULO 4: FOR-EACH
    // ------------------

    // EJERCICIO 8: Buscar en array
    // Ejemplo: buscarEnArray(new int[] {1, 2, 3}, 2);
    // Salida esperada: true
    public static boolean buscarEnArray(int[] arr, int objetivo) {
        for(int numero : arr){
            if(numero == objetivo){
                return true;
            }
        }
        return false;
    }

    // MÓDULO 5: BREAK Y CONTINUE
    // --------------------------

    // EJERCICIO 9: Imprimir del 1 al 10, omitiendo el 5
    // Salida esperada: 1 2 3 4 6 7 8 9 10
    public static void imprimirSinCinco() {
        // TODO: Usa continue
        for(int i = 1; i<=10; i++){
            if(i == 5){
                System.out.println("me salto el 5");
                continue;
            }
            System.out.println("numero "+i);
        }
    }

    // EJERCICIO 10: Romper en múltiplo de 7
    // Salida esperada: imprime hasta el primer múltiplo de 7 (ej. 1 2 3 4 5 6 7 y se detiene)
    public static void detenerEnMultiploDeSiete() {
        // TODO: Usa break
        for(int i=1; i<10; i++){
            if(i % 7==0){
                System.out.println("Me detengo");
                break;
            }else{
                System.out.println(i);
            }
            
        }
    }

    // MÓDULO 6: FOR MÚLTIPLES VARIABLES
    // ---------------------------------

    // EJERCICIO 11: For con i y j
    // Ejemplo: forMultiplesVariables(3)
    // Salida esperada: i = 1, j = 3 | i = 2, j = 2 | i = 3, j = 1
    public static void forMultiplesVariables(int n) {
        // TODO: Usa for con dos variables
        for(int i =1, j=n; i<=n ; i++, j--){
            System.out.println(" i = "+i+" , "+" j = "+ j );
        }
    }

    // MÓDULO 7: FOR INVERSO
    // ---------------------

    // EJERCICIO 12: Contar hacia atrás
    // Ejemplo: forInverso(5)
    // Salida esperada: 5 4 3 2 1
    public static void forInverso(int n) {
        // TODO: Usa for decrementando
        for(int i = n; i<=1; i-- ){
            System.out.println(i);
        }
    }

    // MÓDULO 8: FOR CON SALTOS
    // ------------------------

    // EJERCICIO 13: Saltar valores
    // Ejemplo: forConSaltos(2, 10, 3)
    // Salida esperada: 2 5 8
    public static void forConSaltos(int start, int end, int step) {
        // TODO: Usa step en el incremento
        for(int i = start; i <= end; i+=step){
            System.out.println(i);
        }
    }

    // MÓDULO 9: BUCLES ANIDADOS Y ETIQUETAS
    // -------------------------------------

    // EJERCICIO 14: Etiqueta y break
    // Salida esperada: rompe bucle externo en condición (ej. i = 1, j = 1)
    public static void anidadosConEtiqueta() {
        // TODO: Usa break con etiqueta
        bucle:
        for(int i =0; i<3; i++){
            for(int j=0; j<3; j++){
                if (i ==1 && j ==1){
                    System.out.println("i = " + i + ", j = " + j + " → rompo el bucle");
                    break bucle;
                }
                System.out.println("bucle interno "+j);
            }
        }
    }

    // MÓDULO 10: VALIDACIÓN
    // ---------------------

    // EJERCICIO 15: Validar entrada > 0
    // Entrada: -2, 0, 4
    // Salida esperada: solicita hasta que se ingrese un número positivo
    public static int validarEnteroPositivo() {
        Scanner entrada = new Scanner(System.in);
        int valor;
        do{
            System.out.println("Ingrese un numero positivo");
            valor = entrada.nextInt();
        }while(valor <= 0);
        System.out.println("numero valido");
        return valor;
    }

    // MÓDULO 11: MENÚ INTERACTIVO
    // ---------------------------

    // EJERCICIO 16: Menú con do-while
    // Simulación esperada: muestra opciones hasta que el usuario elige "Salir"
    public static void menuInteractivo() {
        // TODO: do-while con opciones y scanner
        int valor;
        Scanner entrada = new Scanner(System.in);
        do{
            System.out.println("MENU: 1.Seguir, 2.Seguir, 3.SALIR");
            valor = entrada.nextInt();
            System.out.println("Opcion "+ String.valueOf(valor));
        }while(valor != 3);
        System.out.println("Menu Terminado");
    }

    // MÓDULO 12: TABLA HTML
    // ---------------------

    // EJERCICIO 17: Matriz a tabla HTML
    // Ejemplo: int[][] datos = {{1,2},{3,4}};
    // Salida esperada:
    // <table>
    // <tr><td>1</td><td>2</td></tr>
    // <tr><td>3</td><td>4</td></tr>
    // </table>
    public static String generarTabla(int[][] datos) {
        return "";
    }

    public static void main(String[] args) {
        // Aquí puedes probar tus métodos.
    }
}
