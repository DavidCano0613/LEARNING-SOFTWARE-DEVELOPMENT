public class Main {
    public static void main(String[] args) {

        UnidadTrabajoFactory unidadTrabajoFactory = UnidadTrabajoFactory.getInstance();

        Empresa empresa = new Empresa();

        empresa.agregarUnidadesTrabajo(unidadTrabajoFactory.crearUnidadTrabajo("MANTENIMIENTO"));
        empresa.agregarUnidadesTrabajo(unidadTrabajoFactory.crearUnidadTrabajo("LIMPIEZA"));
        empresa.agregarUnidadesTrabajo(unidadTrabajoFactory.crearUnidadTrabajo("SERVICIOS GENERALES"));

        empresa.mostrarUnidadesTrabajo();
    }
}
