import java.util.ArrayList;
import java.util.List;

public class Empresa {

    private List<UnidadTrabajo> unidadTrabajoList;

    public Empresa() {

        unidadTrabajoList = new ArrayList<>();
    }

    public void agregarUnidadesTrabajo(UnidadTrabajo unidadTrabajo) {
    unidadTrabajoList.add(unidadTrabajo);}


    public void mostrarUnidadesTrabajo() {
        for (UnidadTrabajo unidadTrabajo : unidadTrabajoList) {
            System.out.println(unidadTrabajo);
        }
    }

}
