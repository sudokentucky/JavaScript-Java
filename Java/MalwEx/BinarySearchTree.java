package Java.MalwEx;


public class BinarySearchTree {
    public static boolean contains(Node root, int value) {
        //throw new UnsupportedOperationException("Waiting to be implemented.");
        if(root == null) return false;
        if(root.value == value) return true;
        
        if(value < root.value){
            return contains(root.left, value);
        }else{
            return contains(root.right, value);
        }
    }

    public static void main(String[] args) {
        Node n1 = new Node(1, null, null);
        Node n3 = new Node(3, null, null);
        Node n2 = new Node(2, n1, n3);

        System.out.println(contains(n2, 3));
    }
}