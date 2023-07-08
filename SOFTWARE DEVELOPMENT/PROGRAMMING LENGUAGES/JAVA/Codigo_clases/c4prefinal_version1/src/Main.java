public class Main {
    public static void main(String[] args) {

        OfertaAcademicaFactory ofertaAcademicaFactory = OfertaAcademicaFactory.getInstance();

        Instituto instituto = new Instituto();

        instituto.agregarOferta(ofertaAcademicaFactory.crearOfertaAcademica("CODIGO_FRONT"));
        instituto.agregarOferta(ofertaAcademicaFactory.crearOfertaAcademica("CODIGO_BACK"));
        instituto.agregarOferta(ofertaAcademicaFactory.crearOfertaAcademica("CODIGO_FULL"));

        instituto.generarInforme();
    }
}