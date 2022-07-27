
const dom = document;

export default function contactFormValidations(){

  const $form = document.querySelector("contact-form");
  const $inputs = dom.querySelectorAll(".contact-form [required]");
  console.log($inputs);

  $inputs.forEach(input=>{
    const $span = dom.createElement("span")
    $span.id = input.name
    $span.textContent = input.title
    $span.classList.add("contact-form-error","none")
    input.insertAdjacentElement("afterend",
    $span)
  });

  dom.addEventListener("keyup",(evento)=>{
    if(evento.target.matches(".contact-form [required]")){
      let $inputDisparador = evento.target;

      //*Para el data-attribute 
      let pattern = $inputDisparador.pattern || $inputDisparador.dataset.pattern;

      console.log($inputDisparador,pattern)
    }
  })

}




