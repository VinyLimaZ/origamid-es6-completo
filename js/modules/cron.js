export default function initCron() {
  let clockNumber = 0;
  let cronLoop;

  const clockSection  =  document.querySelector('[data-cron="section"]');
  const clock         =  document.querySelector('[data-cron="clock"]');
  const beginButton   =  document.querySelector('[data-cron="begin"]');
  const pauseButton   =  document.querySelector('[data-cron="pause"]');
  const showCron      =  document.querySelector('[data-cron="show"]');

     showCron.addEventListener('click', toggleCron);
  pauseButton.addEventListener('click', pauseCron);
  pauseButton.addEventListener('dblclick', resetCron);
  beginButton.addEventListener('click', beginCron);

  function toggleCron(event) {
    event.preventDefault();
    printCron();

    clockSection.classList.toggle('active');

    if(clockSection.classList.contains('active')) {
        this.innerText = 'Ocultar cronometro';
    } else {
        this.innerText = 'Mostrar cronometro';
    }
  }

  function printCron() {
    clock.innerText = `${clockNumber} segundos`;
  }

  function incrementCron() {
    clockNumber += 1;
  }

  function resetCron() {
    clockNumber = 0;
    printCron();
  }

  function pauseCron() {
    clearInterval(cronLoop);
    deleteCronLoop();
  }

  function deleteCronLoop() {
    cronLoop = null
  }

  function beginCron() {
    if(!cronLoop) {
        cronLoop = setInterval(whileCron, 1000)
    }
  }

  function whileCron(){
    printCron();
    incrementCron();
  }
}
