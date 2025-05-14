package Java.Ejercicio1;

public class Paypal implements MetodoPago{
    @Override
    public void procesarPago(double monto){
        System.out.println("Procesando pago de: " + monto + " con Paypal.");
    }

    @Override
    public String obtenerMetodo(){
        return "Paypal";
    }
}
    