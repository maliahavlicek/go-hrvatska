/*
  Initialize rooms/accommodations
  (jQuery loop through build vs huge html file that repeats itself/ easier to maintain)
  Types of accommodations were gleaned from personal knowledge and
  https://www.frommers.com/destinations/croatia/planning-a-trip/tips-on-accommodations
*/
let rooms =
[
    {
        "name" : "bargain",
        "label": "Bargain",
        "details": "Sobe, Zimmer, Room Free signs along the road side indicate a family has a private room available. Don't expect meals or a private restroom, but you will save big, paying as little as $20 a night.",
        "booking": "You can't typically book this type of accommodation in advance. It's not regulated."
    },
    {
        "name" : "camping",
        "label": "Camping",
        "details": "There are over 300 registered campsites in Croatia with 90% close to a beach. Some of the larger campsites include restaurants, sports facilities, laundries, and general stores.",
        "booking": "https://www.camping.hr"
    },
    {
        "name": "hostel",
        "label":"Youth Hostels",
        "details": "Dormitory style living with strict university schedules to boutique private rooms.",
        "booking":"www.hfhs.hr"
    },
    {
        "name" : "hotels",
        "label": "Hotels & Apartments",
        "details": "Hotels in Croatia or small family run operations and include breakfast. The government groups privately run  vocational rental apartments with hotels as well.",
        "booking": "www.omh.hr"
    },
    {
        "name" : "homes",
        "label": "Private Homes",
        "details": "Need an apartment or private house with the ability to cook your own meals. And want places vetted by.",
        "booking" : "www.airbnb.com"
    },
    {
        "name" : "unique",
        "label": "Weird & Wonderful",
        "details": "Can you, would you want to sleep in a Lighthouse, Treehouse, Wine Barrel, Castle or Boat?",
        "booking": "https://www.chasingthedonkey.com/weird-accommodation-in-croatia/"
    }
];

function pickRoom(room) {
  //see if the room is one of the expected and different from current
  let newRoom = findView(room, rooms);
  //default to private family run hotels if no match is found
  if (!newRoom) {
    newRoom = rooms[3];
  }
  //switch to the next view

  myTrip.room = newRoom;
  changeView('itinerary');
}

function buildRoomContent() {
    let room_elem = $('#room');
    //only build rooms once (we don't load html to save on asset loading and allow rooms to be more dynamic
    if (room_elem.children().find('.card-body').length < 1) {
        $.each(rooms, function (index, room) {
            let new_elm = '<div class="card col-6 col-md-4 box-shadow">' +
                '              <div class="card-body">' +
                '                <div class="split-img-wrapper ' + room['name'] + '">' +
                '                  <div class="room-image"></div>' +
                '                    <h5 tabindex="0" class="card-title" data-trigger="focus" data-placement="top" data-toggle="popover" title="' + room['label'] + ' details"' +
                '                      data-content="' + room['details'] + '" data-container="body">'+ room['label'] +
                '                    </h5>' +
                '                  </div>' +
                '                  <button type="button" onclick="pickRoom(`' + room['name'] + '`)" class="pick_room btn btn-lg btn-block btn-primary">Go HRVATSKA!</button>' +
                '                </div>' +
                '            </div>'
            room_elem.append(new_elm);
        });

        // add handlers to toggle the visibility of the paragraph when a button is clicked
        $('[data-toggle="popover"]').click(function(){
            $(this).popover('toggle');
        });
        $('.popover-dismiss').popover({
            trigger: 'focus'
        });
    }
}
