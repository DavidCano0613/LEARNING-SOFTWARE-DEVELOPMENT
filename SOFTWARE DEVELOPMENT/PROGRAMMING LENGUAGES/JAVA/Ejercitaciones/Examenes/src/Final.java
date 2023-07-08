public class Final extends Examen implements Comparable{

    private Double notaOral;
    private String descripcionTemaOral;


    public Final(Alumno alumno, String titulo, String enunciado, Double nota, Double notaOral, String descripcionTemaOral) {
        super(alumno, titulo, enunciado, nota);
        this.notaOral = notaOral;
        this.descripcionTemaOral = descripcionTemaOral;
    }

    @Override
    public int compareTo(Object o) {
        Final otroFinal = (Final)o;
        if(getNota()+notaOral/2 > otroFinal.getNota()+otroFinal.notaOral/2) {
        return 1;
        }
        if(getNota()+notaOral/2 < otroFinal.getNota()+otroFinal.notaOral/2){
        return -1;
        }
        return 0;
    }
}
