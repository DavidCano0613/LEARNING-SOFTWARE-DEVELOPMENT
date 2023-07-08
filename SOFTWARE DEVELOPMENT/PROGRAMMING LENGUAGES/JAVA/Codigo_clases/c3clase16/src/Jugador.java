public class Jugador implements Comparable<Jugador>{

    private Integer numeroDeCamiseta;
    private String nombre;
    private Boolean estaLesionado;
    private Boolean esTitular;

    public Jugador(Integer numeroDeCamiseta, String nombre, Boolean estaLesionado, Boolean esTitular) {
        this.numeroDeCamiseta = numeroDeCamiseta;
        this.nombre = nombre;
        this.estaLesionado = estaLesionado;
        this.esTitular = esTitular;
    }

    public Boolean getEstaLesionado() {
        return estaLesionado;
    }

    public Boolean getEsTitular() {
        return esTitular;
    }

    @Override
    public int compareTo(Jugador otroJugador) {

        return this.numeroDeCamiseta.compareTo(otroJugador.numeroDeCamiseta);
    }

    @Override
    public String toString() {
        return "jugador numero: " + numeroDeCamiseta + " nombre: " + nombre ;
    }
}
