public class OfertaAcademicaFactory {

    private static OfertaAcademicaFactory instance;

    private OfertaAcademicaFactory(){

    }

    public static OfertaAcademicaFactory getInstance() {
        if(instance == null){
            instance = new OfertaAcademicaFactory();
        }
        return instance;
    }

    public OfertaAcademica crearOfertaAcademica(String codigo){
        switch (codigo){
            case "CODIGO_FRONT" :
                return new Curso("FRONT END","soy un curso de front",16.0,2.0,1000.0);
            case "CODIGO_BACK" :
                return new Curso("BACK END","soy un curso de back end",20.0,2.0,900.0);
            case "CODIGO_FULL" :
                ProgramaIntensivo programaIntensivo = new ProgramaIntensivo("FULL STACK","soy un curso de full",0.20);
                programaIntensivo.agregarOferta(crearOfertaAcademica("CODIGO_FRONT"));
                programaIntensivo.agregarOferta(crearOfertaAcademica("CODIGO_BACK"));
                return programaIntensivo;
        }
        return null;
    }
}
