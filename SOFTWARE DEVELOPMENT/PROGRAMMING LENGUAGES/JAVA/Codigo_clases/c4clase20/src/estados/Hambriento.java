package estados;

public class Hambriento implements TamagochiState{


    @Override
    public TamagochiState recibirComida() {
        return new Feliz();
    }

    @Override
    public TamagochiState recibirBebida() {
        return new Triste();
    }

    @Override
    public TamagochiState recibirMimos() {
        return this;
    }
}
