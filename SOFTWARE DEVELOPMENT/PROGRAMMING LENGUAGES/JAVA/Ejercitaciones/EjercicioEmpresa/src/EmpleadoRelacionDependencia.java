public class EmpleadoRelacionDependencia extends Empleado {

    private Double sueldoMensual;

    public EmpleadoRelacionDependencia(String nombre, String apellido, Integer legajo) {
        super(nombre, apellido, legajo);
        sueldoMensual = 1000.0;
    }

    //Se sobre escribe el método abstracto declarado en la clase Empleado
    @Override
    public Double calcularSueldo(Integer dias) {
        Double sueldodiario = sueldoMensual / 30.0;
        Double sueldoNeto = sueldoMensual * dias;
        return sueldoNeto;
    }
}
