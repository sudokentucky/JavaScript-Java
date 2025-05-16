package Java.Ejercicio6;

public class TextUtil {
    public static boolean isPalindrome(String text){
        text = text.toLowerCase().replaceAll("\\s+", "");
        for(int i =0, j = text.length() - 1 ; j>i; i++, j-- ){
            if(text.charAt(j) != text.charAt(i)){
                return false;
            }
        }
        return true;
    }

}
