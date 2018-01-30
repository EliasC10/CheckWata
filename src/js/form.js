function check_empty() {
  if (document.getElementById('shower').value == "" || document.getElementById('dishwasher').value == "" || document.getElementById('laundry').value == "") {
    alert("Fill All Fields !");
  } else {
    document.getElementById('form').submit();
    alert("Form Submitted Successfully...");
  }
}

function div_show() {
  document.getElementById('form_main').style.display = "block";
}

function div_hide() {
  document.getElementById('form_main').style.display = "none";
}