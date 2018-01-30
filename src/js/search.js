let userInput = document.getElementById('user-input')
userInput.addEventListener("keydown", function(e){
  if (e.keyCode === 13){ //enter key
    e.preventDefault();
    search(e)
  }
})

function search(e){
  var countrydata = JSON.parse(countries)
  countrydata.forEach(function(element) {
    if(e.target.value.toLowerCase() == element.name.toLowerCase()){
      window.location.href = "/comparison.html?country=" + element.code
    }
  })
}