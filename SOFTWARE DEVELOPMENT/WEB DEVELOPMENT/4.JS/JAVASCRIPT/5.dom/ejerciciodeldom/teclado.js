//*EVENTOS DEL TECLADO
//*keyup: Soltamos la tecla
//*keydown: Presionamos la tecla
//*keypress = Mientras presionamos

const dom = document;

export function shortcuts(e) {
  console.log(e);
  console.log(e.type);
  console.log(e.key);
  console.log(e.keyCode);
  console.log(e.ctrlKey);
  console.log(e.altKey);
  console.log(e.shiftKey);

  if (e.key === "a" && e.altKey) {
    alert("Has lanzado una alerta con el teclado");
  }
}
