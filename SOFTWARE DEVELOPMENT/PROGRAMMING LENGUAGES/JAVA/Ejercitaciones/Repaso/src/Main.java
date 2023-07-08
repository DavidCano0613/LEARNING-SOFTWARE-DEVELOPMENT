public class Main {
    public static void main(String[] args) {

        Alumno alumno = new Alumno("Daniela","Palacio", "MJL");

        Parcial parcial1= new Parcial(alumno,"Programacion","Muy dicicil",2.0,1);
        Parcial parcial2= new Parcial(alumno,"Programacion","Muy dicicil",2.0,4);

        System.out.println(parcial1.recuperar());
        System.out.println(parcial1.estarAprobado());
        System.out.println(parcial1.recuperar());
        System.out.println(parcial1.recuperar());
        System.out.println(parcial1.recuperar());
        System.out.println("otra unidad "+ parcial2.recuperar());
        System.out.println(parcial2.recuperar());
        System.out.println(parcial2.recuperar());

        ExamenFinal final1= new ExamenFinal(alumno,"Testing", "Muy facil", 5.0,4.0, "Hola" );
        ExamenFinal final2= new ExamenFinal(alumno,"Testing", "Muy facil", 2.0,1.0, "Hola" );
        System.out.println("es el final "+ final1.compareTo(final2));
    }
}
