public class ContratoPorHoras extends Contrato implements Comparable {

    private Double horasContratadasMes;
    private Double valorHora;

    public ContratoPorHoras(Persona persona, Integer duracionMeses, String fechaInicioActividad, Boolean sellado, Double horasContratadasMes, Double valorHora) {
        super(persona, duracionMeses, fechaInicioActividad, sellado);
        this.horasContratadasMes = horasContratadasMes;
        this.valorHora = valorHora;
    }

    @Override
    public int compareTo(Object o) {
        ContratoPorHoras otroContratoPorHoras = (ContratoPorHoras) o;
        if(horasContratadasMes > otroContratoPorHoras.horasContratadasMes){
            return 1;
        }
        if(horasContratadasMes < otroContratoPorHoras.horasContratadasMes){
            return -1;
        }
        return 0;
    }
}
