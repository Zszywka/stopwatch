'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Stopwatch = function () {
  function Stopwatch(display, results) {
    _classCallCheck(this, Stopwatch);

    //przekazuje jeden parametr-pole gdzie ma sie pojawic  timer
    this.running = false; //czy stoper pracuje
    this.display = display; //przechowuje element DOM pod ktorym znajduje sie timer
    this.reset(); //restartuje licznik
    this.print(this.times); //drukuje czas
    this.results = results;
  }
  // methods:


  _createClass(Stopwatch, [{
    key: 'reset',
    value: function reset() {
      this.times = {
        minutes: 0,
        seconds: 0,
        miliseconds: 0
      };
      this.print(); //implementacja metody print
    }
  }, {
    key: 'print',
    value: function print() {
      // display pod tym atrybutem znajduje sie wewnetrzy tekst elementu DOM
      this.display.innerText = this.format(this.times); //format przygotowuje tekst do wyswietlenia
    } //dlaczego nie moze byc format(times)??

  }, {
    key: 'format',
    value: function format(times) {
      return pad0(times.minutes) + ':' + pad0(times.seconds) + ':' + pad0(Math.floor(times.miliseconds));
    } //  i po co math.floor??

  }, {
    key: 'start',
    value: function start() {
      var _this = this;

      if (!this.running) {
        //sprawdzamy czy timer juz nie chodzi
        this.running = true; //po uruchomieniu ustawiamy flage biegajacy teraz
        this.watch = setInterval(function () {
          return _this.step();
        }, 10); //interwal odpala sie co 10 ms metoda step
      } //metoda step to tik timera
    }
  }, {
    key: 'step',
    value: function step() {
      if (!this.running) return; //sprawdza czy timer jest uruchomiony //nie powinno byc !
      this.calculate(); //przeliczamy wynik
      this.print(); //drukujemy wynik
    }
  }, {
    key: 'calculate',
    value: function calculate() {
      this.times.miliseconds += 1;
      // zerowanie milisekund
      if (this.times.miliseconds >= 100) {
        //1sek=1000ms, ale metoda wykonuje sie co 10ms=> 1000/10=100
        this.times.seconds += 1;
        this.times.miliseconds = 0;
      }
      // zerowanie sekund
      if (this.times.seconds >= 60) {
        this.times.minutes += 1;
        this.times.seconds = 0;
      }
    }
  }, {
    key: 'stop',
    value: function stop() {
      // if (this.running) {
      //   this.addToList(this.format(this.times))};
      this.running = false;
      clearInterval(this.watch); //czy metoda clearInterval jest wbudowana ? jak setInterval?
    } //this.watch to ze startu (wbudwana ta funkcja)

  }, {
    key: 'addToList',
    value: function addToList(times) {}
  }, {
    key: 'resetList',
    value: function resetList() {}
  }]);

  return Stopwatch;
}();

// instance of the class:


var stopwatch = new Stopwatch(document.querySelector('.stopwatch') // istniejacaquertSelector wtbieramy element o klasie stopwatch z DOMu
); //i przekazujemy jako prametr

// running methods after clicking the button:
var startButton = document.getElementById('start');
startButton.addEventListener('click', function () {
  return stopwatch.start();
});

var stopButton = document.getElementById('stop');
stopButton.addEventListener('click', function () {
  return stopwatch.stop();
});

var resetButton = document.getElementById('reset');
resetButton.addEventListener('click', function () {
  return stopwatch.reset();
});

var resetListButton = document.getElementById('resetList');
resetListButton.addEventListener('click', function () {
  return stopwatch.resetList();
});

// funkcja ma dodawac zero do liczby jednocyfrowej
// funkcja jest na zewnatrz funckji bo moze byc wykoszystywana gdzies indziej
function pad0(value) {
  //value to liczba
  var result = value.toString(); //przeksztalca wartosc na stringa
  if (result.length < 2) {
    result = '0' + result;
  }
  return result;
}
