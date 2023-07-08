public class Circulo implements Combinable{

    private Double radio;
    private Double pi;

    public Circulo(Double radio) {
        this.radio = radio;
        pi = Math.PI;
    }

    @Override
    public Double calcularArea() {
        return radio * radio * pi;
    }
}
