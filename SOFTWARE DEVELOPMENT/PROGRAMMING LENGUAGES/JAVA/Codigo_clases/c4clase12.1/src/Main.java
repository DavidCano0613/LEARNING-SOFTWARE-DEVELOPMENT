public class Main {

    public static void main(String[] args) {

        Cliente cliente = new Cliente(1,"David");

        Cuenta cuenta = new CuentaCajaDeAhorro(cliente,1000.0,0.1);

        CuentaCajaDeAhorro cuentaCajaDeAhorro = (CuentaCajaDeAhorro) cuenta;

        cuentaCajaDeAhorro.cobrarInteres();


        cuenta.informarSaldo();
    }
}