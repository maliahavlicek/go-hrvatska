/*
  Initialize Itinerary View
  (jQuery loop through build vs huge html file that repeats itself/ easier to maintain & dynamic based on user interaction)
*/

function buildMapContent(){
    let itinerary_elem = $('#itinerary');
    //User could change mind so clean out itinerary each time view is seen and rebuild
    itinerary_elem.empty();

    $.each(myTrip.days, function (index, day){
        let day_num = index+1;
        let new_elm = '<div class="city">' +
                '                <h3>Day ' + day_num + ': ' + day['name'] +
                '                </h3>' +
                '                  <ul>'
        $.each(day.places, function (index2, item) {
            new_elm += '<li>' + item.name + '</li>';
        });
        new_elm += '</ul></div>';
        itinerary_elem.append(new_elm);
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

    let markers = locations.map(function(location, i) {
        let marker =  new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
        marker.setMap(map);
    });

    let itineraryPath = new google.maps.Polyline({
    path: locations,
    geodesic: true,
    strokeColor: '#5cafc3',
    strokeOpacity: 0.9,
    strokeWeight: 5
  });

  itineraryPath.setMap(map);

}