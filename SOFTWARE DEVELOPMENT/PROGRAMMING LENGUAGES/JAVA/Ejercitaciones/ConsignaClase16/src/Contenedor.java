public class Contenedor implements Comparable<Contenedor>{

    private Integer numeroIdentificador;
    private String paisProcedencia;
    private Boolean esMaterialPeligroso;

    public Contenedor(Integer numeroIdentificador, String paisProcedencia, Boolean esMaterialPeligroso) {
        this.numeroIdentificador = numeroIdentificador;
        this.paisProcedencia = paisProcedencia;
        this.esMaterialPeligroso = esMaterialPeligroso;
    }

    public Boolean getEsMaterialPeligroso() {
        return esMaterialPeligroso;
    }

    public String getPaisProcedencia() {
        return paisProcedencia;
    }

    @Override
    public String toString() {
        return "Contenedor #: " + numeroIdentificador+ " pais : " + paisProcedencia;
    }

    @Override
    public int compareTo(Contenedor o) {
        return this.numeroIdentificador.compareTo(o.numeroIdentificador);
    }
}