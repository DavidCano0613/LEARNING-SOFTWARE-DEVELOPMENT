public class Oferente implements Observer{

    private String nombre;
    private String apellido;
    private String dni;
    private Double montoTope;

    public Oferente(String nombre, String apellido, String dni, Double montoTope) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.montoTope = montoTope;
    }

    @Override
    public void actualizar(Subasta subasta) {
        if(subasta.getMonto() < getMontoTope()) {
            System.out.println("El oferente: " + getNombre() + " ofrece " + getMontoTope());
        }
        System.out.println(nombre + " fue informado de la oferta realizada " );
    }

    public Double getMontoTope() {
        return montoTope;
    }

    public String getNombre() {
        return nombre;
    }
}
