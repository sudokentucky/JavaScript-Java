package Java.Ejercicio2;

public class Bicicleta implements Transporte {
    @Override
    public void iniciarViaje(String destino) {
        System.out.println("Iniciando viaje en bicicleta hacia " + destino);
    }

    @Override
    public double calcularTarifa(double distancia) {
        return 0.5 * distancia;
    }
}
