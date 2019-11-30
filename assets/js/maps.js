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
