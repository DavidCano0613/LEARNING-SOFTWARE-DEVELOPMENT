package estados;

public interface CarritoState {

    public CarritoState vaciarCarrito();
    public CarritoState cargarCarrito();
    public CarritoState pagar();
    public CarritoState finalizar();

}
