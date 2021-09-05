/* eslint-disable */
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
      item.value = item.value.replace(/[^А-ЯЁ а-яё-]/g, '');
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
    item.setAttribute(`pattern`, `([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})`);
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
    inputMessage.value = inputMessage.value.replace(/[^А-Яа-яЁё -]/, '');
    inputMessage.value = inputMessage.value.replace(/\ +/g, ' ');
    inputMessage.value = inputMessage.value.replace(/\-+/g, '-');
  });
  inputMessage.addEventListener('blur', () => {
    inputMessage.value = inputMessage.value.replace(/[^А-Яа-яЁё -]/g, '');
    inputMessage.value = inputMessage.value.replace(/[\s\-]+$/g, '');
    inputMessage.value = inputMessage.value.replace(/^[\s\-]+/g, '');
    inputMessage.value = inputMessage.value.replace(/^[\s\ -]+/g, '');
  });

  inputsUserPhone.forEach((item) => {
    item.setAttribute(`pattern`, `^8\\d{10}`);
    item.setAttribute(`maxlength`, `11`);
    item.addEventListener('input', () => {
      item.value = item.value.replace(/[^0-9]/, '');
      item.value = item.value.replace(/\-+/g, '');
      item.value = item.value.replace(/\(+/g, '');
      item.value = item.value.replace(/\)+/g, '');
      item.value = item.value.replace(/^\-+/g, '');
      item.value = item.value.replace(/^\(+/g, '');
      item.value = item.value.replace(/^\)+/g, '');
    });
    item.addEventListener('blur', () => {
      item.value = item.value.replace(/[^0-9]/g, '');
      item.value = item.value.replace(/\-+$/g, '');
      item.value = item.value.replace(/\(+$/g, '');
      item.value = item.value.replace(/\)+$/g, '');
    });
  });
};

export default validationInputs;
