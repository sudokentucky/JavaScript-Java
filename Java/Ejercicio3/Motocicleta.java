package Java.Ejercicio3;

public class Motocicleta implements Entrega{
    @Override
    public boolean validarEnvio(double peso, double distancia) {
        if(peso > 15 || distancia > 30)
        {
            System.out.println("[Motocicleta] Peso o distancia excede el limite permitido.");
            return false;
        }
        return true;
    }

    @Override
    public double calcularCosto(double peso, double distancia) {
        if (peso < 0 || distancia <0 ){
            System.out.println("[Motocicleta] El peso y la distancia no deben de ser negativo.");
            return -1;
        }
        return 3.0 + (0.2*peso + (0.1 * distancia));
    }

    @Override
    public void realizarEntrega(String destino, double peso, double distancia) {
        boolean valido = validarEnvio(peso, distancia);
        if(valido) {
            double costo = calcularCosto(peso, distancia);
            if (costo >= 0) {
                System.out.println("[Motocicleta] Entrega a " + destino + " - Peso: " + peso + "kg"
                        + " - Distancia: " + distancia + "km");
                System.out.println("[Motocicleta] Costo: " + costo);
            }
        }else{
            return;
        }
    }
}
