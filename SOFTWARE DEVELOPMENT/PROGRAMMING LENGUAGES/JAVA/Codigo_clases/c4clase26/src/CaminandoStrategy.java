public class CaminandoStrategy implements TransporteStrategy{


    @Override
    public Double calcularTiempoRecorrido(Double distancia) {
        return  distancia / 0.20366 * 13 ;
    }
}
