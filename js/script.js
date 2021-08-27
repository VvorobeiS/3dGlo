window.addEventListener('DOMContentLoaded', () => {
  //Таймер
  // function countTimer(deadline) {
  //   const timerHours = document.querySelector('#timer-hours');
  //   const timerMinutes = document.querySelector('#timer-minutes');
  //   const timerSeconds = document.querySelector('#timer-seconds');
  //   function getTimeRemaining() {
  //     const dateStop = new Date(deadline).getTime();
  //     const dateNow = new Date().getTime();
  //     const timeRemaining = (dateStop - dateNow) / 1000;
  //     const seconds = Math.floor(timeRemaining % 60);
  //     const minutes = Math.floor((timeRemaining / 60) % 60);
  //     const hours = Math.floor(timeRemaining / 60 / 60);
  //     return {
  //       timeRemaining,
  //       hours,
  //       minutes,
  //       seconds
  //     };
  //   }
  //   function updateClock() {
  //     const timer = getTimeRemaining();
  //     timerHours.textContent = timer.hours;
  //     timerMinutes.textContent = timer.minutes;
  //     timerSeconds.textContent = timer.seconds;
  //     if (timer.timeRemaining > 0) {
  //       setTimeout(updateClock, 1000);
  //     }
  //   }
  //   updateClock();
  // }
  // countTimer('30 september 2021');

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
    const btnMenu = document.querySelector('.menu'),
      btnClose = document.querySelector('.close-btn'),
      menu = document.querySelector('menu'),
      menuItems = menu.querySelectorAll('ul>li');

    const handlerMenu = () => {
      menu.classList.toggle('active-menu');
    };

    btnMenu.addEventListener('click', handlerMenu);
    btnClose.addEventListener('click', handlerMenu);

    menuItems.forEach((elem) => {
      elem.addEventListener('click', handlerMenu);
    });
  };

  toggleMenu();

  // Модальное окно
  const togglePopUp = () => {
    const popUp = document.querySelector('.popup'),
      popUpContent = document.querySelector('.popup-content'),
      btnPopUp = document.querySelectorAll('.popup-btn'),
      btnPopUpClose = document.querySelector('.popup-close'),
      widthWindow = window.innerWidth;

    btnPopUp.forEach((elem) => {
      elem.addEventListener('click', () => {
        popUp.style.display = 'block';
        let op = 0;
        if (widthWindow > 768) {
          // eslint-disable-next-line no-inner-declarations
          function startAnimation() {
            if (op !== 10) {
              requestAnimationFrame(startAnimation);
            }
            op++;
            popUpContent.style.opacity = `${op / 10 - 0.1}`;
          }
          startAnimation();
        }
      });
    });

    btnPopUpClose.addEventListener('click', () => {
      popUp.style.display = 'none';
    });
  };

  togglePopUp();
});
