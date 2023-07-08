import java.util.ArrayList;
import java.util.List;

public class Locomotora {

    private List<Combinable> combinableList;

    public Locomotora() {
        combinableList = new ArrayList<>();
    }

    public void agregarFigura(Combinable combinable){
        combinableList.add(combinable);
    }

    public Double calcularAreaTotal() {
        Double areaTotal = 0.0;

        for (Combinable combinable : combinableList) {
            areaTotal += combinable.calcularArea();
        }
        return areaTotal;
    }
}
