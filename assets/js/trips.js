//initialize trips that can are available (this way jqeuery can loop through build vs huge html file

myTrip = 'none';
var trips =
[
    {
      "name" : "wine",
      "label": "Wind & Dine",
      "details": "Enjoy the delights of regional food hot spots, local vineyards and to die for pastries.",
      "cities":[
          { day1: ["Pula", "Church of St. Euphemia, Rovinj","konoba dolina" ]},
          { day2: ["Riljeka", "Church of St. Euphemia, Rovinj","konoba dolina" ]}

      ]
    },
    {
      "name" : "castles",
      "label": "Castles & Culture",
      "details": "Tour castles, cathedrals, museums, fortresses, roman ruins and other cultural sites."
    },
    {
      "name" : "nature",
      "label": "Nature Nut",
      "details": "Spend the majority of your time by the sea catching the rays and enjoying the sea air."
    },
    {
      "name" : "beaches",
      "label": "Beach Life",
      "details": "Caves, waterfalls, crazy cliffs, stunning mountain views and the Kornati archipelago await."
    }
];


function pickTrip(trip) {
  //see if the trip is one of the expected and different from current
  var newTrip = findView(trip, trips);
  //default to first trip in list if no match is found
  if (!newTrip) {
    newTrip = trips[0];
    myTrip = newTrip.name;
  }
  //switch to the next view
  changeView('room');
}

function buildTripContent(){
    var trip_elem = $('#trips');
    //only build trips once (we don't load html to save on asset loading and allow trips to be more dynamic
    if(trip_elem.children().find('.card-body').length < 1) {
        $.each(trips, function (index, trip) {
            new_elm = '<div class="card mb-md-4 col-6 col-md-3 box-shadow">' +
                '              <div class="card-body">' +
                '                <div class="split-img-wrapper ' + trip['name'] + '">' +
                '                  <div class="part1"></div><div class="part2"></div><div class="part3"></div>' +
                '                  <h5 class="card-title">' + trip['label'] + '</h5>' +
                '                </div>' +
                '                <div class="learn-more">' +
                '                  <p class="card-text">' + trip['details'] + '</p>' +
                '                  <button type="button" onclick="pickTrip(`'+trip['name']+'`)" class="pick_trip btn btn-lg btn-block btn-primary">Go HRVATSKA!</button>' +
                '                </div>' +
                '              </div>' +
                '            </div>'
            trip_elem.append(new_elm);
        });

        // add handlers to toggle the visibility of the paragraph when a button is clicked
        $(".split-img-wrapper").click(function(){
            $(this).next().slideToggle('slow');
        });

    }


}