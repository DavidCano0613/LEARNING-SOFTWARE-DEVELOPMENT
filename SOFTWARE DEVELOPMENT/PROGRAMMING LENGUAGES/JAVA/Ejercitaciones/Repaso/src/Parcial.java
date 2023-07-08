public class Parcial extends Examen {

    private Integer numeroUnidad;
    private Integer numeroReintentos;

    public Parcial(Alumno alumno, String titulo, String enunciado, Double nota, Integer numeroUnidad) {
        super(alumno, titulo, enunciado, nota);
        this.numeroUnidad = numeroUnidad;
        numeroReintentos = 3;
    }

    public Boolean recuperar() {
        if (this.numeroUnidad <= 3 && numeroReintentos > 0) {
            numeroReintentos--;
            return true;
        }
        if (this.numeroUnidad > 3 && numeroReintentos > 1) {
            numeroReintentos--;
            return true;
        }
        return false;
    }
}


