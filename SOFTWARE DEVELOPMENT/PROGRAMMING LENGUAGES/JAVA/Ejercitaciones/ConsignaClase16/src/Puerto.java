import java.util.ArrayList;
import java.util.List;

public class Puerto {

    private List<Contenedor> contenedoresList;

    public Puerto() {

        this.contenedoresList = new ArrayList<>();
    }

    public void addContenedor(Contenedor contenedor){
        contenedoresList.add(contenedor);
    }


    public void mostrarOrdenContenedores(){
        contenedoresList.sort(null);
        for (Contenedor contenedor : contenedoresList) {
            System.out.println(contenedor);
        }
    }

    public Integer calcularContenedoresPeligrosos(){
        Integer contenedoresPeligrosos = 0;

        for (Contenedor contenedor : contenedoresList) {
            if (contenedor.getEsMaterialPeligroso() && contenedor.getPaisProcedencia().equals("Desconocido")){
                contenedoresPeligrosos++;
            }
        }
        return  contenedoresPeligrosos;
    }
}