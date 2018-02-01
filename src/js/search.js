
let dataList = document.getElementById('country--autocomplete')
let userInput = document.getElementById('user-input')

let request = new XMLHttpRequest()
request.onreadystatechange = function(response) {
  if(request.readyState === 4) {//done
    if(request.status === 404){ console.log('not found');}
    else if(request.status === 200){ //OK
      let jsonOptions = JSON.parse(request.responseText)
      jsonOptions.forEach(function(item) {
        let option = document.createElement('option')
        option.value = item.name;
        dataList.appendChild(option)
      })
    }
    else{
      userInput.placeholder = "Could not load datalist options"
    }
  }
}


userInput.addEventListener("keydown", function(e){
  if (e.keyCode === 13){ //enter key
    e.preventDefault();
    search(e)
  }
})

function search(e){
  let countrydata = JSON.parse(request.responseText)
  countrydata.forEach(function(element) {
    if(e.target.value.toLowerCase() == element.name.toLowerCase()){
      window.location.href = "./comparison.html?country=" + element.code
    }
  })
}
request.open('GET', 'countries_search.json', true)
request.send()
