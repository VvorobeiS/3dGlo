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

export default countTimer;
