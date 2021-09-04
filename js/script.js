window.addEventListener('DOMContentLoaded', () => {
  // Таймер с помощью setInterval
  function countTimer(deadline) {
    const timerHours = document.querySelector('#timer-hours');
    const timerMinutes = document.querySelector('#timer-minutes');
    const timerSeconds = document.querySelector('#timer-seconds');

    function getTimeRemaining() {
      const dabodyop = new Date(deadline).getTime();
      const dateNow = new Date().getTime();
      const timeRemaining = (dabodyop - dateNow) / 1000;
      const seconds = Math.floor(timeRemaining % 60);
      const minutes = Math.floor((timeRemaining / 60) % 60);
      const hours = Math.floor(timeRemaining / 60 / 60);
      return {
        timeRemaining,
        hours,
        minutes,
        seconds
      };
    }

    const timerInterval = setInterval(() => {
      function updateClock() {
        const timer = getTimeRemaining();
        if (timer.hours < 10) {
          timerHours.textContent = `0${timer.hours}`;
        } else {
          timerHours.textContent = timer.hours;
        }
        if (timer.minutes < 10) {
          timerMinutes.textContent = `0${timer.minutes}`;
        } else {
          timerMinutes.textContent = timer.minutes;
        }
        if (timer.seconds < 10) {
          timerSeconds.textContent = `0${timer.seconds}`;
        } else {
          timerSeconds.textContent = timer.seconds;
        }
      }
      updateClock();
    }, 1000);

    function stopTimer() {
      const timer = getTimeRemaining();
      if (timer.timeRemaining < 0) {
        clearInterval(timerInterval);
        timerHours.textContent = '00';
        timerMinutes.textContent = '00';
        timerSeconds.textContent = '00';
      }
    }

    stopTimer();
  }
  countTimer('27 august 2021');

  // Меню
  const toggleMenu = () => {
    const menu = document.querySelector('menu');

    const handlerMenu = () => {
      menu.classList.toggle('active-menu');
    };

    document.addEventListener('click', (event) => {
      let target = event.target;
      if (target.closest('.menu') || target.closest('.close-btn')) {
        handlerMenu();
      } else if (!target.closest('menu') && menu.classList.contains('active-menu')) {
        handlerMenu();
      } else if (target.closest('ul>li>a')) {
        handlerMenu();
      }
    });
  };

  toggleMenu();

  // Модальное окно
  const togglePopUp = () => {
    const popUp = document.querySelector('.popup'),
      popUpContent = document.querySelector('.popup-content'),
      btnPopUp = document.querySelectorAll('.popup-btn');
    let widthWindow = window.innerWidth;

    window.addEventListener('resize', () => {
      widthWindow = window.innerWidth;
    });

    btnPopUp.forEach((elem) => {
      elem.addEventListener('click', () => {
        popUp.style.display = 'block';
        let op = 0;
        if (widthWindow > 768) {
          // eslint-disable-next-line no-inner-declarations
          function startAnimation() {
            if (op !== 9) {
              requestAnimationFrame(startAnimation);
            }
            op++;
            popUpContent.style.opacity = `${op / 10}`;
          }
          startAnimation();
        }
      });
    });

    popUp.addEventListener('click', (event) => {
      let target = event.target;
      if (target.classList.contains('popup-close')) {
        popUp.style.display = 'none';
      } else {
        target = target.closest('.popup-content');
        if (!target) {
          popUp.style.display = 'none';
        }
      }
    });
  };

  togglePopUp();

  // Табы
  const tabs = () => {
    const tabHeader = document.querySelector('.service-header'),
      tab = tabHeader.querySelectorAll('.service-header-tab'),
      tabContent = document.querySelectorAll('.service-tab');

    const toggleTabContent = (index) => {
      for (let i = 0; i < tabContent.length; i++) {
        if (index === i) {
          tab[i].classList.add('active');
          tabContent[i].classList.remove('d-none');
        } else {
          tab[i].classList.remove('active');
          tabContent[i].classList.add('d-none');
        }
      }
    };

    tabHeader.addEventListener('click', (event) => {
      let target = event.target;

      target = target.closest('.service-header-tab');

      if (target) {
        tab.forEach((item, i) => {
          if (item === target) {
            toggleTabContent(i);
          }
        });
        return;
      }
    });
  };

  tabs();

  // Слайдер
  const slider = () => {
    const slide = document.querySelectorAll('.portfolio-item'),
      dots = document.querySelector('.portfolio-dots'),
      slider = document.querySelector('.portfolio-content');

    slide.forEach(() => {
      const li = document.createElement('li');
      li.classList.add('dot');
      dots.append(li);
    });

    const dot = document.querySelectorAll('.dot');
    dot[0].classList.add('dot-active');

    let currentSlide = 0,
      interval;

    const prevSlide = (elem, index, strClass) => {
      elem[index].classList.remove(strClass);
    };

    const nextSlide = (elem, index, strClass) => {
      elem[index].classList.add(strClass);
    };

    const autoPlaySlide = () => {
      prevSlide(slide, currentSlide, 'portfolio-item-active');
      prevSlide(dot, currentSlide, 'dot-active');
      currentSlide++;
      if (currentSlide >= slide.length) {
        currentSlide = 0;
      }
      nextSlide(slide, currentSlide, 'portfolio-item-active');
      nextSlide(dot, currentSlide, 'dot-active');
    };

    const startSlide = (time = 3000) => {
      interval = setInterval(autoPlaySlide, time);
    };

    const stopSlide = () => {
      clearInterval(interval);
    };

    slider.addEventListener('click', (event) => {
      event.preventDefault();

      let target = event.target;

      if (!target.matches('.portfolio-btn, .dot')) return;

      prevSlide(slide, currentSlide, 'portfolio-item-active');
      prevSlide(dot, currentSlide, 'dot-active');

      if (target.matches('#arrow-right')) {
        currentSlide++;
      } else if (target.matches('#arrow-left')) {
        currentSlide--;
      } else if (target.matches('.dot')) {
        dot.forEach((elem, index) => {
          if (elem === target) {
            currentSlide = index;
          }
        });
      }

      if (currentSlide >= slide.length) {
        currentSlide = 0;
      }

      if (currentSlide < 0) {
        currentSlide = slide.length - 1;
      }

      nextSlide(slide, currentSlide, 'portfolio-item-active');
      nextSlide(dot, currentSlide, 'dot-active');
    });

    slider.addEventListener('mouseover', (event) => {
      if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
        stopSlide();
      }
    });

    slider.addEventListener('mouseout', (event) => {
      if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
        startSlide();
      }
    });

    startSlide(1500);
  };

  slider();

  // Меняем изображение по наведению
  const toggleImgSrc = () => {
    const commandPhoto = document.querySelectorAll('.command__photo');
    commandPhoto.forEach((item) => {
      item.addEventListener('mouseenter', (e) => {
        [e.target.src, e.target.dataset.img] = [e.target.dataset.img, e.target.src];
      });
      item.addEventListener('mouseleave', (e) => {
        [e.target.dataset.img, e.target.src] = [e.target.src, e.target.dataset.img];
      });
    });
  };

  toggleImgSrc();

  // Валидация инпутов
  const validationInputs = () => {
    const inputsCalcItems = document.querySelectorAll('.calc-item');
    const inputsUserName = document.querySelectorAll('[name="user_name"]');
    const inputsUserMail = document.querySelectorAll('[name="user_email"]');
    const inputsUserPhone = document.querySelectorAll('[name="user_phone"]');
    const inputMessage = document.querySelector('.mess');

    inputsCalcItems.forEach((item, index) => {
      if (index !== 0) {
        item.addEventListener('input', () => {
          item.value = item.value.replace(/\D/, '');
        });
      }
    });

    inputsUserName.forEach((item) => {
      item.addEventListener('input', () => {
        item.value = item.value.replace(/[^А-ЯЁ а-яё-]/, '');
        item.value = item.value.replace(/\ +/g, ' ');
        item.value = item.value.replace(/\-+/g, '-');
      });
      item.addEventListener('blur', () => {
        item.value = item.value.replace(/[\s\-]+$/g, '');
        item.value = item.value.replace(/^[\s\-]+/g, '');
        item.value = item.value.replace(/^[\s\ -]+/g, '');
        const string = item.value.split(/[\s,]/);
        const newString = [];
        string.forEach((elem) => {
          elem = elem.charAt(0).toUpperCase() + elem.slice(1);
          newString.push(elem);
        });
        console.log(newString);
        item.value = newString.join(' ');
      });
    });

    inputsUserMail.forEach((item) => {
      item.addEventListener('input', () => {
        item.value = item.value.replace(/[^a-zA-Z\@\_\.\~\!\*\']/g, '');
        item.value = item.value.replace(/\@+/g, '@');
        item.value = item.value.replace(/\_+/g, '_');
        item.value = item.value.replace(/\.+/g, '.');
        item.value = item.value.replace(/\~+/g, '~');
        item.value = item.value.replace(/\!+/g, '!');
        item.value = item.value.replace(/\*+/g, '*');
        item.value = item.value.replace(/\'+/g, "'");
        item.value = item.value.replace(/\-+/g, '-');
        item.value = item.value.replace(/[ ]+/g, '');
        item.value = item.value.replace(/^\_+/g, '');
        item.value = item.value.replace(/^\.+/g, '');
        item.value = item.value.replace(/^\~+/g, '');
        item.value = item.value.replace(/^\!+/g, '');
        item.value = item.value.replace(/^\@+/g, '');
        item.value = item.value.replace(/^\*+/g, '');
        item.value = item.value.replace(/^\'+/g, '');
        item.value = item.value.replace(/^\-+/g, '-');
        item.value = item.value.replace(/^[ ]+/g, '');
      });
      item.addEventListener('blur', () => {
        item.value = item.value.replace(/\_+$/g, '');
        item.value = item.value.replace(/\.+$/g, '');
        item.value = item.value.replace(/\~+$/g, '');
        item.value = item.value.replace(/\!+$/g, '');
        item.value = item.value.replace(/\@+$/g, '');
        item.value = item.value.replace(/\*+$/g, '');
        item.value = item.value.replace(/\'+$/g, '');
        item.value = item.value.replace(/\-+$/g, '');
      });
    });

    inputMessage.addEventListener('input', () => {
      inputMessage.value = inputMessage.value.replace(/[^A-Za-z -]/, '');
      inputMessage.value = inputMessage.value.replace(/\ +/g, ' ');
      inputMessage.value = inputMessage.value.replace(/\-+/g, '-');
    });
    inputMessage.addEventListener('blur', () => {
      inputMessage.value = inputMessage.value.replace(/[\s\-]+$/g, '');
      inputMessage.value = inputMessage.value.replace(/^[\s\-]+/g, '');
      inputMessage.value = inputMessage.value.replace(/^[\s\ -]+/g, '');
    });

    inputsUserPhone.forEach((item) => {
      item.addEventListener('input', () => {
        item.value = item.value.replace(/[^0-9()-]/, '');
        item.value = item.value.replace(/\-+/g, '-');
        item.value = item.value.replace(/\(+/g, '(');
        item.value = item.value.replace(/\)+/g, ')');
        item.value = item.value.replace(/^\-+/g, '');
        item.value = item.value.replace(/^\(+/g, '');
        item.value = item.value.replace(/^\)+/g, '');
      });
      item.addEventListener('blur', () => {
        item.value = item.value.replace(/\-+$/g, '');
        item.value = item.value.replace(/\(+$/g, '');
        item.value = item.value.replace(/\)+$/g, '');
      });
    });
  };

  validationInputs();

  // Калькулятор
  const calculator = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block'),
      calcType = document.querySelector('.calc-type'),
      calcSquare = document.querySelector('.calc-square'),
      calcDay = document.querySelector('.calc-day'),
      calcCount = document.querySelector('.calc-count'),
      totalValue = document.getElementById('total');

    const countSum = () => {
      let total = 0,
        countValue = 1,
        dayValue = 1;
      const typeValue = calcType.options[calcType.selectedIndex].value;
      let squareValue = +calcSquare.value;

      if (calcCount.value > 1) {
        countValue += (calcCount.value - 1) / 10;
      }

      if (calcDay.value && calcDay.value < 5) {
        dayValue *= 2;
      } else if (calcDay.value && calcDay.value < 10) {
        dayValue *= 1.5;
      }

      if (typeValue && squareValue) {
        total = price * typeValue * squareValue * countValue * dayValue;
      }

      totalValue.textContent = total;
    };

    calcBlock.addEventListener('change', (event) => {
      const target = event.target;
      if (target.matches('select') || target.matches('input')) {
        countSum();
      }
    });
  };

  calculator(100);

  // send-ajax-form
  const sendForm = () => {
    const form = document.querySelectorAll('form');
    const loadIconDiv = document.createElement('div');

    loadIconDiv.style.color = '#fff';

    const successMessage = 'Спасибо! Скоро рассмотрим вашу заявку!',
      errorMessage = 'Ой что-то пошло не так!';

    const clearInput = (form) => {
      const inputs = form.querySelectorAll('input');
      inputs.forEach((input) => {
        input.value = '';
        input.classList.remove('success');
      });
    };

    const loadReqText = (data) => {
      loadIconDiv.textContent = data;
    };

    const postData = (body) => {
      return fetch('./server.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });
    };

    form.forEach((el) => {
      el.addEventListener('submit', (e) => {
        e.preventDefault();

        setTimeout(() => {
          const subBtn = el.querySelector('.form-btn');
          console.log(subBtn);
          if (subBtn.classList.contains('cancel')) {
            return;
          }

          if (loadIconDiv) {
            loadIconDiv.textContent = '';
          }

          loadIconDiv.classList.remove('loadIconText');
          loadIconDiv.classList.add('sk-fading-circle');

          for (let i = 1; i < 13; i++) {
            const innerDiv = document.createElement('div');
            innerDiv.classList.add(`sk-circle`);
            innerDiv.classList.add(`sk-circle-${i}`);
            loadIconDiv.insertAdjacentElement('beforeend', innerDiv);
          }
          el.appendChild(loadIconDiv);

          const formData = new FormData(el);
          let body = {};

          formData.forEach((val, key) => {
            body[key] = val;
          });

          postData(body)
            .then((response) => {
              if (response.status !== 200) {
                console.log('!');
                throw new Error('status network not 200');
              }
              loadIconDiv.classList.remove('sk-fading-circle');
              loadIconDiv.classList.add('loadIconText');
              loadReqText(successMessage);
              clearInput(el);
              setTimeout(() => {
                loadIconDiv.textContent = '';
              }, 3000);
            })
            .catch((err) => {
              console.error(err);
              loadReqText(errorMessage);
            });
        }, 500);
      });
    });
  };

  sendForm();
});
