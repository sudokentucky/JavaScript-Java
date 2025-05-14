package Java.Ejercicio3;

public class Dron implements Entrega{
    @Override
    public boolean validarEnvio(double peso, double distancia) {
        if(peso <= 5.0 && distancia <= 10.0 ){
            return true;
        }
        System.out.println("[Dron] El peso o la distancia no son validos.");
        return false;
    }

    @Override
    public double calcularCosto(double peso, double distancia) {
        if (peso < 0 || distancia < 0) {
            System.out.println("[Dron] El precio y costo no deben de ser negativos.");
            return -1;
        }
        return 10.0 ;
    }

    @Override
    public void realizarEntrega(String destino, double peso, double distancia) {
        boolean valido = validarEnvio(peso, distancia);
        if(valido) {
            double costo = calcularCosto(peso, distancia);
            if (costo >= 0) {
                System.out.println("[Dron] Entrega a " + destino + " - Peso: " + peso + "kg"
                        + " - Distancia: " + distancia + "km");
                System.out.println("[Dron] Costo: " + costo);
            }
        }else{
            return;
        }
    }
}
