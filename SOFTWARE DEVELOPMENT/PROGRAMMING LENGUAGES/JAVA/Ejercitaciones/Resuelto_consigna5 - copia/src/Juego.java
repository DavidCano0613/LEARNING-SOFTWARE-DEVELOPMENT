public class Juego {
    //ATRIBUTOS

    private String nombre;
    private String clave;
    private Double puntaje;
    private Integer nivel;

    //CONSTRUCTOR

    public Juego(String nombre, String clave) {
        this.nombre = nombre;
        this.clave = clave;
        this.puntaje = 0.0;
        this.nivel = 0;
    }

    // METODOS
    public Double aumentarPuntaje() {
        System.out.println("Puntaje inicial: " + puntaje);
        this.puntaje++;
        System.out.println("Puntaje final: " + puntaje);
        return this.puntaje;
    }

    public Integer subirNivel() {
        System.out.println("Puntaje inicial: " + nivel);
        this.nivel++;
        System.out.println("Puntaje final: " + nivel);
        return this.nivel;
    }

    public Double bonus(int valor) {
        System.out.println("Puntaje sin bonus: " + puntaje);
        this.puntaje += valor;
        System.out.println("Puntaje con bonus: " + puntaje);
        return this.puntaje;
    }
}
