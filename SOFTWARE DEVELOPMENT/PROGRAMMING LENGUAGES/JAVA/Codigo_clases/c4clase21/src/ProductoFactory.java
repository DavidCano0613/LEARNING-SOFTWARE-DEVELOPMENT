public class ProductoFactory {

    public static final String CODIGO_CAJA10 = "CAJA10X10";
    public static final String CODIGO_PELOTA_TENIS = "PELOTATENIS";
    public static final String CODIGO_PELOTA_FUTBOL = "PELOTAFUTBOL";

    private static ProductoFactory instance;

    private ProductoFactory(){

    }

    public static ProductoFactory getInstance() {
        if(instance == null){
            instance = new ProductoFactory();
        }
        return instance;
    }

    public Producto crearProducto(String codigo) throws ProductoFactoryException{
        switch (codigo){
            case CODIGO_PELOTA_TENIS:
                return new Pelota(1.0,0.32);
            case CODIGO_PELOTA_FUTBOL:
                return new Pelota(3.0,11.0);
            case CODIGO_CAJA10 :
                return new Caja(4.0,10.0,10.0,10.0);
        }

        throw new ProductoFactoryException(codigo + " no es uno de los codigos validos");
     }
}
