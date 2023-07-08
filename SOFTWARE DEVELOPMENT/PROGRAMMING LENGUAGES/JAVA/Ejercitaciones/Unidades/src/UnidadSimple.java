public class UnidadSimple  extends  Unidades{

    private Double montoPorPersona;
    private Integer cantidadPersonas;

    public UnidadSimple(String nombre, String descripcion, Double montoPorPersona, Integer cantidadPersonas) {
        super(nombre, descripcion);
        this.montoPorPersona = montoPorPersona;
        this.cantidadPersonas = cantidadPersonas;
    }

    @Override
    public Double calcularMonto() {

        Double montoFinal = 0.0;
        montoFinal += (cantidadPersonas * montoPorPersona);

        if(cantidadPersonas > 10){
            montoFinal = montoFinal * 1.20;
        }

        return  montoFinal;
    }



}
