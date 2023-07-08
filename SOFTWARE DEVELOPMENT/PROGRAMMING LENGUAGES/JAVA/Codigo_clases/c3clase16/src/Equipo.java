import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

public class Equipo {

    private String nombre;
    private List<Jugador> jugadorList;


    public Equipo(String nombre) {
        this.nombre = nombre;
        jugadorList = new ArrayList<>();
    }

    public void agregarJugador(Jugador jugador){
        jugadorList.add(jugador);
    }

    public Integer getCantidadJugadoresLesionados(){

        Integer cantidadLesionados = 0;

        for (Jugador jugador : jugadorList) {
            if (jugador.getEstaLesionado() && jugador.getEsTitular()){
                cantidadLesionados++;
            }
        }

        return cantidadLesionados;
    }

    public void mostrarJugadoresTitulares(){

        jugadorList.sort(null);

        for (Jugador jugador : jugadorList) {
            if(jugador.getEsTitular()){
                System.out.println(jugador);
            }
        }

    }


}
