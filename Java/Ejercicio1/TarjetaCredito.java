package Java.Ejercicio1;

public class TarjetaCredito implements MetodoPago{
    @Override
    public void procesarPago(double monto){
        System.out.println("Procesando pago de: " + monto + " con tarjeta de credito.");
    }
    
    @Override
    public String obtenerMetodo(){
        return "Tarjeta de Credito";
    }
}
