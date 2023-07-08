//public class Clase3 {
//
//    public static void main(String[] args) {
//        //Desafío 1
//        //Hacé un programa que te permita jugar a “Piedra, papel o tijera”. En primer lugar, la
//        //aplicación solicita el nombre de cada gamer, después empieza el juego. El juego consiste
//        //en pedir qué opción elije cada uno y sumar puntos al winner —si lo hay—. Definí y utilizá
//        //una función llamada cualGana con dos parámetros con las jugadas de cada uno, que
//        //devuelve 0 en caso de empate, 1 si gana el primero, 2 si gana el segundo. El juego termina
//        //cuando el primero elije “*” como indicador de final.
//
//        Scanner scanner = new Scanner(System.in);
//        System.out.println("nombre del primer jugador");
//        String firstGamer = scanner.nextLine();
//        System.out.println("nombre del segundo jugador");
//        String secondGamer = scanner.nextLine();
//
//        //3 papel, 2 tijera, 1 piedra
//
//        System.out.println("que elijes jugador uno?
//                System.out.println("que elijes jugador uno?");
//        Integer selectGamerOne = scanner.nextInt();
//
//        System.out.println("que elijes jugador dos?");
//        Integer selectGamerTwo = scanner.nextInt();
//
//
//        cualGana(selectGamerOne, selectGamerTwo);
//
//
//    }
//    public static Integer cualGana(Integer gamerOne, Integer gamerTwo){
//
//        Integer game = gamerOne - gamerTwo;
//        Integer result = 0;
//
//        if (game == 0){
//            System.out.println("hay un empate, el puntaje es " + result);
//        }
//        else if (game == 1){
//            System.out.println("gana el primer jugador, el puntaje es " + (result+=1));
//        }
//        else {
//            System.out.println("gana el segundo jugador, el puntaje es " + (result+=2));
//        }
//
//        return  result;
//    }
//}


