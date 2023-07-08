import java.util.ArrayList;
import java.util.List;

public class ProgramaEmpresa {

    private List<Unidades> unidadesPresupuestoList;

    public ProgramaEmpresa() {
        unidadesPresupuestoList = new ArrayList<>();
    }

    public void agregarUnidades(String codigoUnidad) {

        try {
            unidadesPresupuestoList.add(UnidadesFactory.getInstance().crearUnidades(codigoUnidad));
        } catch (UnidadesFactoryExcepcion e) {
            System.out.println(e.getMessage());
        }

    }

    public void generarPresupuesto(){
        for (Unidades unidades: unidadesPresupuestoList){
            System.out.println(unidades);
        }
    }

}

//    public void gestionarPresupuestos(){
//        for (Unidades unidades : unidadesPresupuestoList) {
//            System.out.println(unidadesPresupuestoList);
//        }
//    }
//}
