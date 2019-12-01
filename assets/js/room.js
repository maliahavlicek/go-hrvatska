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
        "details": "Sobe, Zimmer, Room Free signs along the road side indicate a family has a private room available. Sometimes there's a woman with a sign at the bus stop or train depot.  Don't expect meals or a private restroom, but you will save big, paying as little as $20 a night. But be warned, this venue is not regulated.",
        "booking": "You chose to choose your lodging on the fly. You can't typically book bargain accommodations in advance, but most of the time you get a decent roof over your head. Just start looking before sunset for those signs or the callers at the public transportation sites."
    },
    {
        "name" : "camping",
        "label": "Camping",
        "details": "There are over 300 registered campsites in Croatia with 90% close to a beach. Glamping may be a more appropriate term for camping in Croatia as most campgrounds have permanent bungalows and tents on site. Some of the larger campsites include restaurants, sports facilities, laundries, and general store too.",
        "booking": "Glamping here you come. Be sure to book your camping experience early via <a target='_blank' href='https://www.camping.hr'> www.capming.hr</a>"
    },
    {
        "name": "hostel",
        "label":"Youth Hostels",
        "details": "Dormitory style living with strict university schedules to boutique private rooms are popping up all over Croatia in order to provide moderate lodging options to traveling university students..",
        "booking":"Book your youth hostel stay with a registered (government condoned) facility at <a href='https://www.hfhs.hr' target='_blank'>www.hfhs.hr</a>."
    },
    {
        "name" : "hotels",
        "label": "Hotels & Apartments",
        "details": "Hotels and Apartments in Croatia are family run operations, the only difference being that hotels typically include breakfast and apartments include kitchenettes. The government regulates these groups by the 5 star system and require a blue sign with the star rating to be fixed to the outside of the building, with permits on premise.",
        "booking": "You opted to have a clean private, government accredited roof over you head. Use the Croatian registry to book you spot at <a href='https://www.omh.hr' target='_blank'>www.omh.hr</a>."
    },
    {
        "name" : "homes",
        "label": "Private Homes",
        "details": "Need an apartment or private house with the ability to cook your own meals. And want places vetted by your peers?",
        "booking" : "Many villas and apartments are listed both on <a href ='https://www.omh.hr' target='_blank'>the Croatia apartment and hotel registry</a> as well as <a href='https://www.airbnb.com' target=_blank'>abnr</a>."
    },
    {
        "name" : "unique",
        "label": "Weird & Wonderful",
        "details": "Can you, would you want to sleep in a Lighthouse, Treehouse, Wine Barrel, Castle or Boat?",
        "booking": "You adventurous soul, you have opted to find the most interesting of places to rest your head. <a href='https://www.chasingthedonkey.com/weird-accommodation-in-croatia/' target='_blank'>This article</a> has a short list of how to reserve your spot from a boat motel to a lighthouse. "
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
