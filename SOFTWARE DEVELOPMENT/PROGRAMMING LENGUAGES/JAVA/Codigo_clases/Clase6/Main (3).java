import java.util.Date;
import java.util.List;

public class Main {
    public static void main(String[] args) {

        Impresora impresora = new Impresora("HP","USB","17/08/2002");

        impresora.agregarHojas(100);

        impresora.imprimir("hola");
        impresora.imprimir("chau",400);




    }
}