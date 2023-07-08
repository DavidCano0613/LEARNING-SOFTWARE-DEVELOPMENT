public class Main {

    public static void main(String[] args) {

        Cuenta cuenta = new Cuenta(1,"Carlos");

        Cuenta otraCuenta = new Cuenta(2,"David",2000.0);
        cuenta.depositar(200.0);
        cuenta.depositar(500.0);
        cuenta.retirar(3000.0);
        cuenta.retirar(300.0);

        otraCuenta.retirar(500.0);

        otraCuenta.setTitular("Karen");
        System.out.println(otraCuenta.getTitular());


    }
}