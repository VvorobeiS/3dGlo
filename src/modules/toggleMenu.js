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

export default toggleMenu;
