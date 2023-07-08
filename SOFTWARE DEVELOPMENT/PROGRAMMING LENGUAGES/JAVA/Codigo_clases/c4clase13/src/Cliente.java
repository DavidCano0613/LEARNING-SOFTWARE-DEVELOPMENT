public class Cliente implements Comparable {

    private Integer numeroDeCliente;
    private String apellido;

    public Cliente(Integer numeroDeCliente, String apellido) {
        this.numeroDeCliente = numeroDeCliente;
        this.apellido = apellido;
    }

    @Override
    public int compareTo(Object object) {

        Cliente cliente = (Cliente)  object;

        if(this.numeroDeCliente > cliente.numeroDeCliente){
            return 1;
        }
        if(this.numeroDeCliente < cliente.numeroDeCliente){
            return -1;
        }

        return 0;
    }

//    @Override
//    public int compareTo(Cliente o) {
//        return this.numeroDeCliente.compareTo(o.numeroDeCliente);
//    }
}
