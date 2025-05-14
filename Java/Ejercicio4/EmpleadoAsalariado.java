package Java.Ejercicio4;
public class EmpleadoAsalariado extends Empleado{
    private final double salarioMensual;
    @Override
    public double calcularSalario() {
        return salarioMensual;
    }

    public EmpleadoAsalariado(String nombre, int id,  double salarioMensual) {
        super(nombre, id);
        this.salarioMensual = salarioMensual;
    }
    
    @Override
    public void mostrarInfo() {
        super.mostrarInfo();
        System.out.println("Tipo Asalariado");
        System.out.println("Salario Mensual: " + salarioMensual);
    }
    
}
