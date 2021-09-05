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

export default sendForm;
