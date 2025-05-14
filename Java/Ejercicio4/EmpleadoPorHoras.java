package Java.Ejercicio4;

public class EmpleadoPorHoras extends Empleado{
    private final double horasTrabajadas;
    private final double tarifaHora;
    
    public EmpleadoPorHoras(String nombre, int id, double horasTrabajadas, double tarifaHora){
        super(nombre, id);
        this.horasTrabajadas = horasTrabajadas;
        this.tarifaHora = tarifaHora;
    }

    @Override
    public double calcularSalario() {
        return (horasTrabajadas <= 40)?horasTrabajadas * tarifaHora: (horasTrabajadas * tarifaHora) * 1.5 ;
    }

    @Override
    public void mostrarInfo() {
        super.mostrarInfo();
        System.out.println("Tipo Empleado por horas");
        System.out.println("Horas trabajadas: " + horasTrabajadas);
        System.out.println("Tarifa Hora: " + tarifaHora);
    }
}
