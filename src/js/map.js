'use strict';

var country;
jQuery(document).ready(function () {
  getColors = function getColors() {
    var colors = {},
        key = void 0;
    for (key in map.regions) {
      colors[key] = ['#115876'];
    }
    return colors;
  }, map;

  map = new jvm.Map({
    map: 'world_mill',
    container: $('#map'),
    series: {
      regions: [{
        attribute: 'fill'
      }]
    },
    onRegionClick: function onRegionClick(event, code) {
      window.location.href = "comparison.html?country=" + code;
      country = code;
    }
  });
  map.series.regions[0].setValues(getColors());
});