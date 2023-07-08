public class CuentaAhorro extends Cuenta{

    private Double tasaInteres;
    public CuentaAhorro(Double numeroCliente, Double saldo) {
        super(numeroCliente, saldo);
        this.tasaInteres = 1.10; //esto representa 10% de interés al año
    }

    @Override
    public Double extraerEfectivo(Double cantidadDinero) {
        if(getSaldo() < cantidadDinero){
            System.out.println("no puedes retirar esta cantidad, fondos insuficientes");
        return 0.0;
        }
        return super.extraerEfectivo(cantidadDinero);
    }

    public void cobrarInteres(){
        Double resultado = super.getSaldo() * tasaInteres;
        super.setSaldo(resultado);
        System.out.println("tu saldo con intereses es: " + resultado);
    }


}
