'use strict';

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopUp';
import tabs from './modules/tabs';
import slider from './modules/slider';
import toggleImgSrc from './modules/toggleImgSrc';
import validationInputs from './modules/validationInputs';
import calculator from './modules/calculator';
import sendForm from './modules/sendForm';

// Таймер
countTimer('30 september 2021');
// Меню
toggleMenu();
// Модальное окно
togglePopUp();
// Табы
tabs();
// Слайдер
slider();
// Меняем изображение по наведению
toggleImgSrc();
// Валидация инпутов
validationInputs();
// Калькулятор
calculator(100);
// send-ajax-form
sendForm();
