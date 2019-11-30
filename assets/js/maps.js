/*
  Initialize Itinerary View
  (jQuery loop through build vs huge html file that repeats itself/ easier to maintain & dynamic based on user interaction)
*/
let service;
function buildMapContent(){

    //User could change mind so clean out itinerary each time view is seen and rebuild
    let itinerary_elem = $('#itinerary');
    itinerary_elem.empty();

    let details_elm = $('#itinerary-details');
    details_elm.empty();


    $.each(myTrip.days, function (index, day){
        let day_num = index+1;
        let new_elm = '<div class="city">' +
                '        <h3><a href="#day-' + day_num + '">Day ' + day_num + ': ' + day['name'] + '</a></h3>';
        new_elm += '</div>';
        itinerary_elem.append(new_elm);
        let det_elm = '<div class="city" id="day-' + day_num + '">' +
                '        <h3>Day ' + day_num + ': ' + day['name'] + '</h3>' +
                '        <div class="details"><ul>';
        $.each(day.places, function (index2, item) {
            det_elm += '<li>' + item.name + '</li>';
            findPlaces(item);
        });
        det_elm += '</ul></div></div>';
        if(day_num != myTrip.days.length){
            det_elm += '<hr>';
        }
        details_elm.append(det_elm);
    });

    finalizeMap(myTrip.days);

}

function finalizeMap(places){
    let map = new google.maps.Map(document.getElementById("map"), {
        zoom: 7,
        center: {
            lat: 44.4467472,
            lng: 16.4064762
        }
    });

    let labels = "12345679";
    let locations = [];

    $.each(places, function (index, day){
        locations.push({ lat: day.lat, lng: day.lng });
    });

    let clickIcon = {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 15,
        fillColor: "rgb(121, 199, 217)",
        fillOpacity: .8,
        strokeColor: "rgb(57, 147, 156)",
        strokeWeight: 1
    };

    let markers = locations.map(function(location, i) {
        let marker =  new google.maps.Marker({
            position: location,
            label: labels[i % labels.length],
            draggable: false,
            animation: google.maps.Animation.DROP,
            icon: clickIcon
        });
        let timeout = i * 200;
        window.setTimeout(function() {
            marker.setMap(map);

        }, timeout);

    });

    let itineraryPath = new google.maps.Polyline({
    path: locations,
    geodesic: true,
    strokeColor: '#ec7d62',
    strokeOpacity: 0.9,
    strokeWeight: 5,
    animation: google.maps.Animation.DROP
  });

  itineraryPath.setMap(map);

}


// find custom places function
/* idea from https://developers-dot-devsite-v2-prod.appspot.com/maps/documentation/javascript/examples/place-search */
function findPlaces(place, map) {
    // prepare request to Places
    let spot = new google.maps.LatLng(place.lat, place.lng);

  let infowindow = new google.maps.InfoWindow();

  map = new google.maps.Map(
      document.getElementById('map'), {center: spot, zoom: 15});

  let request = {
    query: place.name + ', Croatia',
    fields: ['name', 'geometry','place_id'],
  };

  service = new google.maps.places.PlacesService(map);

  service.findPlaceFromQuery(request, function(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {

      console.log(place.name + " id: " + results[0].place_id);
    }
  });


}