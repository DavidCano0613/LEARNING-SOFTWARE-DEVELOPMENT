import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        //creo el scanner
        Scanner scanner = new Scanner(System.in);
        //pedir el nombre
        System.out.println("nombre del perro?");
        String nombre = scanner.nextLine();
        // pedir cuantos kilos de comida consume
        System.out.println("cuanta comida consume?");
        Double cantidadParaEstarLleno = scanner.nextDouble();

        // crear una funcion pida paquetes y retorne cuantos se necesitaron para llenar al perro
        Integer cantidadPaquetes = cuantosPaquetesNecesita(cantidadParaEstarLleno);

        System.out.println(nombre + " consumio " + cantidadPaquetes + " paquetes");
    }

    public static Integer cuantosPaquetesNecesita(Double cantidadParaEstarMelos){
        Scanner scanner = new Scanner(System.in);
        Double cantidadConsumida = 0.0;
        Integer cantidadPaquetes = 0;
        while (cantidadParaEstarMelos >= cantidadConsumida){
            System.out.println("cuantos kilos tiene el paquete");
            Double pesoPaquete = scanner.nextDouble();
            cantidadConsumida += pesoPaquete;
            cantidadPaquetes++;
        }

        return cantidadPaquetes;
    }
}