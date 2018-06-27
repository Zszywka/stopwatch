class Stopwatch {
  constructor(display) {    //przekazuje jeden parametr-pole gdzie ma sie pojawic  timer
    this.running = false;   //czy stoper pracuje
    this.display = display; //przechowuje element DOM pod ktorym znajduje sie timer
    this.reset();           //restartuje licznik
    this.print(this.times); //drukuje czas
  }
  // methods:
  rest() {
    this.times = {
      minutes: 0;
      seconds: 0,
      miliseconds: 0
    };
  }
  print() {
    // display pod tym atrybutem znajduje sie wewnetrzy tekst elementu DOM
    this.display.innerText = this.format(this.times); //format przygotowuje tekst do wyswietlenia
  }
  start() {

  }
  stop() {

  }
 }

// instance of the class:
const stopwatch = new Stopwatch(
  document.querySelector('.stopwatch')  //?? quertSelector
);

// running methods after clicking the button:
let startButton = document.getElementById('start');
startButton.addEventListener('click', () => stopwatch.start());

let stopButton = document.getElementById('stop');
stopButton.addEventListener('click', () => stopwatch.stop());

// start
// stop
// reset
// print
