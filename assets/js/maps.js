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
    /*
    build day details row - 3 sections per row
    1.  Day h3 with image
    2.  list of spots to visit
    3.  map of spots to see that day
    */
    $.each(myTrip.days, function (index, day){
        let day_num = index+1;
        let new_elm = '<div class="city"><h3><a href="#day-' + day_num + '">Day ' + day_num + ': ' + day['name'] + '</a></h3></div>';
        itinerary_elem.append(new_elm);
        let det_elm = '<div class="d-md-flex flex-row day"><div class="city" id="day-' + day_num + '">' +
                '        <h3>Day ' + day_num + ': ' + day['name'] + '</h3>'+
                '        <div class="details-img-wrap" id="img-day-' + day_num + '"></div></div>';
        det_elm += '   <div class="details" id="details-' + day_num +'"><h3>Places to See</h3><ol type="a">';
        // list of places to see
        $.each(day.places, function (index2, item) {
            det_elm += '<li>' + '<span type="button" tabindex="0" class="more-link details" data-trigger="focus" data-placement="top" data-toggle="popover" title="' +
                item['name'] + '" data-content="' + item['description'] + '" data-container="body">' + item.name + '</span></li>';

        });
        det_elm += '</ol></div>';
        det_elm += '<div class="details-map" id ="map-' + day_num + '"></div></div>';
        // divider between days
        if(day_num != myTrip.days.length){
            det_elm += '<hr>';
        }
        details_elm.append(det_elm);

        // delay findImage to prevent hitting google API free tier # of requests in 100 seconds
        let timeout = day_num * 350;
        window.setTimeout(function() {
            findImage(day, day_num);
        }, timeout);
    });
    details_elm = $('#itinerary-details');
    // build accommodations block
    let room_elm = '<div class="lodging"><h3>Accommodations</h3><p>';
    room_elm += myTrip.room.booking + '</p></div>';
    details_elm.append(room_elm);

    // now that html is there, we can do the map calls
    finalizeMap(myTrip.days);

    // update section header for correct trip
    let trip_name = $('#selected_trip');
    trip_name.empty();
    trip_name.append('<span>' + myTrip.label + '</span>');
}

/*
    Build the Maps for the Itinerary
 */
function finalizeMap(places){
    // Main map at top of page
    let map = new google.maps.Map(document.getElementById("map"), {
        zoom: 7,
        center: {
            lat: 44.4467472,
            lng: 16.4064762
        },
        mapTypeControl: true,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            position: google.maps.ControlPosition.TOP_CENTER
        },
        streetViewControl: true,
        streetViewControlOptions: {
            position: google.maps.ControlPosition.LEFT_TOP
        },
        fullscreenControl: false

    });

    // reduce map controls on small devices and zoom out a bit so entire country is visible
    if(window.innerWidth <=768) {
        map.zoom=6.3;
        map.mapTypeControl=false;
        map.streetViewControl=false;
    }

    let labels = "12345679";
    let locations = [];

    // build array of locations for each day in the trip
    $.each(places, function (index, day){
        locations.push({ lat: day.lat, lng: day.lng });
    });

    // set up custom map icon (light blue circle)
    let clickIcon = {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 15,
        fillColor: "rgb(121, 199, 217)",
        fillOpacity: 0.8,
        strokeColor: "rgb(57, 147, 156)",
        strokeWeight: 1
    };

    // set marker on map
    let markers = locations.map(function(location, i) {

        // maker is labeled by index in loop starting at 1 from labels, animate it dropping in and use customer icon
        let marker =  new google.maps.Marker({
            position: location,
            label: labels[i % labels.length],
            draggable: false,
            animation: google.maps.Animation.DROP,
            icon: clickIcon
        });

        // add info window with name and link to details content
        let day_num =  i+1;
        let contentString = '<div class="main_info" id="content_main' + day_num + '_' + i + '">'+
            '<h1 class="firstHeading">' + places[i].name + '</h1>' +
            '<a class="underline" href="#day-' + day_num +'">See places</a> to visit.' +
            '</div>';

        let infowindow = new google.maps.InfoWindow({
          content: contentString
        });
        marker.addListener('click', function() {
            infowindow.open(map, marker);
        });

        //animate the marker by delaying the set to Map based on # in loop
        let timeout = i * 200;
        window.setTimeout(function() {
            marker.setMap(map);

        }, timeout);

    });

    //draw line on map between days
    let itineraryPath = new google.maps.Polyline({
    path: locations,
    geodesic: true,
    strokeColor: '#ec7d62',
    strokeOpacity: 0.9,
    strokeWeight: 5,
    animation: google.maps.Animation.DROP
  });

  itineraryPath.setMap(map);

  // add handlers to toggle the visibility of the paragraph when a button is clicked
        $('[data-toggle="popover"]').click(function(){
            $(this).popover('toggle');
        });
        // if user clicks anywhere else, hide the popover
        $('.popover-dismiss').popover({
            trigger: 'focus'
        });
}


// The find Image function takes in a place and the day number in order to create a map showing the suggested places to visit for a given day
/* idea from https://developers-dot-devsite-v2-prod.appspot.com/maps/documentation/javascript/examples/place-search */
function findImage(place, day_num) {
    // small map is centered on the Day's main city
    let spot = new google.maps.LatLng(place.lat, place.lng);

    // start building the small map
    map = new google.maps.Map(
      document.getElementById('map-'+day_num), {
            center: spot,
            zoom: 7,
            mapTypeControl: false,
            streetViewControl: false,
            fullscreenControl: false
        });


    // set the markers for the day with the places to explore/visit
    let markers = place.places.map(function(location, i) {
        let contentString = '<div id="content' + day_num + '_' + i + '"><h1 class="firstHeading">' + location.name + '</h1>' +
            '<p class="infoContent">' + location.description + '</p><p class="infoDisclaimer">'+ location.attribution +
            '</p></div>';

        // add an info window with the details and attribution from TRIPS JSON in constants.js
        let infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 300
        });
        let labels="abcdefg";
        let loc = new google.maps.LatLng(location.lat, location.lng);
        let marker = new google.maps.Marker({
            position: loc,
            draggable: false,
            title: location.name,
            label: labels[i % labels.length]
        });
        // add map pin click handler
        marker.addListener('click', function() {
            infowindow.open(map, marker);
        });
        // place the maker on the map
        marker.setMap(map);
    });

    // Need place_id from Google Places API to get images, add ,Croatia to the request so we have a better chance of finding what we want
    let request = {
        query: place.name + ', Croatia',
        fields: ['name', 'geometry','place_id'],
    };

    // set up the places service
    service = new google.maps.places.PlacesService(map);

    // map Places API call
    service.findPlaceFromQuery(request, function(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
        //wrap consoles in debug check so we don't deploy with any logging
        if(debug) {
            console.log(place.name + " id: " + results[0].place_id);
        }
        // we have an ID now, we can do a details request to get images
        request = {
            placeId: results[0].place_id,
            fields: ['name', 'formatted_address', 'place_id', 'geometry', 'photos']
        };
        service.getDetails(request, function (local, status) {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                //wrap consoles in debug check so we don't deploy with any logging
                if(debug) {
                    console.log("got details, inserting image for "+ place.name);
                }
                // make sure we have photos in the response and if so, build html for the image
                if(local && local.photos.length >0) {
                    let img_elm = document.getElementById('img-day-' + day_num);
                    let new_elm = '<img class="details-img" src="' + local.photos[0].getUrl() + '" width="100%" alt="Image of ' + place.name + '"/>';
                    if (local.photos[0].html_attributions.length > 0) {
                        new_elm += '<p class="disclaimer">Photo by: ' + local.photos[0].html_attributions[0] + '</p>';
                    }
                    img_elm.innerHTML = new_elm;
                }
            }else{
                //wrap consoles in debug check so we don't deploy with any logging
                if(debug) {
                    console.log(place.name +" status to get images not OK: " + status);
                }
            }
        });
    }else{
        //wrap consoles in debug check so we don't deploy with any logging
        if(debug) {
            console.log(place.name + " status to get place_id not OK: " + status);
        }
    }

  });


}