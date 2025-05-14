package Java.Ejercicio4;

public class main {
    public static void main(String[] args){
        Empleado e1 = new EmpleadoAsalariado("Carlos", 101, 2500);
        Empleado e2 = new EmpleadoPorHoras("Marta", 102, 45, 15);
        Empleado e3 = new EmpleadoComisionista("Luis", 103, 1200, 5000, 0.1);

        Empleado[] empleados = {e1, e2, e3};

        for (Empleado emp : empleados) {
            emp.mostrarInfo();
            System.out.println("Salario calculado: $" + emp.calcularSalario());
            System.out.println();
        }

    }
}
