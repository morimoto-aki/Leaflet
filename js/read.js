function initMap() {
  var opt = {
    zoom: 15,
    center: new google.maps.LatLng(35.710179967079,139.52309261622)
  };

  var map = new google.maps.Map(document.getElementById("map"), opt);
}