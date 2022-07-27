export default function hamburguerMenu(panelBtn,panel,menuLink){
    const d = document;
    d.addEventListener("click",evento => {
        if(evento.target.matches(panelBtn) || evento.target.matches(`${panelBtn} *`)){
            d.querySelector(panel).classList.toggle("is-active")
            d.querySelector(panelBtn).classList.toggle("is-active")

        }
        if(evento.target.matches(menuLink)){
            d.querySelector(panel).classList.remove("is-active");
            d.querySelector(panelBtn).classList.remove("is-active");
        }
    })
}

