public class Seguidor implements Observer{

    private String nombre;
    private String apellido;
    private Integer cantidadDeNotificaciones;

    public Seguidor(String nombre, String apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
        cantidadDeNotificaciones = 0;
    }

    @Override
    public void actualizar(Usuario usuario) {
        System.out.println(nombre + " fue actualizado de la foto que subio " + usuario.getNombre());
        cantidadDeNotificaciones++;
    }
}
