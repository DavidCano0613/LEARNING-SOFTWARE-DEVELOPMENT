public abstract class Unidades {
    private String nombre;
    private String descripcion;

    public Unidades(String nombre, String descripcion) {
        this.nombre = nombre;
        this.descripcion = descripcion;
    }

        public abstract Double calcularMonto();


    @Override
    public String toString() {
        return "nombre: " + nombre + " monto: " + calcularMonto();
    }
}
