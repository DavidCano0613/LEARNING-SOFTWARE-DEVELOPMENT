public class CuentaComitente extends Cuenta{
    private String claveValidacion;

    public CuentaComitente(Cliente titular, Double saldo, String claveValidacion) {
        super(titular, saldo);
        this.claveValidacion = claveValidacion;
    }

    public void comision(Double monto){
        depositar(monto * 0.99);
    }

    public void retirar(Double monto, String clave){
        if(clave != claveValidacion){
            puedeRetirar( monto * 0.5);
            System.out.println("Solo puedes retirar: " + monto * 0.5 + " si quieres retirar " + monto + " debes ingresar tu clave de verificacion ");
        } else{
            puedeRetirar(monto);
            System.out.println("Puedes retirar tu dinero: " + monto);
        }
    }



}



