import java.util.ArrayList;
import java.util.List;

public class FiguraCompuesta implements Combinable{
    private List<Combinable> combinableList;

    public FiguraCompuesta() {
        combinableList = new ArrayList<>();
    }

    public void agregarFigura(Combinable combinable){
        combinableList.add(combinable);
    }

    @Override
    public Double calcularArea() {
        Double areaTotal = 0.0;

        for (Combinable combinable : combinableList) {
            areaTotal += combinable.calcularArea();
        }
        return areaTotal;
    }
}
