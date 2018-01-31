
  var url = new URL(window.location.href)
  var country = url.searchParams.get("country")
  var countrydata = JSON.parse(countries)
  countrydata.forEach(function(element) {
    if(country == element.code){
      document.getElementById('countryName').innerHTML = element.name
      document.getElementById('text').innerHTML =
      `The average daily water consumption of a citizen in ${element.name} is <strong>${element.avg} liters</strong>.<br>
       Your Calulation is split up in constant and flexible values.
       The average European needs <strong>2 liters</strong> for trinking,
       <strong>2 litres</strong> for cooking,
       <strong>13 litres</strong> for personal hygiene,
       and <strong>9 litres</strong> for cleaning/houshold.
       Your personal weekly calculation results:
       You need <strong>${calculateShower()} litres</strong> per week for talking showers,
       <strong>${calculateBath()} litres</strong> per week for talking a baths,
       <strong>${calculateDishwasher()} litres</strong> per week for the dishwasher,
       <strong>${calculateLaundry()} litres</strong> per week for the laundry.<br>
       Your average daily water consumption amounts to <strong>${calculateDaily()} litres</strong> <br>
       Check out your personal tipps how you can make the world be a better place.`;
    }
  });

  function calculateShower() {
    var numbShower = localStorage.getItem("shower")
    var result = Math.round(numbShower * 70)
    return result
  }

  function calculateBath() {
    var numbBath = localStorage.getItem("bath")
    var result = Math.round(numbBath * 200)
    return result
  }

  function calculateDishwasher() {
    var numbDish = localStorage.getItem("dishwasher")
    var result = Math.round(numbDish * 10)
    return result
  }

  function calculateLaundry() {
    var numbLaundry = localStorage.getItem("laundry")
    var result = Math.round(numbLaundry * 100 / 7)
    return result
  }

  function calculateDaily() {
    var fixValues = 66
    var shower = Math.round(calculateShower() / 7)
    var bath = Math.round(calculateBath() / 7)
    var laundry = Math.round(calculateLaundry() / 7)
    var dishwasher = Math.round(calculateDishwasher() / 7)
    var result =  Math.round(fixValues + shower + bath + laundry + dishwasher)
    return result
  }
