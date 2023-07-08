public class Main {
    public static void main(String[] args) {
        Puerto puerto1 = new Puerto();
        puerto1.addContenedor(new Contenedor( 125, "Canada", false));
        puerto1.addContenedor(new Contenedor( 130, "Colombia", true));
        puerto1.addContenedor(new Contenedor( 119, "Desconocido", true));
        puerto1.addContenedor(new Contenedor( 136, "Brazil", true));

        System.out.println(puerto1.calcularContenedoresPeligrosos());
        puerto1.mostrarOrdenContenedores();

    }
}




