package Java.Ejercicio2;

public class main {
    public static void main(String[] args){
        Transporte t1  = new Autobus();
        Transporte t2 = new Bicicleta();
        Transporte t3 = new Taxi();
        
        t1.iniciarViaje("Parque");
        System.out.println("tarifa: " + t1.calcularTarifa(3.6));
        t2.iniciarViaje("Mercado");
        System.out.println("tarifa: " + t2.calcularTarifa(2.2));
        t3.iniciarViaje("Centro");
        System.out.println("tarifa: " + t3.calcularTarifa(8.3));
    }
}
