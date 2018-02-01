const open_popup = document.getElementById('popup');
  popup.addEventListener('click', () => {
    div_show();
    });

const close_popup = document.getElementById('close');
  close_popup.addEventListener('click', () => {
    div_hide();
  });

  const submit = document.getElementById('submit');
    submit.addEventListener('click', () => {
      store();
    });

function div_show() {
  document.getElementById('form_main').style.display = "block";
}

function div_hide() {
  document.getElementById('form_main').style.display = "none";
}

$(function(){
  let $select = $(".0-20");
  for (let i=0; i<=20; i++){
      $select.append($('<option></option>').val(i).html(i))
  }
});

function store(){
    let name = document.getElementById("name");
    localStorage.setItem("name", name.value);

    let shower = document.getElementById("shower");
    localStorage.setItem("shower", shower.value);

    let laundry = document.getElementById("laundry");
    localStorage.setItem("laundry", laundry.value);

    let dishwasher = document.getElementById("dishwasher");
    localStorage.setItem("dishwasher", dishwasher.value);

    let bath = document.getElementById("bath");
    localStorage.setItem("bath", bath.value);

    window.alert("Submitted succesfully");
    };
