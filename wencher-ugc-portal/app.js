const roleButtons = Array.from(document.querySelectorAll('.role-switch'));
const authLead = document.getElementById('auth-lead');
const submitButton = document.getElementById('submit-button');
const authForm = document.getElementById('auth-form');
const formMessage = document.getElementById('form-message');
const nameInput = document.getElementById('name-input');
const emailInput = document.getElementById('email-input');
const passwordInput = document.getElementById('password-input');
const confirmPasswordInput = document.getElementById('confirm-password-input');
const policyInput = document.getElementById('policy-input');

const copyMap = {
  creator: {
    lead: 'Создайте профиль креатора, чтобы откликаться на заказы и вести баланс в кабинете.',
    button: 'Создать аккаунт креатора'
  },
  business: {
    lead: 'Создайте кабинет заказчика, чтобы публиковать брифы, принимать отклики и управлять кампаниями.',
    button: 'Создать аккаунт заказчика'
  }
};

let state = {
  role: 'creator'
};

function render() {
  roleButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.role === state.role);
  });

  const content = copyMap[state.role];
  authLead.textContent = content.lead;
  submitButton.textContent = content.button;
}

function setFieldValidity(input, isValid) {
  input.classList.toggle('invalid', !isValid);
}

function resetValidation() {
  [nameInput, emailInput, passwordInput, confirmPasswordInput].forEach((input) => {
    input.classList.remove('invalid');
  });

  formMessage.textContent = '';
  formMessage.classList.remove('error', 'success');
}

function showMessage(type, text) {
  formMessage.textContent = text;
  formMessage.classList.remove('error', 'success');
  formMessage.classList.add(type);
}

function validateForm() {
  resetValidation();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  let valid = true;

  if (name.length < 2) {
    setFieldValidity(nameInput, false);
    valid = false;
  }

  if (!email || !emailInput.checkValidity()) {
    setFieldValidity(emailInput, false);
    valid = false;
  }

  if (password.length < 8) {
    setFieldValidity(passwordInput, false);
    valid = false;
  }

  if (confirmPassword !== password || !confirmPassword) {
    setFieldValidity(confirmPasswordInput, false);
    valid = false;
  }

  if (!policyInput.checked) {
    valid = false;
  }

  if (!valid) {
    showMessage('error', 'Проверьте форму: имя, корректная почта, пароль от 8 символов и одинаковый повтор пароля.');
    return false;
  }

  showMessage('success', `Аккаунт ${state.role === 'creator' ? 'креатора' : 'заказчика'} готов к созданию. Осталось подключить backend.`);
  return true;
}

roleButtons.forEach((button) => {
  button.addEventListener('click', () => {
    state.role = button.dataset.role;
    resetValidation();
    render();
  });
});

authForm.addEventListener('submit', (event) => {
  event.preventDefault();
  validateForm();
});

[nameInput, emailInput, passwordInput, confirmPasswordInput, policyInput].forEach((input) => {
  input.addEventListener('input', () => {
    if (formMessage.textContent) {
      resetValidation();
    }
  });
});

render();
