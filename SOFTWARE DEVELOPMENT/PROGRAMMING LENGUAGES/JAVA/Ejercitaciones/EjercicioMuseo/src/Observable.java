public interface Observable {

    public void agregar(Observer observer);
    public void quitar(Observer observer);
    public void notificar();
}
