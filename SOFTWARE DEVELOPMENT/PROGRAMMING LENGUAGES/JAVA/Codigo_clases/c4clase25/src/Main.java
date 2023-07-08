public class Main {
    public static void main(String[] args) {


        Usuario usuario = new Usuario("Eloy","Mentor");

        usuario.agregar(new Seguidor("David","Tobon"));
        usuario.agregar(new Seguidor("Natalia","Madera"));
        usuario.agregar(new Seguidor("David","Bustamante"));

        usuario.agregar(new Observer() {
            @Override
            public void actualizar(Usuario usuario) {
                System.out.println(usuario.getNombre() + " subio una foto compremos acciones de DH");
            }
        });

        usuario.subirFoto();
    }
}