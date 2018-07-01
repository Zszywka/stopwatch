class Stopwatch {
  constructor(display, results) {
    this.running = false;
    this.display = display;
    this.reset();
    this.print(this.times);
    this.results = results;
  }
  // methods:
  reset() {
    this.times = {
      minutes: 0,
      seconds: 0,
      miliseconds: 0
    };
    this.print();
  }
  print() {
    this.display.innerText = this.format(this.times);
  }
  format(times) {
    return `${pad0(times.minutes)}:${pad0(times.seconds)}:${pad0(Math.floor(times.miliseconds))}`
  }
  start() {
    if (!this.running) {
      this.running = true;
      this.watch = setInterval( () => this.step(), 10);
    }
  }
  step() {
    if (!this.running) return;
    this.calculate();
    this.print();
  }
  calculate() {
    this.times.miliseconds += 1;
    // zerowanie milisekund
    if (this.times.miliseconds >= 100) { 
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
    if (this.running) {
      this.addList(this.format(this.times))
    };
    this.running = false;
    clearInterval(this.watch);
  }                        
  addList(times) {
    const list = document.createElement('li');
    list.innerText = times;
    const li = document.querySelector('ul');
    li.appendChild(list);
  }
  resetList(list) {
    // list.innerText = '';
    const ul = document.querySelector('ul');
    const li = ul.querySelector('li');
    while (ul.firstChild) {
      ul.removeChild(ul.firstChild);
    }
  }
  resetOneElementOfTheList() {
    const ul = document.querySelector('ul');
    const li = ul.querySelector('li');
    // ul.removeChild(li);
    li.remove();
  }
}

// instance of the class:
const stopwatch = new Stopwatch(
  document.querySelector('.stopwatch') 
);

// running methods after clicking the button:
let startButton = document.getElementById('start');
startButton.addEventListener('click', () => stopwatch.start());

let stopButton = document.getElementById('stop');
stopButton.addEventListener('click', () => stopwatch.stop());

let resetButton = document.getElementById('reset');
resetButton.addEventListener('click', () => stopwatch.reset());

let resetListButton = document.getElementById('resetList');
resetListButton.addEventListener('click', () => stopwatch.resetList());

let resetOneElementButton = document.getElementById('resetOneElementOfTheList');
resetOneElementButton.addEventListener('click', () => stopwatch.resetOneElementOfTheList());

function pad0(value) {
  let result = value.toString();
  if (result.length < 2) {
    result = '0' + result;
  }
  return result;
}
