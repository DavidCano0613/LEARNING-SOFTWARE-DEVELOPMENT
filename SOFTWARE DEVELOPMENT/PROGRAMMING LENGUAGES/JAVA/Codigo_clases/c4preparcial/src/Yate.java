public class Yate extends Embarcacion implements Comparable{

    private Integer cantidadCamarotes;

    public Yate(Capitan capitan, Double precioBase, Double valorAdicional, Integer anioDeFabricacion, Double eslora, Integer cantidadCamarotes) {
        super(capitan, precioBase, valorAdicional, anioDeFabricacion, eslora);
        this.cantidadCamarotes = cantidadCamarotes;
    }


    @Override
    public int compareTo(Object o) {

        Yate otroYate = (Yate) o;

        if(this.cantidadCamarotes > otroYate.cantidadCamarotes){
            return 1;
        }
        if(this.cantidadCamarotes < otroYate.cantidadCamarotes){
            return -1;
        }
        return 0;
    }


    //    @Override
//    public int compareTo(Yate otroYate) {
//
//        if(this.cantidadCamarotes > otroYate.cantidadCamarotes){
//            return 1;
//        }
//        if(this.cantidadCamarotes < otroYate.cantidadCamarotes){
//            return -1;
//        }
//        return 0;
//
//        return 0;
//    }


}
