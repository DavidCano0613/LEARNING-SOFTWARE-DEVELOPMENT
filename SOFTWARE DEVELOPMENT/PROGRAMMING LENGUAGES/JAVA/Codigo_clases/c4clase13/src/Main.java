public class Main {

    public static void main(String[] args) {

        Cliente cliente = new Cliente(10,"David");
        Cliente otroCliente = new Cliente(156,"Pedro");
//
//        Cuenta cuenta = new CuentaCajaDeAhorro(cliente,1000.0,0.1);
//
//        CuentaCajaDeAhorro cuentaCajaDeAhorro = (CuentaCajaDeAhorro) cuenta;
//
//        cuentaCajaDeAhorro.cobrarInteres();
//
//
//        cuenta.informarSaldo();

        CuentaCorriente cuentaCorriente = new CuentaCorriente(cliente,100.0,100.0);

//        System.out.println(cuentaCorriente.gravarImpuesto(0.1));
//
//        cuentaCorriente.informarSaldo();

        System.out.println(cliente.compareTo(otroCliente));
        System.out.println(otroCliente.compareTo(cliente));

        cliente.compareTo(cuentaCorriente);

    }
}