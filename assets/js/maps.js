/*
  Initialize Itinerary View
  (jQuery loop through build vs huge html file that repeats itself/ easier to maintain & dynamic based on user interaction)
*/

function buildMapContent(){
    let itinerary_elem = $('#itinerary');
    //User could change mind so clean out itinerary each time view is seen and rebuild
    itinerary_elem.empty();

    $.each(myTrip.days, function (index, day){
        let new_elm = '<div class="city">' +
                '                <h3>' + day['name'] +
                '                </h3>' +
                '            </div>'
        itinerary_elem.append(new_elm);
    });

    finalizeMap(myTrip.days);

}

function initMap() {
    let map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 46.619261,
            lng: -33.134766
        }
    });


}
function finalizeMap(places){
    let map = document.getElementById("map");
    let labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let locations = [];

    $.each(places, function (index, day){
        locations.push({ lat: day.lat, lng: day.lng });
    });

}