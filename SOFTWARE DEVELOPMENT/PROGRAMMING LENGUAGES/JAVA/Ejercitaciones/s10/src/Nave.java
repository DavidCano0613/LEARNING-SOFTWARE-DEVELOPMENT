import java.util.Objects;

public class Nave extends ObjetoGrafico{

    private double velocidad;
    private int vida;

    public Nave(int posx, int posy, char direccion, double velocidad) {
        super(posx, posy, direccion);
        this.velocidad = velocidad;
    }

    @Override
    public void irA(int posx, int posy, char direccion) {

        if( super.getDireccion() != direccion )
        {
            girar(direccion);
        }else {
            System.out.println("Continuando con rumbo:" +direccion);
        }

        super.irA(posx, posy, direccion);

    }

    public void girar(char direccion){

        System.out.println("Girando en direccion: " + direccion);

    }
    public void restaV(int valor){

    }


    public double getVelocidad() {
        return velocidad;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Nave nave = (Nave) o;
        return Double.compare(nave.velocidad, velocidad) == 0;
    }

    @Override
    public int hashCode() {
        return Objects.hash(velocidad);
    }

    @Override
    public String toString() {
        return "Nave{" +
                "velocidad=" + velocidad +
                ", vida=" + vida +
                '}';
    }
}
