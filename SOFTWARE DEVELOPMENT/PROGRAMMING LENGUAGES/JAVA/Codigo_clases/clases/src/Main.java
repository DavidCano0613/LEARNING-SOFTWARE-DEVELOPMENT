public class Main {
    public static void main(String[] args){

        Cuenta cuenta = new Cuenta(1,"Carlos");
        Cuenta otraCuenta = new Cuenta(1,"David", 2000.0);

        cuenta.depositar(200.0);
        cuenta.retirar(200.0);

        otraCuenta.retirar(100.0);
        System.out.println(otraCuenta.getTitular());
        otraCuenta.setTitular("Karen");
        System.out.println(otraCuenta.getTitular());
    }
}
