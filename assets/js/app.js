/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(2);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// MENU
var navToggle = document.getElementById('nav-toggle');
var headerMenu = document.getElementById('header__menu');
var wrapper = document.querySelector('.wrapper');
var body = document.querySelector('body');
var lockPadding = document.querySelectorAll(".lock-padding");
var unlock = true;
var timeout = 450;

function openMenu() {
  if (unlock) {
    navToggle.classList.toggle('active');
    headerMenu.classList.toggle('active');
    wrapper.classList.toggle('active');

    if (headerMenu.classList.contains('active')) {
      bodyLock();
    } else {
      bodyUnLock();
    }
  }
}

function closeMenu() {
  var doUnlock = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  if (unlock) {
    navToggle.classList.remove('active');
    headerMenu.classList.remove('active');
    wrapper.classList.remove('active');

    if (doUnlock) {
      bodyUnLock();
    }
  }
}

if (navToggle) {
  navToggle.addEventListener('click', function (e) {
    openMenu();
  });
}

document.addEventListener('click', function (e) {
  if (!e.target.matches('.nav-toggle, .nav-toggle *, .header__menu, .header__menu *')) {
    closeMenu();
  }
});

function bodyLock() {
  var lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

  if (lockPadding.length > 0) {
    for (var index = 0; index < lockPadding.length; index++) {
      var el = lockPadding[index];
      el.style.paddingRight = lockPaddingValue;
    }
  }

  body.style.paddingRight = lockPaddingValue;
  body.classList.add('lock');
  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}

function bodyUnLock() {
  setTimeout(function () {
    if (lockPadding.length > 0) {
      for (var index = 0; index < lockPadding.length; index++) {
        var el = lockPadding[index];
        el.style.paddingRight = '0px';
      }
    }

    body.style.paddingRight = '0px';
    body.classList.remove('lock');
  }, timeout);
  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
} //Fixed Header


var headerStyle = window.getComputedStyle(document.getElementById('header'));
var headerAbsoluteTop = parseInt(headerStyle.getPropertyValue('top'));
var header = document.getElementById('header');
var headerHeight = document.getElementById('header').offsetHeight;
var scrollOffset = window.pageYOffset || document.documentElement.scrollTop;
document.addEventListener('scroll', function (e) {
  scrollOffset = window.pageYOffset || document.documentElement.scrollTop;
  checkScroll(scrollOffset);
});

function checkScroll(scrollOffset) {
  if (scrollOffset > headerHeight + headerAbsoluteTop) {
    header.classList.add('fixed');
  } else {
    header.classList.remove('fixed');
  }
}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

//============================Sponsors Swiper Slider===============================
//==========================[import & configure modules]===================================
// // import Swiper JS
// import Swiper from 'swiper';
// // core version + navigation, pagination modules:
// import SwiperCore, { Navigation, Pagination } from 'swiper/core';
// // configure Swiper to use modules
// SwiperCore.use([Navigation, Pagination]);
//=========================[import & configure modules]=====================================
var testimonialsSwiper = new Swiper('.testimonials__container', {
  // Optional parameters
  grabCursor: true,
  slidesPerView: 1,
  spaceBetween: 50,
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    992: {
      slidesPerView: 2.5
    }
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  // Pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  on: {
    init: function init() {
      checkArrow();
    },
    resize: function resize() {
      checkArrow();
    }
  }
});

function checkArrow() {
  var swiperPrev = document.querySelector('.swiper-button-prev');
  var swiperNext = document.querySelector('.swiper-button-next');

  if (window.innerWidth < 768) {
    swiperPrev.style.visibility = 'hidden';
    swiperNext.style.visibility = 'hidden';
  } else {
    swiperPrev.style.visibility = 'visible';
    swiperNext.style.visibility = 'visible';
  }
}

/***/ })
/******/ ]);