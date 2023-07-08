public class Leon extends Animal{

    private Double velocidad;

    public Leon(String nombre, String color, Double velocidad) {
        super(nombre, color);
        this.velocidad = velocidad;
    }

    @Override
    public void hacerRuido() {
        System.out.println("todo lo que toca el sol es nuestro reino");
    }
}
