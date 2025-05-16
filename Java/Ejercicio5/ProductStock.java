package Java.Ejercicio5;
import java.util.HashMap;

public class ProductStock {
    private final HashMap <String, Integer> inventory;
    
    public ProductStock(){
        inventory = new HashMap<>();
    }
    
    public void addProduct(String name, int quantity){
        if(inventory.containsKey(name)){
            inventory.put(name, inventory.get(name) + quantity);
        }else{
            inventory.put(name, quantity);
        }
    }
    public boolean sellProduct(String name, int quantity){
        Integer currentStock = inventory.get(name);
        if(currentStock != null && currentStock >= quantity){
            inventory.put(name, currentStock - quantity);
                return true;
        }
        return false;
    }
    
}
