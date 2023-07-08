public class Yate extends Embarcacion implements Comparable{
    private Integer camarotes;

    public Yate(Capitan capitan, Integer anioFabricacion, Double eslora, Double valorBase, Double valorAdicional, Integer camarotes) {
        super(capitan, anioFabricacion, eslora, valorBase, valorAdicional);
        this.camarotes = camarotes;
    }

    @Override
    public int compareTo(Object o) {
//        Yate yate = (Yate)o;
//        if(this.camarotes > yate.camarotes) {
//            return 1;
//        }
//        if(this.camarotes < yate.camarotes) {
//            return -1;
//        }
//        return 0;
        if(this.camarotes > ((Yate)o).camarotes){
            return 1;
        }
        if(this.camarotes < ((Yate)o).camarotes){
            return -1;
        }
        return 0;
    }
}
