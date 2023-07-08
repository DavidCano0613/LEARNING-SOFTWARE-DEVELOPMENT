public class Main {
    public static void main(String[] args) {

        Rectangulo rectangulo = new Rectangulo(4.0, 5.0);

        Circulo circulo1 = new Circulo(1.0);
        Circulo circulo2 = new Circulo(1.0);
        Circulo circulo3 = new Circulo(1.0);

        FiguraCompuesta vagon = new FiguraCompuesta();
        vagon.agregarFigura(rectangulo);
        vagon.agregarFigura(circulo1);
        vagon.agregarFigura(circulo2);
        vagon.agregarFigura(circulo3);

        Locomotora locomotora = new Locomotora();

        locomotora.agregarFigura(vagon);
        System.out.println(locomotora.calcularAreaTotal());

    }
}