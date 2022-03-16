const username = document.getElementById('username-register')
const password = document.getElementById('password-register')
const password_confirm = document.getElementById('repeat-password-register')
const buttonRegister = document.getElementById('button-register')
const LocalStorage = JSON.parse(localStorage.getItem('signup')) || []

function createAccount() {
  let cadastros = JSON.parse(localStorage.getItem('signup')) || []

  for (user of LocalStorage) {
    if (username.value === user.username) return alert('Usuario ja registrado')
  }

  if (
    username.value === '' ||
    password.value === '' ||
    password_confirm.value === ''
  ) {
    return alert('preencha corretamente os campos')
  }

  let user = {
    username: username.value,
    password: password.value,
    password_confirm: password_confirm.value
  }

  if (password.value !== password_confirm.value) {
    return alert('Senha não confere')
  }

  cadastros.push(user)

  localStorage.setItem('cadastros', JSON.stringify(cadastros))
}

const loginUsername = document.getElementById('login-username')
const loginPassword = document.getElementById('login-password')

function Login(event) {
  event.preventDefault()
  for (user of LocalStorage) {
    if (
      loginUsername.value === user.username &&
      loginPassword.value === user.password
    ) {
      localStorage.setItem('logged', JSON.stringify(user))
      return window.location.replace('schedule.html')
    } else {
      return alert('usuario ou senha incorreta')
    }
  }
}
