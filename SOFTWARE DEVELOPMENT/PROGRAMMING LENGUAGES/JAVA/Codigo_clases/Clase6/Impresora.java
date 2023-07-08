public class Impresora {

    private String modelo;
    private String tipoDeConexion;
    private String fechaDeFabricacion;
    private Integer cantidadDeHojas;

    public Impresora(String modelo, String tipoDeConexion, String fechaDeFabricacion) {
        this.modelo = modelo;
        this.tipoDeConexion = tipoDeConexion;
        this.fechaDeFabricacion = fechaDeFabricacion;
        cantidadDeHojas = 0;
    }

    private Boolean tienePapel(){
        return cantidadDeHojas > 0;
    }

    public void imprimir(String texto){
        if(tienePapel()){
            System.out.println("estoy imprimiendo: " + texto);
            cantidadDeHojas--;
        }else {
            System.out.println("no tenes papel");
        }
    }

    public void imprimir(String texto,Integer cantidadDeHojas){
        for (int i = 0; i < cantidadDeHojas; i++) {
            imprimir(texto);
        }
    }



    public void agregarHojas(Integer hojasSumadas){
        if(hojasSumadas >0){
            cantidadDeHojas += hojasSumadas;
        }
    }

    public void setCantidadDeHojas(Integer cantidadDeHojas) {
        this.cantidadDeHojas = cantidadDeHojas;
    }
}
