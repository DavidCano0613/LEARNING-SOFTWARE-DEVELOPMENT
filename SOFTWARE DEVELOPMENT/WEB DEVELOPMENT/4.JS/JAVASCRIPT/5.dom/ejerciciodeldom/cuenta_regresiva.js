const dom  = document;
export default function countdown (id,deadline,finalMessage){
  const $countdown = dom.getElementById(id);
  const countdownDate = new Date(deadline).getTime();

  let countdownTempo = setInterval(() => {
    let now = new Date().getTime()
    let limittime = countdownDate - now;
    
  }, 1000);
}