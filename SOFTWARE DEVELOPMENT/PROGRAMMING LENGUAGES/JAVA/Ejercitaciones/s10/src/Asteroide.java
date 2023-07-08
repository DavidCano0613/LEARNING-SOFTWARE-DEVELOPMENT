import java.util.Objects;

public class Asteroide extends ObjetoGrafico{
    private int lesion ;

    public Asteroide(int posx, int posy, char direccion, int lesion) {
        super(posx, posy, direccion);
        this.lesion = lesion;
    }

    @Override
    public void irA(int posx, int posy, char direccion) {
        super.irA(posx, posy, direccion);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Asteroide asteroide = (Asteroide) o;
        return lesion == asteroide.lesion;
    }

    @Override
    public int hashCode() {
        return Objects.hash(lesion);
    }

    @Override
    public String toString() {
        return "Asteroide{" +
                "lesion=" + lesion +
                '}';
    }
}
