package Java.MalwEx;
public class MegaStore {

    public enum DiscountType {
        Standard,
        Seasonal,
        Weight;
    }

    public static double getDiscountedPrice(double cartWeight, double totalPrice, DiscountType discountType) {
        //throw new UnsupportedOperationException("Waiting to be implemented.");
        if(discountType == DiscountType.Standard){
            return (totalPrice - (0.06 * totalPrice));
        }else if (discountType == DiscountType.Seasonal){
            return (totalPrice - (0.12 * totalPrice));
        }else if(discountType == DiscountType.Weight){
            if(cartWeight <= 10){
                return (totalPrice - (0.06 * totalPrice));
            }else if(cartWeight > 10){
                return (totalPrice - (0.18 * totalPrice));
            }
        }
        throw new UnsupportedOperationException("An error has occurred");    
    }

    public static void main(String[] args) {
        System.out.println(getDiscountedPrice(12, 100, DiscountType.Weight));
    }
}