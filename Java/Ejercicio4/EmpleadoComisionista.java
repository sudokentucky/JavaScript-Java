package Java.Ejercicio4;

public class EmpleadoComisionista extends Empleado{
    private final double salarioBase;
    private final double  totalVentas;
    private final double porcentajeComision;
    
    public EmpleadoComisionista(String nombre, int id, double salarioBase, int totalVentas, double porcentajeComision){
        super(nombre, id);
        this.salarioBase = salarioBase;
        this.totalVentas = totalVentas;
        this.porcentajeComision = porcentajeComision;
    }
    @Override
    public double calcularSalario(){
        return salarioBase + (totalVentas * porcentajeComision);
    }
    @Override
    public void mostrarInfo(){
        super.mostrarInfo();
        System.out.println("Salario Base: "+salarioBase);
        System.out.println("Total Ventas: "+totalVentas);
        System.out.println("Porcentaje Comision: "+porcentajeComision*100);
    }
}
