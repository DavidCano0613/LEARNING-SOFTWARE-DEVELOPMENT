public class UnidadSimple extends UnidadTrabajo {

    private Double montoPersona;
    private Integer cantidadPersonas;

    public UnidadSimple(String nombre, String descripcion, Double montoPersona, Integer cantidadPersonas) {
        super(nombre, descripcion);
        this.montoPersona = montoPersona;
        this.cantidadPersonas = cantidadPersonas;
    }

    @Override
    public Double carlcularMonto() {
        if(cantidadPersonas >10){
            return montoPersona * cantidadPersonas + (montoPersona * 0.20);
        }
        return montoPersona * cantidadPersonas;
    }


}
