public class Main {

    public static void main(String[] args) {

        Cliente cliente = new Cliente(1,"David");

        // Cuenta cuenta = new CuentaCajaDeAhorro(cliente,1000.0,0.1);

        // CuentaCajaDeAhorro cuentaCajaDeAhorro = (CuentaCajaDeAhorro) cuenta;

        // cuentaCajaDeAhorro.cobrarInteres();

        CuentaComitente cuenta2 = new CuentaComitente(cliente, 2000.0, "mkjd");

        cuenta2.retirar(500.0, "msdf");
        cuenta2.comision(20.0);


        cuenta2.informarSaldo();
        //cuenta.informarSaldo();
    }
}