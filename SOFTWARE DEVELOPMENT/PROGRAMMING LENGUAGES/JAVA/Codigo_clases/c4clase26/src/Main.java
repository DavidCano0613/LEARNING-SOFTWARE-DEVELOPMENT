public class Main {
    public static void main(String[] args) {

        PuntoMapa puntoMapa = new PuntoMapa(100.0,30.0);
        PuntoMapa otroPuntoMapa = new PuntoMapa(-50.0,15.0);

        Mapa mapa = new Mapa(puntoMapa,otroPuntoMapa);

        System.out.println(mapa.calcularTiempoMinutos());

        mapa.setTransporteStrategy(new BicicletaStrategy());

        System.out.println(mapa.calcularTiempoMinutos());

        mapa.setTransporteStrategy(new CaminandoStrategy());

        System.out.println(mapa.calcularTiempoMinutos());

    }
}