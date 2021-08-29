window.addEventListener('DOMContentLoaded', () => {
  // Таймер с помощью setInterval
  function countTimer(deadline) {
    const timerHours = document.querySelector('#timer-hours');
    const timerMinutes = document.querySelector('#timer-minutes');
    const timerSeconds = document.querySelector('#timer-seconds');

    function getTimeRemaining() {
      const dateStop = new Date(deadline).getTime();
      const dateNow = new Date().getTime();
      const timeRemaining = (dateStop - dateNow) / 1000;
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
});
