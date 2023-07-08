package estados;

public class Pagando implements CarritoState{
    @Override
    public CarritoState vaciarCarrito() {
        return new Vacio();
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
        return new Cerrado();
    }
}
