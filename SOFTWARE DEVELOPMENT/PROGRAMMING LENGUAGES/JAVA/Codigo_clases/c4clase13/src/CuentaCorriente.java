public class CuentaCorriente extends Cuenta implements ImpuestoGravable {

    private Double montoAutorizado;

    public CuentaCorriente(Cliente titular, Double saldo, Double montoAutorizado) {
        super(titular, saldo);
        this.montoAutorizado = montoAutorizado;
    }


    @Override
    protected Boolean puedeRetirar(Double monto) {
        return getSaldo() + montoAutorizado >= monto;
    }

    @Override
    public Double gravarImpuesto(Double porcentaje) {
        Double valorImpuesto = getSaldo() * porcentaje;
        retirar(valorImpuesto);
        return valorImpuesto;
    }
}
