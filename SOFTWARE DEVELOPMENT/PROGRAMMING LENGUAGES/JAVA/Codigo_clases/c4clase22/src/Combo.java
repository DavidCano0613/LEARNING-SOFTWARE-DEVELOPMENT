import java.util.ArrayList;
import java.util.List;

public class Combo implements Comprable {

    private List<Comprable> comprableList;
    private Double descuento;

    public Combo(Double descuento) {
        comprableList = new ArrayList<>();
        this.descuento = descuento;
    }

    public void agregarComprable(Comprable comprable){
        comprableList.add(comprable);
    }

    @Override
    public Double calcularPrecio() {
        Double precioTotal = 0.0;
        System.out.println("soy un combo estoy recorriendo mis comprables");
        for (Comprable comprable : comprableList) {
            precioTotal += comprable.calcularPrecio();
        }
        Double precioConDescuento = (precioTotal - precioTotal*descuento);
        System.out.println("termine de recorrer mis comprables el precio final es de " + precioConDescuento);
        return precioConDescuento;

    }
}
