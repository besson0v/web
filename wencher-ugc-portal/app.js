const roleButtons = Array.from(document.querySelectorAll('.role-switch'));
const modeButtons = Array.from(document.querySelectorAll('.mode-toggle'));
const authLead = document.getElementById('auth-lead');
const submitButton = document.getElementById('submit-button');
const signupOnly = Array.from(document.querySelectorAll('.signup-only'));

const copyMap = {
  creator: {
    signup: {
      lead: 'Создайте профиль креатора и начните откликаться на подходящие заказы.',
      button: 'Создать аккаунт креатора'
    },
    signin: {
      lead: 'Войдите в кабинет креатора, чтобы загрузить видео, проверить баланс и отправить заявку на вывод.',
      button: 'Войти как креатор'
    }
  },
  business: {
    signup: {
      lead: 'Создайте кабинет заказчика, чтобы публиковать брифы, принимать отклики и пополнять баланс кампаний.',
      button: 'Создать аккаунт заказчика'
    },
    signin: {
      lead: 'Войдите в кабинет заказчика, чтобы управлять кампаниями, смотреть отклики и утверждать ролики.',
      button: 'Войти как заказчик'
    }
  }
};

let state = {
  role: 'creator',
  mode: 'signup'
};

function render() {
  roleButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.role === state.role);
  });

  modeButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.mode === state.mode);
  });

  const content = copyMap[state.role][state.mode];
  authLead.textContent = content.lead;
  submitButton.textContent = content.button;

  signupOnly.forEach((node) => {
    node.style.display = state.mode === 'signup' ? '' : 'none';
  });
}

roleButtons.forEach((button) => {
  button.addEventListener('click', () => {
    state.role = button.dataset.role;
    render();
  });
});

modeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    state.mode = button.dataset.mode;
    render();
  });
});

render();
