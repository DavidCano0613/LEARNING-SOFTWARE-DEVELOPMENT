public abstract class Contrato {

    private Persona persona;
    private Integer duracionMeses;
    private String fechaInicioActividad;
    private Boolean sellado;

    public Contrato(Persona persona, Integer duracionMeses, String fechaInicioActividad, Boolean sellado) {
        this.persona = persona;
        this.duracionMeses = duracionMeses;
        this.fechaInicioActividad = fechaInicioActividad;
        this.sellado = sellado;
    }

    public Boolean sePuedeIncorporar(){
        return sellado == true;
    }

}
