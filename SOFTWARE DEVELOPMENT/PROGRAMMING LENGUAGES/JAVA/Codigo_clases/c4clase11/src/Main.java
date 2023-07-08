public class Main {
    public static void main(String[] args) {

        Animal animal = new Leon("Simba","Amarillo",20.0);

        animal = new Aguila("Aguilon","Negra");

        animal.hacerRuido();

        Aguila aguila = (Aguila) animal;

        aguila.volar();


    }
}