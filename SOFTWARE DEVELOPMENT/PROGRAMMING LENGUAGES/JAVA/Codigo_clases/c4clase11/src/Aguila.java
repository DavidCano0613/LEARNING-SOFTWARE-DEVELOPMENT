public class Aguila extends Animal{

    public Aguila(String nombre, String color) {
        super(nombre, color);
    }

    @Override
    public void hacerRuido() {
        System.out.println("pio pio");
    }

    public void volar(){
        System.out.println("estoy volando");
    }
}
