public abstract class UnidadTrabajo {

    private String nombre;
    private String descripcion;

    public UnidadTrabajo(String nombre, String descripcion) {
        this.nombre = nombre;
        this.descripcion = descripcion;
    }

    public abstract Double carlcularMonto();



    @Override
    public String toString() {
        return "Nombre unidad de trabajo: " + nombre + "."+ " Monto: " + carlcularMonto();
    }
}
