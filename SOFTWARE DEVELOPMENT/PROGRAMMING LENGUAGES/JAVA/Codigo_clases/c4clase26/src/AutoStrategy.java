public class AutoStrategy implements TransporteStrategy{
    @Override
    public Double calcularTiempoRecorrido(Double distancia) {
        return distancia / 0.40366 * 4 ;
    }
}
