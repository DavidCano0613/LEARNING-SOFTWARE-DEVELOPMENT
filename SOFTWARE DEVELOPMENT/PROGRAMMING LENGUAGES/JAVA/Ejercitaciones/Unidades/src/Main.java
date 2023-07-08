public class Main {
    public static void main(String[] args) {

        ProgramaEmpresa empresa = new ProgramaEmpresa();

        empresa.agregarUnidades(UnidadesFactory.UNIDAD_SIMPLEA);
        empresa.agregarUnidades(UnidadesFactory.UNIDAD_SIMPLEB);

        empresa.generarPresupuesto();

    }
}
