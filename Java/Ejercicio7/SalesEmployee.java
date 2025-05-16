package Java.Ejercicio7;

public class SalesEmployee extends Employee{
    private final double salesAmount;
    private final double commissionRate;

    public SalesEmployee(String name, double baseSalary, double salesAmount, double commissionRate) {
        super(name, baseSalary);
        this.salesAmount = salesAmount;
        this.commissionRate = commissionRate;
    }
    
    @Override
    public double calculateSalary() {
        return getBaseSalary() + (salesAmount * commissionRate);
    }
}
