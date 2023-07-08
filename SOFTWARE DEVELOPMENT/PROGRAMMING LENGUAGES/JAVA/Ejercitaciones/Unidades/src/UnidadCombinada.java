import java.util.ArrayList;
import java.util.List;

public class UnidadCombinada extends Unidades{

    private Integer coeficienteGlobal;
    private Double montoMaterial;
    private List<Unidades> unidadesList;

    public UnidadCombinada(String nombre, String descripcion, Integer coeficienteGlobal, Double montoMaterial) {
        super(nombre, descripcion);
        this.coeficienteGlobal = coeficienteGlobal;
        this.montoMaterial = montoMaterial;
        unidadesList = new ArrayList<>();
    }

    public void agregarUnidades(Unidades unidades){
        unidadesList.add(unidades);
    }

    @Override
    public Double calcularMonto() {
        Double montoFinal = 0.0;

        for (Unidades unidades : unidadesList) {
            montoFinal += (unidades.calcularMonto()) * coeficienteGlobal;
        }
        return montoFinal;
    }
}
