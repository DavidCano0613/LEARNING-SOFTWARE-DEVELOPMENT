public class Main {
    public static void main(String[] args) {

        Persona persona1 = new Persona("Daniela","Palacio", 27, "MDMP");
        Persona persona2 = new Persona("David","Cano", 22, "JDPC");

        ContratoPorHoras contratoHoras1 = new ContratoPorHoras(persona1, 12, "31/03/2022", true, 10.0, 2500.0);
        ContratoPorHoras contratoHoras2 = new ContratoPorHoras(persona2, 6, "01/02/2022", false, 6.0, 900.0);
        System.out.println(contratoHoras1.compareTo(contratoHoras2));
        System.out.println(contratoHoras1.sePuedeIncorporar());
        System.out.println(contratoHoras2.sePuedeIncorporar());

        ContratoMensual contratoMes1 = new ContratoMensual(persona1,2, "01/04/2022", true, 250000.0, 18.0, "Contratista");
        ContratoMensual contratoMes2 = new ContratoMensual(persona1,2, "01/04/2022", false, 250000.0, 18.0, "Jefe");

        System.out.println(contratoMes1.esJefe());
        System.out.println(contratoMes1.sePuedeIncorporar());
        System.out.println(contratoMes2.esJefe());
        System.out.println(contratoMes2.sePuedeIncorporar());
    }
}
