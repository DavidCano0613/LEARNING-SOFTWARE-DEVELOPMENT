public class ObjetoGrafico {

    private int posx;
    private int posy;
    private char direccion;

    public ObjetoGrafico(int posx, int posy, char direccion) {
        this.posx = posx;
        this.posy = posy;
        this.direccion = direccion;
    }

    public void irA(int posx, int posy, char direccion){
        this.posx = posx;
        this.posy = posy;
        this.direccion = direccion;


    }

    public int getPosx() {
        return posx;
    }

    public int getPosy() {
        return posy;
    }

    public char getDireccion() {
        return direccion;
    }
}
