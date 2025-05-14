package Java.Ejercicio3;

public interface Entrega {
    public boolean validarEnvio(double peso, double distancia);
    public double calcularCosto(double peso, double distancia);
    public void realizarEntrega(String destino, double peso, double distancia);
}
