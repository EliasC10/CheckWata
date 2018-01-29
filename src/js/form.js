function check_empty() {
if (document.getElementById('name').value == "" || document.getElementById('email').value == "" || document.getElementById('msg').value == "") {
alert("Fill All Fields !");
} else {
document.getElementById('form').submit();
alert("Form Submitted Successfully...");
}
}

function div_show() {
document.getElementById('abc').style.display = "block";
}

function div_hide(){
document.getElementById('abc').style.display = "none";
}
