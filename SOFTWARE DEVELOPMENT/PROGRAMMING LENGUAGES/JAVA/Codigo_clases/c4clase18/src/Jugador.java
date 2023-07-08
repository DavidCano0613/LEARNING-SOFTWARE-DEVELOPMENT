public class Jugador {

    private String apellido;
    private Integer numeroDeCamiseta;
    private String posicion;

    public Jugador(String apellido, Integer numeroDeCamiseta, String posicion) {
        this.apellido = apellido;
        this.numeroDeCamiseta = numeroDeCamiseta;
        this.posicion = posicion;
    }

    public String getPosicion() {
        return posicion;
    }

    @Override
    public String toString() {
        return apellido;
    }
}
