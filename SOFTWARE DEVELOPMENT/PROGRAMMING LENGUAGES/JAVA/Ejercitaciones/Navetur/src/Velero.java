public class Velero extends Embarcacion implements Comparable {
 private Integer cantidadMastiles;

    public Velero(Capitan capitan, Integer anioFabricacion, Double eslora, Double valorBase, Double valorAdicional, Integer cantidadMastiles) {
        super(capitan, anioFabricacion, eslora, valorBase, valorAdicional);
        this.cantidadMastiles = cantidadMastiles;
    }

    public String evaluarTamanio() {
        if (this.cantidadMastiles > 4) {
            return "Este es un velero grande";
        } else {
            return "Este es un velero pequenio";
        }
    }

    @Override
    public int compareTo(Object o) {
        Velero velero = (Velero)o;
        if(this.cantidadMastiles > velero.cantidadMastiles){
            return 1;
        }
        if(this.cantidadMastiles < velero.cantidadMastiles){
            return -1;
        }
        return 0;
    }
}
