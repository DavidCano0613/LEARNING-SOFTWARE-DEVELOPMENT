public class ObjetoGrafico {
    private Integer posX;
    private Integer posY;
    private char direccion;

    public ObjetoGrafico(Integer posX, Integer posY, char direccion) {
        this.posX = posX;
        this.posY = posY;
        this.direccion = direccion;
    }

    public void irA(Integer x, Integer y, char direccion){
        if(x > 0 && y == 0){
            direccion = 'e';
            System.out.println("te estas moviendo hacia el: " + direccion + " haz avanzado " + x);
        }
        else if (x < 0 && y == 0){
            direccion = 'o';
            System.out.println("te estas moviendo hacia el: " + direccion + " haz avanzado " + x);
        }
        else if(x == 0 && y > 0){
            direccion = 'n';
            System.out.println("te estas moviendo hacia el: " + direccion + " haz avanzado " + y);
        }
        else if(x == 0 && y < 0){
            direccion = 's';
            System.out.println("te estas moviendo hacia el: " + direccion + " haz avanzado " + y);
        }
    }




    /*public void irA(Integer x, Integer y, char direccion){
        if(this.posX != x || this.posY != y) {
            if (direccion == 'n') {
                while (this.posY < y && x > 0) {
                    this.posY += 1;
                }
                System.out.println("te encuentras en el oeste y estas avanzando hacia el norte, te haz movido: " + posY);
            }
            if(direccion == 's'){
                while (posY > y){
                    posY -= 1;

                }
                System.out.println("estas avanzando hacia el sur, te haz movido: " + posY);
            }


        }}

*/



    /*public void irA(Integer x, Integer y, char direccion){

        if(this.posX != x || this.posY != y){

            if(direccion == 'n'){
                posY+= y;
                System.out.println("te estas dirigiendo hacia el norte, haz avanzado " + posY);
            }

        }

    }*/




}
