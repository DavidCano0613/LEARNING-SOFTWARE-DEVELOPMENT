public class Cliente {
    private Double numeroCliente;
    private String apellido;
    private String DNI;
    private String CUIT;

    public Double getNumeroCliente() {
        return numeroCliente;
    }

    public void setNumeroCliente(Double numeroCliente) {
        this.numeroCliente = numeroCliente;
    }

    public Cliente(Double numeroCliente, String apellido, String DNI, String CUIT) {
        this.numeroCliente = numeroCliente;
        this.apellido = apellido;
        this.DNI = DNI;
        this.CUIT = CUIT;
    }
}
