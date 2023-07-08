public class Nave extends  ObjetoGrafico{

    private Double velocidad;
    private Integer vida;

    public Nave(Integer posX, Integer posY, char direccion, Double velocidad) {
        super(posX, posY, direccion);
        this.velocidad = velocidad;
    }

    @Override
    public void irA(Integer x, Integer y, char direccion) {
        super.irA(x, y, direccion);
    }

    public void girar(char direccion){}
    public void restarVida(Integer valor){}

}
