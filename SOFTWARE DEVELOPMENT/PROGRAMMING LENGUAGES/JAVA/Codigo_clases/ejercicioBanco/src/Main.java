public class Main {
    public static void main(String[] args) {

        Cliente client = new Cliente(123.0, "Gomez", "123456789", "asdf0123");
        CuentaAhorro cuenta = new CuentaAhorro(client.getNumeroCliente(), 1230.0);
//        cuenta.informarSaldo();
//        cuenta.cobrarInteres();
//        cuenta.extraerEfectivo(10000.0);
//        cuenta.informarSaldo();
//        cuenta.extraerEfectivo(100.0);
//        cuenta.informarSaldo();
//        cuenta.depositarDinero(100.0);

        CuentaCorriente cuenta2 = new CuentaCorriente(client.getNumeroCliente(), 1000.0);
        cuenta2.informarSaldo();
        cuenta2.extraerEfectivo(2000.0);
        cuenta2.informarSaldo();
        cuenta2.depositarDinero(1000.0);
        cuenta2.extraerEfectivo(2301.0);

    }
}
