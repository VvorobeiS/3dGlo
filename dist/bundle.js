/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_countTimer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/countTimer */ \"./src/modules/countTimer.js\");\n/* harmony import */ var _modules_toggleMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/toggleMenu */ \"./src/modules/toggleMenu.js\");\n/* harmony import */ var _modules_togglePopUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/togglePopUp */ \"./src/modules/togglePopUp.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tabs */ \"./src/modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_toggleImgSrc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/toggleImgSrc */ \"./src/modules/toggleImgSrc.js\");\n/* harmony import */ var _modules_validationInputs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/validationInputs */ \"./src/modules/validationInputs.js\");\n/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/calculator */ \"./src/modules/calculator.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/sendForm */ \"./src/modules/sendForm.js\");\n\n\n\n\n\n\n\n\n\n\n // Таймер\n\n(0,_modules_countTimer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('30 september 2021'); // Меню\n\n(0,_modules_toggleMenu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(); // Модальное окно\n\n(0,_modules_togglePopUp__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(); // Табы\n\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(); // Слайдер\n\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(); // Меняем изображение по наведению\n\n(0,_modules_toggleImgSrc__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(); // Валидация инпутов\n\n(0,_modules_validationInputs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(); // Калькулятор\n\n(0,_modules_calculator__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(100); // send-ajax-form\n\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n\n//# sourceURL=webpack://3dGlo/./src/index.js?");

/***/ }),

/***/ "./src/modules/calculator.js":
/*!***********************************!*\
  !*** ./src/modules/calculator.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar calculator = function calculator() {\n  var price = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;\n  var calcBlock = document.querySelector('.calc-block'),\n      calcType = document.querySelector('.calc-type'),\n      calcSquare = document.querySelector('.calc-square'),\n      calcDay = document.querySelector('.calc-day'),\n      calcCount = document.querySelector('.calc-count'),\n      totalValue = document.getElementById('total');\n\n  var countSum = function countSum() {\n    var total = 0,\n        countValue = 1,\n        dayValue = 1;\n    var typeValue = calcType.options[calcType.selectedIndex].value;\n    var squareValue = +calcSquare.value;\n\n    if (calcCount.value > 1) {\n      countValue += (calcCount.value - 1) / 10;\n    }\n\n    if (calcDay.value && calcDay.value < 5) {\n      dayValue *= 2;\n    } else if (calcDay.value && calcDay.value < 10) {\n      dayValue *= 1.5;\n    }\n\n    if (typeValue && squareValue) {\n      total = price * typeValue * squareValue * countValue * dayValue;\n    }\n\n    totalValue.textContent = Math.round(total);\n  };\n\n  calcBlock.addEventListener('change', function (event) {\n    var target = event.target;\n\n    if (target.matches('select') || target.matches('input')) {\n      countSum();\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculator);\n\n//# sourceURL=webpack://3dGlo/./src/modules/calculator.js?");

/***/ }),

/***/ "./src/modules/countTimer.js":
/*!***********************************!*\
  !*** ./src/modules/countTimer.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction countTimer(deadline) {\n  var timerHours = document.querySelector('#timer-hours');\n  var timerMinutes = document.querySelector('#timer-minutes');\n  var timerSeconds = document.querySelector('#timer-seconds');\n\n  function getTimeRemaining() {\n    var dabodyop = new Date(deadline).getTime();\n    var dateNow = new Date().getTime();\n    var timeRemaining = (dabodyop - dateNow) / 1000;\n    var seconds = Math.floor(timeRemaining % 60);\n    var minutes = Math.floor(timeRemaining / 60 % 60);\n    var hours = Math.floor(timeRemaining / 60 / 60);\n    return {\n      timeRemaining: timeRemaining,\n      hours: hours,\n      minutes: minutes,\n      seconds: seconds\n    };\n  }\n\n  function updateClock() {\n    var timer = getTimeRemaining();\n\n    if (timer.hours < 10) {\n      timerHours.textContent = \"0\".concat(timer.hours);\n    } else {\n      timerHours.textContent = timer.hours;\n    }\n\n    if (timer.minutes < 10) {\n      timerMinutes.textContent = \"0\".concat(timer.minutes);\n    } else {\n      timerMinutes.textContent = timer.minutes;\n    }\n\n    if (timer.seconds < 10) {\n      timerSeconds.textContent = \"0\".concat(timer.seconds);\n    } else {\n      timerSeconds.textContent = timer.seconds;\n    }\n  }\n\n  updateClock();\n  var timerInterval = setInterval(function () {\n    updateClock();\n  }, 1000);\n\n  function stopTimer() {\n    var timer = getTimeRemaining();\n\n    if (timer.timeRemaining < 0) {\n      clearInterval(timerInterval);\n      timerHours.textContent = '00';\n      timerMinutes.textContent = '00';\n      timerSeconds.textContent = '00';\n    }\n  }\n\n  stopTimer();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countTimer);\n\n//# sourceURL=webpack://3dGlo/./src/modules/countTimer.js?");

/***/ }),

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar sendForm = function sendForm() {\n  var form = document.querySelectorAll('form');\n  var loadIconDiv = document.createElement('div');\n  loadIconDiv.style.color = '#fff';\n  var successMessage = 'Спасибо! Скоро рассмотрим вашу заявку!',\n      errorMessage = 'Ой что-то пошло не так!';\n\n  var clearInput = function clearInput(form) {\n    var inputs = form.querySelectorAll('input');\n    inputs.forEach(function (input) {\n      input.value = '';\n      input.classList.remove('success');\n    });\n  };\n\n  var loadReqText = function loadReqText(data) {\n    loadIconDiv.textContent = data;\n  };\n\n  var postData = function postData(body) {\n    return fetch('./server.php', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(body)\n    });\n  };\n\n  form.forEach(function (el) {\n    el.addEventListener('submit', function (e) {\n      e.preventDefault();\n      setTimeout(function () {\n        var subBtn = el.querySelector('.form-btn');\n        console.log(subBtn);\n\n        if (subBtn.classList.contains('cancel')) {\n          return;\n        }\n\n        if (loadIconDiv) {\n          loadIconDiv.textContent = '';\n        }\n\n        loadIconDiv.classList.remove('loadIconText');\n        loadIconDiv.classList.add('sk-fading-circle');\n\n        for (var i = 1; i < 13; i++) {\n          var innerDiv = document.createElement('div');\n          innerDiv.classList.add(\"sk-circle\");\n          innerDiv.classList.add(\"sk-circle-\".concat(i));\n          loadIconDiv.insertAdjacentElement('beforeend', innerDiv);\n        }\n\n        el.appendChild(loadIconDiv);\n        var formData = new FormData(el);\n        var body = {};\n        formData.forEach(function (val, key) {\n          body[key] = val;\n        });\n        postData(body).then(function (response) {\n          if (response.status !== 200) {\n            console.log('!');\n            throw new Error('status network not 200');\n          }\n\n          loadIconDiv.classList.remove('sk-fading-circle');\n          loadIconDiv.classList.add('loadIconText');\n          loadReqText(successMessage);\n          clearInput(el);\n          setTimeout(function () {\n            loadIconDiv.textContent = '';\n          }, 3000);\n        })[\"catch\"](function (err) {\n          console.error(err);\n          loadReqText(errorMessage);\n        });\n      }, 500);\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://3dGlo/./src/modules/sendForm.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar slider = function slider() {\n  var slide = document.querySelectorAll('.portfolio-item'),\n      dots = document.querySelector('.portfolio-dots'),\n      slider = document.querySelector('.portfolio-content');\n  slide.forEach(function () {\n    var li = document.createElement('li');\n    li.classList.add('dot');\n    dots.append(li);\n  });\n  var dot = document.querySelectorAll('.dot');\n  dot[0].classList.add('dot-active');\n  var currentSlide = 0,\n      interval;\n\n  var prevSlide = function prevSlide(elem, index, strClass) {\n    elem[index].classList.remove(strClass);\n  };\n\n  var nextSlide = function nextSlide(elem, index, strClass) {\n    elem[index].classList.add(strClass);\n  };\n\n  var autoPlaySlide = function autoPlaySlide() {\n    prevSlide(slide, currentSlide, 'portfolio-item-active');\n    prevSlide(dot, currentSlide, 'dot-active');\n    currentSlide++;\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    nextSlide(slide, currentSlide, 'portfolio-item-active');\n    nextSlide(dot, currentSlide, 'dot-active');\n  };\n\n  var startSlide = function startSlide() {\n    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3000;\n    interval = setInterval(autoPlaySlide, time);\n  };\n\n  var stopSlide = function stopSlide() {\n    clearInterval(interval);\n  };\n\n  slider.addEventListener('click', function (event) {\n    event.preventDefault();\n    var target = event.target;\n    if (!target.matches('.portfolio-btn, .dot')) return;\n    prevSlide(slide, currentSlide, 'portfolio-item-active');\n    prevSlide(dot, currentSlide, 'dot-active');\n\n    if (target.matches('#arrow-right')) {\n      currentSlide++;\n    } else if (target.matches('#arrow-left')) {\n      currentSlide--;\n    } else if (target.matches('.dot')) {\n      dot.forEach(function (elem, index) {\n        if (elem === target) {\n          currentSlide = index;\n        }\n      });\n    }\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    if (currentSlide < 0) {\n      currentSlide = slide.length - 1;\n    }\n\n    nextSlide(slide, currentSlide, 'portfolio-item-active');\n    nextSlide(dot, currentSlide, 'dot-active');\n  });\n  slider.addEventListener('mouseover', function (event) {\n    if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {\n      stopSlide();\n    }\n  });\n  slider.addEventListener('mouseout', function (event) {\n    if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {\n      startSlide();\n    }\n  });\n  startSlide(1500);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack://3dGlo/./src/modules/slider.js?");

/***/ }),

/***/ "./src/modules/tabs.js":
/*!*****************************!*\
  !*** ./src/modules/tabs.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar tabs = function tabs() {\n  var tabHeader = document.querySelector('.service-header'),\n      tab = tabHeader.querySelectorAll('.service-header-tab'),\n      tabContent = document.querySelectorAll('.service-tab');\n\n  var toggleTabContent = function toggleTabContent(index) {\n    for (var i = 0; i < tabContent.length; i++) {\n      if (index === i) {\n        tab[i].classList.add('active');\n        tabContent[i].classList.remove('d-none');\n      } else {\n        tab[i].classList.remove('active');\n        tabContent[i].classList.add('d-none');\n      }\n    }\n  };\n\n  tabHeader.addEventListener('click', function (event) {\n    var target = event.target;\n    target = target.closest('.service-header-tab');\n\n    if (target) {\n      tab.forEach(function (item, i) {\n        if (item === target) {\n          toggleTabContent(i);\n        }\n      });\n      return;\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack://3dGlo/./src/modules/tabs.js?");

/***/ }),

/***/ "./src/modules/toggleImgSrc.js":
/*!*************************************!*\
  !*** ./src/modules/toggleImgSrc.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar toggleImgSrc = function toggleImgSrc() {\n  var commandPhoto = document.querySelectorAll('.command__photo');\n  commandPhoto.forEach(function (item) {\n    item.addEventListener('mouseenter', function (e) {\n      var _ref = [e.target.dataset.img, e.target.src];\n      e.target.src = _ref[0];\n      e.target.dataset.img = _ref[1];\n    });\n    item.addEventListener('mouseleave', function (e) {\n      var _ref2 = [e.target.src, e.target.dataset.img];\n      e.target.dataset.img = _ref2[0];\n      e.target.src = _ref2[1];\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleImgSrc);\n\n//# sourceURL=webpack://3dGlo/./src/modules/toggleImgSrc.js?");

/***/ }),

/***/ "./src/modules/toggleMenu.js":
/*!***********************************!*\
  !*** ./src/modules/toggleMenu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar toggleMenu = function toggleMenu() {\n  var menu = document.querySelector('menu');\n\n  var handlerMenu = function handlerMenu() {\n    menu.classList.toggle('active-menu');\n  };\n\n  document.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.closest('.menu') || target.closest('.close-btn')) {\n      handlerMenu();\n    } else if (!target.closest('menu') && menu.classList.contains('active-menu')) {\n      handlerMenu();\n    } else if (target.closest('ul>li>a')) {\n      handlerMenu();\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleMenu);\n\n//# sourceURL=webpack://3dGlo/./src/modules/toggleMenu.js?");

/***/ }),

/***/ "./src/modules/togglePopUp.js":
/*!************************************!*\
  !*** ./src/modules/togglePopUp.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar togglePopUp = function togglePopUp() {\n  var popUp = document.querySelector('.popup'),\n      popUpContent = document.querySelector('.popup-content'),\n      btnPopUp = document.querySelectorAll('.popup-btn');\n  var widthWindow = window.innerWidth;\n  window.addEventListener('resize', function () {\n    widthWindow = window.innerWidth;\n  });\n  btnPopUp.forEach(function (elem) {\n    elem.addEventListener('click', function () {\n      popUp.style.display = 'block';\n      var op = 0;\n\n      if (widthWindow > 768) {\n        // eslint-disable-next-line no-inner-declarations\n        var startAnimation = function startAnimation() {\n          if (op !== 9) {\n            requestAnimationFrame(startAnimation);\n          }\n\n          op++;\n          popUpContent.style.opacity = \"\".concat(op / 10);\n        };\n\n        startAnimation();\n      }\n    });\n  });\n  popUp.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.classList.contains('popup-close')) {\n      popUp.style.display = 'none';\n    } else {\n      target = target.closest('.popup-content');\n\n      if (!target) {\n        popUp.style.display = 'none';\n      }\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (togglePopUp);\n\n//# sourceURL=webpack://3dGlo/./src/modules/togglePopUp.js?");

/***/ }),

/***/ "./src/modules/validationInputs.js":
/*!*****************************************!*\
  !*** ./src/modules/validationInputs.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable */\nvar validationInputs = function validationInputs() {\n  var inputsCalcItems = document.querySelectorAll('.calc-item');\n  var inputsUserName = document.querySelectorAll('[name=\"user_name\"]');\n  var inputsUserMail = document.querySelectorAll('[name=\"user_email\"]');\n  var inputsUserPhone = document.querySelectorAll('[name=\"user_phone\"]');\n  var inputMessage = document.querySelector('.mess');\n  inputsCalcItems.forEach(function (item, index) {\n    if (index !== 0) {\n      item.addEventListener('input', function () {\n        item.value = item.value.replace(/\\D/, '');\n      });\n    }\n  });\n  inputsUserName.forEach(function (item) {\n    item.addEventListener('input', function () {\n      item.value = item.value.replace(/[^А-ЯЁ а-яё-]/, '');\n      item.value = item.value.replace(/\\ +/g, ' ');\n      item.value = item.value.replace(/\\-+/g, '-');\n    });\n    item.addEventListener('blur', function () {\n      item.value = item.value.replace(/[\\s\\-]+$/g, '');\n      item.value = item.value.replace(/^[\\s\\-]+/g, '');\n      item.value = item.value.replace(/^[\\s\\ -]+/g, '');\n      var string = item.value.split(/[\\s,]/);\n      var newString = [];\n      string.forEach(function (elem) {\n        elem = elem.charAt(0).toUpperCase() + elem.slice(1);\n        newString.push(elem);\n      });\n      console.log(newString);\n      item.value = newString.join(' ');\n    });\n  });\n  inputsUserMail.forEach(function (item) {\n    item.setAttribute(\"pattern\", \"([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})\");\n    item.addEventListener('input', function () {\n      item.value = item.value.replace(/[^a-zA-Z\\@\\_\\.\\~\\!\\*\\']/g, '');\n      item.value = item.value.replace(/\\@+/g, '@');\n      item.value = item.value.replace(/\\_+/g, '_');\n      item.value = item.value.replace(/\\.+/g, '.');\n      item.value = item.value.replace(/\\~+/g, '~');\n      item.value = item.value.replace(/\\!+/g, '!');\n      item.value = item.value.replace(/\\*+/g, '*');\n      item.value = item.value.replace(/\\'+/g, \"'\");\n      item.value = item.value.replace(/\\-+/g, '-');\n      item.value = item.value.replace(/[ ]+/g, '');\n      item.value = item.value.replace(/^\\_+/g, '');\n      item.value = item.value.replace(/^\\.+/g, '');\n      item.value = item.value.replace(/^\\~+/g, '');\n      item.value = item.value.replace(/^\\!+/g, '');\n      item.value = item.value.replace(/^\\@+/g, '');\n      item.value = item.value.replace(/^\\*+/g, '');\n      item.value = item.value.replace(/^\\'+/g, '');\n      item.value = item.value.replace(/^\\-+/g, '-');\n      item.value = item.value.replace(/^[ ]+/g, '');\n    });\n    item.addEventListener('blur', function () {\n      item.value = item.value.replace(/\\_+$/g, '');\n      item.value = item.value.replace(/\\.+$/g, '');\n      item.value = item.value.replace(/\\~+$/g, '');\n      item.value = item.value.replace(/\\!+$/g, '');\n      item.value = item.value.replace(/\\@+$/g, '');\n      item.value = item.value.replace(/\\*+$/g, '');\n      item.value = item.value.replace(/\\'+$/g, '');\n      item.value = item.value.replace(/\\-+$/g, '');\n    });\n  });\n  inputMessage.addEventListener('input', function () {\n    inputMessage.value = inputMessage.value.replace(/[^A-Za-z -]/, '');\n    inputMessage.value = inputMessage.value.replace(/\\ +/g, ' ');\n    inputMessage.value = inputMessage.value.replace(/\\-+/g, '-');\n  });\n  inputMessage.addEventListener('blur', function () {\n    inputMessage.value = inputMessage.value.replace(/[\\s\\-]+$/g, '');\n    inputMessage.value = inputMessage.value.replace(/^[\\s\\-]+/g, '');\n    inputMessage.value = inputMessage.value.replace(/^[\\s\\ -]+/g, '');\n  });\n  inputsUserPhone.forEach(function (item) {\n    item.setAttribute(\"pattern\", \"^(\\\\8)\\\\d{10}\");\n    item.setAttribute(\"maxlength\", \"11\");\n    item.addEventListener('input', function () {\n      item.value = item.value.replace(/[^0-9()-]/, '');\n      item.value = item.value.replace(/\\-+/g, '-');\n      item.value = item.value.replace(/\\(+/g, '(');\n      item.value = item.value.replace(/\\)+/g, ')');\n      item.value = item.value.replace(/^\\-+/g, '');\n      item.value = item.value.replace(/^\\(+/g, '');\n      item.value = item.value.replace(/^\\)+/g, '');\n    });\n    item.addEventListener('blur', function () {\n      item.value = item.value.replace(/\\-+$/g, '');\n      item.value = item.value.replace(/\\(+$/g, '');\n      item.value = item.value.replace(/\\)+$/g, '');\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validationInputs);\n\n//# sourceURL=webpack://3dGlo/./src/modules/validationInputs.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;