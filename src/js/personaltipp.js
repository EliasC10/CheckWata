import tipps from '../json/tipps.json'
let tipplist = document.getElementById('tippul')

tipps.forEach(function(element){
  if(element.category === "general"){
    let tippelement = document.createElement('li')
    let tipptext = document.createElement('p')
    tipptext.innerHTML = element.text
    tippelement.appendChild(tipptext)
    tipplist.appendChild(tippelement)
    }

  else if(element.category === "shower"){
    if (localStorage.getItem("shower") > 7){
      let tippelement = document.createElement('li')
      let tipptext = document.createElement('p')
      let strong = document.createElement('strong')
      strong.innerHTML = element.text
      tipptext.appendChild(strong)
      tippelement.appendChild(tipptext)
      tipplist.appendChild(tippelement)
  }
}
  else if(element.category === "laundry"){
    if (localStorage.getItem("laundry") > 2){
      let tippelement = document.createElement('li')
      let tipptext = document.createElement('p')
      let strong = document.createElement('strong')
      strong.innerHTML = element.text
      tipptext.appendChild(strong)
      tippelement.appendChild(tipptext)
      tipplist.appendChild(tippelement)
  }
}
  else if(element.category === "dishwasher"){
    if (localStorage.getItem("dishwasher") > 2){
      let tippelement = document.createElement('li')
      let tipptext = document.createElement('p')
      let strong = document.createElement('strong')
      strong.innerHTML = element.text
      tipptext.appendChild(strong)
      tippelement.appendChild(tipptext)
      tipplist.appendChild(tippelement)
  }
}
  else if(element.category === "bath"){
    if (localStorage.getItem("bath") > 2){
      let tippelement = document.createElement('li')
      let tipptext = document.createElement('p')
      let strong = document.createElement('strong')
      strong.innerHTML = element.text
      tipptext.appendChild(strong)
      tippelement.appendChild(tipptext)
      tipplist.appendChild(tippelement)
  }
}

})
