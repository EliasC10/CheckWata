jQuery(document).ready(function(){
  let country
  getColors = function(){
    let colors = {}, key
    for (key in map.regions) {
      colors[key] = ['#115876'] 
    }
    return colors
  },
  map

  map = new jvm.Map({
    map: 'world_mill',
    container: $('#map'),
    series: {
      regions: [{
        attribute: 'fill'
      }]
    },
    onRegionClick: function (event, code) {
        window.location.href = "comparison.html?country=" + code
        country = code
    }
  })
  map.series.regions[0].setValues(getColors())
})