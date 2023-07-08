public class Rectangulo implements Combinable{

    private Double largo;
    private Double alto;

    public Rectangulo(Double largo, Double alto) {
        this.largo = largo;
        this.alto = alto;
    }

    @Override
    public Double calcularArea() {
        return largo * alto;
    }
}
