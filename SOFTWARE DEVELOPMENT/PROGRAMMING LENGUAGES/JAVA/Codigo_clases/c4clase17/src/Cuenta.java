public class Cuenta {

    private String nombre;
    private Double saldo;

    public Cuenta(String nombre) {
        this.nombre = nombre;
        saldo = 0.0;
    }

    public void depositar(Double monto){
        saldo+= monto;
    }

    public void retirar(Double monto) throws CuentaException{
        if(monto < 0){
            throw new CuentaException("no podes retirar numeros negativos");
        }
        if(monto > saldo){
            // rompe
            throw new CuentaException("no te alcanza el saldo para retirar tu saldo es de " + saldo + " y queres retirar " + monto);
        }
        saldo-= monto;

    }


}
