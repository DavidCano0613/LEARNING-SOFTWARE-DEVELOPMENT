import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
//
//        System.out.println("ingresa tu nombre");
//
//        String nombre = scanner.nextLine();
//
//        System.out.println("ingresa tu edad");
//
//        Integer edad = scanner.nextInt();
//
//        // bucles
//        System.out.println("hasta cuanto queres contar");
//        Integer numero = scanner.nextInt();
//
//        for(int i = 1; i <= numero; i++){
//            System.out.println(i);
//        }

        //funciones
        System.out.println("ingresa un numero");
        Integer numero = scanner.nextInt();
        System.out.println("ingresa otro numero");
        Integer otronumero = scanner.nextInt();

        if(esDivisible(numero,otronumero)){
            System.out.println(numero + " es divisible por " + otronumero);
        }else{
            System.out.println(numero + " no es divisible por " + otronumero);

        }





    }


    //funcion para ver si un numero es divisible por otro
    public static Boolean esDivisible(Integer numero1,Integer numero2){

//        Integer resto = numero1 % numero2;
//        return resto.equals(0);
        return numero1 % numero2 == 0;

    }
}