package Java.Ejercicio1;

public class main {
    public static void main(String[] args){
        MetodoPago pago1 = new TarjetaCredito();
        MetodoPago pago2 = new Paypal();
        MetodoPago pago3 = new TransferenciaBancaria();
        
        pago1.procesarPago(550.1);
        System.out.println(pago1.obtenerMetodo());
        pago2.procesarPago(550.2);
        System.out.println(pago2.obtenerMetodo());
        pago3.procesarPago(550.3);
        System.out.println(pago3.obtenerMetodo());
        
        
    } 
}
