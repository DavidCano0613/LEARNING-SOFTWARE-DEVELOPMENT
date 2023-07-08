public abstract class Cuenta {

    private Cliente titular;
    private Double saldo;

    public Cuenta(Cliente titular, Double saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }

    public void depositar(Double monto){
        saldo += monto;
    }

    public void retirar(Double monto){
        if(puedeRetirar(monto)){
            saldo -= monto;
        }
    }

    protected Boolean puedeRetirar(Double monto){
        return saldo >= monto;
    }

    public void informarSaldo(){
        System.out.println("el saldo actual es de " + saldo);
    }

    public Double getSaldo() {
        return saldo;
    }

}
