public class Cuenta {

    //ATRIBUTOS
    private Integer numeroDeCuenta;
    private String titular;
    private Double saldo;


    //CONSTRUCTOR
    public Cuenta(Integer numeroDeCuenta, String titular) {
        this.numeroDeCuenta = numeroDeCuenta;
        this.titular = titular;
        this.saldo = 0.0;
    }
    //CONSTRUCTOR SOBRECARGA
    public Cuenta(Integer numeroDeCuenta, String titular, Double saldo) {
        this.numeroDeCuenta = numeroDeCuenta;
        this.titular = titular;
        this.saldo = saldo;
    }

    //METODOS
    public void depositar(Double monto){
        System.out.println("depositaste " + monto);
        this.saldo += monto; //saldo = saldo + monto
        System.out.println("nuevo saldo: " + saldo);
    }

    public void retirar(Double monto){
        if(monto <= saldo){
            System.out.println("retiraste " + monto);
            saldo -= monto;
            System.out.println("nuevo saldo: " + saldo);
        }else{
            System.out.println("no tenes suficiente saldo");
        }
    }
    //GETTERS Y SETTERS
    public String getTitular() {
        return titular;
    }



    public void setTitular(String titular) {
        this.titular = titular;
    }
}
