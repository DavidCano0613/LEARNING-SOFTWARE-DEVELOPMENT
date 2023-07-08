public class ContratoMensual extends Contrato {

    private Double salarioMensual;
    private Double horasTotales;
    private String cargo;

    public ContratoMensual(Persona persona, Integer duracionMeses, String fechaInicioActividad, Boolean sellado, Double salarioMensual, Double horasTotales, String cargo) {
        super(persona, duracionMeses, fechaInicioActividad, sellado);
        this.salarioMensual = salarioMensual;
        this.horasTotales = horasTotales;
        this.cargo = cargo;
    }


    public Boolean esJefe(){
        return cargo == "Jefe";
    }
}
