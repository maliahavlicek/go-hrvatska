/*
  Initialize Trips
  (jQuery loop through build vs huge html file that repeats itself/ easier to maintain & update)
*/
let myTrip = {};

let trips =
    [
        {
            "name": "wine",
            "label": "Wind & Dine",
            "details": "Enjoy the delights of regional food hot spots, local vineyards and to die for pastries.",
            "days": [
                {
                    name: "Pula",
                    lat: 44.8732299,
                    lng: 13.8480518,
                    places: [
                        {
                            name: "Church of St. Euphemia, Rovinj",
                            lat: 45.0832203,
                            lng: 13.628919
                        }, {
                            name: "Vina Radovan",
                            lat: 45.2757258,
                            lng: 13.6899502
                        }, {
                            name: "Konoba Dolina",
                            lat: 45.3753656,
                            lng: 13.8648394
                        }
                    ]
                },
                {
                    name: "Rijeka",
                    lat: 45.3330489,
                    lng: 14.4202891,
                    places: [
                        {
                            name: "Bevanda Restaurant",
                            lat: 45.3395272,
                            lng: 14.2952159
                        },
                        {
                            name: "Restaurant Jist",
                            lat: 45.3475939,
                            lng:14.3917946
                        },
                        {
                            name: "Castillo de Trast",
                            lat:45.3326798,
                            lng: 14.4553218
                        }
                    ]
                },{
                    name: "Senj",
                    lat: 44.9912466,
                    lng: 14.9026532,
                    places:[
                        {
                            name: "Restaurant Uskok",
                            lat: 44.9941219,
                            lng: 14.8915563
                        },{
                            name: "Nehaj Fortress",
                            lat: 45.0201921,
                            lng: 15.069873
                        }, {
                            name: "SIRANA GLIGORA Ltd",
                            lat: 44.5059966,
                            lng: 14.8417164
                        }
                    ]
                },{
                    name: "Novalja",
                    lat: 44.5526593,
                    lng: 14.8848009,
                    places: [
                        {
                            name: "Kuna Snackbar: Mini-Donuts",
                            lat: 44.5539833,
                            lng: 14.8057828
                        },{
                            name: "Degarra Winery",
                            lat: 44.564724,
                            lng: 14.6310388
                        }
                    ]
                },{
                    name: "Zadar",
                    lat: 44.118044,
                    lng: 15.2239898,
                    places: [
                        {
                            name: "The Greeting to the Sun",
                            lat: 44.1176075,
                            lng: 15.2176507
                        },{
                            name: "Trattoria Mediterraneo",
                            lat: 44.1146118,
                            lng: 15.2232162
                        },{
                            name: "Plitvice Lakes National Park",
                            lat: 45.020372,
                            lng: 15.0682249
                        }
                    ]

                },{
                    name: "Lika Region",
                    lat: 44.8798702,
                    lng: 15.6090371,
                    places: [
                        {
                            name: "Lička Kuća",
                            lat: 44.865748,
                            lng: 15.3003881
                        },{
                            name: "Beekeeping Brozovic",
                            lat: 44.8552574,
                            lng: 14.4505074
                        },{
                            name: "Dubovac Castle",
                            lat: 45.0834187,
                            lng: 14.4464181
                        }
                    ]

                },{
                    name: "Zagreb",
                    lat: 45.8164017,
                    lng: 15.9714403,
                    places: [
                        {
                            name: "Deliticje",
                            lat: 45.8149835,
                            lng: 15.9645884
                        },{
                            name: "Museum of Broken Relationships",
                            lat: 44.8552574,
                            lng: 14.4505074
                        },{
                            name: "Mio Corazon",
                            lat: 45.8149543,
                            lng: 15.9646313
                        }
                    ]

                }
            ]
        },
        {
            "name": "castles",
            "label": "Castles & Culture",
            "details": "Tour castles, cathedrals, museums, fortresses, roman ruins and other cultural sites."
        },
        {
            "name": "nature",
            "label": "Nature Nut",
            "details": "Spend the majority of your time by the sea catching the rays and enjoying the sea air."
        },
        {
            "name": "beaches",
            "label": "Beach Life",
            "details": "Caves, waterfalls, crazy cliffs, stunning mountain views and the Kornati archipelago await."
        }
    ];


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
