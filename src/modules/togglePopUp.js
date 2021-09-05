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
          if (op !== 29) {
            requestAnimationFrame(startAnimation);
          }
          op++;
          popUpContent.style.opacity = `${op / 30}`;
        }
        startAnimation();
      }
    });
  });

  popUp.addEventListener('click', (event) => {
    let target = event.target;
    if (target.classList.contains('popup-close')) {
      popUp.style.display = 'none';
      popUpContent.style.opacity = '0';
    } else {
      target = target.closest('.popup-content');
      if (!target) {
        popUp.style.display = 'none';
        popUpContent.style.opacity = '0';
      }
    }
  });
};

export default togglePopUp;
