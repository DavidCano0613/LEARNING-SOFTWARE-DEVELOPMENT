public class Main {

    public static void main(String[] args) {

        Capitan capitan = new Capitan("David","Tobon",1);
        Velero velero = new Velero(capitan,2000.0,500.0,2001,6.0,4);

        System.out.println(velero.calcularMontoAlquiler());
    }
}