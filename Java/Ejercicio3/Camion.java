package Java.Ejercicio3;

import com.sun.source.tree.ContinueTree;

public class Camion implements Entrega{
 
    
    @Override
    public boolean validarEnvio(double peso, double distancia) {
        if(peso > 100){
            System.out.println("[Camion] El peso no debe ser mayor que 100");
            return false;
        }
        return true;
    }

    @Override
    public double calcularCosto(double peso, double distancia) {
        if (peso < 0 || distancia < 0) {
            System.out.println("[Camion] El peso o la distancia no pueden ser negativos.");
            return -1;
        }
        return 5.0 + ((0.1 * peso) + (0.05 * distancia));
    }

    @Override
    public void realizarEntrega(String destino, double peso, double distancia) {
        boolean valido = validarEnvio(peso, distancia);
        if(valido) {
            double costo = calcularCosto(peso, distancia);
            if (costo >= 0) {
                System.out.println("[Camion] Entrega a " + destino + " - Peso: " + peso + "kg"
                        + " - Distancia: " + distancia + "km");
                System.out.println("[Camion] Costo: " + costo);
            }
        }else{
            return;
        }
    }
}
