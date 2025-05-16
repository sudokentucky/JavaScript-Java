package Java.Ejercicio5;

public class main {
    public static void main(String[] args) {
        ProductStock ps = new ProductStock();

        ps.addProduct("apple", 10);
        System.out.println(ps.sellProduct("apple", 3)); // true
        System.out.println(ps.sellProduct("apple", 8)); // false
    }
}