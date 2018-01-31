import $ from 'jquery';

var country;
$(function () {

  var getColors = function getColors() {
    var colors = {},
        key;
    for (key in map.regions) {
      colors[key] = ['#115876'];
    }
    return colors;
  }, map;

  map = $('#map').vectorMap({
    map: 'world_mill',
    container: $('#map'),
    series: {
      regions: [{
        attribute: 'fill'
      }]
    },
    onRegionClick: function onRegionClick(event, code) {
      window.location.href = "comparison.html?country=" + code;
      //showGauge();
      country = code;
    }
  });
  map.series.regions[0].setValues(getColors());
});


/*  $(function(){
    $('#map').vectorMap({
      map: 'world_mill'
    });
  })
map = new jvm.Map*/
