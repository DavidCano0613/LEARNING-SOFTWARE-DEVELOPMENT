public class EmpleadoFactory {

    // En un singleton se cita el atributo de su mismo tipo para poder instanciarlo
    private static EmpleadoFactory instance;

    // Creamos los códigos de los empleados en una variable constante para evitar que estos sean ingresados incorrectamente
    public static final String EMPLEADO_DEPENDIENTE = "EMP-RD";
    public static final String EMPLEADO_CONTRATADO = "EMP-PH";


    //El constructor siempre va vacio en un singleton
    public EmpleadoFactory() {
    }

    //Se crea la instancia con el mismo nombre de la clase utilizando el motod getInstance() que nos indica que solo va a ser null cuando no va a ser creado en otro caso retorna el valor de su instancia
    public static EmpleadoFactory getInstance() {
        if (instance == null){
            instance = new EmpleadoFactory();
        }
        return instance;
    }


    //Este metodo devuelve un dato de tipo empleado y lanza una exception en caso de que el código ingresado no sea válido
    public Empleado crearEmpleado(String codigo) throws EmpleadoFactoryException{
        switch (codigo) {
            case EMPLEADO_DEPENDIENTE:
                return new EmpleadoRelacionDependencia("Daniela", "Palacio", 123);
            case EMPLEADO_CONTRATADO:
                return new EmpleadoContratado("Karen", "Gomez", 156);
        }

        throw new EmpleadoFactoryException(codigo + "no es válido");
    }
}
