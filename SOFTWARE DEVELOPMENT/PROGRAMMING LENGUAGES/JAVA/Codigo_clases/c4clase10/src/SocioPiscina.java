public class SocioPiscina extends Socio {

    private Double costoPiscina;
    private Boolean estaHabilitado;

    public SocioPiscina(String numeroSocio, String nombre, Double cuotaMensual, String actividad, Double costoPiscina) {
        super(numeroSocio, nombre, cuotaMensual, actividad);
        this.costoPiscina = costoPiscina;
        this.estaHabilitado = true;
    }

    @Override
    public Double calcularCostoMensual() {
        if(estaHabilitado){
            return super.calcularCostoMensual() + costoPiscina;
        }
        return super.calcularCostoMensual();
    }
}
