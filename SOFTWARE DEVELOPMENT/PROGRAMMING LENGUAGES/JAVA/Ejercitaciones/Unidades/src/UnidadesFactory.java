public class UnidadesFactory {

    public static final String UNIDAD_SIMPLEA = "USIMPLE-MANTENIMIENTO";
    public static final String UNIDAD_SIMPLEB = "USIMPLE-LIMPIEZA";
    public static final String UNIDAD_COMBINADA = "UCOMBINADA-SGENERALES";


    private static UnidadesFactory instance;

    private UnidadesFactory() {
    }

    public static UnidadesFactory getInstance() {
       if(instance == null){
           instance = new UnidadesFactory();
       }
       return instance;
    }

    public Unidades crearUnidades(String codigo) throws UnidadesFactoryExcepcion{
        switch (codigo){
            case UNIDAD_SIMPLEA:
                return new UnidadSimple("mantenimiento", "arreglar todo", 120000.0, 4);

            case UNIDAD_SIMPLEB:
                    return new UnidadSimple("limpieza","limpiar todo", 100000.0, 24);

            case UNIDAD_COMBINADA:
                UnidadCombinada unidadCombinada = new UnidadCombinada("servicios generales", "explotados_mal_pagos", 3, 500.0);
                unidadCombinada.agregarUnidades(crearUnidades(UNIDAD_SIMPLEA));
                unidadCombinada.agregarUnidades(crearUnidades(UNIDAD_SIMPLEB));
                return unidadCombinada;
        }

        throw new UnidadesFactoryExcepcion(codigo + ": no es un codigo valido");

    }

}
