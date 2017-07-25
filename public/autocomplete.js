
function init(){
  console.log("test")
  var input = document.getElementById("address")
  var autocomplete = new google.maps.places.Autocomplete(input)
}

$("#address").change(function(){
 setTimeout(getCoordinates,100)
})


function getCoordinates(){
  var service = new google.maps.places.PlacesService(document.createElement('div'))

  
    var request = {
      location: {lat: 0, lng: 0},
      radius: "500",
      query: $("#address").val()
    };

    service.textSearch(request, function(places){
      const lat = places[0].geometry.location.lat();
      const long = places[0].geometry.location.lng();

      console.log(lat)
       console.log(long)
      $("#latitude").val(lat);
      $("#longitude").val(long);


    });
}

$(document).ready(function(){
  init()
})