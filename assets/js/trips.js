/*
  Initialize Trips
  (jQuery loop through build vs huge html file that repeats itself/ easier to maintain & update)
*/
let myTrip = {};

let trips = TRIPS;

function pickTrip(trip) {
  //see if the trip is one of the expected and different from current
    let newTrip = findView(trip, trips);
    //default to first trip in list if no match is found
  if (!newTrip) {
    newTrip = trips[0];
  }
  //switch to the next view
    myTrip.room='none';
    myTrip = newTrip;

  changeView('room');
}

function buildTripContent(){
    let trip_elem = $('#trips');
    //only build trips once (we don't load html to save on asset loading and allow trips to be more dynamic
    if(trip_elem.children().find('.card-body').length < 1) {
        $.each(trips, function (index, trip) {
            let new_elm = '<div class="card col-6 col-md-3 box-shadow">' +
                '              <div class="card-body">' +
                '                <div class="split-img-wrapper ' + trip['name'] + '" onclick="pickTrip(`' + trip['name'] + '`)">' +
                '                  <div class="part1"></div><div class="part2"></div><div class="part3"></div>' +
                '                  <h5 class="card-title">'+ trip['label']+ '</h5>' +
                '                </div>' +
                '                  <span type="button" tabindex="0" class="more-link" data-trigger="focus" data-placement="top" data-toggle="popover" title="' + trip['label'] + ' "' +
                '                      data-content="' + trip['details'] + '" data-container="body">Learn More</span>' +
                '                </div>' +
                '              </div>' +
                '            </div>';
            trip_elem.append(new_elm);
        });

        // add handlers to toggle the visibility of the paragraph when a button is clicked
         $('[data-toggle="popover"]').click(function(){
            $(this).popover('toggle');
        });
        // if user clicks anywhere else, hide the popover
        $('.popover-dismiss').popover({
            trigger: 'focus'
        });

    }


}
