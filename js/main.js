/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/base-component.js"
/*!**********************************!*\
  !*** ./src/js/base-component.js ***!
  \**********************************/
(module) {



var BaseDOMComponent = function(element) {
  this.element = element;
};

BaseDOMComponent.prototype = {
  append: function(container) {
    container.appendChild(this.element);
  },

  remove: function() {
    this.element.parentNode.removeChild(this.element);
  }
};

module.exports = BaseDOMComponent;


/***/ },

/***/ "./src/js/data/data.js"
/*!*****************************!*\
  !*** ./src/js/data/data.js ***!
  \*****************************/
(module) {



var jsonData = [{
  "author": {
    "name": "Иванов Иван",
    "picture": "img/user-1.jpg"
  },
  "review_usefulness": 10,
  "rating": 2,
  "description": "Плохая игра: слишком сильно затягивает и невозможно оторваться. Я потерял работу, учебу, девушку и дар речи, но продолжаю играть. Это призыв о помощи: спасите."
}, {
  "author": {
    "name": "Ксения Собчак",
    "picture": "img/user-3.png"
  },
  "review_usefulness": 6,
  "rating": 5,
  "description": "Все хорошо, мне нравится."
}, {
  "author": {
    "name": "Ксюша Бородина",
    "picture": "img/user-2.png"
  },
  "review_usefulness": 3,
  "rating": 1,
  "description": "Все плохо, мне не нравится"
}, {
  "author": {
    "name": "Мария Антуанетта",
    "picture": "img/user-1.jpg"
  },
  "review_usefulness": 4,
  "rating": 3,
  "description": "Невероятно чумовая игра. Пендальф-синий — мой герой)))) Он такой милашка. Благодаря ему я наконец нацчилась отвлекаться от работы и учёбы."
}, {
  "author": {
    "name": "Дмитрий Карпов",
    "picture": "img/user-3.png"
  },
  "review_usefulness": 20,
  "rating": 4,
  "description": "Игра очень неплохая. Тут есть и трюки, и взлёты, и падения. Никогда не знаешь, что ждёт тебя впереди."
}, {
  "author": {
    "name": "Максим Шаровары",
    "picture": "img/user-1.jpg"
  },
  "review_usefulness": 115,
  "rating": 2,
  "description": "Игра очень неплохая. Тут есть и трюки, и взлёты, и падения. Никогда не знаешь, что ждёт тебя впереди."
}, {
  "author": {
    "name": "Зулейха Валиева",
    "picture": "img/user-3.png"
  },
  "review_usefulness": 10,
  "rating": 4,
  "description": "Игра очень неплохая. Тут есть и трюки, и взлёты, и падения. Никогда не знаешь, что ждёт тебя впереди."
}, {
  "author": {
    "name": "Федор Непомнящих",
    "picture": "img/user-2.png"
  },
  "review_usefulness": 10,
  "rating": 3,
  "description": "Игра очень неплохая. Тут есть и трюки, и взлёты, и падения. Никогда не знаешь, что ждёт тебя впереди."
}, {
  "author": {
    "name": "Макаронный Монстр",
    "picture": "img/user-1.jpg"
  },
  "review_usefulness": -3,
  "rating": 5,
  "description": "Игра очень неплохая. Тут есть и трюки, и взлёты, и падения. Никогда не знаешь, что ждёт тебя впереди."
}, {
  "author": {
    "name": "Миклухо Маклай",
    "picture": "img/user-3.png"
  },
  "review_usefulness": 0,
  "rating": 2,
  "description": "Игра очень неплохая. Тут есть и трюки, и взлёты, и падения. Никогда не знаешь, что ждёт тебя впереди."
}, {
  "author": {
    "name": "Муравьев Апостол",
    "picture": "img/user-2.png"
  },
  "review_usefulness": 0,
  "rating": 1,
  "description": "Игра очень неплохая. Тут есть и трюки, и взлёты, и падения. Никогда не знаешь, что ждёт тебя впереди."
}, {
  "author": {
    "name": "Максим Горький",
    "picture": "img/user-3.png"
  },
  "review_usefulness": 8,
  "rating": 3,
  "description": "Игра очень неплохая. Тут есть и трюки, и взлёты, и падения. Никогда не знаешь, что ждёт тебя впереди."
}, {
  "author": {
    "name": "Аноним",
    "picture": "img/ijwdoq"
  },
  "review_usefulness": 102,
  "rating": 3,
  "description": "Игра очень неплохая. Тут есть и трюки, и взлёты, и падения. Никогда не знаешь, что ждёт тебя впереди."
}, {
  "author": {
    "name": "Иван Иванов",
    "picture": "img/user-1.jpg"
  },
  "review_usefulness": 5,
  "rating": 4,
  "description": "Игра очень неплохая. Тут есть и трюки, и взлёты, и падения. Никогда не знаешь, что ждёт тебя впереди."
}, {
  "author": {
    "name": "Василиса Васильева",
    "picture": "img/user-2.png"
  },
  "review_usefulness": 0,
  "rating": 4,
  "description": "Игра очень неплохая. Тут есть и трюки, и взлёты, и падения. Никогда не знаешь, что ждёт тебя впереди."
}, {
  "author": {
    "name": "Хороший Человек",
    "picture": "img/user-2.png"
  },
  "review_usefulness": 24,
  "rating": 3,
  "description": "Игра очень неплохая. Тут есть и трюки, и взлёты, и падения. Никогда не знаешь, что ждёт тебя впереди."
}, {
  "author": {
    "name": "Гейб Ньюэлл",
    "picture": "img/dwjiqo9"
  },
  "review_usefulness": 10,
  "rating": 5,
  "description": "Игра очень интересная. Нравится возможность выбирать между героями, а самое крутое, что есть альтернативные концовки в игре. Она точно стоит своих денег."
}]

module.exports = jsonData;


/***/ },

/***/ "./src/js/form/form.js"
/*!*****************************!*\
  !*** ./src/js/form/form.js ***!
  \*****************************/
(module, __unused_webpack_exports, __webpack_require__) {



var utilities = __webpack_require__(/*! ../utilities */ "./src/js/utilities.js");

var reviewAddBtn = document.querySelector('.reviews-controls-new');
var formContainer = document.querySelector('.overlay-container');
var formCloseButton = formContainer.querySelector('.review-form-close');
var reviewNameField = formContainer.querySelector('#review-name');
var reviewTextField = formContainer.querySelector('#review-text');
var reviewSubmitBtn = formContainer.querySelector('.review-submit');
var reviewLinkContainer = formContainer.querySelector('.review-fields');
var reviewNameLink = formContainer.querySelector('.review-fields-name');
var reviewTextLink = formContainer.querySelector('.review-fields-text');
var reviewMarkAll = formContainer.querySelectorAll('input[name=review-mark]');

function formValidation() {
  (function() {
    if(!reviewNameField.value) {
      reviewSubmitBtn.disabled = true;
      reviewLinkContainer.classList.add('review-fields-visible');
      reviewNameLink.classList.add('review-fields-label-visible');
    } else {
      reviewSubmitBtn.disabled = false;
      reviewNameLink.classList.remove('review-fields-label-visible');
    }
  }());

  (function() {
    var reviewMark = document.querySelector('input[name=review-mark]:checked');

    if(reviewMark.value < 3) {
      reviewTextField.required = true;
      reviewSubmitBtn.disabled = true;
      reviewLinkContainer.classList.add('review-fields-visible');
      reviewTextLink.classList.add('review-fields-label-visible');
    } else if(reviewMark.value >= 3) {
      reviewTextField.required = false;
      reviewSubmitBtn.disabled = false;
      reviewTextLink.classList.remove('review-fields-label-visible');
    }
  }());

  (function() {
    if(!reviewTextField.value & (reviewTextField.required === true)) {
      reviewSubmitBtn.disabled = true;
      reviewTextLink.classList.add('review-fields-visible');
      reviewTextLink.classList.add('review-fields-label-visible');
    } else {
      reviewSubmitBtn.disabled = false;
      reviewTextLink.classList.remove('review-fields-label-visible');
    }
  }());

  (function() {
    if(!reviewNameLink.classList.contains('review-fields-label-visible') & !reviewTextLink.classList.contains('review-fields-label-visible')) {
      reviewLinkContainer.classList.remove('review-fields-visible');
    } else {
      reviewLinkContainer.classList.add('review-fields-visible');
    }
  }());
}

var form = {
  onClose: null,

  /**
   * @param {Function} cb
   */
  open: function(cb) {
    formContainer.classList.remove('invisible');
    cb();
  },

  close: function() {
    formContainer.classList.add('invisible');

    if (typeof this.onClose === 'function') {
      this.onClose();
    }
  }
};

reviewAddBtn.addEventListener('click', function() {
  window.addEventListener('keydown', onCloseKeydownHandler);
  formValidation();
});

for(var i = 0; i < reviewMarkAll.length; i++) {
  reviewMarkAll[i].onchange = function() {
    formValidation();
  };
}

reviewNameField.oninput = function() {
  formValidation();
};

reviewTextField.oninput = function() {
  formValidation();
};

formContainer.querySelector('form').addEventListener('submit', function(evt) {
  evt.preventDefault();
  utilities.setCookie();
  evt.target.reset();
  window.removeEventListener('keydown', onCloseKeydownHandler);
  form.close();
});

formCloseButton.onclick = function(evt) {
  evt.preventDefault();
  window.removeEventListener('keydown', onCloseKeydownHandler);
  form.close();
};

// Обработчик нажатия esc/enter
var onCloseKeydownHandler = function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    window.removeEventListener('keydown', onCloseKeydownHandler);
    form.close();
  }
};

module.exports = form;


/***/ },

/***/ "./src/js/gallery.js"
/*!***************************!*\
  !*** ./src/js/gallery.js ***!
  \***************************/
(module, __unused_webpack_exports, __webpack_require__) {



var BaseDOMComponent = __webpack_require__(/*! ./base-component */ "./src/js/base-component.js");
var utilities = __webpack_require__(/*! ./utilities */ "./src/js/utilities.js");

var CLASS_INVISIBLE = 'invisible';

var Gallery = function(container, picturesList) {
  BaseDOMComponent.call(this, container);
  this.currentPicture = document.querySelector('.preview-number-current');
  this.totalPictures = document.querySelector('.preview-number-total');
  this.galleryClose = document.querySelector('.overlay-gallery-close');
  this.controlLeft = document.querySelector('.overlay-gallery-control-left');
  this.controlRight = document.querySelector('.overlay-gallery-control-right');

  this.pictures = picturesList;
  this.pictureIndex = 0;
  this.totalPictures.innerText = this.pictures.length;

  this.hide = this.hide.bind(this);
  this.onEscKeyDown = this.onEscKeyDown.bind(this);
  this.onLeftClick = this.onLeftClick.bind(this);
  this.onLeftKeyDown = this.onLeftKeyDown.bind(this);
  this.onRightClick = this.onRightClick.bind(this);
  this.onRightKeyDown = this.onRightKeyDown.bind(this);
  this._reloadHash = this._reloadHash.bind(this);
  this.onHashChange = this.onHashChange.bind(this);

  window.addEventListener('hashchange', this.onHashChange);
};

utilities.inherit(Gallery, BaseDOMComponent);

Gallery.prototype = {
  onEscKeyDown: function(evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      this.hide();
    }
  },

  onLeftKeyDown: function(evt) {
    if (evt.keyCode === 37) {
      evt.preventDefault();

      if (this.pictureIndex > 1) {
        this.pictureIndex--;
        this._reloadHash();
      }
    }
  },

  onLeftClick: function() {
    if (this.pictureIndex > 1) {
      this.pictureIndex--;
      this._reloadHash();
    }
  },

  onRightKeyDown: function(evt) {
    if (evt.keyCode === 39) {
      evt.preventDefault();

      if (this.pictureIndex < this.pictures.length) {
        this.pictureIndex++;
        this._reloadHash();
      }
    }
  },

  onRightClick: function() {
    if (this.pictureIndex < this.pictures.length) {
      this.pictureIndex++;
      this._reloadHash();
    }
  },

  onHashChange: function() {
    if (location.hash.indexOf('photo') === -1) {
      this.hide();
    } else {
      this.show(location.hash);
    }
  },

  _reloadHash: function() {
    this.pictureSrc = this.pictures[this.pictureIndex - 1];
    location.hash = '#photo' + this.pictureSrc;
    this.setPictureIndex();
  },

  show: function(pictureNum) {
    if (typeof pictureNum === 'number') {
      this.pictureIndex = pictureNum;
    } else if (typeof pictureNum === 'string') {
      if (pictureNum === '') {
        return;
      }
      this.pictureSrc = pictureNum.match(/#photo(\S+)/)[1];
      this.pictureIndex = this.pictures.indexOf(this.pictureSrc) + 1;
    }

    this.element.classList.remove(CLASS_INVISIBLE);

    this.galleryClose.addEventListener('click', this.hide);
    window.addEventListener('keydown', this.onEscKeyDown);
    this.controlLeft.addEventListener('click', this.onLeftClick);
    window.addEventListener('keydown', this.onLeftKeyDown);
    this.controlRight.addEventListener('click', this.onRightClick);
    window.addEventListener('keydown', this.onRightKeyDown);

    this._reloadHash();
  },
  hide: function() {
    location.hash = '';
    this.element.classList.add(CLASS_INVISIBLE);
    this.galleryClose.removeEventListener('click', this.hide);
    this.controlLeft.removeEventListener('click', this.onLeftClick);
    window.removeEventListener('keydown', this.onLeftKeyDown);
    this.controlRight.removeEventListener('click', this.onRightClick);
    window.removeEventListener('keydown', this.onRightKeyDown);
  },

  setPictureIndex: function() {
    var galleryPreview = document.querySelector('.overlay-gallery-preview');

    var image = new Image();
    if (typeof this.pictureSrc === 'string') {
      image.src = this.pictureSrc;
      this.currentPicture.innerText = this.pictureIndex;

    } else if (typeof this.pictureIndex === 'number') {
      image.src = this.pictures[this.pictureIndex];
      this.currentPicture.innerText = this.pictureIndex + 1;
    }

    if (galleryPreview.lastElementChild.nodeName === 'IMG') {
      galleryPreview.replaceChild(image, galleryPreview.lastElementChild);
    } else {
      galleryPreview.appendChild(image);
    }
  },

  remove: function() {
    this.hide();
    window.removeEventListener('hashchange', this.onHashChange);
  }
};

module.exports = Gallery;


/***/ },

/***/ "./src/js/game/game-start.js"
/*!***********************************!*\
  !*** ./src/js/game/game-start.js ***!
  \***********************************/
(module, __unused_webpack_exports, __webpack_require__) {



var Game = __webpack_require__(/*! ./game */ "./src/js/game/game.js");
var form = __webpack_require__(/*! ../form/form */ "./src/js/form/form.js");

var game = new Game(document.querySelector('.demo'));
game.initializeLevelAndStart();
game.setGameStatus(Game.Verdict.INTRO);

var formOpenButton = document.querySelector('.reviews-controls-new');

/** @param {MouseEvent} evt */
formOpenButton.onclick = function(evt) {
  evt.preventDefault();

  form.open(function() {
    game.setGameStatus(Game.Verdict.PAUSE);
    game.setDeactivated(true);
  });
};

form.onClose = function() {
  game.setDeactivated(false);
};

module.exports = {
  game: game
};


/***/ },

/***/ "./src/js/game/game.js"
/*!*****************************!*\
  !*** ./src/js/game/game.js ***!
  \*****************************/
(module, __unused_webpack_exports, __webpack_require__) {



var utilities = __webpack_require__(/*! ../utilities */ "./src/js/utilities.js");

/**
 * @const
 * @type {number}
 */
var HEIGHT = 300;

/**
 * @const
 * @type {number}
 */
var WIDTH = 700;

/**
 * @const
 * @type {number}
 */
var MESSAGE_SIZE_X = 350;

/**
 * ID уровней.
 * @enum {number}
 */
var Level = {
  INTRO: 0,
  MOVE_LEFT: 1,
  MOVE_RIGHT: 2,
  LEVITATE: 3,
  HIT_THE_MARK: 4
};

/**
 * Порядок прохождения уровней.
 * @type {Array.<Level>}
 */
var LevelSequence = [
  Level.INTRO
];

/**
 * Начальный уровень.
 * @type {Level}
 */
var INITIAL_LEVEL = LevelSequence[0];

/**
 * Допустимые виды объектов на карте.
 * @enum {number}
 */
var ObjectType = {
  ME: 0,
  FIREBALL: 1
};

/**
 * Допустимые состояния объектов.
 * @enum {number}
 */
var ObjectState = {
  OK: 0,
  DISPOSED: 1
};

/**
 * Коды направлений.
 * @enum {number}
 */
var Direction = {
  NULL: 0,
  LEFT: 1,
  RIGHT: 2,
  UP: 4,
  DOWN: 8
};

/**
 * Карта спрайтов игры.
 * @type {Object.<ObjectType, Object>}
 */
var SpriteMap = {};
var REVERSED = '-reversed';

SpriteMap[ObjectType.ME] = {
  width: 61,
  height: 84,
  url: 'img/wizard.gif'
};

//TODO: Find a clever way
SpriteMap[ObjectType.ME + REVERSED] = {
  width: 61,
  height: 84,
  url: 'img/wizard-reversed.gif'
};

SpriteMap[ObjectType.FIREBALL] = {
  width: 24,
  height: 24,
  url: 'img/fireball.gif'
};

/**
 * Правила перерисовки объектов в зависимости от состояния игры.
 * @type {Object.<ObjectType, function(Object, Object, number): Object>}
 */
var ObjectsBehaviour = {};

/**
 * Обновление движения мага. Движение мага зависит от нажатых в данный момент
 * стрелок. Маг может двигаться одновременно по горизонтали и по вертикали.
 * На движение мага влияет его пересечение с препятствиями.
 * @param {Object} object
 * @param {Object} state
 * @param {number} timeframe
 */
ObjectsBehaviour[ObjectType.ME] = function(object, state, timeframe) {
  // Пока зажата стрелка вверх, маг сначала поднимается, а потом левитирует
  // в воздухе на определенной высоте.
  // NB! Сложность заключается в том, что поведение описано в координатах
  // канваса, а не координатах, относительно нижней границы игры.
  if (state.keysPressed.UP && object.y > 0) {
    object.direction = object.direction & ~Direction.DOWN;
    object.direction = object.direction | Direction.UP;
    object.y -= object.speed * timeframe * 2;
  }

  // Если стрелка вверх не зажата, а маг находится в воздухе, он плавно
  // опускается на землю.
  if (!state.keysPressed.UP) {
    if (object.y < HEIGHT - object.height) {
      object.direction = object.direction & ~Direction.UP;
      object.direction = object.direction | Direction.DOWN;
      object.y += object.speed * timeframe / 3;
    }
  }

  // Если зажата стрелка влево, маг перемещается влево.
  if (state.keysPressed.LEFT) {
    object.direction = object.direction & ~Direction.RIGHT;
    object.direction = object.direction | Direction.LEFT;
    object.x -= object.speed * timeframe;
  }

  // Если зажата стрелка вправо, маг перемещается вправо.
  if (state.keysPressed.RIGHT) {
    object.direction = object.direction & ~Direction.LEFT;
    object.direction = object.direction | Direction.RIGHT;
    object.x += object.speed * timeframe;
  }

  // Ограничения по перемещению по полю. Маг не может выйти за пределы поля.
  if (object.y < 0) {
    object.y = 0;
  }

  if (object.y > HEIGHT - object.height) {
    object.y = HEIGHT - object.height;
  }

  if (object.x < 0) {
    object.x = 0;
  }

  if (object.x > WIDTH - object.width) {
    object.x = WIDTH - object.width;
  }
};

/**
 * Обновление движения файрбола. Файрбол выпускается в определенном направлении
 * и после этого неуправляемо движется по прямой в заданном направлении. Если
 * он пролетает весь экран насквозь, он исчезает.
 * @param {Object} object
 * @param {Object} _state
 * @param {number} timeframe
 */
ObjectsBehaviour[ObjectType.FIREBALL] = function(object, _state, timeframe) {
  if (object.direction & Direction.LEFT) {
    object.x -= object.speed * timeframe;
  }

  if (object.direction & Direction.RIGHT) {
    object.x += object.speed * timeframe;
  }

  if (object.x < 0 || object.x > WIDTH) {
    object.state = ObjectState.DISPOSED;
  }
};

/**
 * ID возможных ответов функций, проверяющих успех прохождения уровня.
 * CONTINUE говорит о том, что раунд не закончен и игру нужно продолжать,
 * WIN о том, что раунд выигран, FAIL — о поражении. PAUSE о том, что игру
 * нужно прервать.
 * @enum {number}
 */
var Verdict = {
  CONTINUE: 0,
  WIN: 1,
  FAIL: 2,
  PAUSE: 3,
  INTRO: 4
};

/**
 * Правила завершения уровня. Ключами служат ID уровней, значениями функции
 * принимающие на вход состояние уровня и возвращающие true, если раунд
 * можно завершать или false если нет.
 * @type {Object.<Level, function(Object):boolean>}
 */
var LevelsRules = {};

/**
 * Уровень считается пройденным, если был выпущен файлболл и он улетел
 * за экран.
 * @param {Object} state
 * @return {Verdict}
 */
LevelsRules[Level.INTRO] = function(state) {
  var fireballs = state.garbage.filter(function(object) {
    return object.type === ObjectType.FIREBALL;
  });

  return fireballs.length ? Verdict.WIN : Verdict.CONTINUE;
};

/**
 * Начальные условия для уровней.
 * @enum {Object.<Level, function>}
 */
var LevelsInitialize = {};

/**
 * Первый уровень.
 * @param {Object} state
 * @return {Object}
 */
LevelsInitialize[Level.INTRO] = function(state) {
  state.objects.push(
    // Установка персонажа в начальное положение. Он стоит в крайнем левом
    // углу экрана, глядя вправо. Скорость перемещения персонажа на этом
    // уровне равна 2px за кадр.
    {
      direction: Direction.RIGHT,
      height: 84,
      speed: 2,
      sprite: SpriteMap[ObjectType.ME],
      state: ObjectState.OK,
      type: ObjectType.ME,
      width: 61,
      x: WIDTH / 3,
      y: HEIGHT - 100
    }
  );

  return state;
};

/**
 * Конструктор объекта Game. Создает canvas, добавляет обработчики событий
 * и показывает приветственный экран.
 * @param {Element} container
 * @constructor
 */
var Game = function(container) {
  this.container = container;
  this.canvas = document.createElement('canvas');
  this.canvas.width = container.clientWidth;
  this.canvas.height = container.clientHeight;
  this.container.appendChild(this.canvas);

  this.ctx = this.canvas.getContext('2d');

  this._onKeyDown = this._onKeyDown.bind(this);
  this._onKeyUp = this._onKeyUp.bind(this);
  this._pauseListener = this._pauseListener.bind(this);

  this.setDeactivated(false);
};

Game.prototype = {
  /**
   * Текущий уровень игры.
   * @type {Level}
   */
  level: INITIAL_LEVEL,

  /** @param {boolean} deactivated */
  setDeactivated: function(deactivated) {
    if (this._deactivated === deactivated) {
      return;
    }

    this._deactivated = deactivated;

    if (deactivated) {
      this._removeGameListeners();
    } else {
      this._initializeGameListeners();
    }
  },

  /**
   * Состояние игры. Описывает местоположение всех объектов на игровой карте
   * и время проведенное на уровне и в игре.
   * @return {Object}
   */
  getInitialState: function() {
    return {
      // Статус игры. Если CONTINUE, то игра продолжается.
      currentStatus: Verdict.CONTINUE,

      // Объекты, удаленные на последнем кадре.
      garbage: [],

      // Время с момента отрисовки предыдущего кадра.
      lastUpdated: null,

      // Состояние нажатых клавиш.
      keysPressed: {
        ESC: false,
        LEFT: false,
        RIGHT: false,
        SPACE: false,
        UP: false
      },

      // Время начала прохождения уровня.
      levelStartTime: null,

      // Все объекты на карте.
      objects: [],

      // Время начала прохождения игры.
      startTime: null
    };
  },

  /**
   * Начальные проверки и запуск текущего уровня.
   * @param {boolean=} restart
   */
  initializeLevelAndStart: function(restart) {
    restart = typeof restart === 'undefined' ? true : restart;

    if (restart || !this.state) {
      // При перезапуске уровня, происходит полная перезапись состояния
      // игры из изначального состояния.
      this.state = this.getInitialState();
      this.state = LevelsInitialize[this.level](this.state);
    } else {
      // При продолжении уровня состояние сохраняется, кроме записи о том,
      // что состояние уровня изменилось с паузы на продолжение игры.
      this.state.currentStatus = Verdict.CONTINUE;
    }

    // Запись времени начала игры и времени начала уровня.
    this.state.levelStartTime = Date.now();
    if (!this.state.startTime) {
      this.state.startTime = this.state.levelStartTime;
    }

    this._preloadImagesForLevel(function() {
      // Предварительная отрисовка игрового экрана.
      this.render();

      // Установка обработчиков событий.
      this._initializeGameListeners();

      // Запуск игрового цикла.
      this.update();
    }.bind(this));
  },

  /**
   * Временная остановка игры.
   * @param {Verdict=} verdict
   */
  pauseLevel: function(verdict) {
    if (verdict) {
      this.state.currentStatus = verdict;
    }

    this.state.keysPressed.ESC = false;
    this.state.lastUpdated = null;

    this._removeGameListeners();
    window.addEventListener('keydown', this._pauseListener);

    this._drawPauseScreen();
  },

  /**
   * Обработчик событий клавиатуры во время паузы.
   * @param {KeyboardsEvent} evt
   * @private
   * @private
   */
  _pauseListener: function(evt) {
    if (evt.keyCode === 32 && !this._deactivated) {
      evt.preventDefault();
      var needToRestartTheGame = this.state.currentStatus === Verdict.WIN ||
          this.state.currentStatus === Verdict.FAIL;
      this.initializeLevelAndStart(needToRestartTheGame);

      window.removeEventListener('keydown', this._pauseListener);
    }
  },

  /**
   * Перенос строк в блоке сообщений.
   */
  wrapText: function(ctx, text, marginLeft, marginTop, marginRight, maxMessageWidth, lineHeight) {
    var words = text.split(' ');
    var countWords = words.length;
    var line = '';

    for (var i = 0; i < countWords; i++) {
      var newLine = line + words[i] + ' ';
      var lineWidth = ctx.measureText(newLine).width;
      if (lineWidth > maxMessageWidth - marginRight) {
        ctx.fillText(line, marginLeft, marginTop);
        line = words[i] + ' ';
        marginTop += lineHeight;
      } else {
        line = newLine;
      }
    }
    ctx.fillText(line, marginLeft, marginTop);
  },

  /**
   * Подсчет количества переносов строки в блоке сообщений.
   */
  getRowsCount: function(ctx, text, marginRight, maxMessageWidth) {
    var words = text.split(' ');
    var countWords = words.length;
    var rows = 1;
    var line = '';

    for (var i = 0; i < countWords; i++) {
      var newLine = line + words[i] + ' ';
      var lineWidth = ctx.measureText(newLine).width;
      if (lineWidth > (maxMessageWidth - marginRight * 2)) {
        rows++;
        line = words[i] + ' ';
      } else {
        line = newLine;
      }
    }
    return rows;
  },

  /**
   * Отрисовка фонового блока паузы.
   */
  drawBaloon: function(x, y, lineHeight, baloonHeight) {
    var offsetX = 10;
    var offsetY = 10;
    var sizeX = MESSAGE_SIZE_X;
    var sizeY = 40 + baloonHeight * lineHeight;

    this.ctx.beginPath();
    this.ctx.moveTo(x + offsetX, y + offsetY);
    this.ctx.lineTo(x + sizeX + offsetX, y + offsetY);
    this.ctx.lineTo(x + sizeX + offsetX, y + sizeY + offsetY);
    this.ctx.lineTo(x - 15 + offsetX, y + sizeY + 25 + offsetY);
    this.ctx.lineTo(x + offsetX, y + offsetY);
    this.ctx.fillStyle = '#000000';
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.moveTo(x, y);
    this.ctx.lineTo(x + sizeX, y);
    this.ctx.lineTo(x + sizeX, y + sizeY);
    this.ctx.lineTo(x - 15, y + sizeY + 25);
    this.ctx.lineTo(x, y);
    this.ctx.fillStyle = '#FFFFFF';
    this.ctx.fill();

    this.ctx.fillStyle = '#000000';
  },

  /**
   * Отрисовка экрана паузы.
   */
  _drawPauseScreen: function() {
    var x = WIDTH / 4;
    var y = HEIGHT / 9;
    var lineHeight = 25;
    var maxMessageWidth = 300;
    var marginTop = (y * 2) + 20;
    var marginLeft = x + 50;
    var marginRight = 40;
    var text;

    this.ctx.font = '16px PT Mono';

    switch (this.state.currentStatus) {
      case Verdict.WIN:
        text = 'Поздравляем! Вы только что выиграли!';
        this.drawBaloon(x, y, lineHeight, this.getRowsCount(this.ctx, text, marginRight, maxMessageWidth));
        this.wrapText(this.ctx, text, marginLeft, marginTop, marginRight, maxMessageWidth, lineHeight);
        break;
      case Verdict.FAIL:
        text = 'Сожалеем! Вы проиграли!';
        this.drawBaloon(x, y, lineHeight, this.getRowsCount(this.ctx, text, marginRight, maxMessageWidth));
        this.wrapText(this.ctx, text, marginLeft, marginTop, marginRight, maxMessageWidth, lineHeight);
        break;
      case Verdict.PAUSE:
        text = 'Игра на паузе! Для продолжения нажмите пробел!';
        this.drawBaloon(x, y, lineHeight, this.getRowsCount(this.ctx, text, marginRight, maxMessageWidth));
        this.wrapText(this.ctx, text, marginLeft, marginTop, marginRight, maxMessageWidth, lineHeight);
        break;
      case Verdict.INTRO:
        text = 'Используйте стрелки для перемещения и shift для стрельбы! Для начала игры нажмите пробел!';
        this.drawBaloon(x, y, lineHeight, this.getRowsCount(this.ctx, text, marginRight, maxMessageWidth));
        this.wrapText(this.ctx, text, marginLeft, marginTop, marginRight, maxMessageWidth, lineHeight);
        break;
    }
  },

  /**
   * Предзагрузка необходимых изображений для уровня.
   * @param {function} callback
   * @private
   */
  _preloadImagesForLevel: function(callback) {
    if (typeof this._imagesArePreloaded === 'undefined') {
      this._imagesArePreloaded = [];
    }

    if (this._imagesArePreloaded[this.level]) {
      callback();
      return;
    }

    var keys = Object.keys(SpriteMap);
    var imagesToGo = keys.length;

    var self = this;

    var loadSprite = function(sprite) {
      var image = new Image(sprite.width, sprite.height);
      image.onload = function() {
        sprite.image = image;
        if (--imagesToGo === 0) {
          self._imagesArePreloaded[self.level] = true;
          callback();
        }
      };
      image.src = sprite.url;
    };

    for (var i = 0; i < keys.length; i++) {
      loadSprite(SpriteMap[keys[i]]);
    }
  },

  /**
   * Обновление статуса объектов на экране. Добавляет объекты, которые должны
   * появиться, выполняет проверку поведения всех объектов и удаляет те, которые
   * должны исчезнуть.
   * @param {number} delta Время, прошеднее с отрисовки прошлого кадра.
   */
  updateObjects: function(delta) {
    // Персонаж.
    var me = this.state.objects.filter(function(object) {
      return object.type === ObjectType.ME;
    })[0];

    // Добавляет на карту файрбол по нажатию на Shift.
    if (this.state.keysPressed.SHIFT) {
      this.state.objects.push({
        direction: me.direction,
        height: 24,
        speed: 5,
        sprite: SpriteMap[ObjectType.FIREBALL],
        type: ObjectType.FIREBALL,
        width: 24,
        x: me.direction & Direction.RIGHT ? me.x + me.width : me.x - 24,
        y: me.y + me.height / 2
      });

      this.state.keysPressed.SHIFT = false;
    }

    this.state.garbage = [];

    // Убирает в garbage не используемые на карте объекты.
    var remainingObjects = this.state.objects.filter(function(object) {
      ObjectsBehaviour[object.type](object, this.state, delta);

      if (object.state === ObjectState.DISPOSED) {
        this.state.garbage.push(object);
        return false;
      }

      return true;
    }, this);

    this.state.objects = remainingObjects;
  },

  /**
   * Проверка статуса текущего уровня.
   */
  checkStatus: function() {
    // Нет нужны запускать проверку, нужно ли останавливать уровень, если
    // заранее известно, что да.
    if (this.state.currentStatus !== Verdict.CONTINUE) {
      return;
    }

    if (!this.commonRules) {
      /**
       * Проверки, не зависящие от уровня, но влияющие на его состояние.
       * @type {Array.<functions(Object):Verdict>}
       */
      this.commonRules = [
        /**
         * Если персонаж мертв, игра прекращается.
         * @param {Object} state
         * @return {Verdict}
         */
        function(state) {
          var me = state.objects.filter(function(object) {
            return object.type === ObjectType.ME;
          })[0];

          return me.state === ObjectState.DISPOSED ?
              Verdict.FAIL :
              Verdict.CONTINUE;
        },

        /**
         * Если нажата клавиша Esc игра ставится на паузу.
         * @param {Object} state
         * @return {Verdict}
         */
        function(state) {
          return state.keysPressed.ESC ? Verdict.PAUSE : Verdict.CONTINUE;
        },

        /**
         * Игра прекращается если игрок продолжает играть в нее два часа подряд.
         * @param {Object} state
         * @return {Verdict}
         */
        function(state) {
          return Date.now() - state.startTime > 3 * 60 * 1000 ?
              Verdict.FAIL :
              Verdict.CONTINUE;
        }
      ];
    }

    // Проверка всех правил влияющих на уровень. Запускаем цикл проверок
    // по всем универсальным проверкам и проверкам конкретного уровня.
    // Цикл продолжается до тех пор, пока какая-либо из проверок не вернет
    // любое другое состояние кроме CONTINUE или пока не пройдут все
    // проверки. После этого состояние сохраняется.
    var allChecks = this.commonRules.concat(LevelsRules[this.level]);
    var currentCheck = Verdict.CONTINUE;
    var currentRule;

    while (currentCheck === Verdict.CONTINUE && allChecks.length) {
      currentRule = allChecks.shift();
      currentCheck = currentRule(this.state);
    }

    this.state.currentStatus = currentCheck;
  },

  /**
   * Принудительная установка состояния игры. Используется для изменения
   * состояния игры от внешних условий, например, когда необходимо остановить
   * игру, если она находится вне области видимости и установить вводный
   * экран.
   * @param {Verdict} status
   */
  setGameStatus: function(status) {
    if (this.state.currentStatus !== status) {
      this.state.currentStatus = status;
    }
  },

  /**
   * Отрисовка всех объектов на экране.
   */
  render: function() {
    // Удаление всех отрисованных на странице элементов.
    this.ctx.clearRect(0, 0, WIDTH, HEIGHT);

    // Выставление всех элементов, оставшихся в this.state.objects согласно
    // их координатам и направлению.
    this.state.objects.forEach(function(object) {
      if (object.sprite) {
        var reversed = object.direction & Direction.LEFT;
        var sprite = SpriteMap[object.type + (reversed ? REVERSED : '')] || SpriteMap[object.type];
        this.ctx.drawImage(sprite.image, object.x, object.y, object.width, object.height);
      }
    }, this);
  },

  /**
   * Основной игровой цикл. Сначала проверяет состояние всех объектов игры
   * и обновляет их согласно правилам их поведения, а затем запускает
   * проверку текущего раунда. Рекурсивно продолжается до тех пор, пока
   * проверка не вернет состояние FAIL, WIN или PAUSE.
   */
  update: function() {
    if (!this.state.lastUpdated) {
      this.state.lastUpdated = Date.now();
    }

    var delta = (Date.now() - this.state.lastUpdated) / 10;
    this.updateObjects(delta);
    this.checkStatus();

    switch (this.state.currentStatus) {
      case Verdict.CONTINUE:
        this.state.lastUpdated = Date.now();
        this.render();
        requestAnimationFrame(function() {
          this.update();
        }.bind(this));
        break;

      case Verdict.WIN:
      case Verdict.FAIL:
      case Verdict.PAUSE:
      case Verdict.INTRO:
        this.pauseLevel();
        break;
    }
  },

  /**
   * @param {KeyboardEvent} evt [description]
   * @private
   */
  _onKeyDown: function(evt) {
    switch (evt.keyCode) {
      case 37:
        this.state.keysPressed.LEFT = true;
        break;
      case 39:
        this.state.keysPressed.RIGHT = true;
        break;
      case 38:
        this.state.keysPressed.UP = true;
        break;
      case 27:
        this.state.keysPressed.ESC = true;
        break;
    }

    if (evt.shiftKey) {
      this.state.keysPressed.SHIFT = true;
    }
  },

  /**
   * @param {KeyboardEvent} evt [description]
   * @private
   */
  _onKeyUp: function(evt) {
    switch (evt.keyCode) {
      case 37:
        this.state.keysPressed.LEFT = false;
        break;
      case 39:
        this.state.keysPressed.RIGHT = false;
        break;
      case 38:
        this.state.keysPressed.UP = false;
        break;
      case 27:
        this.state.keysPressed.ESC = false;
        break;
    }

    if (evt.shiftKey) {
      this.state.keysPressed.SHIFT = false;
    }
  },

  /**
   * Эффект параллакса облаков
   * и приостановка игры при скролле страницы
   */
  _parallaxEffectAndGamePause: function() {
    var clouds = document.querySelector('.header-clouds');
    var demo = document.querySelector('.demo');
    var self = this;
    var parallax = true;
    var cloudsPos = 0;

    /** Оптимизированная проверка видимости облаков и приостановка игры*/
    var cloudsVisibility = utilities.throttle(function() {
      var demoPos = demo.getBoundingClientRect().bottom;
      parallax = cloudsPos > 0;
      if (demoPos <= 0) {
        self.setGameStatus(Verdict.PAUSE);
      }
    }, 200);

    /** Смещение блока облаков */
    var parallaxEffect = function() {
      cloudsPos = clouds.getBoundingClientRect().bottom;
      var translate = clouds.clientHeight - cloudsPos;
      if (parallax) {
        clouds.style.backgroundPositionX = 50 - translate / 5 + '%';
      }
    };

    window.addEventListener('scroll', function() {
      cloudsVisibility();
      parallaxEffect();
    });
  },

  /** @private */
  _initializeGameListeners: function() {
    window.addEventListener('keydown', this._onKeyDown);
    window.addEventListener('keyup', this._onKeyUp);
    this._parallaxEffectAndGamePause();
  },

  /** @private */
  _removeGameListeners: function() {
    window.removeEventListener('keydown', this._onKeyDown);
    window.removeEventListener('keyup', this._onKeyUp);
    this._parallaxEffectAndGamePause();
  }
};

Game.Verdict = Verdict;

module.exports = Game;


/***/ },

/***/ "./src/js/reviews/filter.js"
/*!**********************************!*\
  !*** ./src/js/reviews/filter.js ***!
  \**********************************/
(module) {



var filterData = function(list, filterID) {
  var newList = [];
  var lastThreeDays = Date.now() - 1000 * 3600 * 24 * 3;
  switch (filterID) {
    case 'reviews-all':
      newList = list;
      break;
    case 'reviews-recent':
      newList = list.filter(function (listItem) {
        return listItem.created <= lastThreeDays;
      }).sort(function (a, b) {
        return b.created - a.created;
      });
      break;
    case 'reviews-good':
      newList = list.filter(function(listItem) {
        return listItem.rating >= 3;
      }).sort(function(a, b) {
        return b.rating - a.rating;
      });
      break;
    case 'reviews-bad':
      newList = list.filter(function(listItem) {
        return listItem.rating < 3;
      }).sort(function(a, b) {
        return a.rating - b.rating;
      });
      break;
    case 'reviews-popular':
      newList = list.slice().sort(function(a, b) {
        return b.review_usefulness - a.review_usefulness;
      });
      break;
  }

  return newList;
};

module.exports = filterData;


/***/ },

/***/ "./src/js/reviews/review-data.js"
/*!***************************************!*\
  !*** ./src/js/reviews/review-data.js ***!
  \***************************************/
(module) {



var ReviewData = function(data) {
  this.authorName = data.author.name;
  this.authorPicture = data.author.picture;
  this.created = data.created;
  this.reviewUsefulness = data.review_usefulness;
  this.rating = data.rating;
  this.description = data.description;
};

ReviewData.prototype = {
  getAuthorName: function() {
    return this.authorName;
  },
  getAuthorPicture: function() {
    return this.authorPicture;
  },
  getCreated: function() {
    return this.created;
  },
  getUsefulness: function() {
    return this.reviewUsefulness;
  },
  getRating: function() {
    return this.rating;
  },
  getDescription: function() {
    return this.description;
  },

  setAuthorName: function(name) {
    this.authorName = name;
  },
  setAuthorPicture: function(picture) {
    this.authorPicture = picture;
  },
  setCreated: function(created) {
    this.created = created;
  },
  updateUsefulness: function(isUseful, callback) {
    this.reviewUsefulness += isUseful ? 1 : -1;
    if (typeof callback === 'function') {
      callback(isUseful);
    }
  },
  setRating: function(rating) {
    this.rating = rating;
  },
  setDescription: function(description) {
    this.description = description;
  }
};

module.exports = ReviewData;


/***/ },

/***/ "./src/js/reviews/review.js"
/*!**********************************!*\
  !*** ./src/js/reviews/review.js ***!
  \**********************************/
(module, __unused_webpack_exports, __webpack_require__) {



var BaseDOMComponent = __webpack_require__(/*! ../base-component */ "./src/js/base-component.js");
var utilities = __webpack_require__(/*! ../utilities */ "./src/js/utilities.js");

var CLASS_ACTIVE = 'review-quiz-answer-active';

var Review = function(element, data) {
  this.data = data;
  BaseDOMComponent.call(this, this.getReviewElement(element));
  this.setUsefulnessOnClick = this.setUsefulnessOnClick.bind(this);
  this.quizList = this.element.querySelector('.review-quiz');
  this.quizAnswerYes = this.element.querySelector('.review-quiz-answer-yes');
  this.quizAnswerNo = this.element.querySelector('.review-quiz-answer-no');

  this.quizList.addEventListener('click', this.setUsefulnessOnClick);
};

utilities.inherit(Review, BaseDOMComponent);

Review.prototype = {
  setUsefulnessOnClick: function(evt) {
    if (evt.target.classList.contains('review-quiz-answer')) {
      var isUseful = evt.target === this.quizAnswerYes;
      this.data.updateUsefulness(isUseful, this.onUsefulnessUpdate.bind(this));
    }
  },

  onUsefulnessUpdate: function(isUseful) {
    if (isUseful) {
      this.quizAnswerYes.classList.add(CLASS_ACTIVE);
      this.quizAnswerNo.classList.remove(CLASS_ACTIVE);
    } else {
      this.quizAnswerNo.classList.add(CLASS_ACTIVE);
      this.quizAnswerYes.classList.remove(CLASS_ACTIVE);
    }
  },

  remove: function() {
    this.quizList.removeEventListener('click', this.setUsefulnessOnClick);
    BaseDOMComponent.prototype.remove.call(this);
  },

  getReviewElement: function(reviewElement) {
    var reviewPicture = reviewElement.querySelector('.review-author');
    var reviewText = reviewElement.querySelector('.review-text');
    var ratingClasses = ['one', 'two', 'three', 'four', 'five'];
    var reviewAuthorImg = new Image(124, 124);

    reviewAuthorImg.onload = function() {
      reviewPicture.src = this.src;
    };

    reviewAuthorImg.onerror = function() {
      reviewElement.classList.add('review-load-failure');
    };

    reviewAuthorImg.src = this.data.getAuthorPicture();
    reviewText.textContent = this.data.getDescription();
    reviewElement.querySelector('.review-rating').classList.add('review-rating-' + ratingClasses[this.data.getRating() - 1]);

    return reviewElement;
  }
};

module.exports = Review;


/***/ },

/***/ "./src/js/reviews/reviews.js"
/*!***********************************!*\
  !*** ./src/js/reviews/reviews.js ***!
  \***********************************/
(module, __unused_webpack_exports, __webpack_require__) {



var jsonData = __webpack_require__(/*! ../data/data */ "./src/js/data/data.js");
var utilities = __webpack_require__(/*! ../utilities */ "./src/js/utilities.js");
var Review = __webpack_require__(/*! ./review */ "./src/js/reviews/review.js");
var ReviewData = __webpack_require__(/*! ./review-data */ "./src/js/reviews/review-data.js");

var REVIEWS_BLOCK = 3;
var CLASS_INVISIBLE = 'invisible';

var template = document.getElementById('review-template');
var templateContainer = 'content' in template ? template.content : template;
var moreReviewsBtn = document.querySelector('.reviews-controls-more');
var reviewsFilter = document.querySelector('.reviews-filter');
var reviewsContainer = document.querySelector('.reviews-list');

var defaultFilter = 'reviews-all';
var currentFilter = defaultFilter;

var reviewBlockArray = [];
var reviewBlockNumber = 0;

var twoWeeks = 2 * 7 * 24 * 60 * 60 * 1000;

// возвращает случайную дату из диапазона
var getRandomTimeStampInRange = function(range) {
  return Date.now() - parseInt(Math.random() * range);
};

// добавляет в обьект с данными случайную дату создания из диапазона в две недели
jsonData.forEach(function(item) {
  item.created = getRandomTimeStampInRange(twoWeeks);
});

var loadReviews = function(filterID, blockNumber) {
  utilities.loadData(jsonData, {
    from: blockNumber,
    to: blockNumber + REVIEWS_BLOCK,
    filter: filterID
  }, renderReviews);
};

var renderReviews = function(reviews) {
  reviewsFilter.classList.add(CLASS_INVISIBLE);

  reviews.forEach(function(data) {
    var cloneElem = templateContainer.querySelector('.review').cloneNode(true);
    var reviewItem = new Review(cloneElem, new ReviewData(data));
    reviewBlockArray.push(reviewItem);
    reviewsContainer.appendChild(reviewItem.element);
  });

  reviewsFilter.classList.remove(CLASS_INVISIBLE);

  if (reviews.length < REVIEWS_BLOCK) {
    moreReviewsBtn.classList.add(CLASS_INVISIBLE);
  } else {
    moreReviewsBtn.classList.remove(CLASS_INVISIBLE);
  }
};

reviewsFilter.addEventListener('change', function(evt) {
  if (evt.target.name === 'reviews') {
    reviewBlockArray.forEach(function(item) {
      item.remove();
    });
    reviewBlockArray = [];
    reviewBlockNumber = 0;
    currentFilter = evt.target.id;
    localStorage.setItem('lastCheckedFilter', currentFilter);
    loadReviews(currentFilter, reviewBlockNumber);
  }
});

moreReviewsBtn.addEventListener('click', function() {
  reviewBlockNumber = reviewBlockNumber + REVIEWS_BLOCK;
  loadReviews(currentFilter, reviewBlockNumber);
});

var reviews = {
  load: function() {
    var lastCheckedFilter = localStorage.getItem('lastCheckedFilter');

    if(lastCheckedFilter) {
      currentFilter = lastCheckedFilter;
      document.getElementById(lastCheckedFilter).checked = true;
    } else {
      currentFilter = defaultFilter;
    }
    loadReviews(currentFilter, reviewBlockNumber);
  }
};

module.exports = reviews;


/***/ },

/***/ "./src/js/utilities.js"
/*!*****************************!*\
  !*** ./src/js/utilities.js ***!
  \*****************************/
(module, __unused_webpack_exports, __webpack_require__) {



var filterData = __webpack_require__(/*! ./reviews/filter */ "./src/js/reviews/filter.js");

module.exports = {

  // загрузка и фильтрация данных из локального файла
  loadData: function(data, params, callback) {
    var loadedData = data.slice();

    var filteredData = filterData(loadedData, params.filter);
    var showData = filteredData.slice(params.from, params.to);

    callback(showData);
  },

  // загрузка данных с сервера
  callbackLoad: function(url, params, callback) {
    var xhr = new XMLHttpRequest();
    var loadedData = [];

    xhr.addEventListener('load', function(evt) {
      try {
        loadedData = JSON.parse(evt.target.response);
        callback(loadedData);
      } catch(err) {
        console.log(err);
      }
    });

    xhr.open('GET', url + '?' + 'from=' + params.from + '&to=' + params.to + '&filter=' + params.filter);
    xhr.timeout = 10000;
    xhr.send();
  },

  setCookie: function() {
    var dateNow = new Date();
    var yearNow = dateNow.getFullYear();
    var lastBirthDate = new Date(yearNow, 11, 9);
    var reviewMark = document.querySelector('input[name=review-mark]:checked');
    var reviewNameField = document.querySelector('#review-name');

    if(+dateNow > +lastBirthDate) {
      var dateToExpire = +dateNow + (+dateNow - +lastBirthDate);
    } else {
      dateToExpire = +dateNow + (+dateNow - (+new Date(yearNow - 1, 11, 9)));
    }

    window.Cookies.set('review-mark', reviewMark.value, {
      expires: dateToExpire
    });

    window.Cookies.set('review-name', reviewNameField.value, {
      expires: dateToExpire
    });
  },

  throttle: function(func, delay) {
    var isThrottled = true;

    function funcWrapper() {
      if (isThrottled) {
        func();
        isThrottled = false;
      }
      setTimeout(function() {
        isThrottled = true;
      }, delay);
    }
    return funcWrapper;
  },

  inherit: function(ChildClass, ParentClass) {
    if (typeof ChildClass === 'function' && typeof ParentClass === 'function') {
      var EmptyConstructor = function() {};
      EmptyConstructor.prototype = ParentClass.prototype;
      ChildClass.prototype = new EmptyConstructor();
    } else {
      console.error('inherit: One or both parameters is not a function');
    }
  }
};


/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/


__webpack_require__(/*! ./game/game-start */ "./src/js/game/game-start.js");

var reviews = __webpack_require__(/*! ./reviews/reviews */ "./src/js/reviews/reviews.js");

var Gallery = __webpack_require__(/*! ./gallery */ "./src/js/gallery.js");

var pictures = document.querySelectorAll('.photogallery-image');

var picturesList = Array.prototype.map.call(pictures, function(picUrl) {
  var pictureUrl = document.createElement('a');
  pictureUrl.href = picUrl.childNodes[0].src;
  return pictureUrl.pathname;
});

var galleryContainer = document.querySelector('.overlay-gallery');
var gallery = new Gallery(galleryContainer, picturesList);

Array.prototype.forEach.call(pictures, function(picture, pictureNum) {
  picture.onclick = function() {
    location.hash = '#photo' + picturesList[pictureNum];
    gallery.show(location.hash);
  };
});

window.onload = gallery.onHashChange;

reviews.load();

})();

/******/ })()
;
//# sourceMappingURL=main.js.map