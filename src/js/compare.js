
  import all from '../json/countries_search.json';

  let url = new URL(window.location.href)
  let country = url.searchParams.get('country')
  all.forEach(function(element) {
    if(country == element.code){
      document.getElementById('countryName').innerHTML = element.name
      document.getElementById('text').innerHTML =
      `The average daily water consumption of a citizen in ${element.name} is <strong>${element.avg} liters</strong>.<br><br>
       Your Calulation is split up in constant and flexible values.
       The average European needs <strong>2 liters</strong> for trinking,
       <strong>2 litres</strong> for cooking,
       <strong>13 litres</strong> for personal hygiene,
       and <strong>9 litres</strong> for cleaning/houshold.
       Your personal weekly calculation results:
       You need <strong>${calculateShower()} litres</strong> per week for talking showers,
       <strong>${calculateBath()} litres</strong> per week for talking a baths,
       <strong>${calculateDishwasher()} litres</strong> per week for the dishwasher,
       <strong>${calculateLaundry()} litres</strong> per week for the laundry.<br><br>
       Your average daily water consumption amounts to <strong>${calculateDaily()} litres</strong> <br><br>
       Check out your personal tipps how you can make the world be a better place.`;
    }
  });

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
    return result
  }
