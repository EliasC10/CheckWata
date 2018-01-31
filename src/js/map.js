var country;
$(function () {
  $('#map').vectorMap({
    map: 'world_mill',
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
      window.location.href = "comparison.html?country=" + code;
      country = code;
    }
  });
});
