import java.util.ArrayList;
import java.util.List;

public class Subasta implements Observable{

    private Double monto;
    private String descripcion;

    private List<Observer> observerList;

    public Subasta(Double monto, String descripcion) {
        this.monto = monto;
        this.descripcion = descripcion;
        observerList = new ArrayList<>();
    }

    @Override
    public void agregar(Observer observer) {
    observerList.add(observer);
    }

    @Override
    public void quitar(Observer observer) {
    observerList.remove(observer);
    }

    @Override
    public void notificar() {
        for (Observer observer : observerList) {
            observer.actualizar(this);
        }
    }

    public void ofertar(){
        System.out.println("La oferta realizada de " + descripcion + " es por el valor de: " + monto);
        notificar();
    }

    public Double getMonto() {
        return monto;
    }
}
