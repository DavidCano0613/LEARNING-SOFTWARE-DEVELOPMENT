import java.util.ArrayList;
import java.util.List;

public class UnidadCombinada extends UnidadTrabajo{

    private Double coeficienteGlobal;
    private Double montoMaterial;
    private List<UnidadTrabajo> unidadTranajoList;

    public UnidadCombinada(String nombre, String descripcion, Double coeficienteGlobal, Double montoMaterial) {
        super(nombre, descripcion);
        this.coeficienteGlobal = coeficienteGlobal;
        this.montoMaterial = montoMaterial;
        unidadTranajoList = new ArrayList<>();
    }

    public void agregarUnidadTrabajo(UnidadTrabajo unidadTrabajo){
        unidadTranajoList.add(unidadTrabajo);
    }

    @Override
    public Double carlcularMonto() {
        Double monto = 0.0;
        for (UnidadTrabajo unidadTrabajo : unidadTranajoList) {
            monto += unidadTrabajo.carlcularMonto();
        }
        return monto * coeficienteGlobal;
    }


}
