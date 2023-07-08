public class EmpleadoContratado extends Empleado{

 private Double importeHora;
 private Double retencionImpuesto;

    public EmpleadoContratado(String nombre, String apellido, Integer legajo) {
        super(nombre, apellido, legajo);
        importeHora = 14.0;
        retencionImpuesto = 0.14;

    }

    @Override
    public Double calcularSueldo(Integer dias) {
        Double importeHoraFinal = 14.0 * 8.0;
        Double sueldoDias = importeHoraFinal * dias;
        Double sueldoMenosRetencion = sueldoDias * retencionImpuesto;
        return sueldoMenosRetencion;
    }
}
