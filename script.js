class Stopwatch {
  constructor(display) {    //przekazuje jeden parametr-pole gdzie ma sie pojawic  timer
    this.running = false;   //czy stoper pracuje
    this.display = display; //przechowuje element DOM pod ktorym znajduje sie timer
    this.reset();           //restartuje licznik
    this.print(this.times); //drukuje czas
  }
  // methods:
  reset() {
    this.times = {
      minutes: 0,
      seconds: 0,
      miliseconds: 0
    };
    this.print();  //implementacja metody print
  }
  print() {
    // display pod tym atrybutem znajduje sie wewnetrzy tekst elementu DOM
    this.display.innerText = this.format(this.times); //format przygotowuje tekst do wyswietlenia
  }                                                   //dlaczego nie moze byc format(times)??
  format(times) {
    return `${pad0(times.minutes)}:${pad0(times.seconds)}:${pad0(Math.floor(times.miliseconds))}`
  }    //  i po co math.floor??
  start() {
    if (!this.running) {  //sprawdzamy czy timer juz nie chodzi
      this.running = true; //po uruchomieniu ustawiamy flage biegajacy teraz
      this.watch = setInterval(() => this.step(), 10); //interwal odpala sie co 10 ms metoda step
    }                                                  //metoda step to tik timera
  }
  step() {
    if (!this.running) return; //sprawdza czy timer jest uruchomiony //nie powinno byc !
    this.calculate();  //przeliczamy wynik
    this.print();     //drukujemy wynik
  }
  calculate() {
    this.times.miliseconds += 1;
    // zerowanie milisekund
    if (this.times.miliseconds >= 100) { //1sek=1000ms, ale metoda wykonuje sie co 10ms=> 1000/10=100
    this.times.seconds += 1;
    this.times.miliseconds = 0;
    }
    // zerowanie sekund
    if (this.times.seconds >= 60) {
      this.times.minutes += 1;
      this.times.seconds = 0;
    }
  }
  
  stop() {
    this.running = false;
    clearInterval(this.watch); //czy metoda clearInterval jest wbudowana ? jak setInterval?
  }                           //this.watch to ze startu
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


// funkcja ma dodawac zero do liczby jednocyfrowej
function pad0(value) {  //value to liczba
  let result = value.toString(); //przeksztalca wartosc na stringa
  if (result.length < 2) {
    result = '0' + result;
  }
  return result;
}
