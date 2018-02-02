import tipps from '../json/tipps.json'
let tipplist = document.getElementByClassName('personal')

tipps.foreach(function(element){
  if(element.category === "general"){
    let tippelement = document.createElement('li')
    let tipptext = document.createElement('p')
    tipptext.value = element.general
    tippelement.appendChild(tipptext)
    tipplist.appendChild(tippelement)
    }
  else if(element.category === "shower"){
    if (localstorge.getItem("shower") > 7){
      let tippelement = document.createElement('li')
      let tipptext = document.createElement('p')
      tipptext.value = element.shower
      tippelement.appendChild(tipptext)
      tipplist.appendChild(tippelement)
  }
}
  else if(element.category === "laundry"){
    if (localstorge.getItem("laundry") > 2){
      let tippelement = document.createElement('li')
      let tipptext = document.createElement('p')
      tipptext.value = element.laundry
      tippelement.appendChild(tipptext)
      tipplist.appendChild(tippelement)
  }
}
  else if(element.category === "dishwasher"){
    if (localstorge.getItem("dishwasher") > 2){
      let tippelement = document.createElement('li')
      let tipptext = document.createElement('p')
      tipptext.value = element.dishwasher
      tippelement.appendChild(tipptext)
      tipplist.appendChild(tippelement)
  }
}
  else if(element.category === "bath"){
    if (localstorge.getItem("bath") > 2){
      let tippelement = document.createElement('li')
      let tipptext = document.createElement('p')
      tipptext.value = element.bath
      tippelement.appendChild(tipptext)
      tipplist.appendChild(tippelement)
  }
}

})
