import java.util.ArrayList;
import java.util.List;

public class Instituto {

    private List<OfertaAcademica> ofertaAcademicaList;

    public Instituto() {
        ofertaAcademicaList = new ArrayList<>();
    }

    public void agregarOferta(String codigoOferta){
        try {
            ofertaAcademicaList.add(OfertaAcademicaFactory.getInstance().crearOfertaAcademica(codigoOferta));
        } catch (OfertaAcademicaFactoryException e) {
            System.out.println(e.getMessage());
        }
    }

    public void generarInforme(){
        for (OfertaAcademica ofertaAcademica : ofertaAcademicaList) {
            System.out.println(ofertaAcademica);
        }
    }
}
