package Java.Ejercicio2;

public class Taxi implements Transporte{
    @Override
    public void iniciarViaje(String destino) {
        System.out.println("Iniciando viaje en taxi hacia: " + destino);
    }

    @Override
    public double calcularTarifa(double distancia) {
        return (2.00 * distancia) + 3.00;
    }
}
