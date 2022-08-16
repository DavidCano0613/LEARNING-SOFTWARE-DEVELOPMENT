const dom = document;

export default function contactFormValidations(){

  //* 
  const $form = document.querySelector(".contact-form");
  const $inputs = dom.querySelectorAll(".contact-form [required]");
  console.log($inputs);

  $inputs.forEach( input => {
    const $span = dom.createElement("span")
    $span.id = input.name
    $span.textContent = input.title
    $span.classList.add("contact-form-error","none") 
    input.insertAdjacentElement("afterend",
    $span) 
  });

  //* 
  dom.addEventListener("keyup", (evento)=>{
    if(evento.target.matches(".contact-form [required]")){
      let $input = evento.target;

      //*Para el data-attribute. 
      let pattern = $input.pattern || $input.dataset.pattern;

      if(pattern && $input.value !== ""){
        console.log("El input tiene patrón")
        let regex = new RegExp(pattern);
        return !regex.exec($input.value)
          ? dom.getElementById($input.name).classList.add("is-active")
          : dom.getElementById($input.name).classList.remove("is-active");
      }

      if(!pattern){
        console.log("El input tiene no patrón");
        return $input.value === ""
          ? dom.getElementById($input.name).classList.add("is-active")
          : dom.getElementById($input.name).classList.remove("is-active");
      } 

      console.log($input,pattern)
    }
  })

  //* 
  dom.addEventListener('submit',(evento)=>{
    evento.preventDefault();
    alert("Enviando Formulario");
    let $loader = dom.querySelector(".contact-form-loader");
    let $response = dom.querySelector(".contact-form-response");
    $loader.classList.remove("none");

    setTimeout(() => {
    $loader.classList.add('none');
    $response.classList.remove('none')
    $form.reset()
    setTimeout(() => {
      $response.classList.add("none")
    }, 3000);
    },3000);
  })

}




