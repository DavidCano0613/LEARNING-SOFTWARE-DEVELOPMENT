import estados.CarritoState;
import estados.Vacio;

import java.util.ArrayList;
import java.util.List;

public class Carrito {

    private CarritoState estadoActual;
    private List<Producto>productoList;


    public Carrito() {
        productoList = new ArrayList<>();
        estadoActual = new Vacio();
    }

    public void anadirCarrito(Producto producto){
        productoList.add(producto);
        estadoActual = estadoActual.cargarCarrito();
    }

    public void cancelarCarrito(){
        if(!estadoActual.equals(estadoActual.finalizar())){
            estadoActual = estadoActual.vaciarCarrito();
        }
    }

    public void volverAnterior(){
        if(!estadoActual.equals(estadoActual.finalizar())){
            Integer estado = 0;
            if(estadoActual.equals(estadoActual.cargarCarrito())){
                estado = 1;
            } else if (estadoActual.equals(estadoActual.pagar())) {

                estado = 2;
            }


            switch (estado){
                case 1:
                     estadoActual.vaciarCarrito();
                     break;

                case 2:
                    estadoActual.cargarCarrito();
                    break;
            }

        }


    }

    public void pasarSiguienteEstado(){

        if(estadoActual.equals(estadoActual.cargarCarrito())){
            estadoActual.pagar();
        } else if (estadoActual.equals(estadoActual.pagar())) {
            estadoActual.finalizar();
        } else if (estadoActual.equals(estadoActual.vaciarCarrito())) {
            estadoActual.cargarCarrito();
        }else{
            estadoActual.vaciarCarrito();
        }

    }




}
