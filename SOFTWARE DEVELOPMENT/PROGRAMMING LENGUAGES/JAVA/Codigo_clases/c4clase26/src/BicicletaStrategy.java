public class BicicletaStrategy implements TransporteStrategy{
    @Override
    public Double calcularTiempoRecorrido(Double distancia) {
        return distancia / 0.050366 * 1.5 ;
    }
}
