public class Mapa {

    private PuntoMapa puntoMapaActual;
    private PuntoMapa puntoMapaDestino;
    private TransporteStrategy transporteStrategy;

    public Mapa(PuntoMapa puntoMapaActual, PuntoMapa puntoMapaDestino) {
        this.puntoMapaActual = puntoMapaActual;
        this.puntoMapaDestino = puntoMapaDestino;
        transporteStrategy = new AutoStrategy();
    }

    public Double calcularTiempoMinutos(){
        return transporteStrategy.calcularTiempoRecorrido(puntoMapaActual.calcularDistancia(puntoMapaDestino));
    }

    public void setTransporteStrategy(TransporteStrategy transporteStrategy) {
        this.transporteStrategy = transporteStrategy;
    }
}
