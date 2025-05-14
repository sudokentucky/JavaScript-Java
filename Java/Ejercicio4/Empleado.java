package Java.Ejercicio4;

abstract class Empleado {
    private final String nombre;
    private final int id;

    public Empleado(String nombre, int id) {
        this.nombre = nombre;
        this.id = id;
    }
    public abstract double calcularSalario();
    public  void mostrarInfo(){
        System.out.println("ID: " + id);
        System.out.println("Nombre: " + nombre);
    }
}
