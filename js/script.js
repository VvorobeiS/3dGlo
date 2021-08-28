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
      } else if (target.closest('ul>li')) {
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
});
