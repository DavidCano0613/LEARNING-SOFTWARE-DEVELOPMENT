public class CuentaCorriente extends Cuenta{

    private Double montoDescubierto;

    public CuentaCorriente(Double numeroCliente, Double saldo) {
        super(numeroCliente, saldo);
        this.montoDescubierto = 300.0;
    }


    @Override
    public Double extraerEfectivo(Double cantidadDinero) {

        Double disponible = getSaldo();

        if(disponible < cantidadDinero){
            disponible += montoDescubierto;

        }
        if(disponible < cantidadDinero){
            System.out.println("no puedes retirar esta cantidad, fondos insuficientes");
            return 0.0;
        }

        super.setSaldo(getSaldo() - cantidadDinero) ;
        System.out.println("tu saldo actual es: " + getSaldo());

        return cantidadDinero; //este es el dinero que estoy pidiendo
    }

    @Override
    public void depositarDinero(Double cantidadDinero) {
        super.depositarDinero(cantidadDinero);
    }
}
