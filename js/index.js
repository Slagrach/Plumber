/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pug/includes/popup/modal.js":
/*!*****************************************!*\
  !*** ./src/pug/includes/popup/modal.js ***!
  \*****************************************/
/***/ (() => {

var unlock = true;

// BodyLock
function body_lock(delay) {
  var body = document.querySelector("body");
  if (body.classList.contains('_lock')) {
    body_lock_remove(delay);
  } else {
    body_lock_add(delay);
  }
}
function body_lock_remove(delay) {
  var body = document.querySelector("body");
  if (unlock) {
    var lock_padding = document.querySelectorAll("._lp");
    setTimeout(function () {
      for (var index = 0; index < lock_padding.length; index++) {
        var el = lock_padding[index];
        el.style.paddingRight = '0px';
      }
      body.style.paddingRight = '0px';
      body.classList.remove("_lock");
    }, delay);
    unlock = false;
    setTimeout(function () {
      unlock = true;
    }, delay);
  }
}
function body_lock_add(delay) {
  var body = document.querySelector("body");
  if (unlock) {
    var lock_padding = document.querySelectorAll("._lp");
    for (var index = 0; index < lock_padding.length; index++) {
      var el = lock_padding[index];
      el.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
    }
    body.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
    body.classList.add("_lock");
    unlock = false;
    setTimeout(function () {
      unlock = true;
    }, delay);
  }
}
var bodyLockStatus = true;
var bodyLockToggle = function bodyLockToggle() {
  var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 500;
  if (document.documentElement.classList.contains('_lock')) {
    bodyUnlock(delay);
  } else {
    bodyLock(delay);
  }
};
var bodyUnlock = function bodyUnlock() {
  var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 500;
  var body = document.querySelector("body");
  if (bodyLockStatus) {
    var lock_padding = document.querySelectorAll("._lp");
    setTimeout(function () {
      for (var index = 0; index < lock_padding.length; index++) {
        var el = lock_padding[index];
        el.style.paddingRight = '0px';
      }
      body.style.paddingRight = '0px';
      document.documentElement.classList.remove("_lock");
    }, delay);
    bodyLockStatus = false;
    setTimeout(function () {
      bodyLockStatus = true;
    }, delay);
  }
};
var bodyLock = function bodyLock() {
  var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 500;
  var body = document.querySelector("body");
  if (bodyLockStatus) {
    var lock_padding = document.querySelectorAll("._lp");
    for (var index = 0; index < lock_padding.length; index++) {
      var el = lock_padding[index];
      el.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
    }
    body.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
    document.documentElement.classList.add("_lock");
    bodyLockStatus = false;
    setTimeout(function () {
      bodyLockStatus = true;
    }, delay);
  }
};
//Popups
var popup_link = document.querySelectorAll('.popup-link');
var popups = document.querySelectorAll('.popup');
var _loop = function _loop() {
  var el = popup_link[index];
  el.addEventListener('click', function (e) {
    if (unlock) {
      var item = el.getAttribute('href').replace('#', '');
      var video = el.getAttribute('data-video');
      popup_open(item, video);
    }
    e.preventDefault();
  });
};
for (var index = 0; index < popup_link.length; index++) {
  _loop();
}
for (var _index = 0; _index < popups.length; _index++) {
  var popup = popups[_index];
  popup.addEventListener("click", function (e) {
    if (!e.target.closest('.popup__body')) {
      popup_close(e.target.closest('.popup'));
    }
  });
}
function popup_open(item) {
  var video = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var activePopup = document.querySelectorAll('.popup.active');
  if (activePopup.length > 0) {
    popup_close('', false);
  }
  var curent_popup = document.querySelector('.popup_' + item);
  if (curent_popup && unlock) {
    if (video != '' && video != null) {
      var popup_video = document.querySelector('.popup_video');
      popup_video.querySelector('.popup__video').innerHTML = '<iframe src="https://www.youtube.com/embed/' + video + '?autoplay=1"  allow="autoplay; encrypted-media" allowfullscreen></iframe>';
    }
    if (!document.querySelector('.menu__body.active')) {
      body_lock_add(500);
    }
    curent_popup.classList.add('_active');
    history.pushState('', '', '#' + item);
  }
}
function popup_close(item) {
  var bodyUnlock = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  if (unlock) {
    if (!item) {
      for (var _index2 = 0; _index2 < popups.length; _index2++) {
        var _popup = popups[_index2];
        var video = _popup.querySelector('.popup__video');
        if (video) {
          video.innerHTML = '';
        }
        _popup.classList.remove('_active');
      }
    } else {
      var _video = item.querySelector('.popup__video');
      if (_video) {
        _video.innerHTML = '';
      }
      item.classList.remove('_active');
    }
    if (!document.querySelector('.menu__body.active') && bodyUnlock) {
      body_lock_remove(500);
    }
    history.pushState('', '', window.location.href.split('#')[0]);
  }
}
var popup_close_icon = document.querySelectorAll('.popup__close,.popup-close');
if (popup_close_icon) {
  var _loop2 = function _loop2() {
    var el = popup_close_icon[_index3];
    el.addEventListener('click', function () {
      popup_close(el.closest('.popup'));
    });
  };
  for (var _index3 = 0; _index3 < popup_close_icon.length; _index3++) {
    _loop2();
  }
}
document.addEventListener('keydown', function (e) {
  if (e.code === 'Escape') {
    popup_close();
  }
});

/***/ }),

/***/ "./src/pug/static/header/burger/burger.js":
/*!************************************************!*\
  !*** ./src/pug/static/header/burger/burger.js ***!
  \************************************************/
/***/ (() => {

//Добавление класса lock для body при открытии меню=====================================================================
// import {body_lock, unlock} from '../../../../js/files/functions';
var unlock = true;

// BodyLock
function body_lock(delay) {
  var body = document.querySelector("body");
  if (body.classList.contains('_lock')) {
    body_lock_remove(delay);
  } else {
    body_lock_add(delay);
  }
}
function body_lock_remove(delay) {
  var body = document.querySelector("body");
  if (unlock) {
    var lock_padding = document.querySelectorAll("._lp");
    setTimeout(function () {
      for (var index = 0; index < lock_padding.length; index++) {
        var el = lock_padding[index];
        el.style.paddingRight = '0px';
      }
      body.style.paddingRight = '0px';
      body.classList.remove("_lock");
    }, delay);
    unlock = false;
    setTimeout(function () {
      unlock = true;
    }, delay);
  }
}
function body_lock_add(delay) {
  var body = document.querySelector("body");
  if (unlock) {
    var lock_padding = document.querySelectorAll("._lp");
    for (var index = 0; index < lock_padding.length; index++) {
      var el = lock_padding[index];
      el.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
    }
    body.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
    body.classList.add("_lock");
    unlock = false;
    setTimeout(function () {
      unlock = true;
    }, delay);
  }
}
var bodyLockStatus = true;
var bodyLockToggle = function bodyLockToggle() {
  var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 500;
  if (document.documentElement.classList.contains('_lock')) {
    bodyUnlock(delay);
  } else {
    bodyLock(delay);
  }
};
var bodyUnlock = function bodyUnlock() {
  var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 500;
  var body = document.querySelector("body");
  if (bodyLockStatus) {
    var lock_padding = document.querySelectorAll("._lp");
    setTimeout(function () {
      for (var index = 0; index < lock_padding.length; index++) {
        var el = lock_padding[index];
        el.style.paddingRight = '0px';
      }
      body.style.paddingRight = '0px';
      document.documentElement.classList.remove("_lock");
    }, delay);
    bodyLockStatus = false;
    setTimeout(function () {
      bodyLockStatus = true;
    }, delay);
  }
};
var bodyLock = function bodyLock() {
  var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 500;
  var body = document.querySelector("body");
  if (bodyLockStatus) {
    var lock_padding = document.querySelectorAll("._lp");
    for (var index = 0; index < lock_padding.length; index++) {
      var el = lock_padding[index];
      el.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
    }
    body.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
    document.documentElement.classList.add("_lock");
    bodyLockStatus = false;
    setTimeout(function () {
      bodyLockStatus = true;
    }, delay);
  }
};

//Добавление класса бургеру===================================================================================
var iconMenu = document.querySelector(".icon-menu");
var menuBody = document.querySelector('.menu__body');
if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    if (unlock) {
      body_lock();
      iconMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
    }
  });
}
//Прокрутка по клику и закрытие меню============================================================================
var menuLinks = document.querySelectorAll('._link[data-link]');
if (menuLinks.length > 0) {
  var onMenuLinkClick = function onMenuLinkClick(e) {
    var menuLink = e.target;
    if (menuLink.dataset.link && document.querySelector(menuLink.dataset.link)) {
      var linkBlock = document.querySelector(menuLink.dataset.link);
      var linkBlockValue = linkBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
      if (iconMenu.classList.contains('_active')) {
        if (unlock) {
          body_lock();
          iconMenu.classList.toggle('_active');
          menuBody.classList.toggle('_active');
        }
      }
      window.scrollTo({
        top: linkBlockValue,
        behavior: "smooth"
      });
      e.preventDefault();
    }
  };
  menuLinks.forEach(function (menuLink) {
    menuLink.addEventListener("click", onMenuLinkClick);
  });
}

// const navigation = document.querySelector('.header');
// const navigationHeight = navigation.offsetHeight;
// document.documentElement.style.setProperty(
// 	'--scroll-padding',
// 	navigationHeight + 'px'
// )

var spoilersArray = document.querySelectorAll('[data-spoilers]');
if (spoilersArray.length > 0) {
  // Инициализация
  var initSpoilers = function initSpoilers(spoilersArray) {
    var matchMedia = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    spoilersArray.forEach(function (spoilersBlock) {
      spoilersBlock = matchMedia ? spoilersBlock.item : spoilersBlock;
      if (matchMedia.matches || !matchMedia) {
        spoilersBlock.classList.add('_init');
        initSpoilerBody(spoilersBlock);
        spoilersBlock.addEventListener("click", setSpoilerAction);
      } else {
        spoilersBlock.classList.remove('_init');
        initSpoilerBody(spoilersBlock, false);
        spoilersBlock.removeEventListener("click", setSpoilerAction);
      }
    });
  }; // Работа с контентом
  var initSpoilerBody = function initSpoilerBody(spoilersBlock) {
    var hideSpoilerBody = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var spoilerTitles = spoilersBlock.querySelectorAll('[data-spoiler]');
    if (spoilerTitles.length > 0) {
      spoilerTitles.forEach(function (spoilerTitle) {
        if (hideSpoilerBody) {
          spoilerTitle.removeAttribute('tabindex');
          if (!spoilerTitle.classList.contains('_active')) {
            spoilerTitle.nextElementSibling.hidden = true;
          }
        } else {
          spoilerTitle.setAttribute('tabindex', '-1');
          spoilerTitle.nextElementSibling.hidden = false;
        }
      });
    }
  };
  var setSpoilerAction = function setSpoilerAction(e) {
    var el = e.target;
    if (el.hasAttribute('data-spoiler') || el.closest('[data-spoiler]')) {
      var spoilerTitle = el.hasAttribute('data-spoiler') ? el : el.closest('[data-spoiler]');
      var spoilersBlock = spoilerTitle.closest('[data-spoilers]');
      var oneSpoiler = spoilersBlock.hasAttribute('data-one-spoiler') ? true : false;
      if (!spoilersBlock.querySelectorAll('._slide').length) {
        if (oneSpoiler && !spoilerTitle.classList.contains('_active')) {
          hideSpoilersBody(spoilersBlock);
        }
        spoilerTitle.classList.toggle('_active');
        _slideToggle(spoilerTitle.nextElementSibling, 500);
      }
      e.preventDefault();
    }
  };
  var hideSpoilersBody = function hideSpoilersBody(spoilersBlock) {
    var spoilerActiveTitle = spoilersBlock.querySelector('[data-spoiler]._active');
    if (spoilerActiveTitle) {
      spoilerActiveTitle.classList.remove('_active');
      _slideUp(spoilerActiveTitle.nextElementSibling, 500);
    }
  };
  // Получение обычных спойлеров
  var spoilersRegular = Array.from(spoilersArray).filter(function (item, index, self) {
    return !item.dataset.spoilers.split(",")[0];
  });
  // Инициализация обычных спойлеров
  if (spoilersRegular.length > 0) {
    initSpoilers(spoilersRegular);
  }

  // Получение спойлеров с медиа запросами
  var spoilersMedia = Array.from(spoilersArray).filter(function (item, index, self) {
    return item.dataset.spoilers.split(",")[0];
  });

  // Инициализация спойлеров с медиа запросами
  if (spoilersMedia.length > 0) {
    var breakpointsArray = [];
    spoilersMedia.forEach(function (item) {
      var params = item.dataset.spoilers;
      var breakpoint = {};
      var paramsArray = params.split(",");
      breakpoint.value = paramsArray[0];
      breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
      breakpoint.item = item;
      breakpointsArray.push(breakpoint);
    });

    // Получаем уникальные брейкпоинты
    var mediaQueries = breakpointsArray.map(function (item) {
      return '(' + item.type + "-width: " + item.value + "px)," + item.value + ',' + item.type;
    });
    mediaQueries = mediaQueries.filter(function (item, index, self) {
      return self.indexOf(item) === index;
    });

    // Работаем с каждым брейкпоинтом
    mediaQueries.forEach(function (breakpoint) {
      var paramsArray = breakpoint.split(",");
      var mediaBreakpoint = paramsArray[1];
      var mediaType = paramsArray[2];
      var matchMedia = window.matchMedia(paramsArray[0]);

      // Объекты с нужными условиями
      var spoilersArray = breakpointsArray.filter(function (item) {
        if (item.value === mediaBreakpoint && item.type === mediaType) {
          return true;
        }
      });
      // Событие
      matchMedia.addListener(function () {
        initSpoilers(spoilersArray, matchMedia);
      });
      initSpoilers(spoilersArray, matchMedia);
    });
  }
}

// SlideToggle
var _slideUp = function _slideUp(target) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  if (!target.classList.contains('_slide')) {
    target.classList.add('_slide');
    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = duration + 'ms';
    target.style.height = target.offsetHeight + 'px';
    target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    window.setTimeout(function () {
      target.hidden = true;
      target.style.removeProperty('height');
      target.style.removeProperty('padding-top');
      target.style.removeProperty('padding-bottom');
      target.style.removeProperty('margin-top');
      target.style.removeProperty('margin-bottom');
      target.style.removeProperty('overflow');
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
      target.classList.remove('_slide');
    }, duration);
  }
};
var _slideDown = function _slideDown(target) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  if (!target.classList.contains('_slide')) {
    target.classList.add('_slide');
    if (target.hidden) {
      target.hidden = false;
    }
    var height = target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.offsetHeight;
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + 'ms';
    target.style.height = height + 'px';
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    window.setTimeout(function () {
      target.style.removeProperty('height');
      target.style.removeProperty('overflow');
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
      target.classList.remove('_slide');
    }, duration);
  }
};
var _slideToggle = function _slideToggle(target) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  if (target.hidden) {
    return _slideDown(target, duration);
  } else {
    return _slideUp(target, duration);
  }
};
var menuLinIcon = document.querySelector('.menu__link-icon');
menuLinIcon.addEventListener('click', function (e) {
  var t = e.target;
  e.preventDefault();
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pug_static_header_burger_burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pug/static/header/burger/burger */ "./src/pug/static/header/burger/burger.js");
/* harmony import */ var _pug_static_header_burger_burger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pug_static_header_burger_burger__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pug_includes_popup_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pug/includes/popup/modal */ "./src/pug/includes/popup/modal.js");
/* harmony import */ var _pug_includes_popup_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pug_includes_popup_modal__WEBPACK_IMPORTED_MODULE_1__);

addEventListener('resize', function () {
  var windowInnerWidth = window.innerWidth - 167;
  document.documentElement.style.setProperty('--position', windowInnerWidth + 'px');
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsR0FBRzlGLENBQUMsQ0FBQ1EsTUFBTTtFQUNoQlIsQ0FBQyxDQUFDTSxjQUFjLEVBQUU7QUFDbkIsQ0FBQyxDQUFDOzs7Ozs7VUM1VUY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOMkM7QUFFM0NQLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxZQUFNO0VBQ2hDLElBQU1nRyxnQkFBZ0IsR0FBRzlHLE1BQU0sQ0FBQ0MsVUFBVSxHQUFHLEdBQUc7RUFDaERoQixRQUFRLENBQUN1QixlQUFlLENBQUNYLEtBQUssQ0FBQ2tILFdBQVcsQ0FBQyxZQUFZLEVBQUVELGdCQUFnQixHQUFHLElBQUksQ0FBQztBQUNsRixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbGFncmFjaC10ZW1wbGF0ZS8uL3NyYy9wdWcvaW5jbHVkZXMvcG9wdXAvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vc2xhZ3JhY2gtdGVtcGxhdGUvLi9zcmMvcHVnL3N0YXRpYy9oZWFkZXIvYnVyZ2VyL2J1cmdlci5qcyIsIndlYnBhY2s6Ly9zbGFncmFjaC10ZW1wbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zbGFncmFjaC10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9zbGFncmFjaC10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc2xhZ3JhY2gtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zbGFncmFjaC10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3NsYWdyYWNoLXRlbXBsYXRlLy4vc3JjL2pzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImxldCB1bmxvY2sgPSB0cnVlO1xyXG5cclxuLy8gQm9keUxvY2tcclxuZnVuY3Rpb24gYm9keV9sb2NrKGRlbGF5KSB7XHJcblx0bGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcclxuXHRpZiAoYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ19sb2NrJykpIHtcclxuXHRcdGJvZHlfbG9ja19yZW1vdmUoZGVsYXkpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRib2R5X2xvY2tfYWRkKGRlbGF5KTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJvZHlfbG9ja19yZW1vdmUoZGVsYXkpIHtcclxuXHRsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xyXG5cdGlmICh1bmxvY2spIHtcclxuXHRcdGxldCBsb2NrX3BhZGRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLl9scFwiKTtcclxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbG9ja19wYWRkaW5nLmxlbmd0aDsgaW5kZXgrKykge1xyXG5cdFx0XHRcdGNvbnN0IGVsID0gbG9ja19wYWRkaW5nW2luZGV4XTtcclxuXHRcdFx0XHRlbC5zdHlsZS5wYWRkaW5nUmlnaHQgPSAnMHB4JztcclxuXHRcdFx0fVxyXG5cdFx0XHRib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9ICcwcHgnO1xyXG5cdFx0XHRib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJfbG9ja1wiKTtcclxuXHRcdH0sIGRlbGF5KTtcclxuXHJcblx0XHR1bmxvY2sgPSBmYWxzZTtcclxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG5cdFx0XHR1bmxvY2sgPSB0cnVlO1xyXG5cdFx0fSwgZGVsYXkpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gYm9keV9sb2NrX2FkZChkZWxheSkge1xyXG5cdGxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XHJcblx0aWYgKHVubG9jaykge1xyXG5cdFx0bGV0IGxvY2tfcGFkZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuX2xwXCIpO1xyXG5cdFx0Zm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxvY2tfcGFkZGluZy5sZW5ndGg7IGluZGV4KyspIHtcclxuXHRcdFx0Y29uc3QgZWwgPSBsb2NrX3BhZGRpbmdbaW5kZXhdO1xyXG5cdFx0XHRlbC5zdHlsZS5wYWRkaW5nUmlnaHQgPSB3aW5kb3cuaW5uZXJXaWR0aCAtIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53cmFwcGVyJykub2Zmc2V0V2lkdGggKyAncHgnO1xyXG5cdFx0fVxyXG5cdFx0Ym9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSB3aW5kb3cuaW5uZXJXaWR0aCAtIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53cmFwcGVyJykub2Zmc2V0V2lkdGggKyAncHgnO1xyXG5cdFx0Ym9keS5jbGFzc0xpc3QuYWRkKFwiX2xvY2tcIik7XHJcblxyXG5cdFx0dW5sb2NrID0gZmFsc2U7XHJcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0dW5sb2NrID0gdHJ1ZTtcclxuXHRcdH0sIGRlbGF5KTtcclxuXHR9XHJcbn1cclxuXHJcbmxldCBib2R5TG9ja1N0YXR1cyA9IHRydWU7XHJcbmxldCBib2R5TG9ja1RvZ2dsZSA9IChkZWxheSA9IDUwMCkgPT4ge1xyXG5cdGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdfbG9jaycpKSB7XHJcblx0XHRib2R5VW5sb2NrKGRlbGF5KTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0Ym9keUxvY2soZGVsYXkpO1xyXG5cdH1cclxufVxyXG5sZXQgYm9keVVubG9jayA9IChkZWxheSA9IDUwMCkgPT4ge1xyXG5cdGxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XHJcblx0aWYgKGJvZHlMb2NrU3RhdHVzKSB7XHJcblx0XHRsZXQgbG9ja19wYWRkaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5fbHBcIik7XHJcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0Zm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxvY2tfcGFkZGluZy5sZW5ndGg7IGluZGV4KyspIHtcclxuXHRcdFx0XHRjb25zdCBlbCA9IGxvY2tfcGFkZGluZ1tpbmRleF07XHJcblx0XHRcdFx0ZWwuc3R5bGUucGFkZGluZ1JpZ2h0ID0gJzBweCc7XHJcblx0XHRcdH1cclxuXHRcdFx0Ym9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSAnMHB4JztcclxuXHRcdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJfbG9ja1wiKTtcclxuXHRcdH0sIGRlbGF5KTtcclxuXHRcdGJvZHlMb2NrU3RhdHVzID0gZmFsc2U7XHJcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0Ym9keUxvY2tTdGF0dXMgPSB0cnVlO1xyXG5cdFx0fSwgZGVsYXkpO1xyXG5cdH1cclxufVxyXG5sZXQgYm9keUxvY2sgPSAoZGVsYXkgPSA1MDApID0+IHtcclxuXHRsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xyXG5cdGlmIChib2R5TG9ja1N0YXR1cykge1xyXG5cdFx0bGV0IGxvY2tfcGFkZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuX2xwXCIpO1xyXG5cdFx0Zm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxvY2tfcGFkZGluZy5sZW5ndGg7IGluZGV4KyspIHtcclxuXHRcdFx0Y29uc3QgZWwgPSBsb2NrX3BhZGRpbmdbaW5kZXhdO1xyXG5cdFx0XHRlbC5zdHlsZS5wYWRkaW5nUmlnaHQgPSB3aW5kb3cuaW5uZXJXaWR0aCAtIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53cmFwcGVyJykub2Zmc2V0V2lkdGggKyAncHgnO1xyXG5cdFx0fVxyXG5cdFx0Ym9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSB3aW5kb3cuaW5uZXJXaWR0aCAtIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53cmFwcGVyJykub2Zmc2V0V2lkdGggKyAncHgnO1xyXG5cdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJfbG9ja1wiKTtcclxuXHJcblx0XHRib2R5TG9ja1N0YXR1cyA9IGZhbHNlO1xyXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGJvZHlMb2NrU3RhdHVzID0gdHJ1ZTtcclxuXHRcdH0sIGRlbGF5KTtcclxuXHR9XHJcbn1cclxuLy9Qb3B1cHNcclxubGV0IHBvcHVwX2xpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9wdXAtbGluaycpO1xyXG5sZXQgcG9wdXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBvcHVwJyk7XHJcbmZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBwb3B1cF9saW5rLmxlbmd0aDsgaW5kZXgrKykge1xyXG5cdGNvbnN0IGVsID0gcG9wdXBfbGlua1tpbmRleF07XHJcblx0ZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0aWYgKHVubG9jaykge1xyXG5cdFx0XHRsZXQgaXRlbSA9IGVsLmdldEF0dHJpYnV0ZSgnaHJlZicpLnJlcGxhY2UoJyMnLCAnJyk7XHJcblx0XHRcdGxldCB2aWRlbyA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS12aWRlbycpO1xyXG5cdFx0XHRwb3B1cF9vcGVuKGl0ZW0sIHZpZGVvKTtcclxuXHRcdH1cclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHR9KVxyXG59XHJcbmZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBwb3B1cHMubGVuZ3RoOyBpbmRleCsrKSB7XHJcblx0Y29uc3QgcG9wdXAgPSBwb3B1cHNbaW5kZXhdO1xyXG5cdHBvcHVwLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0aWYgKCFlLnRhcmdldC5jbG9zZXN0KCcucG9wdXBfX2JvZHknKSkge1xyXG5cdFx0XHRwb3B1cF9jbG9zZShlLnRhcmdldC5jbG9zZXN0KCcucG9wdXAnKSk7XHJcblx0XHR9XHJcblx0fSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBvcHVwX29wZW4oaXRlbSwgdmlkZW8gPSAnJykge1xyXG5cdGxldCBhY3RpdmVQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wb3B1cC5hY3RpdmUnKTtcclxuXHRpZiAoYWN0aXZlUG9wdXAubGVuZ3RoID4gMCkge1xyXG5cdFx0cG9wdXBfY2xvc2UoJycsIGZhbHNlKTtcclxuXHR9XHJcblx0bGV0IGN1cmVudF9wb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF8nICsgaXRlbSk7XHJcblx0aWYgKGN1cmVudF9wb3B1cCAmJiB1bmxvY2spIHtcclxuXHRcdGlmICh2aWRlbyAhPSAnJyAmJiB2aWRlbyAhPSBudWxsKSB7XHJcblx0XHRcdGxldCBwb3B1cF92aWRlbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF92aWRlbycpO1xyXG5cdFx0XHRwb3B1cF92aWRlby5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX3ZpZGVvJykuaW5uZXJIVE1MID0gJzxpZnJhbWUgc3JjPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvJyArIHZpZGVvICsgJz9hdXRvcGxheT0xXCIgIGFsbG93PVwiYXV0b3BsYXk7IGVuY3J5cHRlZC1tZWRpYVwiIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT4nO1xyXG5cdFx0fVxyXG5cdFx0aWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudV9fYm9keS5hY3RpdmUnKSkge1xyXG5cdFx0XHRib2R5X2xvY2tfYWRkKDUwMCk7XHJcblx0XHR9XHJcblx0XHRjdXJlbnRfcG9wdXAuY2xhc3NMaXN0LmFkZCgnX2FjdGl2ZScpO1xyXG5cdFx0aGlzdG9yeS5wdXNoU3RhdGUoJycsICcnLCAnIycgKyBpdGVtKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBvcHVwX2Nsb3NlKGl0ZW0sIGJvZHlVbmxvY2sgPSB0cnVlKSB7XHJcblx0aWYgKHVubG9jaykge1xyXG5cdFx0aWYgKCFpdGVtKSB7XHJcblx0XHRcdGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBwb3B1cHMubGVuZ3RoOyBpbmRleCsrKSB7XHJcblx0XHRcdFx0Y29uc3QgcG9wdXAgPSBwb3B1cHNbaW5kZXhdO1xyXG5cdFx0XHRcdGxldCB2aWRlbyA9IHBvcHVwLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fdmlkZW8nKTtcclxuXHRcdFx0XHRpZiAodmlkZW8pIHtcclxuXHRcdFx0XHRcdHZpZGVvLmlubmVySFRNTCA9ICcnO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKCdfYWN0aXZlJyk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGxldCB2aWRlbyA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLnBvcHVwX192aWRlbycpO1xyXG5cdFx0XHRpZiAodmlkZW8pIHtcclxuXHRcdFx0XHR2aWRlby5pbm5lckhUTUwgPSAnJztcclxuXHRcdFx0fVxyXG5cdFx0XHRpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ19hY3RpdmUnKTtcclxuXHRcdH1cclxuXHRcdGlmICghZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVfX2JvZHkuYWN0aXZlJykgJiYgYm9keVVubG9jaykge1xyXG5cdFx0XHRib2R5X2xvY2tfcmVtb3ZlKDUwMCk7XHJcblx0XHR9XHJcblx0XHRoaXN0b3J5LnB1c2hTdGF0ZSgnJywgJycsIHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KCcjJylbMF0pO1xyXG5cdH1cclxufVxyXG5cclxubGV0IHBvcHVwX2Nsb3NlX2ljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9wdXBfX2Nsb3NlLC5wb3B1cC1jbG9zZScpO1xyXG5pZiAocG9wdXBfY2xvc2VfaWNvbikge1xyXG5cdGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBwb3B1cF9jbG9zZV9pY29uLmxlbmd0aDsgaW5kZXgrKykge1xyXG5cdFx0Y29uc3QgZWwgPSBwb3B1cF9jbG9zZV9pY29uW2luZGV4XTtcclxuXHRcdGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRwb3B1cF9jbG9zZShlbC5jbG9zZXN0KCcucG9wdXAnKSk7XHJcblx0XHR9KVxyXG5cdH1cclxufVxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24gKGUpIHtcclxuXHRpZiAoZS5jb2RlID09PSAnRXNjYXBlJykge1xyXG5cdFx0cG9wdXBfY2xvc2UoKTtcclxuXHR9XHJcbn0pO1xyXG4iLCIvL9CU0L7QsdCw0LLQu9C10L3QuNC1INC60LvQsNGB0YHQsCBsb2NrINC00LvRjyBib2R5INC/0YDQuCDQvtGC0LrRgNGL0YLQuNC4INC80LXQvdGOPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIGltcG9ydCB7Ym9keV9sb2NrLCB1bmxvY2t9IGZyb20gJy4uLy4uLy4uLy4uL2pzL2ZpbGVzL2Z1bmN0aW9ucyc7XHJcbmxldCB1bmxvY2sgPSB0cnVlO1xyXG5cclxuLy8gQm9keUxvY2tcclxuZnVuY3Rpb24gYm9keV9sb2NrKGRlbGF5KSB7XHJcblx0bGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcclxuXHRpZiAoYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ19sb2NrJykpIHtcclxuXHRcdGJvZHlfbG9ja19yZW1vdmUoZGVsYXkpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRib2R5X2xvY2tfYWRkKGRlbGF5KTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJvZHlfbG9ja19yZW1vdmUoZGVsYXkpIHtcclxuXHRsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xyXG5cdGlmICh1bmxvY2spIHtcclxuXHRcdGxldCBsb2NrX3BhZGRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLl9scFwiKTtcclxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbG9ja19wYWRkaW5nLmxlbmd0aDsgaW5kZXgrKykge1xyXG5cdFx0XHRcdGNvbnN0IGVsID0gbG9ja19wYWRkaW5nW2luZGV4XTtcclxuXHRcdFx0XHRlbC5zdHlsZS5wYWRkaW5nUmlnaHQgPSAnMHB4JztcclxuXHRcdFx0fVxyXG5cdFx0XHRib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9ICcwcHgnO1xyXG5cdFx0XHRib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJfbG9ja1wiKTtcclxuXHRcdH0sIGRlbGF5KTtcclxuXHJcblx0XHR1bmxvY2sgPSBmYWxzZTtcclxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG5cdFx0XHR1bmxvY2sgPSB0cnVlO1xyXG5cdFx0fSwgZGVsYXkpO1xyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gYm9keV9sb2NrX2FkZChkZWxheSkge1xyXG5cdGxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XHJcblx0aWYgKHVubG9jaykge1xyXG5cdFx0bGV0IGxvY2tfcGFkZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuX2xwXCIpO1xyXG5cdFx0Zm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxvY2tfcGFkZGluZy5sZW5ndGg7IGluZGV4KyspIHtcclxuXHRcdFx0Y29uc3QgZWwgPSBsb2NrX3BhZGRpbmdbaW5kZXhdO1xyXG5cdFx0XHRlbC5zdHlsZS5wYWRkaW5nUmlnaHQgPSB3aW5kb3cuaW5uZXJXaWR0aCAtIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53cmFwcGVyJykub2Zmc2V0V2lkdGggKyAncHgnO1xyXG5cdFx0fVxyXG5cdFx0Ym9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSB3aW5kb3cuaW5uZXJXaWR0aCAtIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53cmFwcGVyJykub2Zmc2V0V2lkdGggKyAncHgnO1xyXG5cdFx0Ym9keS5jbGFzc0xpc3QuYWRkKFwiX2xvY2tcIik7XHJcblxyXG5cdFx0dW5sb2NrID0gZmFsc2U7XHJcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0dW5sb2NrID0gdHJ1ZTtcclxuXHRcdH0sIGRlbGF5KTtcclxuXHR9XHJcbn1cclxuXHJcbmxldCBib2R5TG9ja1N0YXR1cyA9IHRydWU7XHJcbmxldCBib2R5TG9ja1RvZ2dsZSA9IChkZWxheSA9IDUwMCkgPT4ge1xyXG5cdGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdfbG9jaycpKSB7XHJcblx0XHRib2R5VW5sb2NrKGRlbGF5KTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0Ym9keUxvY2soZGVsYXkpO1xyXG5cdH1cclxufVxyXG5sZXQgYm9keVVubG9jayA9IChkZWxheSA9IDUwMCkgPT4ge1xyXG5cdGxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XHJcblx0aWYgKGJvZHlMb2NrU3RhdHVzKSB7XHJcblx0XHRsZXQgbG9ja19wYWRkaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5fbHBcIik7XHJcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0Zm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxvY2tfcGFkZGluZy5sZW5ndGg7IGluZGV4KyspIHtcclxuXHRcdFx0XHRjb25zdCBlbCA9IGxvY2tfcGFkZGluZ1tpbmRleF07XHJcblx0XHRcdFx0ZWwuc3R5bGUucGFkZGluZ1JpZ2h0ID0gJzBweCc7XHJcblx0XHRcdH1cclxuXHRcdFx0Ym9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSAnMHB4JztcclxuXHRcdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJfbG9ja1wiKTtcclxuXHRcdH0sIGRlbGF5KTtcclxuXHRcdGJvZHlMb2NrU3RhdHVzID0gZmFsc2U7XHJcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0Ym9keUxvY2tTdGF0dXMgPSB0cnVlO1xyXG5cdFx0fSwgZGVsYXkpO1xyXG5cdH1cclxufVxyXG5sZXQgYm9keUxvY2sgPSAoZGVsYXkgPSA1MDApID0+IHtcclxuXHRsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xyXG5cdGlmIChib2R5TG9ja1N0YXR1cykge1xyXG5cdFx0bGV0IGxvY2tfcGFkZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuX2xwXCIpO1xyXG5cdFx0Zm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxvY2tfcGFkZGluZy5sZW5ndGg7IGluZGV4KyspIHtcclxuXHRcdFx0Y29uc3QgZWwgPSBsb2NrX3BhZGRpbmdbaW5kZXhdO1xyXG5cdFx0XHRlbC5zdHlsZS5wYWRkaW5nUmlnaHQgPSB3aW5kb3cuaW5uZXJXaWR0aCAtIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53cmFwcGVyJykub2Zmc2V0V2lkdGggKyAncHgnO1xyXG5cdFx0fVxyXG5cdFx0Ym9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSB3aW5kb3cuaW5uZXJXaWR0aCAtIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53cmFwcGVyJykub2Zmc2V0V2lkdGggKyAncHgnO1xyXG5cdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJfbG9ja1wiKTtcclxuXHJcblx0XHRib2R5TG9ja1N0YXR1cyA9IGZhbHNlO1xyXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGJvZHlMb2NrU3RhdHVzID0gdHJ1ZTtcclxuXHRcdH0sIGRlbGF5KTtcclxuXHR9XHJcbn1cclxuXHJcbi8v0JTQvtCx0LDQstC70LXQvdC40LUg0LrQu9Cw0YHRgdCwINCx0YPRgNCz0LXRgNGDPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxubGV0IGljb25NZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pY29uLW1lbnVcIik7XHJcbmNvbnN0IG1lbnVCb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVfX2JvZHknKTtcclxuaWYgKGljb25NZW51KSB7XHJcblx0aWNvbk1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcblx0XHRpZiAodW5sb2NrKSB7XHJcblx0XHRcdGJvZHlfbG9jaygpO1xyXG5cdFx0XHRpY29uTWVudS5jbGFzc0xpc3QudG9nZ2xlKCdfYWN0aXZlJyk7XHJcblx0XHRcdG1lbnVCb2R5LmNsYXNzTGlzdC50b2dnbGUoJ19hY3RpdmUnKTtcclxuXHRcdH1cclxuXHR9KTtcclxufVxyXG4vL9Cf0YDQvtC60YDRg9GC0LrQsCDQv9C+INC60LvQuNC60YMg0Lgg0LfQsNC60YDRi9GC0LjQtSDQvNC10L3Rjj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuY29uc3QgbWVudUxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLl9saW5rW2RhdGEtbGlua10nKTtcclxuaWYgKG1lbnVMaW5rcy5sZW5ndGggPiAwKSB7XHJcblx0bWVudUxpbmtzLmZvckVhY2gobWVudUxpbmsgPT4ge1xyXG5cdFx0bWVudUxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9uTWVudUxpbmtDbGljayk7XHJcblx0fSk7XHJcblxyXG5cdGZ1bmN0aW9uIG9uTWVudUxpbmtDbGljayhlKSB7XHJcblx0XHRjb25zdCBtZW51TGluayA9IGUudGFyZ2V0O1xyXG5cdFx0aWYgKG1lbnVMaW5rLmRhdGFzZXQubGluayAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG1lbnVMaW5rLmRhdGFzZXQubGluaykpIHtcclxuXHRcdFx0Y29uc3QgbGlua0Jsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihtZW51TGluay5kYXRhc2V0LmxpbmspO1xyXG5cdFx0XHRjb25zdCBsaW5rQmxvY2tWYWx1ZSA9IGxpbmtCbG9jay5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyBwYWdlWU9mZnNldCAtIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpLm9mZnNldEhlaWdodDtcclxuXHRcdFx0aWYgKGljb25NZW51LmNsYXNzTGlzdC5jb250YWlucygnX2FjdGl2ZScpKSB7XHJcblx0XHRcdFx0aWYgKHVubG9jaykge1xyXG5cdFx0XHRcdFx0Ym9keV9sb2NrKCk7XHJcblx0XHRcdFx0XHRpY29uTWVudS5jbGFzc0xpc3QudG9nZ2xlKCdfYWN0aXZlJyk7XHJcblx0XHRcdFx0XHRtZW51Qm9keS5jbGFzc0xpc3QudG9nZ2xlKCdfYWN0aXZlJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdHdpbmRvdy5zY3JvbGxUbyh7XHJcblx0XHRcdFx0dG9wOiBsaW5rQmxvY2tWYWx1ZSxcclxuXHRcdFx0XHRiZWhhdmlvcjogXCJzbW9vdGhcIlxyXG5cdFx0XHR9KTtcclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuLy8gY29uc3QgbmF2aWdhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKTtcclxuLy8gY29uc3QgbmF2aWdhdGlvbkhlaWdodCA9IG5hdmlnYXRpb24ub2Zmc2V0SGVpZ2h0O1xyXG4vLyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXHJcbi8vIFx0Jy0tc2Nyb2xsLXBhZGRpbmcnLFxyXG4vLyBcdG5hdmlnYXRpb25IZWlnaHQgKyAncHgnXHJcbi8vIClcclxuXHJcbmNvbnN0IHNwb2lsZXJzQXJyYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1zcG9pbGVyc10nKTtcclxuaWYgKHNwb2lsZXJzQXJyYXkubGVuZ3RoID4gMCkge1xyXG5cdC8vINCf0L7Qu9GD0YfQtdC90LjQtSDQvtCx0YvRh9C90YvRhSDRgdC/0L7QudC70LXRgNC+0LJcclxuXHRjb25zdCBzcG9pbGVyc1JlZ3VsYXIgPSBBcnJheS5mcm9tKHNwb2lsZXJzQXJyYXkpLmZpbHRlcihmdW5jdGlvbiAoaXRlbSwgaW5kZXgsIHNlbGYpIHtcclxuXHRcdHJldHVybiAhaXRlbS5kYXRhc2V0LnNwb2lsZXJzLnNwbGl0KFwiLFwiKVswXTtcclxuXHR9KTtcclxuXHQvLyDQmNC90LjRhtC40LDQu9C40LfQsNGG0LjRjyDQvtCx0YvRh9C90YvRhSDRgdC/0L7QudC70LXRgNC+0LJcclxuXHRpZiAoc3BvaWxlcnNSZWd1bGFyLmxlbmd0aCA+IDApIHtcclxuXHRcdGluaXRTcG9pbGVycyhzcG9pbGVyc1JlZ3VsYXIpO1xyXG5cdH1cclxuXHJcblx0Ly8g0J/QvtC70YPRh9C10L3QuNC1INGB0L/QvtC50LvQtdGA0L7QsiDRgSDQvNC10LTQuNCwINC30LDQv9GA0L7RgdCw0LzQuFxyXG5cdGNvbnN0IHNwb2lsZXJzTWVkaWEgPSBBcnJheS5mcm9tKHNwb2lsZXJzQXJyYXkpLmZpbHRlcihmdW5jdGlvbiAoaXRlbSwgaW5kZXgsIHNlbGYpIHtcclxuXHRcdHJldHVybiBpdGVtLmRhdGFzZXQuc3BvaWxlcnMuc3BsaXQoXCIsXCIpWzBdO1xyXG5cdH0pO1xyXG5cclxuXHQvLyDQmNC90LjRhtC40LDQu9C40LfQsNGG0LjRjyDRgdC/0L7QudC70LXRgNC+0LIg0YEg0LzQtdC00LjQsCDQt9Cw0L/RgNC+0YHQsNC80LhcclxuXHRpZiAoc3BvaWxlcnNNZWRpYS5sZW5ndGggPiAwKSB7XHJcblx0XHRjb25zdCBicmVha3BvaW50c0FycmF5ID0gW107XHJcblx0XHRzcG9pbGVyc01lZGlhLmZvckVhY2goaXRlbSA9PiB7XHJcblx0XHRcdGNvbnN0IHBhcmFtcyA9IGl0ZW0uZGF0YXNldC5zcG9pbGVycztcclxuXHRcdFx0Y29uc3QgYnJlYWtwb2ludCA9IHt9O1xyXG5cdFx0XHRjb25zdCBwYXJhbXNBcnJheSA9IHBhcmFtcy5zcGxpdChcIixcIik7XHJcblx0XHRcdGJyZWFrcG9pbnQudmFsdWUgPSBwYXJhbXNBcnJheVswXTtcclxuXHRcdFx0YnJlYWtwb2ludC50eXBlID0gcGFyYW1zQXJyYXlbMV0gPyBwYXJhbXNBcnJheVsxXS50cmltKCkgOiBcIm1heFwiO1xyXG5cdFx0XHRicmVha3BvaW50Lml0ZW0gPSBpdGVtO1xyXG5cdFx0XHRicmVha3BvaW50c0FycmF5LnB1c2goYnJlYWtwb2ludCk7XHJcblx0XHR9KTtcclxuXHJcblx0XHQvLyDQn9C+0LvRg9GH0LDQtdC8INGD0L3QuNC60LDQu9GM0L3Ri9C1INCx0YDQtdC50LrQv9C+0LjQvdGC0YtcclxuXHRcdGxldCBtZWRpYVF1ZXJpZXMgPSBicmVha3BvaW50c0FycmF5Lm1hcChmdW5jdGlvbiAoaXRlbSkge1xyXG5cdFx0XHRyZXR1cm4gJygnICsgaXRlbS50eXBlICsgXCItd2lkdGg6IFwiICsgaXRlbS52YWx1ZSArIFwicHgpLFwiICsgaXRlbS52YWx1ZSArICcsJyArIGl0ZW0udHlwZTtcclxuXHRcdH0pO1xyXG5cdFx0bWVkaWFRdWVyaWVzID0gbWVkaWFRdWVyaWVzLmZpbHRlcihmdW5jdGlvbiAoaXRlbSwgaW5kZXgsIHNlbGYpIHtcclxuXHRcdFx0cmV0dXJuIHNlbGYuaW5kZXhPZihpdGVtKSA9PT0gaW5kZXg7XHJcblx0XHR9KTtcclxuXHJcblx0XHQvLyDQoNCw0LHQvtGC0LDQtdC8INGBINC60LDQttC00YvQvCDQsdGA0LXQudC60L/QvtC40L3RgtC+0LxcclxuXHRcdG1lZGlhUXVlcmllcy5mb3JFYWNoKGJyZWFrcG9pbnQgPT4ge1xyXG5cdFx0XHRjb25zdCBwYXJhbXNBcnJheSA9IGJyZWFrcG9pbnQuc3BsaXQoXCIsXCIpO1xyXG5cdFx0XHRjb25zdCBtZWRpYUJyZWFrcG9pbnQgPSBwYXJhbXNBcnJheVsxXTtcclxuXHRcdFx0Y29uc3QgbWVkaWFUeXBlID0gcGFyYW1zQXJyYXlbMl07XHJcblx0XHRcdGNvbnN0IG1hdGNoTWVkaWEgPSB3aW5kb3cubWF0Y2hNZWRpYShwYXJhbXNBcnJheVswXSk7XHJcblxyXG5cdFx0XHQvLyDQntCx0YrQtdC60YLRiyDRgSDQvdGD0LbQvdGL0LzQuCDRg9GB0LvQvtCy0LjRj9C80LhcclxuXHRcdFx0Y29uc3Qgc3BvaWxlcnNBcnJheSA9IGJyZWFrcG9pbnRzQXJyYXkuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XHJcblx0XHRcdFx0aWYgKGl0ZW0udmFsdWUgPT09IG1lZGlhQnJlYWtwb2ludCAmJiBpdGVtLnR5cGUgPT09IG1lZGlhVHlwZSkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0Ly8g0KHQvtCx0YvRgtC40LVcclxuXHRcdFx0bWF0Y2hNZWRpYS5hZGRMaXN0ZW5lcihmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0aW5pdFNwb2lsZXJzKHNwb2lsZXJzQXJyYXksIG1hdGNoTWVkaWEpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0aW5pdFNwb2lsZXJzKHNwb2lsZXJzQXJyYXksIG1hdGNoTWVkaWEpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHQvLyDQmNC90LjRhtC40LDQu9C40LfQsNGG0LjRj1xyXG5cdGZ1bmN0aW9uIGluaXRTcG9pbGVycyhzcG9pbGVyc0FycmF5LCBtYXRjaE1lZGlhID0gZmFsc2UpIHtcclxuXHRcdHNwb2lsZXJzQXJyYXkuZm9yRWFjaChzcG9pbGVyc0Jsb2NrID0+IHtcclxuXHRcdFx0c3BvaWxlcnNCbG9jayA9IG1hdGNoTWVkaWEgPyBzcG9pbGVyc0Jsb2NrLml0ZW0gOiBzcG9pbGVyc0Jsb2NrO1xyXG5cdFx0XHRpZiAobWF0Y2hNZWRpYS5tYXRjaGVzIHx8ICFtYXRjaE1lZGlhKSB7XHJcblx0XHRcdFx0c3BvaWxlcnNCbG9jay5jbGFzc0xpc3QuYWRkKCdfaW5pdCcpO1xyXG5cdFx0XHRcdGluaXRTcG9pbGVyQm9keShzcG9pbGVyc0Jsb2NrKTtcclxuXHRcdFx0XHRzcG9pbGVyc0Jsb2NrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzZXRTcG9pbGVyQWN0aW9uKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzcG9pbGVyc0Jsb2NrLmNsYXNzTGlzdC5yZW1vdmUoJ19pbml0Jyk7XHJcblx0XHRcdFx0aW5pdFNwb2lsZXJCb2R5KHNwb2lsZXJzQmxvY2ssIGZhbHNlKTtcclxuXHRcdFx0XHRzcG9pbGVyc0Jsb2NrLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzZXRTcG9pbGVyQWN0aW9uKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHQvLyDQoNCw0LHQvtGC0LAg0YEg0LrQvtC90YLQtdC90YLQvtC8XHJcblx0ZnVuY3Rpb24gaW5pdFNwb2lsZXJCb2R5KHNwb2lsZXJzQmxvY2ssIGhpZGVTcG9pbGVyQm9keSA9IHRydWUpIHtcclxuXHRcdGNvbnN0IHNwb2lsZXJUaXRsZXMgPSBzcG9pbGVyc0Jsb2NrLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXNwb2lsZXJdJyk7XHJcblx0XHRpZiAoc3BvaWxlclRpdGxlcy5sZW5ndGggPiAwKSB7XHJcblx0XHRcdHNwb2lsZXJUaXRsZXMuZm9yRWFjaChzcG9pbGVyVGl0bGUgPT4ge1xyXG5cdFx0XHRcdGlmIChoaWRlU3BvaWxlckJvZHkpIHtcclxuXHRcdFx0XHRcdHNwb2lsZXJUaXRsZS5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XHJcblx0XHRcdFx0XHRpZiAoIXNwb2lsZXJUaXRsZS5jbGFzc0xpc3QuY29udGFpbnMoJ19hY3RpdmUnKSkge1xyXG5cdFx0XHRcdFx0XHRzcG9pbGVyVGl0bGUubmV4dEVsZW1lbnRTaWJsaW5nLmhpZGRlbiA9IHRydWU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHNwb2lsZXJUaXRsZS5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJyk7XHJcblx0XHRcdFx0XHRzcG9pbGVyVGl0bGUubmV4dEVsZW1lbnRTaWJsaW5nLmhpZGRlbiA9IGZhbHNlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBzZXRTcG9pbGVyQWN0aW9uKGUpIHtcclxuXHRcdGNvbnN0IGVsID0gZS50YXJnZXQ7XHJcblx0XHRpZiAoZWwuaGFzQXR0cmlidXRlKCdkYXRhLXNwb2lsZXInKSB8fCBlbC5jbG9zZXN0KCdbZGF0YS1zcG9pbGVyXScpKSB7XHJcblx0XHRcdGNvbnN0IHNwb2lsZXJUaXRsZSA9IGVsLmhhc0F0dHJpYnV0ZSgnZGF0YS1zcG9pbGVyJykgPyBlbCA6IGVsLmNsb3Nlc3QoJ1tkYXRhLXNwb2lsZXJdJyk7XHJcblx0XHRcdGNvbnN0IHNwb2lsZXJzQmxvY2sgPSBzcG9pbGVyVGl0bGUuY2xvc2VzdCgnW2RhdGEtc3BvaWxlcnNdJyk7XHJcblx0XHRcdGNvbnN0IG9uZVNwb2lsZXIgPSBzcG9pbGVyc0Jsb2NrLmhhc0F0dHJpYnV0ZSgnZGF0YS1vbmUtc3BvaWxlcicpID8gdHJ1ZSA6IGZhbHNlO1xyXG5cdFx0XHRpZiAoIXNwb2lsZXJzQmxvY2sucXVlcnlTZWxlY3RvckFsbCgnLl9zbGlkZScpLmxlbmd0aCkge1xyXG5cdFx0XHRcdGlmIChvbmVTcG9pbGVyICYmICFzcG9pbGVyVGl0bGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdfYWN0aXZlJykpIHtcclxuXHRcdFx0XHRcdGhpZGVTcG9pbGVyc0JvZHkoc3BvaWxlcnNCbG9jayk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHNwb2lsZXJUaXRsZS5jbGFzc0xpc3QudG9nZ2xlKCdfYWN0aXZlJyk7XHJcblx0XHRcdFx0X3NsaWRlVG9nZ2xlKHNwb2lsZXJUaXRsZS5uZXh0RWxlbWVudFNpYmxpbmcsIDUwMCk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gaGlkZVNwb2lsZXJzQm9keShzcG9pbGVyc0Jsb2NrKSB7XHJcblx0XHRjb25zdCBzcG9pbGVyQWN0aXZlVGl0bGUgPSBzcG9pbGVyc0Jsb2NrLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXNwb2lsZXJdLl9hY3RpdmUnKTtcclxuXHRcdGlmIChzcG9pbGVyQWN0aXZlVGl0bGUpIHtcclxuXHRcdFx0c3BvaWxlckFjdGl2ZVRpdGxlLmNsYXNzTGlzdC5yZW1vdmUoJ19hY3RpdmUnKTtcclxuXHRcdFx0X3NsaWRlVXAoc3BvaWxlckFjdGl2ZVRpdGxlLm5leHRFbGVtZW50U2libGluZywgNTAwKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi8vIFNsaWRlVG9nZ2xlXHJcbmxldCBfc2xpZGVVcCA9ICh0YXJnZXQsIGR1cmF0aW9uID0gNTAwKSA9PiB7XHJcblx0aWYgKCF0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdfc2xpZGUnKSkge1xyXG5cdFx0dGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ19zbGlkZScpO1xyXG5cdFx0dGFyZ2V0LnN0eWxlLnRyYW5zaXRpb25Qcm9wZXJ0eSA9ICdoZWlnaHQsIG1hcmdpbiwgcGFkZGluZyc7XHJcblx0XHR0YXJnZXQuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gZHVyYXRpb24gKyAnbXMnO1xyXG5cdFx0dGFyZ2V0LnN0eWxlLmhlaWdodCA9IHRhcmdldC5vZmZzZXRIZWlnaHQgKyAncHgnO1xyXG5cdFx0dGFyZ2V0Lm9mZnNldEhlaWdodDtcclxuXHRcdHRhcmdldC5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG5cdFx0dGFyZ2V0LnN0eWxlLmhlaWdodCA9IDA7XHJcblx0XHR0YXJnZXQuc3R5bGUucGFkZGluZ1RvcCA9IDA7XHJcblx0XHR0YXJnZXQuc3R5bGUucGFkZGluZ0JvdHRvbSA9IDA7XHJcblx0XHR0YXJnZXQuc3R5bGUubWFyZ2luVG9wID0gMDtcclxuXHRcdHRhcmdldC5zdHlsZS5tYXJnaW5Cb3R0b20gPSAwO1xyXG5cdFx0d2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHR0YXJnZXQuaGlkZGVuID0gdHJ1ZTtcclxuXHRcdFx0dGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdoZWlnaHQnKTtcclxuXHRcdFx0dGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdwYWRkaW5nLXRvcCcpO1xyXG5cdFx0XHR0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3BhZGRpbmctYm90dG9tJyk7XHJcblx0XHRcdHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnbWFyZ2luLXRvcCcpO1xyXG5cdFx0XHR0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ21hcmdpbi1ib3R0b20nKTtcclxuXHRcdFx0dGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdvdmVyZmxvdycpO1xyXG5cdFx0XHR0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RyYW5zaXRpb24tZHVyYXRpb24nKTtcclxuXHRcdFx0dGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2l0aW9uLXByb3BlcnR5Jyk7XHJcblx0XHRcdHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdfc2xpZGUnKTtcclxuXHRcdH0sIGR1cmF0aW9uKTtcclxuXHR9XHJcbn1cclxubGV0IF9zbGlkZURvd24gPSAodGFyZ2V0LCBkdXJhdGlvbiA9IDUwMCkgPT4ge1xyXG5cdGlmICghdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnX3NsaWRlJykpIHtcclxuXHRcdHRhcmdldC5jbGFzc0xpc3QuYWRkKCdfc2xpZGUnKTtcclxuXHRcdGlmICh0YXJnZXQuaGlkZGVuKSB7XHJcblx0XHRcdHRhcmdldC5oaWRkZW4gPSBmYWxzZTtcclxuXHRcdH1cclxuXHRcdGxldCBoZWlnaHQgPSB0YXJnZXQub2Zmc2V0SGVpZ2h0O1xyXG5cdFx0dGFyZ2V0LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XHJcblx0XHR0YXJnZXQuc3R5bGUuaGVpZ2h0ID0gMDtcclxuXHRcdHRhcmdldC5zdHlsZS5wYWRkaW5nVG9wID0gMDtcclxuXHRcdHRhcmdldC5zdHlsZS5wYWRkaW5nQm90dG9tID0gMDtcclxuXHRcdHRhcmdldC5zdHlsZS5tYXJnaW5Ub3AgPSAwO1xyXG5cdFx0dGFyZ2V0LnN0eWxlLm1hcmdpbkJvdHRvbSA9IDA7XHJcblx0XHR0YXJnZXQub2Zmc2V0SGVpZ2h0O1xyXG5cdFx0dGFyZ2V0LnN0eWxlLnRyYW5zaXRpb25Qcm9wZXJ0eSA9IFwiaGVpZ2h0LCBtYXJnaW4sIHBhZGRpbmdcIjtcclxuXHRcdHRhcmdldC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBkdXJhdGlvbiArICdtcyc7XHJcblx0XHR0YXJnZXQuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgJ3B4JztcclxuXHRcdHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgncGFkZGluZy10b3AnKTtcclxuXHRcdHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgncGFkZGluZy1ib3R0b20nKTtcclxuXHRcdHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnbWFyZ2luLXRvcCcpO1xyXG5cdFx0dGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdtYXJnaW4tYm90dG9tJyk7XHJcblx0XHR3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnaGVpZ2h0Jyk7XHJcblx0XHRcdHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnb3ZlcmZsb3cnKTtcclxuXHRcdFx0dGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2l0aW9uLWR1cmF0aW9uJyk7XHJcblx0XHRcdHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNpdGlvbi1wcm9wZXJ0eScpO1xyXG5cdFx0XHR0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnX3NsaWRlJyk7XHJcblx0XHR9LCBkdXJhdGlvbik7XHJcblx0fVxyXG59XHJcbmxldCBfc2xpZGVUb2dnbGUgPSAodGFyZ2V0LCBkdXJhdGlvbiA9IDUwMCkgPT4ge1xyXG5cdGlmICh0YXJnZXQuaGlkZGVuKSB7XHJcblx0XHRyZXR1cm4gX3NsaWRlRG93bih0YXJnZXQsIGR1cmF0aW9uKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0cmV0dXJuIF9zbGlkZVVwKHRhcmdldCwgZHVyYXRpb24pO1xyXG5cdH1cclxufVxyXG5cclxuY29uc3QgbWVudUxpbkljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudV9fbGluay1pY29uJyk7XHJcblxyXG5tZW51TGluSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcblx0bGV0IHQgPSBlLnRhcmdldDtcclxuXHRlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pXHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4uL3B1Zy9zdGF0aWMvaGVhZGVyL2J1cmdlci9idXJnZXInXHJcblxyXG5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XHJcblx0Y29uc3Qgd2luZG93SW5uZXJXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoIC0gMTY3O1xyXG5cdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1wb3NpdGlvbicsIHdpbmRvd0lubmVyV2lkdGggKyAncHgnKVxyXG59KVxyXG5cclxuaW1wb3J0ICcuLi9wdWcvaW5jbHVkZXMvcG9wdXAvbW9kYWwnXHJcbiJdLCJuYW1lcyI6WyJ1bmxvY2siLCJib2R5X2xvY2siLCJkZWxheSIsImJvZHkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImJvZHlfbG9ja19yZW1vdmUiLCJib2R5X2xvY2tfYWRkIiwibG9ja19wYWRkaW5nIiwicXVlcnlTZWxlY3RvckFsbCIsInNldFRpbWVvdXQiLCJpbmRleCIsImxlbmd0aCIsImVsIiwic3R5bGUiLCJwYWRkaW5nUmlnaHQiLCJyZW1vdmUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwib2Zmc2V0V2lkdGgiLCJhZGQiLCJib2R5TG9ja1N0YXR1cyIsImJvZHlMb2NrVG9nZ2xlIiwiYXJndW1lbnRzIiwidW5kZWZpbmVkIiwiZG9jdW1lbnRFbGVtZW50IiwiYm9keVVubG9jayIsImJvZHlMb2NrIiwicG9wdXBfbGluayIsInBvcHVwcyIsIl9sb29wIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJpdGVtIiwiZ2V0QXR0cmlidXRlIiwicmVwbGFjZSIsInZpZGVvIiwicG9wdXBfb3BlbiIsInByZXZlbnREZWZhdWx0IiwicG9wdXAiLCJ0YXJnZXQiLCJjbG9zZXN0IiwicG9wdXBfY2xvc2UiLCJhY3RpdmVQb3B1cCIsImN1cmVudF9wb3B1cCIsInBvcHVwX3ZpZGVvIiwiaW5uZXJIVE1MIiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsImxvY2F0aW9uIiwiaHJlZiIsInNwbGl0IiwicG9wdXBfY2xvc2VfaWNvbiIsIl9sb29wMiIsImNvZGUiLCJpY29uTWVudSIsIm1lbnVCb2R5IiwidG9nZ2xlIiwibWVudUxpbmtzIiwib25NZW51TGlua0NsaWNrIiwibWVudUxpbmsiLCJkYXRhc2V0IiwibGluayIsImxpbmtCbG9jayIsImxpbmtCbG9ja1ZhbHVlIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwicGFnZVlPZmZzZXQiLCJvZmZzZXRIZWlnaHQiLCJzY3JvbGxUbyIsImJlaGF2aW9yIiwiZm9yRWFjaCIsInNwb2lsZXJzQXJyYXkiLCJpbml0U3BvaWxlcnMiLCJtYXRjaE1lZGlhIiwic3BvaWxlcnNCbG9jayIsIm1hdGNoZXMiLCJpbml0U3BvaWxlckJvZHkiLCJzZXRTcG9pbGVyQWN0aW9uIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImhpZGVTcG9pbGVyQm9keSIsInNwb2lsZXJUaXRsZXMiLCJzcG9pbGVyVGl0bGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJoaWRkZW4iLCJzZXRBdHRyaWJ1dGUiLCJoYXNBdHRyaWJ1dGUiLCJvbmVTcG9pbGVyIiwiaGlkZVNwb2lsZXJzQm9keSIsIl9zbGlkZVRvZ2dsZSIsInNwb2lsZXJBY3RpdmVUaXRsZSIsIl9zbGlkZVVwIiwic3BvaWxlcnNSZWd1bGFyIiwiQXJyYXkiLCJmcm9tIiwiZmlsdGVyIiwic2VsZiIsInNwb2lsZXJzIiwic3BvaWxlcnNNZWRpYSIsImJyZWFrcG9pbnRzQXJyYXkiLCJwYXJhbXMiLCJicmVha3BvaW50IiwicGFyYW1zQXJyYXkiLCJ2YWx1ZSIsInR5cGUiLCJ0cmltIiwicHVzaCIsIm1lZGlhUXVlcmllcyIsIm1hcCIsImluZGV4T2YiLCJtZWRpYUJyZWFrcG9pbnQiLCJtZWRpYVR5cGUiLCJhZGRMaXN0ZW5lciIsImR1cmF0aW9uIiwidHJhbnNpdGlvblByb3BlcnR5IiwidHJhbnNpdGlvbkR1cmF0aW9uIiwiaGVpZ2h0Iiwib3ZlcmZsb3ciLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsInJlbW92ZVByb3BlcnR5IiwiX3NsaWRlRG93biIsIm1lbnVMaW5JY29uIiwidCIsIndpbmRvd0lubmVyV2lkdGgiLCJzZXRQcm9wZXJ0eSJdLCJzb3VyY2VSb290IjoiIn0=