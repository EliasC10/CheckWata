
  import all from '../json/countries_search.json'

  let average
  let url = new URL(window.location.href)
  let country = url.searchParams.get('country')
  all.forEach(function(element) {
    if(country == element.code){
      document.getElementById('countryName').innerHTML = element.name
      document.getElementById('text').innerHTML =
      `The average daily water consumption of a citizen in ${element.name} is <strong>${element.avg} liters</strong>.<br>
       Attention: This data is influenced by industry and aggriculture in ${element.name}. The measurement values may fluctuate highly.<br><br>
       Your calulation is split up in constant and flexible values.
       The average European needs <strong>2 liters</strong> for drinking,
       <strong>2 litres</strong> for cooking,
       <strong>13 litres</strong> for personal hygiene,
       <strong>40 litres</strong> for toilet flushing
       and <strong>9 litres</strong> for cleaning/household.
       Your personal weekly calculation results:
       You need <strong>${calculateShower()} litres</strong> per week for taking showers,
       <strong>${calculateBath()} litres</strong> per week for taking a bath,
       <strong>${calculateDishwasher()} litres</strong> per week for the dishwasher,
       <strong>${calculateLaundry()} litres</strong> per week for the laundry.<br><br>
       Your average daily water consumption amounts to <strong>${calculateDaily()} litres</strong> <br><br>
       Check out your personal tipps how you can make the world a better place.`
       average = element.avg
    }
  })

  function calculateShower() {
    let numbShower = localStorage.getItem("shower")
    let result = Math.round(numbShower * 70)
    return result
  }

  function calculateBath() {
    let numbBath = localStorage.getItem("bath")
    let result = Math.round(numbBath * 200)
    return result
  }

  function calculateDishwasher() {
    let numbDish = localStorage.getItem("dishwasher")
    let result = Math.round(numbDish * 10)
    return result
  }

  function calculateLaundry() {
    let numbLaundry = localStorage.getItem("laundry")
    let result = Math.round(numbLaundry * 100 / 7)
    return result
  }

  function calculateDaily() {
    let fixValues = 66
    let shower = Math.round(calculateShower() / 7)
    let bath = Math.round(calculateBath() / 7)
    let laundry = Math.round(calculateLaundry() / 7)
    let dishwasher = Math.round(calculateDishwasher() / 7)
    let result =  Math.round(fixValues + shower + bath + laundry + dishwasher)
    if (result === 66){
      document.getElementById('checkform').innerHTML =
      'Click on CheckNow to compare your water consumption with people from another countries';
      return 0
    }
    else return result
  }

  if(localStorage.getItem("name") !== null && localStorage.getItem("name") !== ""){
    document.getElementById('input_name').innerHTML = localStorage.getItem("name")
  }

  export function calculatePerson() {
    let value = calculateDaily()
    return value
  }
  export { average as average }
