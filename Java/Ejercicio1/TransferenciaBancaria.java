package Java.Ejercicio1;

public class TransferenciaBancaria implements MetodoPago {
    @Override
    public void procesarPago(double monto) {
        System.out.println("Procesando pago de: " + monto + " con transferencia bancaria.");
    }

    @Override
    public String obtenerMetodo() {
        return "Transferencia Bancaria";
    }
}
