public class UnidadTrabajoFactory {

    private static UnidadTrabajoFactory instance;

    private UnidadTrabajoFactory() {
    }

    public static UnidadTrabajoFactory getInstance() {
        if (instance == null) {
            instance = new UnidadTrabajoFactory();
        }
        return instance;
    }

    public UnidadTrabajo crearUnidadTrabajo(String codigo){
        switch (codigo){
            case "MANTENIMIENTO":
                return new UnidadSimple("Mantenimiento", "Arreglos", 120000.0, 4);
            case "LIMPIEZA":
                return new UnidadSimple("Limpieza", "Aseo", 100000.0, 24);
            case "SERVICIOS GENERALES":
                UnidadCombinada unidadCombinada = new UnidadCombinada("Servicios Generales", "Hacer de todo", 3.0, 100.0);
                unidadCombinada.agregarUnidadTrabajo(crearUnidadTrabajo("MANTENIMIENTO"));
                unidadCombinada.agregarUnidadTrabajo(crearUnidadTrabajo("LIMPIEZA"));
                return unidadCombinada;
        }
        return null;
    }
}
