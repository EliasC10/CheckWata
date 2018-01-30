let userInput = document.getElementById('user-input')
userInput.addEventListener("keydown", function(e){
  if (e.keyCode === 13){ //enter key
    search(e)
  }
})

function search(e){
  var countrydata = JSON.parse(countries)
  countrydata.forEach(function(element) {
    if(e.target.value.toLowerCase() == element.name.toLowerCase()){
      alert(e.target.value)
      window.open('comparison.html','_self');
    }
  })
}