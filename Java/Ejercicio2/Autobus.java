package Java.Ejercicio2;

public class Autobus implements Transporte{
    @Override
    public void iniciarViaje(String destino) {
        System.out.println("Iniciando viaje en Autobus hacia " + destino);
    }

    @Override
    public double calcularTarifa(double distancia) {
        return 1.5; //tarifa fija
    }
}
