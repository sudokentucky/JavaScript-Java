package Java.Fundamentos;

public class Condicionales {
    public static void main(String[] args) {
        // MÓDULO 1: IF SIMPLE
        System.out.println("===== MÓDULO 1: IF SIMPLE =====");
        int edad = 20;
        if (edad >= 18) {
            System.out.println("Eres mayor de edad.");
        }
        System.out.println();

        // MÓDULO 2: IF-ELSE
        System.out.println("===== MÓDULO 2: IF-ELSE =====");
        int hora = 14;
        if (hora < 12) {
            System.out.println("Buenos días");
        } else {
            System.out.println("Buenas tardes/noches");
        }
        System.out.println();

        // MÓDULO 3: IF-ELSE IF-ELSE
        System.out.println("===== MÓDULO 3: IF-ELSE IF-ELSE =====");
        int puntuacion = 85;
        String calificacion;
        if (puntuacion >= 90) {
            calificacion = "Sobresaliente";
        } else if (puntuacion >= 80) {
            calificacion = "Notable";
        } else if (puntuacion >= 70) {
            calificacion = "Bien";
        } else if (puntuacion >= 60) {
            calificacion = "Suficiente";
        } else {
            calificacion = "Insuficiente";
        }
        System.out.println("Calificación: " + calificacion);
        System.out.println();

        // MÓDULO 4: CONDICIONALES ANIDADOS
        System.out.println("===== MÓDULO 4: CONDICIONALES ANIDADOS =====");
        int userEdad = 25;
        boolean permisosAdmin = true;
        if (userEdad >= 18) {
            System.out.println("El usuario es mayor de edad");
            if (permisosAdmin) {
                System.out.println("Y tiene permisos de administrador");
            } else {
                System.out.println("Pero no tiene permisos de administrador");
            }
        } else {
            System.out.println("El usuario es menor de edad");
        }
        System.out.println();

        // MÓDULO 5: OPERADOR TERNARIO
        System.out.println("===== MÓDULO 5: OPERADOR TERNARIO =====");
        int numero = 7;
        String parOimpar = (numero % 2 == 0) ? "Par" : "Impar";
        System.out.println("El número " + numero + " es " + parOimpar);
        System.out.println();

        // MÓDULO 6: OPERADORES LÓGICOS &&, ||, !
        System.out.println("===== MÓDULO 6: OPERADORES LÓGICOS =====");
        boolean a = true;
        boolean b = false;
        System.out.println("a && b = " + (a && b));
        System.out.println("a || b = " + (a || b));
        System.out.println("!a = " + (!a));
        System.out.println();

        // MÓDULO 7: SWITCH
        System.out.println("===== MÓDULO 7: SWITCH =====");
        int diaSemana = 3;
        String nombreDia;
        switch (diaSemana) {
            case 1:
                nombreDia = "Lunes";
                break;
            case 2:
                nombreDia = "Martes";
                break;
            case 3:
                nombreDia = "Miércoles";
                break;
            case 4:
                nombreDia = "Jueves";
                break;
            case 5:
                nombreDia = "Viernes";
                break;
            case 6:
                nombreDia = "Sábado";
                break;
            case 7:
                nombreDia = "Domingo";
                break;
            default:
                nombreDia = "Día inválido";
        }
        System.out.println("Día " + diaSemana + ": " + nombreDia);
        System.out.println();

        // MÓDULO 8: CORTOCIRCUITO
        System.out.println("===== MÓDULO 8: EVALUACIÓN DE CORTOCIRCUITO =====");
        boolean condicion1 = false;
        System.out.println("condicion1 && metodo() = " + (condicion1 && metodo()));
        boolean condicion2 = true;
        System.out.println("condicion2 || metodo() = " + (condicion2 || metodo()));
    }

    private static boolean metodo() {
        System.out.println("Este método no debería ejecutarse si hay cortocircuito");
        return true;
    }
}
