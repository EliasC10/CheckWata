let country
$(function () {
  $('#map').vectorMap({
    map: 'world_mill',
    zoomOnScroll: false,
    regionStyle: {
        initial: {
            fill: '#115876',
            "fill-opacity": 1,
            stroke: 'none',
            "stroke-width": 0,
            "stroke-opacity": 1
        },
        hover: {
            "fill-opacity": 0.8
        }
    },
    onRegionClick: function onRegionClick(event, code) {
      let avaiable = checkIfAvailable(code)
      if(avaiable === true) {
        window.location.href = "comparison.html?country=" + code
        country = code
      }
      else{
        console.log(`The country ${code} is not avaiable.`)
      }
    }
  })

  function checkIfAvailable(code) {
    let avaiable = true
    const noneAvailableCountries = ["AX", "AS", "AD", "AI", "AQ", "AW", "BS", "BM", "BV", "IO", "KY", "CX", "CC", "CK", "FK", "FO", "GF", "PF", "TF", "GI", "GL", "GP", "GU", "GG", "HM", "VA", "HK", "IM", "JE", "KI", "LI", "MO", "MH", "MR", "YT", "FM", "MS", "NR", "AN", "NC", "NU", "NF", "MP", "PW", "PN", "RE", "SH", "PM", "WS", "SM", "SB", "GS", "SJ", "TW", "TK", "UM", "TO", "TC", "TV", "VU", "VG", "VI", "WF", "EH"]
    noneAvailableCountries.forEach(function(element) {
      if(element == code) {
        avaiable = false
      }
    })
    return avaiable
  }
})
