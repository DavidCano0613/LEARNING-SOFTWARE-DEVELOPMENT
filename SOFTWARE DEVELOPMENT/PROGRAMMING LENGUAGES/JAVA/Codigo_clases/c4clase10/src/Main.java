public class Main {
    public static void main(String[] args) {

        Socio socio = new Socio("1","Antonio",2000.0,"futbol");
        Socio socio1 = new Socio("3","Antonio",2000.0,"futbol");

        SocioPiscina socioPiscina = new SocioPiscina("2","Maria",1500.0,"futbol",700.0);

        System.out.println(socio.calcularCostoMensual());

        System.out.println(socioPiscina.calcularCostoMensual());

        System.out.println(socio);
        System.out.println(socioPiscina);

        System.out.println(socio.equals(socio1));


    }
}