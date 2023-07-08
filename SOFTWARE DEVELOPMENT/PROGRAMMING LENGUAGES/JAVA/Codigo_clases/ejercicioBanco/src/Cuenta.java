public class Cuenta {

    private Double saldo;
    private Double numeroCliente;

    public Cuenta(Double numeroCliente, Double saldo) {
        this.saldo = saldo;
        this.numeroCliente = numeroCliente;
    }


    public void depositarDinero(Double cantidadDinero){
        saldo += cantidadDinero;
        System.out.println("depositaste: " + cantidadDinero + " tu nuevo saldo es: " + saldo);
    }

    public Double extraerEfectivo(Double cantidadDinero){
        saldo -= cantidadDinero;
        System.out.println("retiraste: " + cantidadDinero + " tu nuevo saldo es: " + saldo);
        return cantidadDinero;
    }

    public void informarSaldo(){
        System.out.println("su saldo es: " + saldo);
    }



    public Double getNumeroCliente() {
        return numeroCliente;
    }

    public void setNumeroCliente(Double numeroCliente) {
        this.numeroCliente = numeroCliente;
    }

    public Double getSaldo() {
        return saldo;
    }

    public void setSaldo(Double saldo) {
        this.saldo = saldo;
    }
}
