public class Main {
    public static void main(String[] args) {

        Cuenta cuenta = new Cuenta("Frank");


        try{
            cuenta.depositar(1000.0);
        }catch (Exception e){
            e.printStackTrace();
        }

        try {
            cuenta.retirar(5000.0);
        } catch (CuentaException e) {
            e.printStackTrace();
        }

        try {
            cuenta.retirar(-1000.0);
        } catch (CuentaException e) {
            e.printStackTrace();
        }

        System.out.println("llego hasta aca");

    }
}