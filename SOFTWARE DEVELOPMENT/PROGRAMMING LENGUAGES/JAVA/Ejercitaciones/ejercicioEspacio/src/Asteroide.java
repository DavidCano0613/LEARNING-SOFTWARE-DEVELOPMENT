public class Asteroide extends ObjetoGrafico{

    private Integer lesion;

    public Asteroide(Integer posX, Integer posY, char direccion, Integer lesion) {
        super(posX, posY, direccion);
        this.lesion = lesion;
    }


    @Override
    public void irA(Integer x, Integer y, char direccion) {
        super.irA(x, y, direccion);
    }
}
