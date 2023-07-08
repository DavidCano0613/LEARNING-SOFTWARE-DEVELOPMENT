public class Main {
    public static void main(String[] args) {

    Nave hmsTitanic = new Nave(23,12,'N', 300.4);

        System.out.println("La direccion actual de la nave es: "+ hmsTitanic.getDireccion());
        System.out.println("La velocidad actual de la nave es: "+ hmsTitanic.getVelocidad());
        hmsTitanic.irA(34,53, 'W');
        hmsTitanic.irA(34,100, 'W');
        hmsTitanic.irA(34,53, 'S');




    }
}