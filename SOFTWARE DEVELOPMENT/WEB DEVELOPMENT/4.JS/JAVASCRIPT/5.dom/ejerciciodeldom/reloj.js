const dom = document;

//*Reloj digital 
export function digitalClock(clock,btnPlay,btnStop){
  let clockTempo = null;
  dom.addEventListener("click",evento=>{
    if(evento.target.matches(btnPlay)){
      clockTempo = setInterval(() => {
        let clockHour = new Date().toLocaleTimeString()
        dom.querySelector(clock).innerHTML= `<h3>${clockHour}</h3>`;
      },1000);
      evento.target.disabled = true
    }

    if (evento.target.matches(btnStop)){
      clearInterval(clockTempo)
        dom.querySelector(clock).innerHTML = null;
        dom.querySelector(btnPlay).disabled = false;
    }
  })

} 

//*Alarma Sonora 
export function alarm(sound,btnPlay,btnStop){
  let alarmTempo;
  const $alarm = dom.createElement("audio")
  $alarm.src = sound;

  dom.addEventListener("click",e=>{
    if(e.target.matches(btnPlay)){
        alarmTempo = setTimeout(() => {
          $alarm.play()
        },1000);
        e.target.disabled = true
    }    
    if (e.target.matches(btnStop)){
      clearTimeout(alarmTempo)
      $alarm.pause()
      $alarm.currentTime = 0;
      dom.querySelector(btnPlay).disabled = false;
    }

  })
}

