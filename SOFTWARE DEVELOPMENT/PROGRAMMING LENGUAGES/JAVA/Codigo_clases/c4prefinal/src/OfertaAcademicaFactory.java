public class OfertaAcademicaFactory {


    public static final String CODIGO_FULLSTACK = "CODIGO_FULL";
    public static final String CODIGO_BACKEND = "CODIGO_BACK";
    public static final String CODIGO_FRONTEND = "CODIGO_FRONT";
    private static OfertaAcademicaFactory instance;

    private OfertaAcademicaFactory(){

    }

    public static OfertaAcademicaFactory getInstance() {
        if(instance == null){
            instance = new OfertaAcademicaFactory();
        }
        return instance;
    }

    public OfertaAcademica crearOfertaAcademica(String codigo) throws OfertaAcademicaFactoryException{
        switch (codigo){
            case CODIGO_FRONTEND:
                return new Curso("FRONT END","soy un curso de front",16.0,2.0,1000.0);
            case CODIGO_BACKEND:
                return new Curso("BACK END","soy un curso de back end",20.0,2.0,900.0);
            case CODIGO_FULLSTACK:
                ProgramaIntensivo programaIntensivo = new ProgramaIntensivo("FULL STACK","soy un curso de full",0.20);
                programaIntensivo.agregarOferta(crearOfertaAcademica(CODIGO_FRONTEND));
                programaIntensivo.agregarOferta(crearOfertaAcademica(CODIGO_BACKEND));
                return programaIntensivo;
        }
        throw new OfertaAcademicaFactoryException(codigo + " no es un codigo valido");
    }
}
