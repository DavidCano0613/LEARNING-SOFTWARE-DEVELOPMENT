import hamburguerMenu from "./menu_hamburguesa.js";
import { digitalClock,alarm} from "./reloj.js";
import {shortcuts} from "./teclado.js";
import countdown from "./cuenta_regresiva.js";
import contactFormValidations from "./validaciones.js";

document.addEventListener("DOMContentLoaded", (evento) => {

  hamburguerMenu(".panel-btn", ".panel", ".menu a");

  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");

  alarm(
    "../assets/graciosos-alarma-es-tu-mujer-.mp3",
    "#activar-alarma",
    "#desactivar-alarma"
  );

  countdown("countdown", "July-13-2023 04:20:50", "Feliz cumpleaños JuanDa");

  contactFormValidations()
});

//*EVENTOS DEL TECLADO
//*keyup: Soltamos la tecla
//*keydown: Presionamos la tecla
//*keypress = Mientras presionamos

// document.addEventListener("keydown", (e) => {
//   shortcuts(e);
// });


