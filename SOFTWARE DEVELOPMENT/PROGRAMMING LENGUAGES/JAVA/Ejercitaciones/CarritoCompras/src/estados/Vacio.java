package estados;

public class Vacio implements CarritoState{

    @Override
    public CarritoState vaciarCarrito() {
        return this;
    }

    @Override
    public CarritoState cargarCarrito() {
        return new Cargando();
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
