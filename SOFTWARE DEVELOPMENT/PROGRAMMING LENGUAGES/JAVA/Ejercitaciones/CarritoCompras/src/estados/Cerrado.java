package estados;

public class Cerrado implements CarritoState{
    @Override
    public CarritoState vaciarCarrito() {
        return this;
    }

    @Override
    public CarritoState cargarCarrito() {
        return this;
    }

    @Override
    public CarritoState pagar() {
        return this;
    }

    @Override
    public CarritoState finalizar() {
        return this;
    }
}
