public class Main {
    public static void main(String[] args) {

        Empresa empresa1 =  new Empresa("JAVA SAS");

        empresa1.crearEmpleados("EMP-RD");
        empresa1.crearEmpleados(EmpleadoFactory.EMPLEADO_DEPENDIENTE);

    }
}
