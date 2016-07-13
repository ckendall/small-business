var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map-canvas'), {
    center: {lat: 42.208148, lng: -121.725723},
    zoom: 15
  });

  var house = new google.maps.Marker({
  	position: {lat: 42.208148, lng: -121.725723},
  	map: map
  })
}
