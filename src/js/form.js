
document.getElementById('form_main').innerHTML =
`<form action="#" id="form" name="form">
<div id="popup_form">
    <img id="close" alt="close">
    <h2>Your Data</h2>
    <section id="form_wrapper">
      <ul id="data_name">
        <li><p>Your Name</p></li>
        <li><p>Shower p. Week</p></li>
        <li><p>Bath p. Week</p></li>
        <li><p>Laundry p. Week</p></li>
        <li><p>Dishwasher p. Week</p></li>
      </ul>

      <ul id="data_form">
        <li><input type="text" id="name" name="name" size="10"></li>
        <li><select id="shower" name="shower" class="0-20"></select></li>
        <li><select id="bath" name="bath" class="0-20"></select></li>
        <li><select id="laundry" name="laundry" class="0-20"></select></li>
        <li><select id="dishwasher" name="dishwasher" class="0-20"></select></li>
      </ul>
    </section>
    <div class="bttn__wrapper" id="button_wrapper">
      <a href="index.html" class="bttn__form" id="submit" type="submit">SAVE</a>
    </div>
  </div>
</form>`


const open_popup = document.getElementById('popup')
  popup.addEventListener('click', () => {
    div_show()
    })

let path = location.href
if(path.substring(path.length - 10) === 'index.html') {
  const open_popup_button = document.getElementById('popup_button')
    popup_button.addEventListener('click', () => {
      div_show()
    })}

const close_popup = document.getElementById('close')
  close_popup.addEventListener('click', () => {
    div_hide()
  })

  const submit = document.getElementById('submit')
    submit.addEventListener('click', () => {
      store()
    })

function div_show() {
  document.getElementById('form_main').style.display = "block"
}

function div_hide() {
  document.getElementById('form_main').style.display = "none"
}

$(function(){
  let $select = $(".0-20")
  for (let i=0; i<=20; i++){
      $select.append($('<option></option>').val(i).html(i))
  }
})

function store(){
    let name = document.getElementById("name")
    localStorage.setItem("name", name.value)

    let shower = document.getElementById("shower")
    localStorage.setItem("shower", shower.value)

    let laundry = document.getElementById("laundry")
    localStorage.setItem("laundry", laundry.value)

    let dishwasher = document.getElementById("dishwasher")
    localStorage.setItem("dishwasher", dishwasher.value)

    let bath = document.getElementById("bath")
    localStorage.setItem("bath", bath.value)

    window.alert("Submitted succesfully")
    }
