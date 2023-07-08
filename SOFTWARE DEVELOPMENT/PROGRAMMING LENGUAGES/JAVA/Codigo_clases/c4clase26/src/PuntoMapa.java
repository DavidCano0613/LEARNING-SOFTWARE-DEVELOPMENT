public class PuntoMapa {

    private Double longitud;
    private Double latitud;

    public PuntoMapa(Double longitud, Double latitud) {
        this.longitud = longitud;
        this.latitud = latitud;
    }

    public Double calcularDistancia(PuntoMapa otroPuntoMapa){
        return Math.abs(this.latitud - otroPuntoMapa.latitud) + Math.abs(this.longitud - otroPuntoMapa.longitud);
    }
}
