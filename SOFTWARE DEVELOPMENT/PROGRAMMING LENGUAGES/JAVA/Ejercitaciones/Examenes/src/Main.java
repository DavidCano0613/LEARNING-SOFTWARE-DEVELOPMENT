public class Main {
    public static void main(String[] args) {

    Alumno alumno1 = new Alumno("Karen","Gomez","ABC" );
    Alumno alumno2 = new Alumno("Daniela","Palacio","DEF" );

    Parcial parcial1 =  new Parcial(alumno1, "Historia", "La historia es linda",3.0, 1);
        System.out.println(parcial1.estarAprobado());
        System.out.println(parcial1.puedeRecuperar());
        System.out.println(parcial1.puedeRecuperar());
        System.out.println(parcial1.puedeRecuperar());
        System.out.println(parcial1.puedeRecuperar());


        Final final1 = new Final(alumno1, "Historia", "La historia es fea", 6.0, 5.0, "Finalcito");
        Final final2 = new Final(alumno2, "Historia", "La historia es fea", 2.0, 3.5, "Finalcito");

        System.out.println(final1.compareTo(final2));
    }
}
