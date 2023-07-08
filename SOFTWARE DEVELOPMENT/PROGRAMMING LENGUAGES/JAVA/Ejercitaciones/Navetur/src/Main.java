public class Main {

    public static void main(String[] args) {

     Capitan capitan1 = new Capitan("David", "Tobon", "MLC");
        Capitan capitan2 = new Capitan("Daniela", "Muñoz", "PIC");
//        Yate yate1 = new Yate(capitan1,2020, 3.0, 3000.0, 1000.0, 2);
//        Yate yate2 = new Yate(capitan2,2023, 5.0, 8000.0, 2000.0, 5);
//
//        System.out.println(yate2.compareTo(yate1));
//        System.out.println(yate1.calcularMontoAlquiler());

        Velero velero1 = new Velero(capitan1,2026, 2.6, 5200.0, 800.0, 4);
        Velero velero2 = new Velero(capitan2,2020, 4.2, 7000.0, 1200.0, 6);

        System.out.println(velero1.calcularMontoAlquiler());
        System.out.println(velero1.compareTo(velero2));
        System.out.println(velero1.evaluarTamanio());

    }
}
