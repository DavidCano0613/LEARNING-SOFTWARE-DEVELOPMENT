public class Main {

    public static void main(String[] args) {

        Equipo equipo = new Equipo("Arsenal");

        equipo.agregarJugador(new Jugador(10,"Maradona",true,true));
        equipo.agregarJugador(new Jugador(8,"Ramsey",false,true));
        equipo.agregarJugador(new Jugador(1,"Calero",false,true));
        equipo.agregarJugador(new Jugador(2,"Karen",false,true));
        equipo.agregarJugador(new Jugador(9,"Jean Carlos",true,false));


        System.out.println(equipo.getCantidadJugadoresLesionados());

        equipo.mostrarJugadoresTitulares();
    }
}