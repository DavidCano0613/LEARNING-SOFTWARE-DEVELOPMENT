public abstract class Embarcacion {
    private Capitan capitan;
    private Integer anioFabricacion;
    private Double eslora;
    private Double valorBase;
    private Double valorAdicional;

    public Embarcacion(Capitan capitan, Integer anioFabricacion, Double eslora, Double valorBase, Double valorAdicional) {
        this.capitan = capitan;
        this.anioFabricacion = anioFabricacion;
        this.eslora = eslora;
        this.valorBase = valorBase;
        this.valorAdicional = valorAdicional;
    }

    public Double calcularMontoAlquiler() {
        if (this.anioFabricacion > 2020) {
            return valorBase + valorAdicional;
        } else{
            return valorBase;
        }
    }
}
