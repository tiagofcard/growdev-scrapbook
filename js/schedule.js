const book = document.getElementById('book')
const LocalStorage = JSON.parse(localStorage.getItem('schedule')) || []

/*function onClickSave() {
  let schedule = JSON.parse(localStorage.getItem('schedule')) || []

  if (
    bike.value === '' ||
    year.value === '' ||
    date.value === '' ||
    service.value === ''
  ) {
    return alert('preencha corretamente os campos')
  }

  let infos = {
    bike: bike.value,
    year: year.value,
    date: date.value,
    service: service.value
  }

  schedule.push(infos)

  localStorage.setItem('schedule', JSON.stringify(schedule))
  document.getElementById('infoList').innerHTML += infos.value

  alert('Agendado com sucesso')
}

let schedule = JSON.parse(localStorage.getItem('schedule')) || []

for (let data of schedule) {
  document.getElementById(
    'infoList'
  ).innerHTML += `<div class="screen-info" id="span" data-id="${data.id}">
  <table class="table">
  <tr class="lines">
    <td>${data.bike}</td>
    <td>${data.year}</td>
    <td>${data.date}</td>
    <td>${data.service}</td>
  </tr>
</table>
<a href="#" onClick="editSchedule()" class="btn-edit">EDITAR</a>
<a href="#" onclick="removeSchedule()" class="btn-erase">APAGAR</a>
    </div>`
}

let user = JSON.parse(localStorage.getItem('cadastros')) || null
let currentID = null

if (user) {
  document.getElementById('username-register').innerHTML = user.name
} else {
  alert('Usuário não logado')
  location.href = '/index.html'
}
*/

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'

async function onClickSave(event) {
  event.preventDefault()
  const bike = document.getElementById('bike')
  const year = document.getElementById('year')
  const date = document.getElementById('date')
  const service = document.getElementById('service')
  const schedule = {
    bike: bike.value,
    year: year.value,
    date: date.value,
    service: service.value
  }
  const { status, data } = await axios.post('/api/schedule', schedule)

  bike.value = ''
  year.value = ''
  date.value = ''
  service.value = ''

  console.log(schedule)
}
