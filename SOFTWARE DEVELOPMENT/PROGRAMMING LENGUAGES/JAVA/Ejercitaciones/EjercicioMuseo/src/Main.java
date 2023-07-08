public class Main {

    public static void main(String[] args) {

        Subasta subasta = new Subasta(3000.0, "empanada unica");
        subasta.agregar(new Oferente("Natalia", "Madera", "12544gj", 2500.0));
        subasta.agregar(new Oferente("Santiago", "Betancur", "58451lo", 3001.0));

        subasta.ofertar();

    }
}
