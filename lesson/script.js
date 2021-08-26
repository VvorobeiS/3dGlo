const greetings = document.querySelector('#greetings');
const day = document.querySelector('#day');
const time = document.querySelector('#time');
const newYear = document.querySelector('#new-year');

function start() {
  const date = new Date();
  if (date.getHours() >= 6) {
    greetings.textContent = `Доброе утро`;
  }
  if (date.getHours() >= 12) {
    greetings.textContent = `Добрый день`;
  }
  if (date.getHours() >= 18) {
    greetings.textContent = `Добрый вечер`;
  }
  if (date.getHours() >= 23) {
    greetings.textContent = `Доброй ночи`;
  }
  if (date.getDay() === 0) {
    day.textContent = `Cегодня: Воскресение`;
  }
  if (date.getDay() === 1) {
    day.textContent = `Cегодня: Понедельник`;
  }
  if (date.getDay() === 2) {
    day.textContent = `Cегодня: Вторник`;
  }
  if (date.getDay() === 3) {
    day.textContent = `Cегодня: Среда`;
  }
  if (date.getDay() === 4) {
    day.textContent = `Cегодня: Четверг`;
  }
  if (date.getDay() === 5) {
    day.textContent = `Cегодня: Пятница`;
  }
  if (date.getDay() === 6) {
    day.textContent = `Cегодня: Суббота`;
  }
  time.textContent = `Текущее время: ${date.toLocaleTimeString('en')}`;
  newYear.textContent = `До нового года осталось ${Math.floor((new Date(2021, 11, 31) - new Date()) / 86400000)} дней`;
}

start();
