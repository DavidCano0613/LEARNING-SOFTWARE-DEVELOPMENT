public class Main {
    public static void main(String[] args) {

        Equipo equipo = new Equipo("Real Madrid");

        equipo.agregarJugador(new Jugador("Benzema",10,"DELANTERO"));
        equipo.agregarJugador(new Jugador("Tony Kroos",8,"DELANTERO"));
        equipo.agregarJugador(new Jugador("Xavi Hernández",9,"DELANTERO"));
        equipo.agregarJugador(new Jugador("Rene Higuita",1,"ARQUERO"));
        equipo.agregarJugador(new Jugador("Cristiano Ronaldo",2,"DEFENSOR"));


        try {
            System.out.println(equipo.cantidadJugadores("MEDIO"));
        } catch (EquipoException e) {
            e.printStackTrace();
        }



    }
}