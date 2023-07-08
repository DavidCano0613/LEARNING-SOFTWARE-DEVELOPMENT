public class Parcial extends Examen {

    private Integer unidad;
    private Integer numeroIntentos;

    public Parcial(Alumno alumno, String titulo, String enunciado, Double nota, Integer unidad) {
        super(alumno, titulo, enunciado, nota);
        this.unidad = unidad;
        numeroIntentos = 3;
    }

    public boolean puedeRecuperar() {
        if (unidad <= 3 && numeroIntentos == 3) {
            numeroIntentos--;
            System.out.println("Estas realizando el intento " + numeroIntentos);
            return true;
        }
        if (unidad <= 3 && numeroIntentos == 2) {
            numeroIntentos--;
            System.out.println("Estas realizando el intento " + numeroIntentos);
            return true;
        }
        if (unidad <= 3 && numeroIntentos == 1) {
            numeroIntentos--;
            System.out.println("Estas realizando el intento " + numeroIntentos);
            return true;}
        else {
            System.out.println("Has agotado tus intentos, te quedan " + numeroIntentos);
            return false;

        }
    }
}

