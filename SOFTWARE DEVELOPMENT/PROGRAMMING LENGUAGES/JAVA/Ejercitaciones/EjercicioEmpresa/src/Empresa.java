import java.util.ArrayList;
import java.util.List;

public class Empresa {

    private String razonSocial;

    //Se crea una lista cuyos datos son tipo empleado
    private List<Empleado> empleadosList;

    public Empresa(String razonSocial) {
        this.razonSocial = razonSocial;

        //Inicialización de la lista
        empleadosList = new ArrayList<>();
    }

    //Este método añade a la lista un empleado
    //Se crea la instancia de EmpleadoFactory
    //Implemento el método que tiene EmpleadoFactory para crear el empleado, pasando por parametro su código de empleado
    //El try hace el proceso anterior y el catch me imprime el error
    public void crearEmpleados(String codigoEmpleado){
        try {
            empleadosList.add(EmpleadoFactory.getInstance().crearEmpleado(codigoEmpleado));
        } catch (EmpleadoFactoryException e) {
            e.printStackTrace();
        }
    }

    //El método recorre la lista y en una variable va sumando el sueldo de cada empleado para retornar el valor total de la npmina

    public Double calcularNomina(Integer dias){
        Double totalNomina = 0.0;
        for (Empleado empleado : empleadosList) {
            totalNomina += empleado.calcularSueldo(dias);
        }
        return totalNomina;
    }

}


