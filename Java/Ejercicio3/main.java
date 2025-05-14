package Java.Ejercicio3;

import Java.Ejercicio2.Bicicleta;
import java.util.List;

public class main {
    public static void main(String[] args) {
//        Entrega e1 = new Camion();
//        Entrega e2 = new Motocicleta();
//        Entrega e3 = new Dron();
//        System.out.println("-".repeat(50));
//        e1.realizarEntrega("Ciudad Norte", 80, 120);  // ✅ válido
//        e1.realizarEntrega("Ciudad Este", 101, 80);   // ❌ exceso de peso
//        e1.realizarEntrega("Ciudad Sur", -10, 50);    // ❌ peso negativo
//        System.out.println("-".repeat(50));
//        e2.realizarEntrega("Centro", 12, 25);         // ✅ válido
//        e2.realizarEntrega("Mercado", 16, 20);        // ❌ exceso de peso
//        e2.realizarEntrega("Puerto", 10, 31);         // ❌ exceso de distancia
//        e2.realizarEntrega("Barrio", -2, 20);         // ❌ peso negativo
//        System.out.println("-".repeat(50));
//        e3.realizarEntrega("Oficina", 4.5, 8);         // ✅ válido
//        e3.realizarEntrega("Zona Rural", 6.0, 9);      // ❌ exceso de peso
//        e3.realizarEntrega("Parque", 4.0, 11);         // ❌ exceso de distancia
//        e3.realizarEntrega("Casa", -1, 5);             // ❌ peso negativo
        System.out.println(migratoryBirds(List.of(5, 3, 4 ,4 ,5, 1, 2 ,2, 4,5, 3,3,1,1,1,2,2,2,2)));
    }
    public static int migratoryBirds(List<Integer> arr) {
        int tipoMasFrecuente = 0;
        int maxFrecuencia = 0;
        int[] frecuencias = new int[6];

        for(int tipo: arr){
            frecuencias[tipo]++;
        }

        for (int i = 1; i <= 5; i++) {
            if (frecuencias[i] > maxFrecuencia) {
                maxFrecuencia = frecuencias[i];
                tipoMasFrecuente = i;
            }
        }
        return tipoMasFrecuente;
    }
}
