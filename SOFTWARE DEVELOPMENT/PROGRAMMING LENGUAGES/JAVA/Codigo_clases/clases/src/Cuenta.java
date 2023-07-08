//Clase 5 - Ejercicio creación cuenta banco

public class Cuenta{
    //ATRIBUTOS
    private Integer numeroDeCuenta;
    private String titular;
    private Double saldo;

    //CONSTRUCTOR (Es necesario para inicializar los atributos)

    public Cuenta(Integer numeroDeCuenta, String titular){
        this.numeroDeCuenta = numeroDeCuenta;
        this.titular = titular;
        this.saldo = 0.0;
    }

    //CONSTRUCTOR SOBRECARGA (Varias opciones de construir objetos, para agregar otras opciones)

    public Cuenta(Integer numeroDeCuenta, String titular, Double saldo) {
        this.numeroDeCuenta = numeroDeCuenta;
        this.titular = titular;
        this.saldo = saldo;
    }


    //METODOS

    public void depositar(Double monto){
        System.out.println("Deposistaste: " + monto);
        this.saldo += monto; // saldo = saldo + monto. El this existe para evitar la ambiguedad
        System.out.println("Nuevo saldo: " + saldo);
    }

    public void retirar(Double monto){
        if(monto <= saldo){
            System.out.println("Retiraste " + monto);
            saldo -=monto;
        }else{
            System.out.println("No tienes suficiente saldo");
        }
    }

    public String getTitular(){
        return titular;
    }

    public void setTitular(String titular){
        this.titular = titular;
    }

}
