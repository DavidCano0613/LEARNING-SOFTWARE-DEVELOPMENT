package estados;

public class Cargando implements CarritoState {

    @Override
    public CarritoState vaciarCarrito() {
        return new Vacio();
    }

    @Override
    public CarritoState cargarCarrito() {
        return this;
    }

    @Override
    public CarritoState pagar() {
        return new Pagando();
    }

    @Override
    public CarritoState finalizar() {
        return this;
    }
}
