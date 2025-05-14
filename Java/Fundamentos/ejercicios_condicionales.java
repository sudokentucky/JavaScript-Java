package Java.Fundamentos;

import java.util.*;

public class ejercicios_condicionales {
    // EJERCICIOS DE CONDICIONALES EN JAVA

    // EJERCICIO 1: Clasificar un número
    // Implementa el método que reciba un entero y devuelva:
    // "Positivo", "Negativo" o "Cero".
    public static String clasificarNumero(int numero) {
        // TODO: usar if-else-if-else
        if (numero <= -1) {
            System.out.println("Negativo");
        } else if (numero >= 1) {
            System.out.println("Positivo");
        } else if (numero == 0) {
            System.out.println("Cero");
        }
        return null;
    }

    // EJERCICIO 2: Verificar edad de votación
    // Crea un método que reciba la edad y retorne:
    // "Puede votar" si >= 18 o "No puede votar" en caso contrario.
    public static String puedeVotar(int edad) {
        // TODO: usar if-else
        if (edad >= 18) {
            System.out.println("Puede votar");
        } else {
            System.out.println("No puede votar");
        }
        return null;
    }

    // EJERCICIO 3: Sistema de calificaciones
    // Dado un puntaje (0-100), devuelve:
    // "A" (90-100), "B" (80-89), "C" (70-79), "D" (60-69) o "F" (<60).
    public static char obtenerCalificacion(int puntaje) {
        // TODO: usar if-else if-else
        if (puntaje >= 90 && puntaje <= 100) {
            System.out.println("A");
        } else if (puntaje >= 80 && puntaje <= 89) {
            System.out.println("B");
        } else if (puntaje >= 70 & puntaje <= 79) {
            System.out.println("C");
        } else if (puntaje >= 60 & puntaje <= 69) {
            System.out.println("D");
        } else if (puntaje < 60) {
            System.out.println("F");
        }
        return ' ';
    }

    // EJERCICIO 4: Año bisiesto
    // Determina si un año es bisiesto:
    // divisible por 4 y no por 100, o divisible por 400.
    public static boolean esBisiesto(int anio) {
        boolean esBisiesto;
        // TODO: usar operadores lógicos
        if (anio % 4 == 0 && anio % 100 != 0 || anio % 400 == 0) {
            esBisiesto = true;
        } else {
            esBisiesto = false;
        }
        return esBisiesto;
    }

    // EJERCICIO 5: Saludo por hora
    // Recibe la hora (0-23) y retorna:
    // "Buenos días" (5-11), "Buenas tardes" (12-18), "Buenas noches" (19-4).
    public static String obtenerSaludo(int hora) {
        // TODO: usar if-else-if-else
        String mensaje;
        if (hora >= 5 && hora <= 11) {
            mensaje = "Buenos dias";
        } else if (hora >= 12 && hora <= 18) {
            mensaje = "Buenas tardes";
        } else {
            mensaje = "Buenas noches";
        }
        return mensaje;
    }

    // EJERCICIO 6: Calculadora básica
    // Recibe dos números y un operador (+, -, *, /) y devuelve el resultado.
    // Gestiona división por cero.
    public static double calculadora(double a, double b, char oper) {
        // TODO: usar switch
        double resultado = 0.0;
        if (oper == '+') {
            resultado = a + b;
        } else if (oper == '-') {
            resultado = a - b;
        } else if (oper == '*') {
            resultado = a * b;
        } else if (oper == '/') {
            if (b == 0) {
                System.out.println("Erro, division por cero");
            } else {
                resultado = a / b;
            }
        }
        return resultado;
    }

    // EJERCICIO 7: Acceso de usuario anidado
    // Crea un método que reciba edad y boolean permisosAdmin,
    // e imprima o retorne mensajes según:
    // mayor de edad y admin, mayor de edad sin admin, menor de edad.
    public static String validarAcceso(int edad, boolean permisosAdmin) {
        // TODO: usar condicionales anidados o AND lógico
        if (edad >= 18 & permisosAdmin) {
            System.out.println("Es mayor y tiene permisos admin");
        } else if (edad >= 18 & !permisosAdmin) {
            System.out.println("Mayor de edad, no tiene permisos admin");
        } else {
            System.out.println("Menor de edad");
        }
        return null;
    }

    // EJERCICIO 8: Par o impar (ternario)
    // Implementa método que retorne true si un número es par, false si es impar.
    public static boolean esPar(int numero) {
        // TODO: usar operador ternario
        return (numero % 2 == 0) ? true : false;
    }

    // EJERCICIO 9: Cortocircuito lógico
    // Crea un método que reciba dos booleanos y devuelva true
    // si el primero es true o el segundo es true (OR cortocircuito).
    public static boolean orCortocircuito(boolean a, boolean b) {
        // TODO: usar ||
        return (a || b) ? true : false;
    }

    // EJERCICIO 10: Nombre de día
    // Dado un número (1-7), devuelve el nombre del día de la semana.
    // Usa switch y default para valor inválido.
    public static String nombreDelDia(int dia) {
        // TODO: usar switch
        String NombreDia = "";
        switch (dia) {
            case 1:
                NombreDia = "Lunes";
                break;
            case 2:
                NombreDia = "Martes";
                break;
            case 3:
                NombreDia = "Miércoles";
                break;
            case 4:
                NombreDia = "Jueves";
                break;
            case 5:
                NombreDia = "Viernes";
                break;
            case 6:
                NombreDia = "Sábado";
                break;
            case 7:
                NombreDia = "Domingo";
                break;
            default:
                NombreDia = "Día inválido";
        }
        return NombreDia;
    }

    public static void main(String[] args) {
        // Aquí puedes invocar y probar tus métodos implementados.
        clasificarNumero(5);
        clasificarNumero(0);
        clasificarNumero(-1);
    }
}
