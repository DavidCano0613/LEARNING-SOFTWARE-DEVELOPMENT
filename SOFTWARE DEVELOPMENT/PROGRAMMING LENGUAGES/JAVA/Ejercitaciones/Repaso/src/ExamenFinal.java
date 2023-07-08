public class ExamenFinal extends Examen implements Comparable {
    private Double notaOral;
    private String descripcionTema;

    public ExamenFinal(Alumno alumno, String titulo, String enunciado, Double nota, Double notaOral, String descripcionTema) {
        super(alumno, titulo, enunciado, nota);
        this.notaOral = notaOral;
        this.descripcionTema = descripcionTema;
    }

    @Override
    public int compareTo(Object o) {
        ExamenFinal examenFinal = (ExamenFinal)o;
        if(getNota()+notaOral/2 > examenFinal.getNota()+examenFinal.notaOral/2){
            return 1;
        }
        if(getNota()+notaOral/2 < examenFinal.getNota()+ examenFinal.notaOral/2){
            return -1;
        }
        return 0;
    }
}
